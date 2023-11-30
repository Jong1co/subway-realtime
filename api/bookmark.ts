import { LineName } from "../components/_common/LineBadge/LineBadge";
import { hashKey } from "../utils/hashKey";

export type AsyncStorage = {
  getItem: (key: string) => Promise<string | null>;
  setItem: (key: string, value: string) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
};

interface BookmarkRepository {
  getBookmarks: () => Promise<string | null>;
  addBookmark: (bookmark: Bookmark) => Promise<void>;
  removeBookmark: (bookmark: Bookmark) => Promise<void>;
}

export type Bookmark = {
  station: string;
  nextStation: string;
  line: LineName;
};

export class StorageBookmarkRepository implements BookmarkRepository {
  constructor(private asyncStorage: AsyncStorage) {}

  getBookmarks = async () => {
    try {
      const data = await this.asyncStorage.getItem("bookmarks");
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error(e);
    }
  };

  addBookmark = async (bookmark: Bookmark) => {
    try {
      const data = await this.asyncStorage.getItem("bookmarks");
      const bookmarks = data ? JSON.parse(data) : [];

      await this.asyncStorage.setItem(
        "bookmarks",
        JSON.stringify([...bookmarks, bookmark])
      );
    } catch (e) {
      console.error(e);
    }
  };

  removeBookmark = async (bookmark: Bookmark) => {
    try {
      const data = await this.asyncStorage.getItem("bookmarks");
      const bookmarks = data ? JSON.parse(data) : [];

      const removedBookmarks = bookmarks.filter((b: Bookmark) => {
        return hashKey(b) !== hashKey(bookmark);
      });

      await this.asyncStorage.setItem(
        "bookmarks",
        JSON.stringify(removedBookmarks)
      );
    } catch (e) {
      console.error(e);
    }
  };
}
