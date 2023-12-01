import React, { useRef } from "react";
import { TouchableOpacity, Animated, View, Text } from "react-native";
import * as Style from "./styles";
import useReloadButton from "../../../hooks/useReloadButton";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

type Props = {
  onPress: () => void;
};

const ReloadButton = ({ onPress }: Props) => {
  const scrolling = useRef(new Animated.Value(0)).current;
  const [isActive] = useReloadButton();

  return (
    <Style.Button activeOpacity={0.95} onPress={onPress}>
      <CountdownCircleTimer
        isPlaying
        duration={15}
        onComplete={() => {
          console.log("hi");
          return { shouldRepeat: true };
        }}
        isGrowing
        size={48}
        rotation="counterclockwise"
        strokeWidth={6}
        colors={"#8E2DEF"}
        trailColor="#fff"
        // colorsTime={[7, 5, 2, 0]}
      >
        {({ remainingTime }) => <Text>dd</Text>}
      </CountdownCircleTimer>
    </Style.Button>
  );
};

export default ReloadButton;
