import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import { TouchableOpacity } from "react-native";
import SearchScreen from "../screens/SearchScreen";
import { Dimensions } from "react-native";
import Header from "../components/_common/Header/Header";
import SearchBar from "../components/_common/SearchBar/SearchBar";
import { LineName } from "../components/_common/LineBadge/LineBadge";
import { HeaderTitle } from "../components/_common/Header/HeaderTitle";

export type RootStackParamList = {
  Home: undefined;
  Detail: { station: string; lines: LineName[] };
  Search: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShadowVisible: true,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "",
            headerShadowVisible: true,
            headerTitleStyle: {},
          })}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({}) => ({
            header: ({ navigation, route }) => {
              const station = (route.params as any)?.station || "";
              return (
                <Header
                  left={
                    <TouchableOpacity
                      onPress={() => navigation.goBack()}
                      style={{
                        width: 24,
                        height: 24,
                        backgroundColor: "gray",
                      }}
                    />
                  }
                  title={<HeaderTitle>{station}</HeaderTitle>}
                />
              );
            },
          })}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={() => ({
            header: ({ navigation }) => {
              return (
                <Header
                  left={
                    <TouchableOpacity
                      onPress={() => navigation.goBack()}
                      style={{ width: 24, height: 24, backgroundColor: "gray" }}
                    />
                  }
                  title={<SearchBar />}
                />
              );
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
