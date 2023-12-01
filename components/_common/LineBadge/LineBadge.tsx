import React from "react";
import * as Style from "./styles";

export const lineInfo = {
  "1호선": {
    color: "1_line",
    text: "1",
  },
  "2호선": {
    color: "2_line",
    text: "2",
  },
  "3호선": {
    color: "3_line",
    text: "3",
  },
  "4호선": {
    color: "4_line",
    text: "4",
  },
  "5호선": {
    color: "5_line",
    text: "5",
  },
  "6호선": {
    color: "6_line",
    text: "6",
  },
  "7호선": {
    color: "7_line",
    text: "7",
  },
  "8호선": {
    color: "8_line",
    text: "8",
  },
  "9호선": {
    color: "9_line",
    text: "9",
  },
  경의중앙선: {
    color: "gyeongui_line",
    text: "경의중앙",
  },
  공항철도: {
    color: "airport_line",
    text: "공항",
  },

  경춘선: {
    color: "gyeongchun_line",
    text: "경춘",
  },
  경강선: {
    color: "gyeonggang_line",
    text: "경강",
  },

  수인분당선: {
    color: "suin_line",
    text: "수인분당",
  },
  신분당선: {
    color: "shinbundang_line",
    text: "신분당",
  },
  우이신설선: {
    color: "uisinseol_line",
    text: "우이신설",
  },
  서해선: {
    color: "ssohae_line",
    text: "서해",
  },
};

console.log("==", Object.keys(lineInfo));

export type LineName = keyof typeof lineInfo;

type Props = {
  line: LineName;
  size?: "md" | "sm";
};

const LineBadge = ({ line, size = "md" }: Props) => {
  const { color, text } = lineInfo[line];
  return (
    <Style.Badge color={color} size={size}>
      <Style.BadgeText size={size}>{text}</Style.BadgeText>
    </Style.Badge>
  );
};

export default LineBadge;
