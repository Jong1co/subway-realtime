import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import * as Style from "./styles";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { SvgIcon } from "../SvgIcon/SvgIcon";

type Props = {
  refreshing: boolean;
  onPress: () => void;
};

const ReloadButton = ({ onPress, refreshing }: Props) => {
  const [on, setOn] = useState(true);

  useEffect(() => {
    if (refreshing) {
      setOn(false);
    }
  }, [refreshing]);

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
