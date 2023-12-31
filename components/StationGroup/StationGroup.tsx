import React, { useState } from "react";
import { View } from "react-native";
import { LineServiceImpl } from "../../service/LineServiceImpl";
import LineBadge, { LineName } from "../_common/LineBadge/LineBadge";
import * as Style from "./styles";
import StationLineCard, {
  DrawLineInfo,
} from "../StationLineCard/StationLineCard";
import { getLineCode } from "../../utils/getLineCode";
import { StationServiceImpl } from "../../service/StationServiceImpl";
import checkDirection from "../../utils/checkRemainTime";

type Props = {
  station: string;
  line: LineName;
  subwayList: StationServiceImpl[];
  // subwayList: {}[]
};

const StationGroup = ({ station, line, subwayList }: Props) => {
  const subwayLineByStation = new LineServiceImpl(station, getLineCode(line))
    .line;

  return (
    <View style={{ marginHorizontal: 16, marginTop: 24 }}>
      <Style.GroupTitle>
        <LineBadge line={line} />
        <Style.StationName>{station}역</Style.StationName>
      </Style.GroupTitle>
      {Object.entries(subwayLineByStation).map(([destination, lineInfo]) => (
        <View key={destination}>
          <View style={{ height: 16 }} />
          <StationLineCard
            currentStation={station}
            destination={destination} // ex) 인천, 신창, 소요산
            lineInfo={lineInfo}
            line={line}
            remainTime={
              (subwayList || [])?.find((subway) => {
                return checkDirection(subway, lineInfo, line, station);
              })?.arrivalState || "도착 정보 없음"
            }
            runningSubwayList={subwayList.reduce((accr, curr) => {
              const isUphill =
                lineInfo[0].direction === "상행" ||
                lineInfo[0].direction === "외선";
              if (station !== "구로") {
                if (curr.line === line && curr.isUphill === isUphill) {
                  accr.push({
                    currentStation: curr.currentStation,
                    lastStation: curr.lastStation,
                    isExpress: curr.isExpress,
                    isSuperExpress: curr.isSuperExpress,
                  });
                }
                return accr;
              }
              const nextStation = lineInfo[0].nextStation.split("(")[0];
              if (curr.nextStation === nextStation && curr.line === line) {
                accr.push({
                  currentStation: curr.currentStation,
                  lastStation: curr.lastStation,
                  isExpress: curr.isExpress,
                  isSuperExpress: curr.isSuperExpress,
                });
              }
              return accr;
            }, [] as DrawLineInfo[])}
          />
        </View>
      ))}
    </View>
  );
};

export default StationGroup;
