import React from "react";
import { Text, View } from "react-native";
import * as Style from "./styles";

const lineInfo = {
  "1호선": {
    color: "#0052A4",
    text: "1",
  },
  "2호선": {
    color: "#009D3E",
    text: "2",
  },
  "3호선": {
    color: "#EF7C1C",
    text: "3",
  },
  "4호선": {
    color: "#00A5DE",
    text: "4",
  },
  "5호선": {
    color: "#996CAC",
    text: "5",
  },
  "6호선": {
    color: "#CD7C2F",
    text: "6",
  },
  "7호선": {
    color: "#54640D",
    text: "7",
  },
  "8호선": {
    color: "#BDB092",
    text: "8",
  },
  "9호선": {
    color: "#8E764B",
    text: "9",
  },
  경의중앙선: {
    color: "#54640D",
    text: "경의중앙",
  },
  공항철도: {
    color: "#009D3E",
    text: "공항",
  },

  경춘선: {
    color: "#8E764B",
    text: "경춘",
  },
  경강선: {
    color: "#00A5DE",
    text: "경강",
  },

  수인분당선: {
    color: "#FFD400",
    text: "수인분당",
  },
  신분당선: {
    color: "#FFD400",
    text: "신분당",
  },
  우이신설선: {
    color: "#BDB092",
    text: "우이신설",
  },
  서해선: {
    color: "#0052A4",
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
