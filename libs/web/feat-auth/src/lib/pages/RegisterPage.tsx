import { Register } from '../components/Register';
import { LayoutContainer } from '@react-monorepo/design-system';

export const RegisterPage = () => {
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
      <Register />
    </LayoutContainer>
  );
};
