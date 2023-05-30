export const ADD_STEP = "ADD_STEP";
export const RESET_STEPS = "RESET_STEPS";

export function addStep() {
  return { type: ADD_STEP };
}

export function resetSteps() {
  return { type: RESET_STEPS };
}
