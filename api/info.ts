import { LineName } from "../components/_common/LineBadge/LineBadge";
import { hashKey } from "../utils/hashKey";

export type AsyncStorage = {
  getItem: (key: string) => Promise<string | null>;
  setItem: (key: string, value: string) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
};

export type Info = {
  isFirst: boolean;
};

export class InfoRepository {
  constructor(private asyncStorage: AsyncStorage) {}

  getIsFirst = async () => {
    try {
      const data = await this.asyncStorage.getItem("info");
      return data ? JSON.parse(data) : true;
    } catch (e) {
      console.error(e);
    }
  };

  setIsFirst = async () => {
    try {
      await this.asyncStorage.setItem("info", JSON.stringify(false));
    } catch (e) {
      console.error(e);
    }
  };

  reset = async () => {
    try {
      await this.asyncStorage.setItem("info", JSON.stringify(true));
    } catch (e) {
      console.error(e);
    }
  };
}
