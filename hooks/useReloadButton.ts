import { useRecoilState } from "recoil";
import { reloadButtonState } from "../atom/reloadButtonState";

const useReloadButton = (): [boolean, (height: number) => void] => {
  const [isActive, setIsActive] = useRecoilState(reloadButtonState);

  const onScroll = (height: number) => {
    if (height > 50) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return [isActive, onScroll];
};

export default useReloadButton;
