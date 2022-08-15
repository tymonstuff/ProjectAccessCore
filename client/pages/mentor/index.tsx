import type { NextPage } from 'next';
import Secured from '../../components/Secured/Secured';
import Typography from '../../components/Typography/Typography';
import Container from '../../components/Container/Container';
import AppBar from '../../components/AppBar/AppBar';

const MentorDashboard: NextPage = () => {
  return (
    <Secured>
      <AppBar />
      <Container
        component="main"
        sx={{ marginTop: '10vh' }}
      >
        <Typography
          variant="h5"
          component="h1"
          align="center"
        >
          Dashboard - Mentor
        </Typography>
      </Container>
    </Secured>
  );
};

export default MentorDashboard;
