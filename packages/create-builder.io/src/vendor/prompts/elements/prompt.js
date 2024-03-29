import EventEmitter from 'events';
import readline from 'readline';
import { cursor } from 'sisteransi';
import { action } from '../util';

const beep = '\x07';

/**
 * Base prompt skeleton
 */
export class Prompt extends EventEmitter {
  constructor(opts = {}) {
    super();

    this.in = opts.in || process.stdin;
    this.out = opts.out || process.stdout;

    const rl = readline.createInterface(this.in);
    readline.emitKeypressEvents(this.in, rl);

    if (this.in.isTTY) this.in.setRawMode(true);

    const keypress = (str, key) => {
      let a = action(key);
      if (a === false) {
        this._ && this._(str, key);
      } else if (typeof this[a] === 'function') {
        this[a](key);
      } else {
        this.bell();
      }
    };

    const close = () => {
      this.out.write(cursor.show);
      this.in.removeListener('keypress', keypress);
      if (this.in.isTTY) this.in.setRawMode(false);
      rl.close();
      this.emit(this.aborted ? 'abort' : 'submit', this.value);
    };
    this.close = close;

    this.in.on('keypress', keypress);
  }

  fire() {
    this.emit('state', {
      value: this.value,
      aborted: !!this.aborted,
    });
  }

  bell() {
    this.out.write(beep);
  }
}
