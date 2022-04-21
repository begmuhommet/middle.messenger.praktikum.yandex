const template = `
  <div class="input-wrapper">
    <input name="{{name}}" class="input" type="{{type}}" placeholder="{{placeholder}}" required="{{isReqiured}}" />
    <label for="{{name}}" class="label">{{label}}</label>
    <span class="error-text">{{errorText}}</span>
  </div>
`;

export default template;
