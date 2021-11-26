// swallow reference error - outlet and post exist in lexical scope when bundle is run
export default function postOutputToMax(output: number[]) {
  try {
    post(output.toString());
    outlet(0, ...output);
  } catch (e) {}
}
