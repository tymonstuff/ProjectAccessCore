import type { NextPage } from 'next';
import Secured from '../components/Secured/Secured';
import Typography from '../components/Typography/Typography';
import Container from '../components/Container/Container';

const Home: NextPage = () => {
  return (
    <Secured>
      <Container
        component="main"
        sx={{ marginTop: '10vh' }}
      >
        <Typography
          variant="h5"
          component="h1"
          align="center"
        >
          Dashboard
        </Typography>
      </Container>
    </Secured>
  );
};

export default Home;
