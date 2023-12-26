import convertLongStationName from "./convertLongStationName";

const addDirectionText = (
  stationText: string = "",
  approveLinebreak: boolean = false
) => {
  if (stationText === "") return "도착 정보 없음";

  const arrivalStation = stationText;
  let splitedArrivalStation = arrivalStation.split(" ");

  if (approveLinebreak) {
    splitedArrivalStation[0] += "\n";
  }

  splitedArrivalStation[0] = convertLongStationName(splitedArrivalStation[0]);
  splitedArrivalStation[0] += "행";

  return splitedArrivalStation[0];
};

export default addDirectionText;
