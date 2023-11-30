import { RootStackParamList } from "../router/Router";

declare global {
  interface Window {
    kakao: any;
  }
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
