import React from 'react';
import firebase from 'firebase';
import { useFirestoreRef } from 'src/hooks';
import { useCollection } from 'react-firebase-hooks/firestore';
import { UserTop } from 'src/components/molecules/UserTop';
import { GetStaticPaths, GetStaticProps } from 'next';
import { FIREBASE_APP_CONFIG } from 'src/constants';

const Person = ({ name }) => {
  const ref = useFirestoreRef((db) =>
    db.collection('people').where('name', '==', name)
  );
  const [value, loading, error] = useCollection(ref);

  return (
    <div>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {value && value.docs.length === 0 && <span>Collection: Empty...</span>}
      {value && (
        <section>
          {value.docs.map((doc) => (
            <React.Fragment key={doc.id}>
              <UserTop doc={doc} />
              <h2>About</h2>
              <p>
                I am a front-end developer with 10 years experience in web
                development: from responsive web-sites to SPA and
                micro-frontends. I strive to write pure, maintainable and well
                documented code. Also I have got design skills and have been
                working as a part-time UI/UX designer for 4 years and have a
                passion to implement smooth animations to apps. Since 2019 I
                have been conducting to several pet projects as an architect and
                a full-stack developer.
              </p>
              <h2>Highlights</h2>
              <div>{data.map(rendererLambda)}</div>
            </React.Fragment>
          ))}
        </section>
      )}
    </div>
  );
};

const rendererLambda = (item) => (
  <HightlightItem key={item.id} name={item.name} href={item.href} />
);

const data = [
  {
    id: '123',
    name: 'Game marketplace',
    href: 'https://gm-trade.ru',
  },
  {
    id: 'asd',
    name: 'Miro contest',
    href: 'https://miro.com',
  },
];

const HightlightItem = (props) => (
  <div>
    <h4>{props.name}</h4>
    {props.href}
  </div>
);

export default Person;

export const getStaticPaths: GetStaticPaths = async ({}) => {
  firebase.initializeApp(FIREBASE_APP_CONFIG);
  const db = firebase.firestore();
  const querySnapshot = await db.collection('people').get();
  const names = [];
  querySnapshot.forEach((doc) => {
    names.push(doc.get('name'));
  });
  return {
    paths: names
      .filter(Boolean)
      .map((name) => `/team/${encodeURIComponent(name)}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      name: params.name,
    },
    revalidate: 200,
  };
};
