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

type Props = {
  open: boolean;
  onClick: () => void;
  onClose: () => void;
};

const PermissionModal = ({ open, onClick, onClose }: Props) => {
  return (
    <Modal
      visible={open}
      animationType={"fade"}
      transparent
      statusBarTranslucent
      style={{
        flex: 1,
      }}
    >
      <Style.Overlay>
        <TouchableWithoutFeedback onPress={onClose}>
          <View />
        </TouchableWithoutFeedback>
        <Style.BottomSheetContainer>
          <Style.Title>위치 권한 설정이 필요합니다.</Style.Title>
          <Style.Body>앱 설정에서 위치 정보 권한을 허가해주세요.</Style.Body>
          <View style={{ width: "100%", height: 32 }} />
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableWithoutFeedback onPress={onClick}>
              <Style.CloseButton>
                <Style.CloseButtonText>
                  권한 설정하러 가기
                </Style.CloseButtonText>
              </Style.CloseButton>
            </TouchableWithoutFeedback>
          </View>
        </Style.BottomSheetContainer>
      </Style.Overlay>
    </Modal>
  );
};

export default PermissionModal;
