import type { NextPage } from 'next';
import Secured from '../components/Secured/Secured';
import Button from '../components/Button/Button';
import { getRoles } from '../lib/frontendRoles';

const Test: NextPage = () => {

  async function handleTest() {
    alert(await getRoles())
  }

  return (
    <Secured>
      <Button
        onClick={handleTest}
        color="inherit"
      >
        Run
      </Button>
    </Secured>
  );
};

export default Test;