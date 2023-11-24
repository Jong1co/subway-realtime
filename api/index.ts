import axios from "axios";

const seoulApiKey = "755a4e6348616e743835666e634e64";

export const seoulApi = axios.create({
  baseURL: `http://swopenapi.seoul.go.kr/api/subway/${seoulApiKey}/json`,
});
