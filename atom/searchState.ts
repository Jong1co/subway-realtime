import { atom } from "recoil";

export const searchState = atom({
  key: "searchState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
