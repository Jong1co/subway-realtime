import React from "react";
import { LineServiceImpl } from "../../service/LineServiceImpl";
import { FlatList, View } from "react-native";
import { stationInfo } from "../../repository/data/StationInfo";
import BookmarkSection from "../BookmarkSection/BookmarkSection";
import Seperator from "../_common/Seperator";
import StationGroup from "../StationGroup/StationGroup";

const StationCardSection = () => {
  return (
    <FlatList
      data={[{ station: "구로", line: "1호선" }]}
      ListHeaderComponent={
        <>
          <BookmarkSection />
          <Seperator />
        </>
      }
      // refreshing={true}
      ItemSeparatorComponent={() => (
        <View style={{ height: 16, width: "100%" }} />
      )}
      renderItem={({ item }) => (
        <>
          <StationGroup {...item} />
        </>
      )}
      keyExtractor={(item) => item.station + item.line}
      // onEndReached={() => alert("hi")} // 끝에 도달하면 실행하는 함수 (무한스크롤?)
      // onStartReached={() => alert("h2")} // 시작에 도달하면 실행하는 함수 (무한스크롤?)
    />
  );
};

export default StationCardSection;
{
  /* <StationCard
              onPress={moveToDetailPage}
              runningSubwayList={runningSubwayList}
              direction="left"
              {...item}
            />
            <View style={{ height: 16, width: "100%" }} />
            <StationCard
              onPress={moveToDetailPage}
              runningSubwayList={runningSubwayList}
              {...item}
            /> */
}
