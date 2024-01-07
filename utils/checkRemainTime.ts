import React from "react";
import { StationService } from "../interface/StationService";
import { LineName } from "../components/_common/LineBadge/LineBadge";

type LineInfo = {
  list: string[];
  nextStation: string;
  direction: string;
}[];

const checkDirection = (
  subway: StationService,
  lineInfo: LineInfo,
  line: LineName,
  station: string
) => {
  if (station !== "구로") {
    const isUphill =
      lineInfo[0].direction === "상행" || lineInfo[0].direction === "외선";
    return (
      subway.line === line && subway.isFirst && subway.isUphill === isUphill
    );
  }

  return (
    subway.nextStation === lineInfo[0].nextStation.split("(")[0] &&
    subway.line === line &&
    subway.isFirst
  );
};

export default checkDirection;
