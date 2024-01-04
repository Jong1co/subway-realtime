import axios from "axios";
import { APP_KEY } from "@env";

// const seoulApiKey = "755a4e6348616e743835666e634e64";
// const seoulApiKey = "72636e4756616e7435317557555a69";
// const seoulApiKey = "4272477844616e7431313249594a6154";
const seoulApiKey = "4375767168616e7433374f6a754867";

export const seoulApi = axios.create({
  baseURL: `http://swopenapi.seoul.go.kr/api/subway/${APP_KEY}/json`,
});
