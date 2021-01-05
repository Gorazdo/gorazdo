import { CardContent, Paper } from '@material-ui/core';
import Head from 'next/head';
import React, { useEffect, useRef, useContext } from 'react';
import { FirebaseAuthUIContext } from 'src/contexts/FirebaseAuth';
import { useFirebase, useFirebaseApp } from 'src/hooks';

const Login = () => {
  return (
    <>
      <Head>
        <link
          type="text/css"
          rel="stylesheet"
          href="https://www.gstatic.com/firebasejs/ui/4.6.1/firebase-ui-auth.css"
        />
      </Head>
      <br />
      <Auth />
    </>
  );
};

export default Login;

const Auth = () => {
  if (typeof window === 'undefined') {
    return <span>SSR</span>;
  }
  return (
    <Paper elevation={0}>
      <CardContent>
        <FirebaseAuthContent />
      </CardContent>
    </Paper>
  );
};

const FirebaseAuthContent = ({}) => {
  const [[currentUser, loading, error], auth] = useCurrentUser();
  const ref = useRef();
  const { authUIInstance, config, init } = useContext(FirebaseAuthUIContext);
  useEffect(() => {
    if (authUIInstance === null) {
      init(auth());
    }
  }, [auth, authUIInstance, init]);
  useEffect(() => {
    if (authUIInstance && ref.current && config) {
      authUIInstance.start(ref.current, config);
    }
  }, [authUIInstance, config]);
  if (error) {
    return error.name;
  }
  if (loading) {
    return 'loading';
  }
  if (currentUser) {
    return (
      <span>
        Вы вошли как{' '}
        {currentUser.displayName ??
          currentUser.phoneNumber ??
          currentUser.email}
      </span>
    );
  }
  return <div ref={ref} />;
};

import { useAuthState } from 'react-firebase-hooks/auth';

const useCurrentUser = () => {
  const firebase = useFirebase();
  // @ts-ignore
  const [user, loading, error] = useAuthState(firebase.auth());
  // @ts-ignore
  const { auth } = firebase;
  return [[user, loading, error], auth];
};
