import { ADD_BAG } from "./action-types";
import { REMOVE_BAG } from "./action-types";
import { ZERO_BAG } from "./action-types";


export const addBags = (bag) => ({
  type: ADD_BAG,
  bag,
});

export const removeBags = (bag) => ({
  type: REMOVE_BAG,
  bag,
});

//TO DO: remover função caso não esteja sendo usada
export const zeroBags = (bag) => ({
  type: ZERO_BAG,
  bag,
});