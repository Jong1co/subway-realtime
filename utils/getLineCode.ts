export const getLineCode = (lineName: string) => {
  switch (lineName) {
    case "1호선":
      return "1001";
    case "2호선":
      return "1002";
    case "3호선":
      return "1003";
    case "4호선":
      return "1004";
    case "5호선":
      return "1005";
    case "6호선":
      return "1006";
    case "7호선":
      return "1007";
    case "8호선":
      return "1008";
    case "9호선":
      return "1009";
    case "경의중앙선":
      return "1063";
    case "공항철도":
      return "1065";
    case "경춘선":
      return "1067";
    case "수인분당선":
      return "1075";
    case "신분당선":
      return "1077";
    case "의정부경전철":
      return "1078";
    case "우이신설선":
      return "1079";
    case "경강선":
      return "1081";
    case "서해선":
      return "1082";
    default:
      return "호선 정보 없음";
  }
};
