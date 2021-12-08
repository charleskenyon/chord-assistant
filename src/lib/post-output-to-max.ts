import { NoteTuple } from '../types';

// swallow reference error: outlet and post supplied by Max JS object and exist in global namespace at runtime
export default function postOutputToMax(output: NoteTuple) {
  try {
    post(output.toString());
    outlet(0, output);
  } catch (e) {}
}
