import { NEXT_STEP, PREVIOUS_STEP } from "./action-types";

export const nextStep = (step) => ({
  type: NEXT_STEP,
  step,
});

export const previousStep = (step) => ({
  type: PREVIOUS_STEP,
  step,
});
