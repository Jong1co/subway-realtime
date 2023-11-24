import React from "react";
import { Text, View } from "react-native";
import * as Style from "./styles";

const lineInfo = {
  "1호선": {
    color: "#0052A4",
    text: "1",
  },
  "7호선": {
    color: "#54640D",
    text: "7",
  },
};

type Props = {
  line_num: string;
  size?: "md" | "sm";
};

const LineBadge = ({ line_num, size = "md" }: Props) => {
  const { color, text } = lineInfo[line_num];
  return (
    <Style.Badge color={color} size={size}>
      <Style.BadgeText size={size}>{text}</Style.BadgeText>
    </Style.Badge>
  );
};

export default LineBadge;
