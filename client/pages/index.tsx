import type { NextPage } from 'next';
import Secured from '../components/Secured/Secured';

import MenteeDashboard from './mentee';
import MentorDashboard from './mentor';
import Test from './test';

import { useSessionContext } from 'supertokens-auth-react/recipe/session';

const Home: NextPage = () => {
  const session = useSessionContext();

  if (session.loading === true) {
    return null;
  }

  const isLoggedIn = session.doesSessionExist;

  let hasMenteeView;
  let hasMentorView;
  let hasAdminView;

  if (isLoggedIn && !session.loading) {
    const permissions: string[] = session.accessTokenPayload.permissions;
    hasMenteeView = permissions.includes('MenteeView');
    hasMentorView = permissions.includes('MentorView');
    hasAdminView = permissions.includes('AdminView');
  }

  const ComponentToRender = isLoggedIn ? (
    hasMenteeView ? (
      MenteeDashboard
    ) : hasMentorView ? (
      MentorDashboard
    ) : hasAdminView ? (
      Test
    ) : (
      <></>
    )
  ) : (
    <></>
  );

  return (
    <Secured>
      <ComponentToRender />
    </Secured>
  );
};

export default Home;
