const addDirectionText = (
  stationText: string = "",
  approveLinebreak: boolean = false
) => {
  if (stationText === "") return "도착 정보 없음";

  const arrivalStation = stationText;
  const splitedArrivalStation = arrivalStation.split(" ");

  if (approveLinebreak) {
    splitedArrivalStation[0] += "\n";
  }

  splitedArrivalStation[0] += "행";

  return splitedArrivalStation.join(" ");
};

export default addDirectionText;
