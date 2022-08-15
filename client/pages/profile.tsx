import type { NextPage } from 'next';
import Secured from '../components/Secured/Secured';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import UserContext from '../store/user-context';
import { useContext } from 'react';
import AppBar from '../components/AppBar/AppBar';

const Profile: NextPage = () => {
  const userCtx = useContext(UserContext);

  const DUMMY_DATA = {
    name: 'John Smith',
    email: 'johnsmith@gmail.com',
    phone: '+44 7987654321',
    roles: userCtx.roles,
  };

  return (
    <Secured>
      <AppBar />
      <ProfileCard {...DUMMY_DATA}></ProfileCard>
    </Secured>
  );
};

export default Profile;
