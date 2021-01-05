import { Container } from '@material-ui/core';
import { Header } from '../Header';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};
