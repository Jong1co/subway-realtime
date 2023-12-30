import { RealTimeArrival } from "../repository/data/dummy";
import { StationService } from "../interface/StationService";
import { getLineName } from "../utils/getLineName";

export class StationServiceImpl implements StationService {
  constructor(private realTimeArrival: RealTimeArrival) {}

  private getArrivalTime() {
    const seconds = Number(this.realTimeArrival.barvlDt || "0");

    return Math.floor(seconds / 60);
  }

  private getNextStation() {
    return this.realTimeArrival.trainLineNm
      .split(" ")[2]
      .replace(/\([^)]*\)/g, "")
      .replace("방면", "");
  }

  private getCurrentStation() {
    return this.realTimeArrival.arvlMsg3;
  }

  private getLastStation() {
    return this.realTimeArrival.bstatnNm.replaceAll(/\([^)]*\)/g, "");
  }

  get line() {
    return getLineName(this.realTimeArrival.subwayId);
  }

  get isExpress() {
    return this.realTimeArrival.btrainSttus === "급행";
  }

  get isSuperExpress() {
    return this.realTimeArrival.btrainSttus === "특급";
  }

  get nextStation() {
    return this.getNextStation();
  }

  // 도착까지 남은 시간을 분 단위로 반환
  // Todo: 내림할지 올림할지 반올림할지는 아직 미정
  get arrivalTime() {
    return this.getArrivalTime();
  }

  get arrivalState() {
    return this.realTimeArrival.arvlMsg2;
  }

  get isFirst() {
    return this.realTimeArrival.ordkey[1] === "1";
  }

  get currentStation() {
    return this.getCurrentStation();
  }

  get lastStation() {
    return this.getLastStation();
  }

  get isUphill() {
    return (
      this.realTimeArrival.updnLine === "상행" ||
      this.realTimeArrival.updnLine === "외선"
    );
  }
}
