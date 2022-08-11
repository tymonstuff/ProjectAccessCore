import * as React from 'react';

import EmailPassword from 'supertokens-auth-react/recipe/emailpassword'

interface SecuredProps {
  children: React.ReactNode;
}

export default function Secured({ children }: SecuredProps) {
  return (
    <EmailPassword.EmailPasswordAuth>
      {children}
    </EmailPassword.EmailPasswordAuth>
  );
} 