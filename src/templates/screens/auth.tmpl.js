const template = `
  <div class="auth-screen">
    <div class="auth-content">
      <h4 class="auth-title">{{title}}</h4>
  
      <form class="form">
        {{#each inputs}}
          {{> input }}
        {{/each}}
  
        <div class="auth-button__wrapper">
          {{> button }}
        </div>
      </form>
  
      {{> link }}
    </div>
  </div>
`;

export default template;
