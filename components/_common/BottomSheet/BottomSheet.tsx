import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Modal,
  PanResponder,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import * as Style from "./styles";
import { InfoRepository } from "../../../api/info";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const BottomSheet = () => {
  const info = new InfoRepository(AsyncStorage);
  const queryClient = useQueryClient();
  const { data: openBottomSheet } = useQuery({
    queryKey: ["info"],
    queryFn: info.getIsFirst,
    initialData: false,
  });

  const onClose = () => {
    queryClient.setQueryData(["info"], false);
  };

  const doNotRepeat = () => {
    info.setIsFirst();
    onClose();
  };

  const screenHeight = Dimensions.get("screen").height;
  const panY = useRef(new Animated.Value(screenHeight)).current;

  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  const resetBottomSheet = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  });

  const closeBottomSheet = Animated.timing(panY, {
    toValue: screenHeight,
    duration: 300,
    useNativeDriver: true,
  });

  const close = (onClose: VoidFunction) => {
    closeBottomSheet.start(onClose);
  };

  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: (event, gestureState) => {
        // BottomSheet에 터치 또는 드래그 이벤트가 발생할 때 실행됩니다.
        panY.setValue(gestureState.dy); // 처음 터치 영역을 기준으로 y축으로 드래그한 거리를 panY에 저장합니다.
      },
      onPanResponderRelease: (event, gestureState) => {
        // 유저가 BottomSheet 손을 뗐을 때 실행됩니다.
        if (gestureState.dy > 0 && gestureState.vy > 1.5) {
          // 유저가 y축으로 1.5 이상의 속도로 드래그 했을 때 BottomSheet가 닫히도록 조건을 지정했습니다.
          onClose();
        } else {
          // 위 조건에 부합하지 않으면 BottomSheet의 위치를 초기화 하도록 설계했습니다.
          resetBottomSheet.start();
        }
      },
    })
  ).current;

  useEffect(() => {
    if (openBottomSheet) {
      resetBottomSheet.start();
    }
  }, [openBottomSheet]);

  const notAvailableLine = [
    { color: "#987925", text: "김포골드" },
    { color: "#8BD285", text: "용인에버라인" },
    { color: "#F59A2D", text: "의정부경전철" },
  ];

  const notAvailableLine2 = [
    { color: "#F3B04C", text: "인천2호선" },
    { color: "#7EA7DD", text: "인천1호선" },
    { color: "#5071B2", text: "신림" },
  ];

  return (
    <Modal
      visible={openBottomSheet}
      animationType={"fade"}
      transparent
      statusBarTranslucent
      style={{
        flex: 1,
      }}
    >
      <Style.Overlay>
        <TouchableWithoutFeedback onPress={() => close(onClose)}>
          <View style={{ flex: 1 }} />
        </TouchableWithoutFeedback>
        <Animated.View
          style={{
            overflow: "hidden",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            transform: [{ translateY }],
          }}
          {...panResponders.panHandlers}
        >
          <Style.BottomSheetContainer>
            <Style.Title>실시간 지하철 미제공 전철 안내</Style.Title>
            <Style.Body>
              일부 지하철에서는 실시간 지하철을 제공하고 있지 않습니다.
            </Style.Body>
            <Style.Line>
              {notAvailableLine.map(({ color, text }) => (
                <Style.Badge key={text} color={color}>
                  {text}
                </Style.Badge>
              ))}
            </Style.Line>
            <Style.Line>
              {notAvailableLine2.map(({ color, text }) => (
                <Style.Badge key={text} color={color}>
                  {text}
                </Style.Badge>
              ))}
            </Style.Line>
            <View style={{ width: "100%", height: 40 }} />
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableWithoutFeedback onPress={() => close(onClose)}>
                <Style.CloseButton>
                  <Style.CloseButtonText>닫기</Style.CloseButtonText>
                </Style.CloseButton>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => close(doNotRepeat)}>
                <Style.ConfirmButton>
                  <Style.ConfirmButtonText>
                    더 이상 보지 않기
                  </Style.ConfirmButtonText>
                </Style.ConfirmButton>
              </TouchableWithoutFeedback>
            </View>
          </Style.BottomSheetContainer>
        </Animated.View>
      </Style.Overlay>
    </Modal>
  );
};

export default BottomSheet;
