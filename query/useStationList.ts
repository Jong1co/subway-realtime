import { useQueries } from "@tanstack/react-query";
import { getSubwayListByStation } from "../api/station";
import { StationList } from "../components/StationCardSection/StationCardSection";

const useStationList = (stationList: StationList) => {
  return useQueries({
    queries: [
      ...stationList?.map(({ station }) => {
        const queryKey = ["subway", station];
        const queryFn = () => getSubwayListByStation({ station_nm: station });
        const staleTime = Infinity;

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
      };
    },
  });
};

export default useStationList;
