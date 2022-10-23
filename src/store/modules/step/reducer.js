import { NEXT_STEP, PREVIOUS_STEP, STAND_BY_STEP, CLEAN_STEP } from "./action-types";

const stepReducer = (state = '', action) => {
  switch (action.type) {
    case NEXT_STEP:
      return state - 0 + 1;

    case PREVIOUS_STEP:
      return state - 1;

    case STAND_BY_STEP:
      return state = '1' ;

    case CLEAN_STEP:
      return state = '';

    default:
      return state;
  }
};

export default stepReducer;