import React from "react";
import * as Style from "./styles";
import Bookmark from "../Bookmark/Bookmark";
import { FlatList, View } from "react-native";

const BookmarkSection = () => {
  const info = [
    {
      arrivalStation: "서동탄행",
      arrivalTime: "10분 뒤 도착",
      line: "1호선",
      currentStation: "서울역",
      direction: "남영 방면",
    },
    {
      arrivalStation: "소요산행",
      arrivalTime: "10분 뒤 도착",
      line: "1호선",
      currentStation: "서울역",
      direction: "종로 3가 방면",
    },
    {
      arrivalStation: "장암",
      arrivalTime: "5분 뒤 도착",
      line: "7호선",
      currentStation: "삼산체육관역",
      direction: "상동 방면",
    },
  ];

  return (
    <Style.Section>
      <Style.Title>즐겨찾기</Style.Title>
      <FlatList
        horizontal
        data={info}
        ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
        renderItem={({ item }) => (
          <Bookmark
            arrivalStation={item.arrivalStation}
            arrivalTime={item.arrivalTime}
            line={item.line}
            currentStation={item.currentStation}
            direction={item.direction}
          />
        )}
        keyExtractor={(item) => item.arrivalStation + item.line}
      />
      {/* <Bookmark
        arrivalStation="서동탄행"
        arrivalTime="10분 뒤 도착"
        line="1호선"
        currentStation="서울역"
        direction="남영 방면"
      /> */}
    </Style.Section>
  );
};

export default BookmarkSection;
