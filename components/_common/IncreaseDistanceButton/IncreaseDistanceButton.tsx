import React from "react";
import { ActivityIndicator, View } from "react-native";
import * as Style from "./styles";
import { SvgIcon } from "../SvgIcon/SvgIcon";

type Props = {
  increaseDistance: () => void;
  isLoading: boolean;
  setLoading: VoidFunction;
};

const IncreaseDistanceButton = ({
  increaseDistance,
  isLoading,
  setLoading,
}: Props) => {
  return (
    <Style.ButtonContainer
      activeOpacity={0.9}
      onPress={() => {
        setLoading();
        increaseDistance();
      }}
    >
      {isLoading ? (
        <View style={{ width: 16, height: 16, overflow: "hidden" }}>
          <ActivityIndicator size={16} color={"white"} animating />
        </View>
      ) : (
        <SvgIcon name="Search" fill={"white"} width={16} height={16} />
      )}
      <Style.ButtonText>근처 다른 역 더보기</Style.ButtonText>
    </Style.ButtonContainer>
  );
};

export default IncreaseDistanceButton;
