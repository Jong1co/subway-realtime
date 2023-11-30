import React from "react";
import { Text, View } from "react-native";
import * as Style from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  title?: JSX.Element;
  left?: JSX.Element;
  right?: JSX.Element;
};

const Header = ({ title, left, right }: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insets.top,
        backgroundColor: "white",
        borderBottomColor: "#F2F2F2",
        borderBottomWidth: 1,
      }}
    >
      <Style.Header>
        <Style.HeaderLeft>
          {left ? left : <View style={{ width: 24 }} />}
        </Style.HeaderLeft>
        {title ? title : ""}
        <Style.HeaderRight>
          {right ? right : <View style={{ width: 24 }} />}
        </Style.HeaderRight>
      </Style.Header>
    </View>
  );
};

export default Header;
