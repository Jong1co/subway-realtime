import { useQueries } from "@tanstack/react-query";
import { getSubwayListByStation } from "../api/station";
import { StationList } from "../components/StationCardSection/StationCardSection";

const useStationList = (stationList: StationList, key: string) => {
  return useQueries({
    queries: [
      ...stationList?.map(({ station }) => {
        const queryKey = ["subway", key, station];
        const queryFn = () => getSubwayListByStation({ station_nm: station });
        const staleTime = 20 * 1000;

        return { queryKey, queryFn, staleTime };
      }),
    ],
    combine(result) {
      return {
        data: stationList.map((value, i) => ({
          ...value,
          subwayList: result[i]?.data || [],
        })),
        pending: result.some(({ isLoading, isFetching }) => isLoading),
        success: result.every(({ isSuccess }) => isSuccess),
        isFetching: result.some(({ isFetching, isFetched }) => isFetched),
      };
    },
  });
};

export default useStationList;
