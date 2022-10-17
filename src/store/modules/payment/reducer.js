import { CREDIT_CARD, BUONO_FEDELTA, SATISPAY, GIFT_CARD } from "./action-types";

const paymentReducer = (state = '', action) => {
  switch (action.type) {
    case CREDIT_CARD:
      return state = 'credit_card';
    
    case BUONO_FEDELTA:
      return state = 'buono_fedelta';

    case SATISPAY:
      return state = 'satispay';

    case GIFT_CARD:
      return state = 'gift_card';

    default:
      return state;
  }
};

export default paymentReducer;