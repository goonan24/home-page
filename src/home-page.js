import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class HomePage extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--home-page-background-color);
    }

    main {
      flex-grow: 1;
    }

    header {
      font-weight: bolder;
      color: blue;
      font-size: 50px;
      padding-left: 1px;
      background-color: red;
    }

    img{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 300px;

    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <main>
        <header>Work Out App</header>
        <a href="https://personal-project-indol.vercel.app/">
          <button>qualification calculator</button>
        </a>
        <a href="https://rand-work.vercel.app/">
          <button>random workout generator</button>
        </a>
        <button>page three</button>
        <button>page four</button>
        <button>page five</button>
        <img src="https://www.hindustantimes.com/ht-img/img/2023/07/28/1600x900/weekend_workout_1690553408872_1690553425149.jpg"></img>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}

customElements.define('home-page', HomePage);