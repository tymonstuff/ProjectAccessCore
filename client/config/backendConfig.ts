import EmailPasswordNode from 'supertokens-node/recipe/emailpassword'
import SessionNode from 'supertokens-node/recipe/session'
import UserRoles from "supertokens-node/recipe/userroles";
import { appInfo } from './appInfo'
import { TypeInput } from "supertokens-node/types";

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
                const responseR = await UserRoles.getRolesForUser(userId);
                const roles = responseR.roles

                let permissions = []
                await Promise.all(roles.map(async (r) => {
                  const responseP = await UserRoles.getPermissionsForRole(r);
                  const newPermissions = responseP.permissions;

                  if(permissions.length){
                    for(const p of newPermissions) {
                      if(!permissions.includes(p)){
                        //console.log("pushing "+JSON.stringify(p)+" to permissions")
                        permissions.push(p)
                      }
                    }
                  }
                  else{
                    permissions = newPermissions
                  }
                  console.log("permissions2: "+JSON.stringify(permissions))
                }))

                console.log("permissions at the end: "+JSON.stringify(permissions))

                input.accessTokenPayload = {
                  ...input.accessTokenPayload,
                  roles,
                  permissions
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

