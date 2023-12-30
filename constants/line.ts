import { LineId } from "../repository/data/line";
import { MColor } from "./color";

export type Line = {
  name: string;
  color: MColor;
  badge: string;
};

export const lines: Record<LineId, Line> = {
  1001: {
    name: "1호선",
    color: MColor.LINE_1,
    badge: "1",
  },
  1002: {
    name: "2호선",
    color: MColor.LINE_2,
    badge: "2",
  },
  1003: {
    name: "3호선",
    color: MColor.LINE_3,
    badge: "3",
  },
  1004: {
    name: "4호선",
    color: MColor.LINE_4,
    badge: "4",
  },
  1005: {
    name: "5호선",
    color: MColor.LINE_5,
    badge: "5",
  },
  1006: {
    name: "6호선",
    color: MColor.LINE_6,
    badge: "6",
  },
  1007: {
    name: "7호선",
    color: MColor.LINE_7,
    badge: "7",
  },
  1008: {
    name: "8호선",
    color: MColor.LINE_8,
    badge: "8",
  },
  1009: {
    name: "9호선",
    color: MColor.LINE_9,
    badge: "9",
  },
  1063: {
    name: "경의중앙선",
    color: MColor.KYUNGYEUI,
    badge: "경의중앙",
  },
  1065: {
    name: "공항철도",
    color: MColor.AIRPORT,
    badge: "공항",
  },
  1067: {
    name: "경춘선",
    color: MColor.KYOUNGCHUN,
    badge: "경춘",
  },
  1075: {
    name: "수인분당선",
    color: MColor.SUIBUNDANG,
    badge: "수인분당",
  },
  1077: {
    name: "신분당선",
    color: MColor.SINBUNDANG,
    badge: "신분당",
  },
  1081: {
    name: "경강선",
    color: MColor.KYOUNGGANG,
    badge: "경강",
  },
  1092: {
    name: "우이신설선",
    color: MColor.UISINSUL,
    badge: "우이신설",
  },
  1093: {
    name: "서해선",
    color: MColor.SEOHAE,
    badge: "서해",
  },
};

// export enum LineId {
//   LINE_1 = "1001",
//   LINE_2 = "1002",
//   LINE_3 = "1003",
//   LINE_4 = "1004",
//   LINE_5 = "1005",
//   LINE_6 = "1006",
//   LINE_7 = "1007",
//   LINE_8 = "1008",
//   LINE_9 = "1009",
//   KYUNGYEUI = "1063",
//   AIRPORT = "1065",
//   KYOUNGCHUN = "1067",
//   SUIBUNDANG = "1075",
//   SINBUNDANG = "1077",
//   KYOUNGGANG = "1081",
//   UISINSUL = "1092",
//   SEOHAE = "1093",
// }
