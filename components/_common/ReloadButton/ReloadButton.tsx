import React, { useEffect, useState } from "react";
import { View } from "react-native";
import * as Style from "./styles";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { SvgIcon } from "../SvgIcon/SvgIcon";

type Props = {
  pause: boolean;
  onPress: () => void;
};

const ReloadButton = ({ onPress, pause }: Props) => {
  const [on, setOn] = useState(true);

  useEffect(() => {
    if (!pause) {
      setOn(false);
      setTimeout(() => {
        setOn(true);
      }, 0);
    }
  }, [pause]);

  return (
    <Style.Button
      activeOpacity={1}
      onPress={() => {
        onPress();
      }}
    >
      <View style={{ position: "absolute" }}>
        <SvgIcon name="Reload" width={24} height={24} fill={"#8E2DEF"} />
      </View>
      {on && (
        <CountdownCircleTimer
          isPlaying={!pause}
          duration={15}
          onComplete={() => {
            // onPress();
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
