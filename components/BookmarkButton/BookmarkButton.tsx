import React from "react";
import { Text } from "react-native";
import { SvgIcon } from "../_common/SvgIcon/SvgIcon";
import * as Style from "./styles";

const BookmarkButton = () => {
  return (
    <Style.Button onPress={() => {}} activeOpacity={0.8}>
      <SvgIcon name="Star" width={16} height={16} fill={"black"} />
      <Style.ButtonText>즐겨찾기</Style.ButtonText>
    </Style.Button>
  );
};

export default BookmarkButton;
