import { html } from 'lit';
import '../src/home-page.js';

export default {
  title: 'HomePage',
  component: 'home-page',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <home-page
      style="--home-page-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </home-page>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
