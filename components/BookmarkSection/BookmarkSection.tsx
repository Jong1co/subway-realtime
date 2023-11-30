import React from "react";
import * as Style from "./styles";
import BookmarkCard from "../BookmarkCard/BookmarkCard";
import { FlatList, View } from "react-native";
import { LineName } from "../_common/LineBadge/LineBadge";
import { useQuery } from "@tanstack/react-query";
import { Bookmark, StorageBookmarkRepository } from "../../api/bookmark";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type BookmarkInfo = {
  arrivalStation: string; // 데이터 받아와서 넣어줄것임
  arrivalTime: string; // 데이터 받아와서 넣어줄것임
  line: LineName; // 데이터 로컬에 저장
  station: string; // 데이터 로컬에 저장
  nextStation: string; // 데이터 로컬에 저장
};

const BookmarkSection = () => {
  const bookmarkRepository = new StorageBookmarkRepository(AsyncStorage);

  const { data: bookmarks } = useQuery<Bookmark[]>({
    queryKey: ["bookmarks"],
    queryFn: bookmarkRepository.getBookmarks,
    initialData: [],
  });

  const bookmarkList: BookmarkInfo[] = bookmarks.map((bookmark) => ({
    ...bookmark,
    arrivalStation: "장암",
    arrivalTime: "5분 뒤 도착",
  }));

  return (
    <Style.Section>
      <Style.Title>즐겨찾기</Style.Title>
      <FlatList
        horizontal
        data={bookmarkList}
        ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
        renderItem={({ item }) => <BookmarkCard {...item} />}
        keyExtractor={(item) => item.arrivalStation + item.line}
      />
    </Style.Section>
  );
};

export default BookmarkSection;
