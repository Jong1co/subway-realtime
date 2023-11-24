import React from "react";
import { Text, View } from "react-native";
import * as Style from "./styles";

type Props = {
  title: string;
  distance: string;
};

const Header = ({ title, distance }: Props) => {
  return (
    <Style.HeaderLeft>
      <Style.Title>{title}</Style.Title>
      <Style.DistanceBadge>
        <View
          style={{
            width: 16,
            height: 16,
            backgroundColor: "lightgray",
            borderRadius: 4,
          }}
        />
        <Style.DistanceBadgeText>{distance} 근처</Style.DistanceBadgeText>
      </Style.DistanceBadge>
    </Style.HeaderLeft>
  );
};

export default Header;
