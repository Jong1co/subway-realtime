import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useMemo, useState } from "react";
import { FlatList, Text, View, VirtualizedList } from "react-native";
import { RootStackParamList } from "../router/Router";
import { StatusBar } from "expo-status-bar";
import useSearchText from "../hooks/useSearchState";

import getAvailableStationList from "../utils/getAvailableStationList";
import LineBadge, { LineName } from "../components/_common/LineBadge/LineBadge";
import { useInfiniteQuery } from "@tanstack/react-query";
import SearchListItem from "../components/SearchListItem/SearchListItem";

const SearchScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Search">) => {
  const [searchText] = useSearchText();

  const {
    data: stationList,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
    isPending,
    isRefetching,
    isPlaceholderData,
    isSuccess,
  } = useInfiniteQuery({
    queryKey: ["search", "stationList", searchText],
    queryFn: ({ pageParam = 0 }) => {
      return getAvailableStationList(searchText, pageParam);
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages, lastPageParam) => {
      if (lastPage.length === 0) return undefined;
      return lastPageParam + 1;
    },
    staleTime: Infinity,
  });

  const moveToDetailPage = (stationInfo: {
    station: string;
    lines: LineName[];
  }) => {
    navigation.navigate("Detail", stationInfo);
  };

  const list = stationList?.pages.flat();

  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingTop: 16 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: 16, flex: 1 }}
        data={list}
        ListFooterComponent={() => isFetchingNextPage && <Text>찾는중</Text>}
        ListEmptyComponent={() => <Text>검색 결과가 없습니다.</Text>}
        renderItem={({ item }) => (
          <SearchListItem item={item} onPress={moveToDetailPage} />
        )}
        keyExtractor={({ station }) => station}
        onEndReached={() => fetchNextPage()}
        onEndReachedThreshold={0.5}
      />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
};

export default SearchScreen;
