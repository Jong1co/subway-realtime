const availableLine: string[] = [
  "1호선",
  "2호선",
  "3호선",
  "4호선",
  "5호선",
  "6호선",
  "7호선",
  "8호선",
  "9호선",
  "경의중앙선",
  "공항철도",
  "경춘선",
  "경강선",
  "수인분당선",
  "신분당선",
  "우이신설선",
  "서해선",
];

export const isAvailableLine = (lineName: string) => {
  return availableLine.includes(lineName);
};
