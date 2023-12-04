import { atom } from "recoil";

export const locationState = atom({
  key: "locationState", // unique ID (with respect to other atoms/selectors)
  default: {
    loaded: false,
    stale: true,
    coordinates: {
      lat: 0,
      lng: 0,
    },
  }, // default value (aka initial value)
});
