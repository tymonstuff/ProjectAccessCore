import type { NextPage } from 'next';
import Secured from '../components/Secured/Secured';
import Button from '../components/Button/Button';
import { getSessionPayload, updateSessionPayload } from '../lib/frontendRoles';

const Test: NextPage = () => {

  async function handleGetRoles() {
    alert(JSON.stringify(await getSessionPayload()))
  }

  async function handleRefreshRoles() {
    await updateSessionPayload()
  }

  return (
    <Secured>
      <Button
        onClick={handleGetRoles}
        color="inherit"
      >
        Get Roles
      </Button>
      <Button
        onClick={handleRefreshRoles}
        color="inherit"
      >
        Refresh Roles
      </Button>
    </Secured>
  );
};

export default Test;