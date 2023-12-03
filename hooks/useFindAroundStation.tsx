import { useEffect, useState } from "react";
import { Coordinate } from "../utils/calculateDistance";
import { LineName } from "../components/_common/LineBadge/LineBadge";
import * as Location from "expo-location";
import { findStationByDistance } from "../utils/findStationByDistance";
import { isAvailableLine } from "../repository/data/isAvailableLine";
import { StationInfo } from "../repository/data/StationInfo";
import Header from "../components/_common/Header/Header";
import { useNavigation } from "@react-navigation/native";
import { SvgIcon } from "../components/_common/SvgIcon/SvgIcon";
import { TouchableOpacity } from "react-native";
import * as Style from "../components/Home/styles";

type StationLineInfo = { station: string; line: LineName };

const useFindAroundStation = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState<Coordinate>({
    lat: 0,
    lng: 0,
  });

  const [distance, setDistance] = useState<number>(500);
  const [refresh, setRefresh] = useState(true);

  const [stationList, setStationList] = useState<StationLineInfo[]>([]);

  const refreshLocation = () => {
    setRefresh(true);
  };

  const increaseDistance = () => {
    if (distance >= 2000) return;

    setDistance((prev) => prev * 2);
  };

  const requestPermission = async () => {
    const permission = await Location.requestForegroundPermissionsAsync();

    if (!permission.granted) {
      alert("위치 권한을 허용해주세요.");
      return;
    }

    return Location.getCurrentPositionAsync().then(({ coords }) => {
      console.log(coords);
      setLocation({
        lat: 37.506411,
        lng: 126.742153,
      });
    });
  };

  useEffect(() => {
    if (!refresh) return;
    requestPermission();
  }, [distance, refresh]);

  useEffect(() => {
    navigation.setOptions({
      header: () => {
        return (
          <Header
            left={<Style.HeaderTitle>부평구 부개동</Style.HeaderTitle>}
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
  }, [location]);

  useEffect(() => {
    if (location.lat === 0 && location.lng === 0) return;
    const lineList = findStationByDistance(location, distance);

    const result = lineList.reduce((accr, curr) => {
      isAvailableLine(curr.line_num) && accr.push(curr);
      return accr;
    }, [] as StationInfo[]);

    setRefresh(false);

    setStationList(
      result.map((v) => ({
        station: v.station_nm,
        line: v.line_num,
      })) as StationLineInfo[]
    );

    // setStationList([
    //   { line: "1호선", station: "구로" },
    //   { line: "1호선", station: "신도림" },
    //   { line: "1호선", station: "영등포" },
    // ]);
  }, [location]);

  return { refreshLocation, stationList, increaseDistance, refresh };
};

export default useFindAroundStation;
