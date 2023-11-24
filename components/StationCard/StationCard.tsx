import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { StationInfo } from "../../data/StationInfo";
import LineBadge from "../_common/LineBadge/LineBadge";
import * as Style from "./styles";
import { Shadow } from "react-native-shadow-2";
import { lineName, lineStore } from "../../data/line";
import { RunningSubwayInfo } from "../../screens/HomeScreen";
import { RealTimeArrival } from "../../data/dummy";

type Props = StationInfo & {
  onPress: () => void;
  // stationList: string[];
  direction?: "left" | "right";
  runningSubwayList: RealTimeArrival[];
};

const StationCard = ({
  line_num,
  station_cd,
  station_nm,
  onPress,
  // stationList,
  runningSubwayList,
  direction = "right",
}: Props) => {
  const findLine = () => {
    const lineCode = lineName[line_num as keyof typeof lineName] || "1007";
    const lineArray = lineStore[lineCode as keyof typeof lineStore];

    let index = lineArray.findIndex((item) => item === station_nm);
    let originIndex = index;

    const result = [];

    for (let i = 0; i < 5; i++) {
      const newIndex = index - i * (direction === "left" ? 1 : -1);
      if (!lineArray[newIndex]) {
        break;
      }
      result.push(lineArray[newIndex]);
    }

    // if (result.length === 5) {
    //   return result;
    // }

    // while (result.length < 5) {
    //   originIndex = originIndex + 1 * (direction === "left" ? -1 : +1);
    //   result.push(lineArray[originIndex]);
    // }

    return result;
  };

  return (
    <Shadow
      distance={8}
      style={{ borderRadius: 8, width: "100%" }}
      startColor={"#00000008"}
      // startOpacity={0.1}
      // radius={5}
      offset={[0, 0]}
    >
      <Style.Card onPress={onPress}>
        <Style.TitleSection>
          <LineBadge line_num={line_num} />
          <Style.Title>
            {station_nm} - {direction === "right" ? "상행" : "하행"}
          </Style.Title>
        </Style.TitleSection>
        <View
          style={{
            justifyContent: "center",
            flex: 1,
            width: "100%",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              // width: "80%",
              position: "relative",
              marginTop: 12,
            }}
          >
            <View
              style={{
                top: 54,
                height: 12,
                width: "80%",
                left: "10%",
                position: "absolute",
                backgroundColor: "#54640D",
              }}
            />
            {findLine().map((item) => {
              const hasSubway = runningSubwayList.find(
                (subway) =>
                  subway.arvlMsg3.includes(item) &&
                  ((subway.updnLine === "상행" && direction === "right") ||
                    (subway.updnLine === "하행" && direction === "left"))
              );
              // console.log("hasSubway", hasSubway, item);
              return (
                <View
                  key={item}
                  style={{
                    // flex: 1,
                    alignItems: "center",
                    width: 70,
                    // width: `${100 / findLine().length}%`,
                  }}
                >
                  {hasSubway === undefined ? (
                    <View
                      style={{
                        width: 24,
                        height: 24,
                        backgroundColor: "white",
                        marginTop: 20,
                      }}
                    />
                  ) : (
                    <View
                      style={{
                        width: 24,
                        height: 24,
                        backgroundColor: "gray",
                        marginTop: 20,
                      }}
                    />
                  )}
                  <View
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: 6,
                      backgroundColor: "#54640D",
                      flex: 1,
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
                          opacity: station_nm === item ? 1 : 0.7,
                        }}
                      />
                    }
                  </View>
                  <Text
                    style={{
                      textAlign: "center",
                      flex: 1,
                      marginTop: 8,
                    }}
                  >
                    {item}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </Style.Card>
    </Shadow>
  );
};

export default StationCard;
