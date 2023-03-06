import ProductTypes from "./action-type";

interface stateProps {
  name: string
};

interface ActionProps {
  type: string
  payload: string
};

const productReducer = (state: stateProps, action: ActionProps) => {
  switch(action.type) {
    case ProductTypes.SHOW_PRODUCT:
      return {
        ...state,
        name: action.payload
      }
    default: 
    return {...state}
  };
};

export default productReducer;