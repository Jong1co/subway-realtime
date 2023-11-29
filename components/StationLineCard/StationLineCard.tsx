import React from "react";
import { Text, View } from "react-native";
import * as Style from "./styles";
import BookmarkButton from "../BookmarkButton/BookmarkButton";
import StationLine from "../StationLine/StationLine";
type Props = {
  currentStation: string;
  destination: string;
  lineInfo: {
    list: string[];
    nextStation: string;
    direction: string;
  }[];
  runningSubwayList: string[];
};

const StationLineCard = ({
  destination,
  lineInfo,
  currentStation,
  runningSubwayList,
}: Props) => {
  const nextStation = lineInfo[0].nextStation;

  return (
    <Style.Card key={destination}>
      <Style.TitleSection>
        <Style.TitleBox>
          <Style.NextStation>{nextStation} 방면</Style.NextStation>
          <Style.Direction>({destination})</Style.Direction>
        </Style.TitleBox>
        <BookmarkButton />
      </Style.TitleSection>
      <Style.Content>
        {lineInfo.map(({ list, nextStation, direction }, i) => {
          const isUphill = direction === "상행";

          return (
            <StationLine
              key={nextStation + i}
              list={isUphill ? [...list].reverse() : list}
              currentStation={currentStation}
              runningSubwayList={runningSubwayList}
            />
          );
        })}
      </Style.Content>
    </Style.Card>
  );
};

export default StationLineCard;
