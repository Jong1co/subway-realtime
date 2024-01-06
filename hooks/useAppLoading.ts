import { useRecoilState } from "recoil";
import { appLoadingState } from "../atom/appLoadingState";

const useAppLoading = () => {
  const [loading, setLoading] = useRecoilState(appLoadingState);

  const completeHomeLoading = () => {
    if (!loading.home) return;
    // console.log("hi");
    setLoading((prev) => ({ ...prev, home: false }));
  };

  const completeBookmarkLoading = () => {
    if (!loading.bookmark) return;

    setLoading((prev) => ({ ...prev, bookmark: false }));
  };

  return { loading, completeHomeLoading, completeBookmarkLoading };
};

export default useAppLoading;
