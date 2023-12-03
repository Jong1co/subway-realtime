import { atom } from "recoil";

export const appLoadingState = atom({
  key: "appLoadingState", // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});
