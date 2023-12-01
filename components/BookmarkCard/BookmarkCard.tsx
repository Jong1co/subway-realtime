import React from "react";
import * as Style from "./styles";
import LineBadge from "../_common/LineBadge/LineBadge";
import { BookmarkInfo } from "../BookmarkSection/BookmarkSection";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../router/Router";
import { SvgIcon } from "../_common/SvgIcon/SvgIcon";

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
          <SvgIcon name="Star_on" width={16} height={16} />
          <Style.Direction>{arrivalStation}</Style.Direction>
        </Style.DirectionWrapper>
        <Style.ArrivalTime>{arrivalTime}</Style.ArrivalTime>
      </Style.CardTitle>

      <Style.CardContent>
        <LineBadge line={line} size="sm" />
        <Style.CurrentStation>{station}</Style.CurrentStation>
        <SvgIcon name="DoubleArrow" width={16} height={16} />
        <Style.NextStation>{nextStation}</Style.NextStation>
      </Style.CardContent>
    </Style.Card>
  );
};

export default Bookmark;
