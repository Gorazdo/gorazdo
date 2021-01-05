import { Avatar, Typography } from '@material-ui/core';
import { Text } from 'src/components/atoms/Text';

export const UserTop = ({ doc }) => {
  return (
    <div>
      <Avatar src={doc.get('avatar')} />
      <hgroup>
        <Typography variant="h6">
          <Text doc={doc} path="firstName" />
          &nbsp;
          <Text doc={doc} path="lastName" />
        </Typography>
        <Typography variant="h3">
          <Text doc={doc} path="profession" />
        </Typography>
      </hgroup>
    </div>
  );
};
