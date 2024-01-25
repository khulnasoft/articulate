// Maybe don't include for lite version
import { version } from '../package.json';
import './elements';
import './polyfills/custom-element-es5-adapter.js';

export const VERSION = version;
