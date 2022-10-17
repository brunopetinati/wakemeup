import { CREDIT_CARD, BUONO_FEDELTA, SATISPAY, GIFT_CARD } from "./action-types";

export const creditCard = (payment) => ({
  type: CREDIT_CARD,
  payment,
});

export const buonoFedelta = (payment) => ({
  type: BUONO_FEDELTA,
  payment,
});

export const satispay = (payment) => ({
  type: SATISPAY,
  payment,
});

export const giftCard = (payment) => ({
  type: GIFT_CARD,
  payment,
});

