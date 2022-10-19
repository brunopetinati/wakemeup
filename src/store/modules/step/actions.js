import { NEXT_STEP, PREVIOUS_STEP, STAND_BY_STEP } from "./action-types";

export const nextStep = (step) => ({
  type: NEXT_STEP,
  step,
});

export const previousStep = (step) => ({
  type: PREVIOUS_STEP,
  step,
});

export const standByStep = (step) => ({
  type: STAND_BY_STEP,
  step,
});
