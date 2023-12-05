import React from "react";
import { Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { SvgIcon } from "../_common/SvgIcon/SvgIcon";
import * as Style from "./styles";

type Props = {
  list: string[];
  currentStation: string;
  runningSubwayList: { currentStation: string; lastStation: string }[];
  color: string;
  isUphill: boolean;
};

const StationLine = ({
  list,
  currentStation,
  runningSubwayList,
  color,
  isUphill,
}: Props) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        position: "relative",
        marginTop: 12,
      }}
    >
      <View
        style={{
          top: 56,
          height: 12,
          width: "80%",
          left: "10%",
          position: "absolute",
          backgroundColor: colors[color as keyof typeof colors],
        }}
      />
      {list.map((item) => {
        const isCurrentStation = currentStation === item;
        const hasSubway = runningSubwayList.find(
          ({ currentStation: runningSubwayStation, lastStation }) =>
            runningSubwayStation === item
        );

        // const hasSubway = runningSubwayList.find(
        //   (subway) =>
        //     subway.arvlMsg3.includes(item) &&
        //     ((subway.updnLine === "상행" && direction === "right") ||
        //       (subway.updnLine === "하행" && direction === "left"))
        // );
        // console.log("hasSubway", hasSubway, item);
        return (
          <View
            key={item}
            style={{
              flex: 1,
              alignItems: "center",
              width: 80,
              position: "relative",
              marginTop: 30,
              // height: 70,
              // width: `${100 / findLine().length}%`,
            }}
          >
            {hasSubway ? (
              <View style={{ alignItems: "center" }}>
                <Style.SubwayDestination>
                  {hasSubway.lastStation}
                </Style.SubwayDestination>
                <Style.Subway isUphill={isUphill}>
                  <SvgIcon
                    name="Subway"
                    width={16}
                    height={16}
                    fill={"white"}
                  />
                </Style.Subway>
              </View>
            ) : (
              <View style={{ opacity: 0 }}>
                <SvgIcon name="Subway" width={16} height={16} fill={"white"} />
              </View>
            )}
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                backgroundColor: colors[color as keyof typeof colors],
                // flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              {
                <View
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: 7,
                    backgroundColor: "white",
                    opacity: isCurrentStation ? 1 : 0.7,
                  }}
                />
              }
            </View>
            <Text
              style={{
                textAlign: "center",
                flex: 1,
                width: 100,
                marginTop: 8,
                color: isCurrentStation ? "black" : "gray",
              }}
            >
              {item}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default StationLine;
