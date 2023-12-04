import React from "react";
import { useRecoilState } from "recoil";
import { pullRefreshState } from "../atom/pullRefreshState";

const useRefresh = () => {
  const [refresh, setRefresh] = useRecoilState(pullRefreshState);

  const startRefresh = () => {
    setRefresh(true);
  };

  const endRefresh = () => {
    setRefresh(false);
  };

  return { refresh, startRefresh, endRefresh };
};

export default useRefresh;
