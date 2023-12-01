import React, { useEffect, useState } from "react";
import { Animated, FlatList, RefreshControl, Text, View } from "react-native";
import StationGroup from "../StationGroup/StationGroup";
import { LineName } from "../_common/LineBadge/LineBadge";
import useReloadButton from "../../hooks/useReloadButton";
import ReloadButton from "../_common/ReloadButton/ReloadButton";

type Props = {
  stationList?: { station: string; line: LineName }[];
  LineHeaderComponent?: JSX.Element;
  flatlistRef?: React.RefObject<FlatList<any>>;
};

const StationCardSection = ({
  stationList,
  LineHeaderComponent,
  flatlistRef,
}: Props) => {
  const [refreshing, setRefreshing] = useState(false);
  const [loadMoreList, setLoadMoreList] = useState(false);
  const [isActive, onScroll] = useReloadButton();

  const onRefresh = async () => {
    setRefreshing(true);
    //gps로 역 찾는 함수

    //api 데이터 불러오는 함수
    setTimeout(() => {
      setRefreshing(false);
    }, 5000);
  };

  return (
    <>
      <FlatList
        onScroll={(e) => onScroll(e.nativeEvent.contentOffset.y)}
        scrollEventThrottle={100}
        data={
          stationList ??
          ([
            { station: "신도림", line: "1호선" },
            { station: "구로", line: "1호선" },
          ] as { station: string; line: LineName }[])
        }
        ListHeaderComponent={LineHeaderComponent}
        ListFooterComponent={<View style={{ height: 60, width: "100%" }} />}
        refreshControl={
          <RefreshControl //
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#ff0000"]} // 안드로이드
            tintColor={"#ff0000"} // ios
          />
        }
        ItemSeparatorComponent={() => (
          <View style={{ height: 16, width: "100%" }} />
        )}
        renderItem={({ item }) => <StationGroup {...item} />}
        keyExtractor={(item) => item.station + item.line}
        // onEndReached={() => alert("hi")} // 끝에 도달하면 실행하는 함수 (무한스크롤?)
        // onEndReachedThreshold={0.1} // 끝에서 10%정도 도달하면 실행하는 함수 (무한스크롤?)
        ref={flatlistRef}
        // onStartReached={() => alert("h2")} // 시작에 도달하면 실행하는 함수 (무한스크롤?)
      />
      <ReloadButton onPress={() => {}} />
    </>
  );
};

export default StationCardSection;
