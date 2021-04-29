import Component from '../Component';

class LoadingAnimation extends Component {
  constructor(comp) {
    super(comp);

    this.handleEvents();
  }

  handleWindowLoad() {
    this.el.classList.add('is-loading-animation-running');
  }

  handleEvents() {
    window.addEventListener('load', () => this.handleWindowLoad())
  }
}

export default LoadingAnimation;
