import { atom } from "recoil";

export const pullRefreshState = atom({
  key: "pullRefreshState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
