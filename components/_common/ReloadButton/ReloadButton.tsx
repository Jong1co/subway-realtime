import React, { useEffect, useRef, useState } from "react";
import { TouchableOpacity, Animated, View, Text } from "react-native";
import * as Style from "./styles";
import useReloadButton from "../../../hooks/useReloadButton";
import {
  CountdownCircleTimer,
  useCountdown,
} from "react-native-countdown-circle-timer";
import { SvgIcon } from "../SvgIcon/SvgIcon";

type Props = {
  onPress: () => void;
};

const ReloadButton = ({ onPress }: Props) => {
  const scrolling = useRef(new Animated.Value(0)).current;
  const [isActive] = useReloadButton();

  const [on, setOn] = useState(true);

  useEffect(() => {
    if (!on) {
      setTimeout(() => {
        setOn(true);
      }, 0);
    }
  }, [on]);

  return (
    <Style.Button
      activeOpacity={1}
      onPress={() => {
        onPress();
        setOn(false);
      }}
    >
      <View style={{ position: "absolute" }}>
        <SvgIcon name="Reload" width={24} height={24} fill={"#8E2DEF"} />
      </View>
      {on && (
        <CountdownCircleTimer
          isPlaying
          duration={15}
          onComplete={() => {
            onPress();
            return { shouldRepeat: true };
          }}
          isGrowing
          size={48}
          rotation="counterclockwise"
          strokeWidth={6}
          colors={"#8E2DEF"}
          trailColor="#fff"
        >
          {({ remainingTime }) => <></>}
        </CountdownCircleTimer>
      )}
    </Style.Button>
  );
};

export default ReloadButton;
