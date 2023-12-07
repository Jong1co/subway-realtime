const addDirectionText = (stationText: string = "") => {
  if (stationText === "") return "도착 정보 없음";

  const arrivalStation = stationText;
  const splitedArrivalStation = arrivalStation.split(" ");
  splitedArrivalStation[0] += "행";

  return splitedArrivalStation.join(" ");
};

export default addDirectionText;
