'use babel';

import AtomDynareReferenceManualView from './atom-dynare-reference-manual-view';
import { CompositeDisposable } from 'atom';

export default {

  //atomDynareReferenceManualView: null,
  //subscriptions: null,

  activate(state) {

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable(
    );

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-dynare-reference-manual:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
    this.atomDynareReferenceManualView.destroy();
  },

  toggle() {
    console.log('AtomDynareReferenceManual was toggled!');
    atom.workspace.open('http://www.dynare.org/manual/');
  }

};
