export const initialState = {
  basket: [],
};

const reducer = (state, action)=> {
  switch(action.type){
    case 'ADD_TO_BASKET':
      // logic to add item to the basket
      break;
      case 'REMOVE_FROM_BASKET':
//Remove item from the basket
      break;

      default:
        return state;
  }
}

export default reducer;