import { atom } from "recoil";

export const reloadButtonState = atom({
  key: "reloadButtonState", // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});
