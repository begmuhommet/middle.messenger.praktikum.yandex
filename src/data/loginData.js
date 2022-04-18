const loginData = {
  title: 'Login',
  link: 'Registration',
  button: 'Login',
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
