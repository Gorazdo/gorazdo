import {
  AppBar,
  Button,
  createStyles,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { LinkButtonBase } from 'src/components/atoms/LinkBase';

import dynamic from 'next/dynamic';

const UserButton = dynamic(
  () => import('./UserButton').then((mod) => mod.UserButton),
  { ssr: false }
);

const useStyles = makeStyles((theme) =>
  createStyles({
    menuRoot: {
      justifyContent: 'space-between',
    },
  })
);

export const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.menuRoot}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography variant="h6">Gorazdo</Typography>
        <UserButton />
      </Toolbar>
    </AppBar>
  );
};
