import { LayoutContainer} from '@react-monorepo/design-system';
import { Login } from '../components/Login';

export const LoginPage = () => {

  return (
    <LayoutContainer
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
      }}
    >
      <Login />
    </LayoutContainer>
  );
};
