import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { LineServiceImpl } from "../../service/LineServiceImpl";
import LineBadge, { LineName } from "../_common/LineBadge/LineBadge";
import * as Style from "./styles";
import StationLineCard from "../StationLineCard/StationLineCard";
import { StationInfo } from "../../repository/data/StationInfo";
import { seoulApi } from "../../api";
import { RealTimeArrival } from "../../repository/data/dummy";
import { StationServiceImpl } from "../../service/StationServiceImpl";
import { getLineCode } from "../../utils/getLineCode";

type Props = {
  station: string;
  line: LineName;
};

const StationGroup = ({ station, line }: Props) => {
  const [runningSubwayList, setRunningSubwayList] = useState<
    { direction: string; currentPosition: string }[]
  >([]);
  const subwayLineByStation = new LineServiceImpl(station, getLineCode(line))
    .line;

  const onReachedLastItem = async ({
    station_nm,
  }: Pick<StationInfo, "station_nm">) => {
    const { data } = await seoulApi.get(
      `/realtimeStationArrival/1/5/${station_nm}`
    );

    const realtimeArrivalList: RealTimeArrival[] = data.realtimeArrivalList;

    // const mappedArrivalList = realtimeArrivalList.map((subway) => {
    //   return {
    //     currentPosition: subway.arvlMsg3,
    //     arrivalPosition: subway.arvlMsg2,
    //   };
    // });

    const result = realtimeArrivalList.map((realtimeArrival) => {
      return {
        direction: new StationServiceImpl(realtimeArrival).direction,
        currentPosition: realtimeArrival.arvlMsg3,
      };
    });

    setRunningSubwayList(result);
  };
  // console.log(runningSubwayList);
  // useEffect(() => {
  //   onReachedLastItem({ station_nm: "영등포" });
  // }, []);

  return (
    <View style={{ marginHorizontal: 16, marginTop: 24 }}>
      <Style.GroupTitle>
        <LineBadge line={line} />
        <Style.StationName>{station}역</Style.StationName>
      </Style.GroupTitle>
      {Object.entries(subwayLineByStation).map(([destination, lineInfo]) => (
        <>
          <View style={{ height: 16 }} />
          <StationLineCard
            currentStation={station}
            destination={destination} // ex) 인천, 신창, 소요산
            lineInfo={lineInfo}
            line={line}
            runningSubwayList={runningSubwayList.reduce((accr, curr) => {
              if (curr.direction === destination) {
                return [...accr, curr.currentPosition];
              }
              return accr;
            }, [] as string[])}
          />
        </>
      ))}
    </View>
  );
};

export default StationGroup;
