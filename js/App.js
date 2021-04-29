import Component from './Component'
import Changelog from './components/Changelog'

class App {
  constructor() {
    this.components = {
      Changelog
    }

    this.run()
  }

  findComponents() {
    const components = document.querySelectorAll('[data-component]');

    [...components].map(component => {
      const name = component.dataset.component;
      const className = name.charAt(0).toUpperCase() + name.slice(1);
      new this.components[className](component);
    })
  }

  run() {
    this.findComponents()
  }
}

export default App;
