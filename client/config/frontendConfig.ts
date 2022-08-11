import EmailPasswordReact from 'supertokens-auth-react/recipe/emailpassword';
import SessionReact from 'supertokens-auth-react/recipe/session';
import { appInfo } from './appInfo';

export const frontendConfig = () => {
  return {
    appInfo,
    recipeList: [
      EmailPasswordReact.init({
        style: {
          container: {
            fontFamily: `'Lato', sans-serif`,
            marginTop: '10vh',
          },
          headerTitle: {
            fontWeight: 'bolder',
          },
          link: {
            color: '#3b8cd9',
          },
          button: {
            backgroundColor: '#fda929',
            border: '0px',
          },
        },
      }),
      SessionReact.init(),
    ],
  };
};
