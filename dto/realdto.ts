import { UpDown } from "../constants/const";
import { Line, lines } from "../constants/line";
import { LineId } from "../repository/data/line";

export type Real = {
  //도착 코드: (0:진입, 1:도착, 2:출발, 3:전역출발, 4:전역진입, 5:전역도착, 99:운행중)
  arvlCd: "0" | "1" | "2" | "3" | "4" | "99";
  //도착 메세지: (도착, 진입, 출발)
  arvlMsg2: string;
  //도착 메세지: (종합운동장 도착, 12분 후(광명사거리))
  arvlMsg3: string;
  barvlDt: string;
  beginRow: any | null;
  bstatnId: string;
  //종착지하철역 명
  bstatnNm: string;
  btrainNo: string;
  //열차 종류(급행, 일반, 특급)
  btrainSttus: string;
  curPage: any | null;
  endRow: any | null;
  ordkey: string;
  pageRow: any | null;
  recptnDt: string;
  rowNum: number;
  selectedCount: number;
  statnFid: string;
  statnTid: string;
  statnId: string;
  statnList: string;
  statnNm: string;
  subwayHeading: any | null;
  subwayId: LineId;
  subwayList: string;
  subwayNm: any | null;
  totalCount: number;
  trainCo: any | null;
  trainLineNm: string;
  trnsitCo: string;
  updnLine: string;
};

export class RealDTO {
  constructor(private real: Real) {}

  get lineId() {
    return this.real.subwayId;
  }

  get nextId() {
    return this.real.statnTid;
  }

  get prevId() {
    return this.real.statnFid;
  }

  get lastId() {
    return this.real.bstatnId;
  }

  get updown(): UpDown {
    return this.real.updnLine === "상행" || this.real.updnLine === "외선"
      ? UpDown.UP
      : UpDown.DN;
  }

  get express(): boolean {
    return this.real.btrainSttus === "급행";
  }

  get superExpress(): boolean {
    return this.real.btrainSttus === "특급";
  }

  get line(): Line {
    return lines[this.real.subwayId];
  }
}
