import type { NextPage } from 'next';
import Secured from '../components/Secured/Secured';
import Typography from '../components/Typography/Typography';
import Container from '../components/Container/Container';

import { useContext, useEffect } from 'react';
import UserContext from '../store/user-context';
import MenteeDashboard from './mentee';
import MentorDashboard from './mentor';
import Test from './test';
import { useState } from 'react';
import AppBar from '../components/AppBar/AppBar';

const Home: NextPage = () => {
  const userCtx = useContext(UserContext);

  const [isMentee, setIsMentee] = useState(false);
  const [isMentor, setIsMentor] = useState(false);

  useEffect(() => {
    if (userCtx.roles.length > 0) {
      setIsMentee(userCtx.roles.includes('mentee'));
      setIsMentor(userCtx.roles.includes('mentor'));
    }
  }, [isMentee, isMentor, userCtx.roles]);

  console.log(userCtx.roles.includes('mentor'));

  const ComponentToRender = isMentee
    ? MenteeDashboard
    : isMentor
    ? MentorDashboard
    : Test;

  return (
    <Secured>
      <ComponentToRender />
      {/* <MentorDashboard /> */}
    </Secured>
  );
};

export default Home;
