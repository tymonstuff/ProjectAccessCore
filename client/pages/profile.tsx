import type { NextPage } from 'next';
import Secured from '../components/Secured/Secured';
import ProfileCard from '../components/ProfileCard/ProfileCard';

const Profile: NextPage = () => {
  const DUMMY_DATA = {
    name: 'John Smith',
    email: 'johnsmith@gmail.com',
    phone: '+44 7987654321',
  };

  return (
    <Secured>
      <ProfileCard {...DUMMY_DATA}></ProfileCard>
    </Secured>
  );
};

export default Profile;
