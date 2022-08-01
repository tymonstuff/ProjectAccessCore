import * as React from 'react';

import EmailPassword from 'supertokens-auth-react/recipe/emailpassword'

export default function Secured({children}) {
  return (
    <EmailPassword.EmailPasswordAuth>
      {children}
    </EmailPassword.EmailPasswordAuth>
  );
} 