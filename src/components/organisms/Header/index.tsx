import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { LinkButtonBase } from 'src/components/atoms/LinkBase';

export const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <Menu />
      </IconButton>
      <Typography variant="h6">Gorazdo</Typography>
      <Button component={LinkButtonBase} color="inherit" href="/login">
        Login
      </Button>
    </Toolbar>
  </AppBar>
);
