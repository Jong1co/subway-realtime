import React from "react";
import { Text } from "react-native";
import { SvgIcon } from "../_common/SvgIcon/SvgIcon";
import * as Style from "./styles";

type Props = {
  onPress: () => void;
  isActive: boolean;
};

const BookmarkButton = ({ isActive, onPress }: Props) => {
  return (
    <Style.Button isActive={isActive} onPress={onPress} activeOpacity={0.8}>
      <SvgIcon
        name={isActive ? "Star_on" : "Star"}
        width={16}
        height={16}
        fill={isActive ? "#8E2DEF" : "white"}
      />
      <Style.ButtonText isActive={isActive}>즐겨찾기</Style.ButtonText>
    </Style.Button>
  );
};

export default BookmarkButton;
