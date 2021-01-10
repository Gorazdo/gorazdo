import { Avatar, Button } from '@material-ui/core';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LinkButtonBase } from 'src/components/atoms/LinkBase';
import { useFirebase, useFirebaseApp } from 'src/hooks';

export const UserButton = () => {
  const firebase = useFirebase();
  const [user, loading, error] = useAuthState(firebase.auth());
  if (loading) {
    return <Button disabled>---</Button>;
  }
  if (error) {
    return <Button disabled>error</Button>;
  }
  if (!user) {
    return (
      <Button component={LinkButtonBase} href="/login" color="inherit">
        Login
      </Button>
    );
  }
  return <Avatar src={user.photoURL} />;
};
