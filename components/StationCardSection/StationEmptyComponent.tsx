import React from "react";
import * as Style from "./styles";
import { SvgIcon } from "../_common/SvgIcon/SvgIcon";
import { useNavigation } from "@react-navigation/native";

const StationEmptyComponent = () => {
  const navigation = useNavigation();

  return (
    <Style.EmptyContainer>
      <Style.EmptyText>주변 2km 안에 역이 없습니다!</Style.EmptyText>
      <Style.SearchButton
        activeOpacity={0.9}
        onPress={() => navigation.navigate("Search")}
      >
        <SvgIcon name="Search" size={16} fill={"white"} />
        <Style.ButtonText>다른 역 검색하러 가기</Style.ButtonText>
      </Style.SearchButton>
    </Style.EmptyContainer>
  );
};

export default StationEmptyComponent;
