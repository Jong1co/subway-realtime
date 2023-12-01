import { LineName } from "../components/_common/LineBadge/LineBadge";
import { stationInfo } from "../repository/data/StationInfo";
import { isAvailableLine } from "../repository/data/isAvailableLine";

const getAvailableStationList = () => {
  const hash = Object.entries(stationInfo).reduce((accr, [id, station]) => {
    const { station_nm, line_num } = station;
    // 이용 불가능한 노선은 제외
    if (!isAvailableLine(line_num)) return accr;

    accr[station_nm]
      ? accr[station_nm].push(line_num as LineName)
      : (accr[station_nm] = [line_num as LineName]);

    return accr;
  }, {} as { [station in string]: LineName[] });

  return Object.entries(hash).map(([station, lines]) => {
    lines.sort();
    return { station, lines };
  });
};

export default getAvailableStationList;
