import { atom } from "recoil";

export const distanceState = atom({
  key: "distanceState", // unique ID (with respect to other atoms/selectors)
  default: 500, // default value (aka initial value)
});
