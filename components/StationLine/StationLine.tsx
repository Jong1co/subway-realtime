import React from "react";
import { Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { SvgIcon } from "../_common/SvgIcon/SvgIcon";
import * as Style from "./styles";
import addDirectionText from "../../utils/addDirectionText";
import { useQuery } from "@tanstack/react-query";
import { getSubwayListByStation } from "../../api/station";
import convertLongStationName from "../../utils/convertLongStationName";
import { LineName } from "../_common/LineBadge/LineBadge";
import { DrawLineInfo } from "../StationLineCard/StationLineCard";

type Props = {
  list: string[];
  currentStation: string;
  runningSubwayList: DrawLineInfo[];
  color: string;
  isUphill: boolean;
  comparisonStation: string;
  line: LineName;
};

const StationLine = ({
  list,
  currentStation,
  runningSubwayList,
  line,
  color,
  isUphill,
  comparisonStation,
}: Props) => {
  const { data } = useQuery({
    queryKey: ["subway", currentStation, comparisonStation],
    queryFn: () =>
      getSubwayListByStation({
        station_nm: comparisonStation === "성수" ? "용답" : comparisonStation,
      }),
    enabled: comparisonStation !== currentStation,
    initialData: [],
  });
  const runningList = data?.reduce((accr, curr) => {
    if (curr.isUphill === isUphill && curr.line === line) {
      accr.push({
        currentStation: curr.currentStation,
        lastStation: curr.lastStation,
        isExpress: curr.isExpress,
        isSuperExpress: curr.isSuperExpress,
      });
    }
    return accr;
  }, [] as DrawLineInfo[]);

  const resultList =
    comparisonStation === currentStation
      ? runningSubwayList
      : runningList.concat(runningSubwayList);

  console.log(comparisonStation, currentStation, resultList);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        position: "relative",
        marginTop: 26,
      }}
    >
      <View
        style={{
          top: 46,
          height: 12,
          width: "80%",
          left: "10%",
          position: "absolute",
          backgroundColor: colors[color as keyof typeof colors],
        }}
      />
      {list.map((item) => {
        const isCurrentStation = currentStation === item;
        const hasSubway = resultList.find(
          ({ currentStation: runningSubwayStation, lastStation }) => {
            if (runningSubwayStation === "춘의역") {
              return item === "춘의";
            }

            return runningSubwayStation === item;
          }
        );
        // console.log(hasSubway);

        const subwayIcon = hasSubway?.isExpress
          ? "Express"
          : hasSubway?.isSuperExpress
          ? "Super"
          : "Subway";

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
                  {hasSubway.isExpress && "(급)"}
                  {hasSubway.isSuperExpress && "(특)"}
                  {addDirectionText(hasSubway.lastStation)}
                </Style.SubwayDestination>
                <Style.Subway isUphill={isUphill}>
                  <SvgIcon
                    name={subwayIcon}
                    width={16}
                    height={16}
                    fill={"white"}
                  />
                </Style.Subway>
              </View>
            ) : (
              <View style={{ opacity: 0 }}>
                <SvgIcon
                  name={subwayIcon}
                  width={16}
                  height={16}
                  fill={"white"}
                />
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
              }}
            >
              <View
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: 7,
                  backgroundColor: "white",
                  opacity: isCurrentStation ? 1 : 0.7,
                }}
              />
            </View>
            <Text
              style={{
                textAlign: "center",
                flex: 1,
                width: 100,
                marginTop: 8,
                fontWeight: isCurrentStation ? "500" : "400",
                color: isCurrentStation ? "black" : "gray",
              }}
            >
              {convertLongStationName(item)}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default StationLine;
