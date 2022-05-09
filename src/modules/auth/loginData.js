import { routes } from '../../routes';

const loginData = {
  title: 'Sign in',
  link: 'Registration',
  href: routes.registration,
  button: 'Sign in',
  inputs: [
    { name: 'login', type: 'text', placeholder: 'Login', isRequired: true, label: 'Login', errorText: 'Login Error' },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      isRequired: true,
      label: 'Password',
      errorText: 'Password error',
    },
  ],
};

export default loginData;
