import { ThemeProvider } from "styled-components";
import Router from "./router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { theme } from "./styles/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RecoilRoot } from "recoil";
import { StatusBar } from "expo-status-bar";
import AppLoadingContext from "./context/AppLoadingContext";
import { StrictMode, useEffect } from "react";
import mobileAds, {
  TestIds,
  useInterstitialAd,
  BannerAd,
  BannerAdSize,
} from "react-native-google-mobile-ads";
import CodePush, { CodePushOptions } from "react-native-code-push";
import { APP_AD } from "@env";

const adUnitId = __DEV__ ? String(TestIds.ADAPTIVE_BANNER) : APP_AD;

mobileAds()
  .initialize()
  .then((adapterStatuses) => {
    // console.log(adapterStatuses);
  });
function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <SafeAreaProvider>
              <AppLoadingContext>
                <Router />
                <StatusBar style="inverted" />
              </AppLoadingContext>
            </SafeAreaProvider>
          </ThemeProvider>
        </RecoilRoot>
      </QueryClientProvider>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      />
    </>
  );
}

export default App;
/**
 * 기능 정의
 * -- 1. 보여주기 기능
 * 1. 현재 위치를 기준으로 가까운 역을 찾는다.
 * 2. 해당 역에 접근하는 지하철의 정보를 가져온다.
 * --
 *
 * -- 2. 즐겨찾기 기능
 *
 *
 * --
 *
 * -- 3. 검색 기능
 *
 * --
 *
 * -- 4. 노선 전체 보기 기능
 *
 * --
 */
