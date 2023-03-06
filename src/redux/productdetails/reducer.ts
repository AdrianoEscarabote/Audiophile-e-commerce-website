import ProductTypes from "./action-type";

const initialState = {
  name: ""
}

interface stateProps {
  name: string
};

interface ActionProps {
  type: string
  payload: string
};

const productReducer = (state: stateProps = initialState, action: ActionProps) => {
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