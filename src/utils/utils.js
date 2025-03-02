import { isEmail, isEmpty } from "validator";
export const validate = (name, value) => {
  switch (name) {
    case "name":
      return !isEmpty(value) && value.length > 2;
    case "email":
      return !isEmpty(value) && isEmail(value);
    case "message":
      return !isEmpty(value) && value.length > 4;
  }
};
