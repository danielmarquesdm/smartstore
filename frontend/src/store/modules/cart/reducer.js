import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex(
          (p) => p._id === action.product._id
        );

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });

    case 'REMOVE_FROM_CART':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p._id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });

    case 'INCREMENT_AMOUNT':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p._id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        }
      });

    case 'DECREMENT_AMOUNT':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p._id === action.id);

        if (productIndex >= 0) {
          if (draft[productIndex].amount > 1) {
            draft[productIndex].amount -= 1;
          } else {
            draft.splice(productIndex, 1);
          }
        }
      });

    default:
      return state;
  }
}
