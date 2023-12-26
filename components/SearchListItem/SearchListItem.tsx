import React from "react";
import * as Style from "./styles";
import LineBadge, { LineName } from "../_common/LineBadge/LineBadge";
import { View } from "react-native";

type Props = {
  item: {
    station: string;
    lines: LineName[];
  };
  onPress: (stationInfo: { station: string; lines: LineName[] }) => void;
};
const SearchListItem = ({ item, onPress }: Props) => {
  return (
    <Style.StationListItem onPress={() => onPress(item)}>
      <Style.StationTitle>{item.station}</Style.StationTitle>
      <Style.LineWrapper>
        {item.lines.map((line) => (
          <View key={line} style={{ marginLeft: 4 }}>
            <LineBadge line={line} />
          </View>
        ))}
      </Style.LineWrapper>
    </Style.StationListItem>
  );
};

export default React.memo(SearchListItem);
