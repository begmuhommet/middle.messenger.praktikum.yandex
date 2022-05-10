const templateRegister = `
  <div class="auth-screen">
    <div class="auth-content">
      <h4 class="auth-title">{{ title }}</h4>
  
      <form class="form">
        {{{ emailInput }}}
        {{{ loginInput }}}
        {{{ firstNameInput }}}
        {{{ secondNameInput }}}
        {{{ phoneInput }}}
        {{{ passwordInput }}}
        {{{ passwordRepeatInput }}}
        <div class="auth-button__wrapper">
          {{{ button }}}
        </div>
      </form>
  
      {{{ link }}}
    </div>
  </div>
`;

export default templateRegister;
