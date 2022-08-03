import Session from 'supertokens-auth-react/recipe/session';

export async function getRoles() {
    if (await Session.doesSessionExist()) {
        let roles = JSON.stringify((await Session.getAccessTokenPayloadSecurely()));
        return roles
    }
}