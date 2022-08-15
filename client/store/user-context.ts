import { createContext } from 'react';

interface UserContextInterface {
  roles: Array<string | null>;
  permissions: Array<string | null>;
}

const UserContext = createContext<UserContextInterface>({
  roles: [],
  permissions: [],
});

export default UserContext;
