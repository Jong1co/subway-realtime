import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreens from "./screens/HomeScreen";
import { ThemeProvider } from "styled-components";
import DetailScreen from "./screens/DetailScreen";
import Router from "./router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { theme } from "./styles/theme";
import { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RecoilRoot } from "recoil";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <SafeAreaProvider>
            <Router />
          </SafeAreaProvider>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
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
