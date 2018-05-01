'use babel';

import AtomDynareManualView from './atom-dynare-manual-view';
import { CompositeDisposable, Disposable } from 'atom';
import TooltipManager from 'atom';

export default {

  atomDynareManualView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.atomDynareManualView = new AtomDynareManualView(state.atomDynareManualViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.atomDynareManualView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable(
    );

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-dynare-manual:toggle': () => {
        this.OnlineHelp()
      },
      'atom-dynare-manual:offline': () => {
        this.OfflineHelp();
    }
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
    this.atomDynareManualView.destroy();
  },

  //serialize() {
    //return {
      //atomDynareManualViewState: this.atomDynareManualView.serialize()
    //};
  //},

  OnlineHelp() {
    atom.workspace.open('http://www.dynare.org/manual/');
  },

  OfflineHelp() {
    atom.workspace.toggle();
  },

};
