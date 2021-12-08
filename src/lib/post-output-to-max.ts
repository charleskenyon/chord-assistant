import { getMaxGlobalVar } from './utils';
import { NoteTuple } from '../types';

// outlet and post supplied by Max JS object and exist in global namespace at runtime
export default function postOutputToMax(output: NoteTuple) {
  getMaxGlobalVar(console.log, 'post')(output.toString());
  getMaxGlobalVar((...args: any[]) => {}, 'outlet')(0, output);
}
