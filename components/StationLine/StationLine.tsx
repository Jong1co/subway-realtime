import React from "react";
import { Text, View } from "react-native";
import { colors } from "../../styles/colors";

type Props = {
  list: string[];
  currentStation: string;
  runningSubwayList: string[];
  color: string;
};

const StationLine = ({
  list,
  currentStation,
  runningSubwayList,
  color,
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
          top: 54,
          height: 12,
          width: "80%",
          left: "10%",
          position: "absolute",
          backgroundColor: colors[color as keyof typeof colors],
        }}
      />
      {list.map((item) => {
        const isCurrentStation = currentStation === item;
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
              // height: 70,
              // width: `${100 / findLine().length}%`,
            }}
          >
            {runningSubwayList.includes(item) ? (
              <View
                style={{
                  width: 24,
                  height: 24,
                  backgroundColor: "gray",
                  marginTop: 20,
                }}
              />
            ) : (
              <View
                style={{
                  width: 24,
                  height: 24,
                  backgroundColor: "gray",
                  opacity: 0,
                  marginTop: 20,
                }}
              />
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
