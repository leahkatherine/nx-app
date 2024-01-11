import { useState } from 'react';
import { useRouter } from 'next/router';
import { validateEmail } from '@react-monorepo/web/design-system'; // [validateEmail needs attention to connect 

export const useLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [auth, setAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [code, setCode] = useState('');

  const handleLogin = async (email: string) => {
    setLoading(true);

    if (!email) {
      alert('Email is required');
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      alert('Email is invalid');
      setLoading(false);
      return;
    }

    await fetch('/api/auth-email', {
      method: 'POST',
      body: JSON.stringify({ email }),
    })
      .then((res) => {
        if (res.status === 200) {
          setAuth(true);
        } else {
          if (res.status === 403) {
            alert('Request for dev mode denied, use testing address');
          } else {
            alert('Email not sent: ' + res.status + ' ' + res.statusText);
          }
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    setLoading(false);
  };

  const handleSetEmail = (email: string) => {
    setEmail(email);
  };

  const handleSetCode = (code: string) => {
    setCode(code);
  };

  const validateToken = async (code: string, email: string) => {
    setLoading(true);
    await fetch('/api/auth-token', {
      method: 'POST',
      body: JSON.stringify({ token: code, email }),
    })
      .then(async (res) => {
        const body = await res.json();
        if (res.status === 200) {
          localStorage.setItem('token', body.token);
          localStorage.setItem('localEmail', email);

          router.push('/');
        } else {
          alert('Invalid code');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    setLoading(false);
  };

  return {
    email,
    handleSetEmail,
    auth,
    loading,
    handleLogin,
    code,
    handleSetCode,
    validateToken,
  };
};
