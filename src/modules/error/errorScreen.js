import { compileScreen } from '../../utils/compileScreen';

const template = `
  <div class="error-screen">
    <h1 class="error-code">{{errorCode}}</h1>
    <p class="error-description">{{errorDescription}}</p>
    
    {{> link }}
  </div>
`;

export const errorScreen = compileScreen(template);
