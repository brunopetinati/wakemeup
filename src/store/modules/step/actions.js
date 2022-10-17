import { NEXT_STEP } from "./action-types";

export const nextStep = (step) => ({
  type: NEXT_STEP,
  step,
});
