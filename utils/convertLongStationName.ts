import React from "react";

const longName = {
  동대문역사문화공원: "동대문\n역사문화공원",
  디지털미디어시티: "디지털\n미디어시티",
  남한산성입구: "남한산성\n입구",
  성신여대입구: "성신여대\n입구",
  인천공항1터미널: "인천공항\n1터미널",
  인천공항2터미널: "인천공항\n2터미널",
  공항화물청사: "공항화물\n청사",
  양재시민의숲: "양재\n시민의숲",
};

type LongName = keyof typeof longName;

const convertLongStationName = (station: string) => {
  station = station.split("(")[0];

  if (longName[station as LongName]) {
    return longName[station as LongName];
  }

  return station;
};

export default convertLongStationName;
