'use babel';

export default class AtomDynareManualView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('atom-dynare-manual');

    //const disposable = atom.tooltips.add(div, {title: 'This is a tooltip'})
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
    this.subscriptions.dispose();
  }

  getElement() {
    return this.element;
  }


}
