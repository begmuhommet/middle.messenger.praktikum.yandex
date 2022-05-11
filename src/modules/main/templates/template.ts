const template = `
  <div class="main-screen">
    <h1 class="main-title">{{ title }}</h1>
  
    <div class="main-screen_links">
      <div class="mr-10">
        {{{ loginScreenLink }}}
      </div>
      <div class="mr-10">
        {{{ registrationScreenLink }}}
      </div>
      <div class="mr-10">
        {{{ chatScreenLink }}}
      </div>
      <div class="mr-10">
        {{{ errorScreenLink }}}
      </div>
    </div>
  </div>
`;

export default template;
