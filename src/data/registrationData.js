const registrationData = {
  title: 'Registration',
  link: 'Login',
  button: 'Register',
  inputs: [
    { name: 'email', type: 'text', placeholder: 'Email', isRequired: true, label: 'Email', errorText: 'Email Error' },
    { name: 'login', type: 'text', placeholder: 'Login', isRequired: true, label: 'Login', errorText: 'Login Error' },
    {
      name: 'first_name',
      type: 'text',
      placeholder: 'First Name',
      isRequired: true,
      label: 'First Name',
      errorText: 'First Name Error',
    },
    {
      name: 'second_name',
      type: 'text',
      placeholder: 'Second name',
      isRequired: true,
      label: 'Second name',
      errorText: 'Second name Error',
    },
    { name: 'phone', type: 'text', placeholder: 'Phone', isRequired: true, label: 'Phone', errorText: 'Phone Error' },
    {
      name: 'password',
      type: 'text',
      placeholder: 'Password',
      isRequired: true,
      label: 'Password',
      errorText: 'Password Error',
    },
    {
      name: 'password_repeat',
      type: 'text',
      placeholder: 'Password repeat',
      isRequired: true,
      label: 'Password repeat',
      errorText: 'Password repeat Error',
    },
  ],
};

export default registrationData;
