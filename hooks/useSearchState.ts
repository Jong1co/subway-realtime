import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { searchState } from "../atom/searchState";
import { useNavigation } from "@react-navigation/native";

const useSearchText = (): [string, Dispatch<SetStateAction<string>>] => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useRecoilState(searchState);

  useEffect(() => {
    if (navigation.getState().routes[0].name === "Home") {
      setSearchText("");
    }
  }, []);

  return [searchText, setSearchText];
};

export default useSearchText;
