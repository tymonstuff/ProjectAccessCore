import Session from 'supertokens-auth-react/recipe/session';

export async function getSessionPayload() {
  if (await Session.doesSessionExist()) {
    let result = await Session.getAccessTokenPayloadSecurely()
    return result
  }
}

export async function updateSessionPayload() {
  await fetch('/api/updateSessionPayload')
}