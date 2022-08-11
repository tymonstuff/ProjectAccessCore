import EmailPasswordNode from 'supertokens-node/recipe/emailpassword'
import SessionNode from 'supertokens-node/recipe/session'
import UserRoles from 'supertokens-node/recipe/userroles';
import { appInfo } from './appInfo'
import { TypeInput } from 'supertokens-node/types';

import client from '@sendgrid/mail';

import { getCurrentPayloadInfo } from '../lib/backendRoles'

client.setApiKey(process.env.SENDGRID_API_KEY);

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
        emailDelivery: {
          override: (originalImplementation) => {
            return {
              ...originalImplementation,
              sendEmail: async function (input) {
                if (input.type === "PASSWORD_RESET") {
                  let { user, passwordResetLink } = input;
                  let { email, id, timeJoined } = user;

                  console.log("EMAIL RESET FOR user: "+JSON.stringify(input))

                  const message = {
                    personalizations: [
                      {
                        to: [
                          {
                            email: email
                          }
                        ]
                      }
                    ],
                    from: {
                      email: '//////// TODO: get email',
                      name: 'Project Access'
                    },
                    subject: 'Password Recovery for Your Account',
                    content: [
                      {
                        type: 'text/html',
                        value: '//////// TODO: get html'
                      }
                    ],
                    ipPoolName: 'transactional email',
                  };

                  //client.send(message)
                  //  .then(() => console.log('Password reset sent successfully'))
                  //  .catch(error => { console.error(error); });
                }
              }
            }
          }
        },
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

                  //////// TODO: post sign up logic to send out google form
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

