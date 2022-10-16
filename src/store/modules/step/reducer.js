import { NEXT_STEP } from "./action-types";

const stepReducer = (state = 1, action) => {
  switch (action.type) {
    case NEXT_STEP:
      return state + 1;

    default:
      return state;
  }
};

export default stepReducer;