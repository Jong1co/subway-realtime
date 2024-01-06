import React from "react";
import { StationService } from "../interface/StationService";
import { LineName } from "../components/_common/LineBadge/LineBadge";

type LineInfo = {
  list: string[];
  nextStation: string;
  direction: string;
}[];

const checkRemainTime = (
  subway: StationService,
  lineInfo: LineInfo,
  line: LineName
) => {
  return (
    subway.nextStation === lineInfo[0].nextStation.split("(")[0] &&
    subway.line === line &&
    subway.isFirst
  );
};

export default checkRemainTime;
