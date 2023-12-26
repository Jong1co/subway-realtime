import React, { useState } from "react";
import { View } from "react-native";
import { LineServiceImpl } from "../../service/LineServiceImpl";
import LineBadge, { LineName } from "../_common/LineBadge/LineBadge";
import * as Style from "./styles";
import StationLineCard, {
  DrawLineInfo,
} from "../StationLineCard/StationLineCard";
import { getLineCode } from "../../utils/getLineCode";
import { StationService } from "../../interface/StationService";
import { StationServiceImpl } from "../../service/StationServiceImpl";

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
              (subwayList || [])?.find(
                (subway) =>
                  subway.nextStation === lineInfo[0].nextStation &&
                  subway.line === line &&
                  subway.isFirst
              )?.arrivalState || "도착 정보 없음"
            }
            runningSubwayList={subwayList.reduce((accr, curr) => {
              const nextStation = lineInfo[0].nextStation;
              if (curr.nextStation === nextStation && curr.line === line) {
                return [
                  ...accr,
                  {
                    currentStation: curr.currentStation,
                    lastStation: curr.lastStation,
                    isExpress: curr.isExpress,
                    isSuperExpress: curr.isSuperExpress,
                  },
                ];
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
