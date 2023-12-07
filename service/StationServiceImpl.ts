import { RealTimeArrival } from "../repository/data/dummy";
import { StationService } from "../interface/StationService";
import { getLineName } from "../utils/getLineName";

/**
 * 환승역일 경우와, 환승역이 아닐 경우 나눠서 구현해야함 (각각 호선의 ! 다른 환승역은 필요 없음)
 * 환승역 경우 : 구로역, 강동역 뿐
 *
 */
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
    return this.realTimeArrival.arvlCd === "0";
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

// private getDirection() {
//   if (!this.realTimeArrival.ordkey || !this.realTimeArrival.ordkey[1]) {
//     throw new Error("ordkey가 없습니다.");
//   }

//   const line = this.realTimeArrival.subwayId;
//   const direction = this.realTimeArrival.ordkey[0];
//   const arrivalStation = this.realTimeArrival.bstatnNm;

//   if (!this.lineInfo[line as keyof typeof this.lineInfo]) {
//     throw new Error("존재하지 않는 호선정보입니다.");
//   }

//   const obj: Record<string, string[]> =
//     this.lineInfo[line as keyof typeof this.lineInfo][direction as "0" | "1"];

//   const entries = Object.entries(obj);

//   //역이 한 개일 경우
//   if (entries.length === 1) {
//     return entries[0][0];
//   }

//   //역이 두 개 이상일 경우

//   const stationName = entries.find(([_, stationList]) =>
//     stationList.includes(arrivalStation.split(" ")[0])
//   );

//   if (!stationName) {
//     throw new Error("존재하지 않는 역 정보 입니다.");
//   }

//   return stationName[0];
// }

// private lineInfo = {
//   "1001": {
//     0: {
//       소요산: [
//         "소요산",
//         "동두천",
//         "양주",
//         "의정부",
//         "광운대",
//         "서울역",
//         "청량리",
//         "동묘앞",
//         "용산",
//         "영등포",
//       ],
//     },
//     1: {
//       인천: ["인천", "동인천", "부평"],
//       신창: ["구로", "서동탄", "병점", "천안", "신창", "광명"],
//     },
//   },
// };
