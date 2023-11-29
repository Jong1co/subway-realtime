import React from "react";
import * as Style from "./styles";
import LineBadge from "../_common/LineBadge/LineBadge";

type Props = {
  arrivalStation: string;
  arrivalTime: string;
  line: string;
  currentStation: string;
  direction: string;
};

const Bookmark = ({
  direction,
  arrivalStation,
  arrivalTime,
  line,
  currentStation,
}: Props) => {
  return (
    <Style.Card>
      <Style.CardTitle>
        <Style.DirectionWrapper>
          <Style.Icon />
          <Style.Direction>{arrivalStation}</Style.Direction>
        </Style.DirectionWrapper>
        <Style.ArrivalTime>{arrivalTime}</Style.ArrivalTime>
      </Style.CardTitle>

      <Style.CardContent>
        <LineBadge line={line} size="sm" />
        <Style.CurrentStation>{currentStation}</Style.CurrentStation>
        <Style.Arrow />
        <Style.NextStation>{direction}</Style.NextStation>
      </Style.CardContent>
    </Style.Card>
  );
};

export default Bookmark;
