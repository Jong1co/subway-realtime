import { seoulApi } from ".";
import { StationInfo } from "../repository/data/StationInfo";
import { RealTimeArrival } from "../repository/data/dummy";
import { StationServiceImpl } from "../service/StationServiceImpl";

export const getSubwayListByStation = async ({
  station_nm,
}: Pick<StationInfo, "station_nm">) => {
  const { data } = await seoulApi.get(
    `/realtimeStationArrival/1/20/${station_nm}`
  );

  return (data.realtimeArrivalList as RealTimeArrival[]).map(
    (realtimeArrival) => new StationServiceImpl(realtimeArrival)
  );
};
