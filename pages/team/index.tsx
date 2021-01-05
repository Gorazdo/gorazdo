import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useFirestoreRef } from 'src/hooks';
import { Text } from 'src/components/atoms/Text';
import Link from 'next/link';
import { Person } from '@material-ui/icons';

const People = () => {
  const ref = useFirestoreRef((db) => db.collection('people'));
  const [value, loading, error] = useCollection(ref);
  return (
    <div>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {value && (
        <section>
          {value.docs.map((doc) => (
            <PersonCard key={doc.id} doc={doc} />
          ))}
        </section>
      )}
    </div>
  );
};

const PersonCard = (props) => {
  const { doc } = props;
  return (
    <div>
      <h3>
        <Text doc={doc} path="firstName" />
        &nbsp;
        <Text doc={doc} path="lastName" />
      </h3>
      <Link href={`/team/${doc.get('name')}`}>
        <Text value={{ en: 'Profile', ru: 'Профиль' }} />
      </Link>
    </div>
  );
};

export default Person;
