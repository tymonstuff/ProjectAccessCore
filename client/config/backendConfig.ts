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
      EmailPasswordNode.init(),
      SessionNode.init(),
      UserRoles.init()
    ],
    isInServerlessEnv: true,
  }
}

