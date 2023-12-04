import { useEffect, useState } from "react";
import useGeoLocation from "./useGeoLocation";
import { findStationByDistance } from "../utils/findStationByDistance";
import { isAvailableLine } from "../repository/data/isAvailableLine";
import { StationInfo } from "../repository/data/StationInfo";
import { StationLineInfo } from "./useFindAroundStation";
import { LineName } from "../components/_common/LineBadge/LineBadge";
import { useQueryClient } from "@tanstack/react-query";

const useAroundStationList = (distance: number = 500) => {
  const queryClient = useQueryClient();

  const { location } = useGeoLocation();
  const [stationList, setStationList] = useState<StationLineInfo[]>([]);

  const filterStationList = (lineList: StationInfo[]) => {
    return lineList.reduce((accr, curr) => {
      isAvailableLine(curr.line_num) &&
        accr.push({
          station: curr.station_nm,
          line: curr.line_num as LineName,
        });
      return accr;
    }, [] as StationLineInfo[]);
  };

  useEffect(() => {
    if (location.loaded) {
      const lineList = findStationByDistance(location.coordinates, distance);
      const filteredStationList = filterStationList(lineList);

      setStationList(filteredStationList);
    }
  }, [location.coordinates]);

  useEffect(() => {
    const cachedSubwayResponse = queryClient.getQueriesData({
      queryKey: ["subway", "home"],
    });

    if (cachedSubwayResponse.length === 0) {
      // 캐시된 것이 없을 때, 즉 첫 로딩 시
    } else {
      queryClient.invalidateQueries({ queryKey: ["subway", "home"] });
    }
  }, [stationList]);

  return { stationList };
};

export default useAroundStationList;
