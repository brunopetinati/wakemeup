import { ADD_BAG } from "./action-types";
import { REMOVE_BAG } from "./action-types";
import { ZERO_BAG } from "./action-types";


const bagsReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_BAG:
      const { bag } = action;
      return state + bag;
    
    case REMOVE_BAG:
      if(state > 0) { return state - 1; }
    break;

    case ZERO_BAG:
      return state = 0;

    default:
      return state;
  }
};

export default bagsReducer;