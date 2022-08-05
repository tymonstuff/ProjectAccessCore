import EmailPasswordNode from 'supertokens-node/recipe/emailpassword'
import SessionNode from 'supertokens-node/recipe/session'
import UserRoles from "supertokens-node/recipe/userroles";
import { appInfo } from './appInfo'
import { TypeInput } from "supertokens-node/types";

import { getCurrentPayloadInfo } from '../lib/backendRoles'

export const backendConfig = (): TypeInput => {
  return {
    framework: "express",
    supertokens: {
      connectionURI: "https://0659919111a611ed8d48fd83c98df5cd-eu-west-1.aws.supertokens.io:3567",
      apiKey: "N7LTW=f33BHQEyMawCOVE2Pm-Vb-36"
    },
    appInfo,
    recipeList: [
      EmailPasswordNode.init({
        override: {
          apis: (originalImplementation) => {
            return {
              ...originalImplementation,
              signUpPOST: async function (input) {
                if (originalImplementation.signUpPOST === undefined) {
                  throw Error("Should never come here");
                }
                // Call the original implementation of signUpPOST.
                let response = await originalImplementation.signUpPOST(input);

                // Post sign up response, we check if it was successful
                if (response.status === "OK") {
                  let { id, email } = response.user;
                  
                  // Input form fields values that the user used while signing up
                  let formFields = input.formFields;

                  // TODO: post sign up logic

                }
                return response;
              }
            }
          }
        }
      }),
      SessionNode.init({
        override: {
          functions: (originalImplementation) => {
            return {
              ...originalImplementation,
              createNewSession: async function (input) {
                const userId = input.userId;
                const customPayloadInfo = await getCurrentPayloadInfo(userId)

                input.accessTokenPayload = {
                  ...input.accessTokenPayload,
                  ...customPayloadInfo
                };

                return originalImplementation.createNewSession(input);
              },
            };
          },
        },
      }),
      UserRoles.init()
    ],
    isInServerlessEnv: true,
  }
}

