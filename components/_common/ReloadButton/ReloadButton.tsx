import React, { useEffect, useState } from "react";
import { View } from "react-native";
import * as Style from "./styles";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { SvgIcon } from "../SvgIcon/SvgIcon";
import { Shadow } from "react-native-shadow-2";

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
      <View
        style={{
          position: "absolute",
          zIndex: 1,
        }}
      >
        <SvgIcon
          name="Reload"
          width={24}
          height={24}
          fill={"#8E2DEF"}
          // style={{ backgroundColor: "white" }}
        />
      </View>
      {on && (
        <Shadow
          startColor={"#0000000D"}
          endColor={"#00000000"}
          distance={5}
          offset={[1, 2]}
          style={{
            shadowOpacity: 0.2,
            shadowRadius: 4,
            borderRadius: 24,
            shadowColor: "#8E2DEF",
            backgroundColor: "#fff",
            shadowOffset: {
              width: 0,
              height: 4,
            },
          }}
        >
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
        </Shadow>
      )}
    </Style.Button>
  );
};

export default ReloadButton;
