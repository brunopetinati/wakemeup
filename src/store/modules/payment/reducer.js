import { CREDIT_CARD, BUONO_FEDELTA, SATISPAY, GIFT_CARD, EMPTY_STRING, CONFIRMING, SUCCESS } from "./action-types";

const paymentReducer = (state = '', action) => {

  switch (action.type) {
    case CREDIT_CARD:
      state = 'credit_card'
      return state;
    
    case BUONO_FEDELTA:
      state = 'buono_fedelta';
      return state;

    case SATISPAY:
      state = 'satispay';
      return state;

    case GIFT_CARD:
      state = 'gift_card';
      return state;

    case EMPTY_STRING:
      state = '';
      return state;
    
    case CONFIRMING:
      state = 'confirming';
      return state;

    case SUCCESS:
      state = 'success';
      return state;

    default:
      return state;
  }
};

export default paymentReducer;