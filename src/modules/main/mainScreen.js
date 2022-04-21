import { compileScreen } from '../../utils/compileScreen';

const template = `
  <div class="main-screen">
    {{#each links}}
      <div class="mr-10">
        {{> link }}
      </div>
    {{/each}}
</div>
`;

export const mainScreen = compileScreen(template);
