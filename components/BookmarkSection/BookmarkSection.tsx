import React, { useEffect } from "react";
import * as Style from "./styles";
import BookmarkCard from "../BookmarkCard/BookmarkCard";
import { FlatList, View } from "react-native";
import { LineName } from "../_common/LineBadge/LineBadge";
import { useQueries, useQuery } from "@tanstack/react-query";
import { Bookmark, StorageBookmarkRepository } from "../../api/bookmark";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { hashKey } from "../../utils/hashKey";
import BookmarkEmpty from "../BookmarkCard/BookmarkEmpty";
import { getSubwayListByStation } from "../../api/station";
import addDirectionText from "../../utils/addDirectionText";
import useAppLoading from "../../hooks/useAppLoading";
import { useRecoilState } from "recoil";
import { distanceState } from "../../atom/distanceState";
import { locationState } from "../../atom/locationState";

export type BookmarkInfo = {
  arrivalStation: string; // 데이터 받아와서 넣어줄것임
  arrivalTime: string; // 데이터 받아와서 넣어줄것임
  line: LineName; // 데이터 로컬에 저장
  station: string; // 데이터 로컬에 저장
  nextStation: string; // 데이터 로컬에 저장
};

const bookmarkRepository = new StorageBookmarkRepository(AsyncStorage);

const BookmarkSection = () => {
  // useEffect(() => {
  //   bookmarkRepository.removeAll();
  // }, []);
  // const [distance, setDistance] = useRecoilState(distanceState);
  // const [location, setLocation] = useRecoilState(locationState);

  // console.log(distance);

  const { data: bookmarks } = useQuery<Bookmark[]>({
    queryKey: ["bookmarks"],
    queryFn: bookmarkRepository.getBookmarks,
    initialData: [],
  });

  const bookmarkList = useQueries({
    queries: bookmarks.map((bookmark) => ({
      queryKey: ["bookmark", bookmark],
      queryFn: () => getSubwayListByStation({ station_nm: bookmark.station }),
    })),
    combine(result) {
      return {
        data: bookmarks.map((bookmark, i) => {
          //순서를 나타내는 orderKey 판별하는 로직 필요함
          const findItem = (result[i]?.data || [])?.find(
            (subway) =>
              subway.nextStation === bookmark.nextStation &&
              subway.line === bookmark.line &&
              subway.isFirst
          );

          return {
            ...bookmark,
            arrivalStation: addDirectionText(findItem?.lastStation),
            arrivalTime: findItem?.arrivalState ?? "",
          };
        }),
        pending: result.some((item) => item.isLoading), // false
        initialPending: result.some((item) => item.isFetched), // true
      };
    },
  });

  const { loading, completeBookmarkLoading } = useAppLoading();

  const isPreload =
    (!bookmarkList.pending && bookmarkList.initialPending) ||
    bookmarkList.data.length === 0;
  useEffect(() => {
    // console.log(bookmarkList.pending, bookmarkList.initialPending);
    if (isPreload) {
      completeBookmarkLoading();
    }
  }, [isPreload]);

  return (
    <Style.Section>
      <Style.Title>즐겨찾기</Style.Title>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={bookmarkList.data}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
        renderItem={({ item }) => <BookmarkCard {...item} />}
        keyExtractor={(item) => hashKey(item)}
        ListEmptyComponent={BookmarkEmpty}
        scrollEnabled={bookmarkList.data.length > 0}
      />
    </Style.Section>
  );
};

export default BookmarkSection;
