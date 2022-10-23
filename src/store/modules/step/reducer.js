import { NEXT_STEP, PREVIOUS_STEP, CLEAN_STEP } from "./action-types";

const stepReducer = (state = 1, action) => {
  switch (action.type) {
    case NEXT_STEP:
      return state - 0 + 1;

    case PREVIOUS_STEP:
      return state - 1;

    case CLEAN_STEP:
      return state = '';

    default:
      return state;
  }
};

export default stepReducer;