import { superTokensNextWrapper } from 'supertokens-node/nextjs'
import { verifySession } from "supertokens-node/recipe/session/framework/express";
import { SessionRequest } from "supertokens-node/framework/express";
import UserRoles from "supertokens-node/recipe/userroles";
import supertokens from 'supertokens-node'
import { backendConfig } from '../../config/backendConfig'

import { getCurrentPayloadInfo } from '../../lib/backendRoles';

supertokens.init(backendConfig())

export default async function updateSessionPayload(req: SessionRequest, res: any) {
  await superTokensNextWrapper(
    async (next) => {
      await verifySession()(req, res, next);
    },
    req,
    res
  )

  // get up to date payload information
  let userId = req.session!.getUserId();
  const customPayloadInfo = await getCurrentPayloadInfo(userId)

  // update payload
  let currAccessTokenPayload = req.session!.getAccessTokenPayload();
  await req.session!.updateAccessTokenPayload(
    { ...currAccessTokenPayload, ...customPayloadInfo }
  );

  res.status(200).json({ status: 'done' })
}