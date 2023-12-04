import { atom } from "recoil";
import { StationLineInfo } from "../hooks/useFindAroundStation";

export const aroundStationList = atom<StationLineInfo[]>({
  key: "aroundStationList", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
