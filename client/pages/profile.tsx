import type { NextPage } from 'next';
import Secured from '../components/Secured/Secured';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import { useSessionContext } from 'supertokens-auth-react/recipe/session';

const Profile: NextPage = () => {
  const session = useSessionContext();

  if (session.loading === true) {
    return null;
  }

  const DUMMY_DATA = {
    name: 'John Smith',
    email: 'johnsmith@gmail.com',
    phone: '+44 7987654321',
    roles: session.accessTokenPayload.roles,
    user_id: session.userId,
  };

  return (
    <Secured>
      <ProfileCard {...DUMMY_DATA}></ProfileCard>
    </Secured>
  );
};

export default Profile;
