import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import useGeoLocation from "./useGeoLocation";
import { findStationByDistance } from "../utils/findStationByDistance";
import { isAvailableLine } from "../repository/data/isAvailableLine";
import { StationInfo } from "../repository/data/StationInfo";
import { StationLineInfo } from "./useFindAroundStation";
import { LineName } from "../components/_common/LineBadge/LineBadge";
import { useQueryClient } from "@tanstack/react-query";

const useAroundStationList = (
  distance: number = 500,
  setDistance: Dispatch<SetStateAction<number>>
) => {
  const [isLoading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  const { location } = useGeoLocation();
  const [stationList, setStationList] = useState<StationLineInfo[] | null>(
    null
  );

  // console.log(stationList);

  const filterStationList = useCallback((lineList: StationInfo[]) => {
    return lineList.reduce((accr, curr) => {
      isAvailableLine(curr.line_num as LineName) &&
        accr.push({
          station: curr.station_nm,
          line: curr.line_num as LineName,
        });
      return accr;
    }, [] as StationLineInfo[]);
  }, []);

  useEffect(() => {
    if (location.loaded) {
      let newDistance = distance;
      let lineList = findStationByDistance(location.coordinates, newDistance);
      let filteredStationList = filterStationList(lineList);

      while (filteredStationList.length === 0 && newDistance < 2000) {
        lineList = findStationByDistance(location.coordinates, newDistance);
        filteredStationList = filterStationList(lineList);
        if (filteredStationList.length === 0) {
          newDistance *= 2;
        }
      }

      setDistance(newDistance);
      setStationList(filteredStationList);
    }
  }, [location.coordinates, distance]);

  useEffect(() => {
    const cachedSubwayResponse = queryClient.getQueriesData({
      queryKey: ["subway", "home"],
    });

    if (cachedSubwayResponse.length === 0) {
      // 캐시된 것이 없을 때, 즉 첫 로딩 시
    } else {
      queryClient.invalidateQueries({ queryKey: ["subway", "home"] });
      setLoading(false);
    }
  }, [stationList]);

  return { stationList, isLoading, setLoading };
};

export default useAroundStationList;
