import React from "react";
import { Text, View } from "react-native";
import { LineServiceImpl } from "../../service/LineServiceImpl";

type Props = {
  station: string;
  line: string;
};

const StationGroup = ({ station, line }: Props) => {
  const subwayLineByStation = new LineServiceImpl(station, line).line;
  console.log();

  return (
    <View>
      {Object.entries(subwayLineByStation).map(([direction, lineInfo]) => {
        console.log(lineInfo);
        return (
          <View key={direction}>
            <Text>({direction})</Text>
            {lineInfo.map(({ list, nextStation }, i) => {
              return (
                <View key={i}>
                  <Text>{list.join("-")}</Text>
                </View>
              );
            })}
            {/* {lineInfo} */}
          </View>
        );
      })}
    </View>
  );
};

export default StationGroup;
