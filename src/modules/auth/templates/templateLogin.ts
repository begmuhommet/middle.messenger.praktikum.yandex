const templateLogin = `
  <div class="auth-screen">
    <div class="auth-content">
      <h4 class="auth-title">{{ title }}</h4>
  
      <form class="form">
        {{{ loginInput }}}
        {{{ passwordInput }}}
        <div class="auth-button__wrapper">
          {{{ button }}}
        </div>
      </form>
  
      {{{ link }}}
    </div>
  </div>
`;

export default templateLogin;
