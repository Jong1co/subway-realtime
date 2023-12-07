import { LineName } from "../../components/_common/LineBadge/LineBadge";

const availableLine = {
  "1호선": true,
  "2호선": true,
  "3호선": true,
  "4호선": true,
  "5호선": true,
  "6호선": true,
  "7호선": true,
  "8호선": true,
  "9호선": true,
  경의중앙선: true,
  공항철도: true,
  경춘선: true,
  경강선: true,
  수인분당선: true,
  신분당선: true,
  우이신설선: true,
  서해선: true,
};

export const isAvailableLine = (lineName: LineName) => {
  return availableLine[lineName] ?? false;
};
