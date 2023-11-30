import React from "react";
import * as Style from "./styles";
import LineBadge from "../_common/LineBadge/LineBadge";
import { BookmarkInfo } from "../BookmarkSection/BookmarkSection";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../router/Router";

type Props = BookmarkInfo;
type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Bookmark = ({
  nextStation,
  arrivalStation,
  arrivalTime,
  line,
  station,
}: Props) => {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <Style.Card
      onPress={() => navigation.navigate("Detail", { station, lines: [line] })}
    >
      <Style.CardTitle>
        <Style.DirectionWrapper>
          <Style.Icon />
          <Style.Direction>{arrivalStation}</Style.Direction>
        </Style.DirectionWrapper>
        <Style.ArrivalTime>{arrivalTime}</Style.ArrivalTime>
      </Style.CardTitle>

      <Style.CardContent>
        <LineBadge line={line} size="sm" />
        <Style.CurrentStation>{station}</Style.CurrentStation>
        <Style.Arrow />
        <Style.NextStation>{nextStation}</Style.NextStation>
      </Style.CardContent>
    </Style.Card>
  );
};

export default Bookmark;
