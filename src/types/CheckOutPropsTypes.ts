export type FormState = {
  email: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  e_money_number: string;
  e_money_pin: string;
  errorMessageEmail: string;
  errorMessageName: string;
  errorMessagePhone: string;
  errorMessageAddress: string;
  errorMessageCity: string;
  errorMessageCountry: string;
  errorMessageEMoneyNumber: string;
  errorMessageEMoneyPin: string;
};

export type Action =
| { type: "SET_EMAIL"; payload: string }
| { type: "SET_NAME"; payload: string }
| { type: "SET_PHONE"; payload: string }
| { type: "SET_ADDRESS"; payload: string }
| { type: "SET_CITY"; payload: string }
| { type: "SET_COUNTRY"; payload: string }
| { type: "SET_MONEYNUMBER"; payload: string }
| { type: "SET_MONEYPIN"; payload: string }
| { type: "SET_ERROR_EMAIL"; payload: string }
| { type: "SET_ERROR_NAME"; payload: string }
| { type: "SET_ERROR_PHONE"; payload: string }
| { type: "SET_ERROR_CITY"; payload: string }
| { type: "SET_ERROR_COUNTRY"; payload: string }
| { type: "SET_ERROR_MONEYNUMBER"; payload: string }
| { type: "SET_ERROR_MONEYPIN"; payload: string }

export const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  country: "",
  e_money_number: "",
  e_money_pin: "",
  errorMessageAddress: "",
  errorMessageCity: "",
  errorMessageCountry: "",
  errorMessageEmail: "",
  errorMessageEMoneyNumber: "",
  errorMessageEMoneyPin: "",
  errorMessageName: "",
  errorMessagePhone: "",
};