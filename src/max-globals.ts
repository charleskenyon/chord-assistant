inlets = 1;
outlets = 1;
let maxAddedNotes: number;
let selectionRange: number;

// setmaxaddednotes and setselectionrange will be called externally by Max
function setmaxaddednotes(value: number) {
  maxAddedNotes = value;
}

function setselectionrange(value: number) {
  selectionRange = value;
}
