import { PermissionStatus } from "react-native-permissions";
import { atom } from "recoil";

export const permissionState = atom<PermissionStatus | "">({
  key: "permissionState", // unique ID (with respect to other atoms/selectors)
  default: "",
});
