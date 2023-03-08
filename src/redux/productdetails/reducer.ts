import ProductTypes from "./action-type";
import { convertTypeAcquisitionFromJson } from "typescript";
import useFetch from "@/custom/useFetch";

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
      console.log(action.payload)
      return {
        ...state,
        name: action.payload
      }
    default: 
    return {...state}
  };
};

export default productReducer;