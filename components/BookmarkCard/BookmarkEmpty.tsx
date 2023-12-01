import React from "react";
import * as Style from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../router/Router";

type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const BookmarkEmpty = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <Style.EmptyCard onPress={() => navigation.navigate("Search")}>
      <Style.EmptyText>즐겨찾는 역을 설정해보세요!</Style.EmptyText>
    </Style.EmptyCard>
  );
};

export default BookmarkEmpty;
