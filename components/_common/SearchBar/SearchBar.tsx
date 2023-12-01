import React from "react";
import { Dimensions } from "react-native";
import * as Style from "./styles";
import { useRecoilState } from "recoil";
import useSearchText from "../../../hooks/useSearchState";

const ScreenWidth = Dimensions.get("window").width;

type Props = {
  onChange: (text: string) => void;
  text: string;
};

const SearchBar = () => {
  const [searchText, setSearchText] = useSearchText();

  return (
    <Style.SearchBar
      // autoCorrect={false}
      // blurOnSubmit={true}
      value={searchText}
      onChange={(e) => setSearchText(e.nativeEvent.text)}
      placeholder="역을 검색해보세요!"
      placeholderTextColor="black"
      width={ScreenWidth - 80}
      autoFocus
    />
  );
};

export default SearchBar;
