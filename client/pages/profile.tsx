import type { NextPage } from 'next';
import ProfileCard from '../components/ProfileCard/ProfileCard';

const Profile: NextPage = () => {
  const DUMMY_DATA = {
    name: 'John Smith',
    email: 'johnsmith@gmail.com',
    phone: '+44 7987654321',
  };

  return (
    <>
      <ProfileCard {...DUMMY_DATA}></ProfileCard>
    </>
  );
};

export default Profile;
