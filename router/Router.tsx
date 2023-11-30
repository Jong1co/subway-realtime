import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import SearchScreen from "../screens/SearchScreen";
import { Dimensions } from "react-native";
import Header from "../components/_common/Header/Header";
import SearchBar from "../components/_common/SearchBar/SearchBar";
import { LineName } from "../components/_common/LineBadge/LineBadge";

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
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={({ navigation }) => ({
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
