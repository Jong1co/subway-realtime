import { StationInfo, stationInfo } from "../repository/data/StationInfo";
import { Coordinate, calculateDistance } from "./calculateDistance";

export function findStationByDistance(
  currentPosition: Coordinate,
  distance: number
): StationInfo[] {
  const stationList = [];

  for (const id in stationInfo) {
    // console.log(id);
    const station = stationInfo[id];

    const calculatedDistance = calculateDistance(
      currentPosition,
      station.coordinate
    );

    if (calculatedDistance < distance) {
      stationList.push(station);
    }
  }

  return stationList;
}
