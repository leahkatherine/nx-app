import {
    Form,
    Card,
  } from '@react-monorepo/design-system';

  import { UserCreate, userCreateSchema } from '@react-monorepo/shared/types';

  import { useRegister } from '../hooks/useRegister';
  
  export interface RegisterProps {
    onSubmit: (user: UserCreate) => void;
  }
  
  export const Register = () => {
    const { onCreateUser } = useRegister();
    return (
      <Card
        title="Register"
        sx={{
          padding: '1rem',
        }}
      >
        <Form
          schema={userCreateSchema}
          defaultValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            mobile: '',
          }}
          onSubmit={onCreateUser}
          questions={[
            {
              label: 'First Name',
              type: 'text',
              name: 'firstName',
              placeholder: 'First Name',
              required: true,
            },
            {
              label: 'Last Name',
              type: 'text',
              name: 'lastName',
              placeholder: 'Last Name',
              required: true,
            },
            {
              label: 'Email',
              type: 'email',
              name: 'email',
              placeholder: 'Email',
              required: true,
            },
            {
              label: 'Password',
              type: 'password',
              name: 'password',
              placeholder: 'Password',
              required: true,
            },
            {
              label: 'Mobile',
              type: 'tel',
              name: 'mobile',
              placeholder: 'Mobile',
              required: true,
            },
          ]}
        />
      </Card>
    );
  };