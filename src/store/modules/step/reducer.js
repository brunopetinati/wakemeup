import { NEXT_STEP, PREVIOUS_STEP, CLEAN_STEP } from "./action-types";

const stepReducer = (state = 0, action) => {
  switch (action.type) {
    case NEXT_STEP:
      return state + 1;

    case PREVIOUS_STEP:

      const { step } = action;

      if(!step) {
        return state - 1
      }
      return state - step;

    case CLEAN_STEP:
      return state = '';

    default:
      return state;
  }
};

export default stepReducer;