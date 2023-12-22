import { useEffect, useState } from "react";
import Header from "../components/_common/Header/Header";

import * as Style from "../components/Home/styles";
import { SvgIcon } from "../components/_common/SvgIcon/SvgIcon";
import * as Location from "expo-location";
import { useRecoilState } from "recoil";
import { locationState } from "../atom/locationState";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const useHomeHeader = () => {
  const [location] = useRecoilState(locationState);
  const navigation = useNavigation();

  useEffect(() => {
    Location.reverseGeocodeAsync(
      {
        latitude: location.coordinates.lat,
        longitude: location.coordinates.lng,
      },
      {
        useGoogleMaps: false,
      }
    )
      .then((a) => {
        // const { district, name, city } = a[0];
        navigation.setOptions({
          header: () => {
            return (
              <Header
                left={
                  <Style.HeaderTitle>
                    {a[0]?.city} {a[0]?.district}
                  </Style.HeaderTitle>
                }
                right={
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Search")}
                    activeOpacity={0.9}
                  >
                    <SvgIcon name="Search" width={24} height={24} />
                  </TouchableOpacity>
                }
              />
            );
          },
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, [location]);

  return;
};

export default useHomeHeader;
