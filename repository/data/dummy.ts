export type RealTimeArrival = {
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
  statnId: string;
  statnList: string;
  statnNm: string;
  statnTid: string;
  subwayHeading: any | null;
  subwayId: string;
  subwayList: string;
  subwayNm: any | null;
  totalCount: number;
  trainCo: any | null;
  trainLineNm: string;
  trnsitCo: string;
  updnLine: string;
};

const dummyData = [
  {
    arvlCd: "99",
    arvlMsg2: "4분 후 (부평구청)",
    arvlMsg3: "부평구청",
    barvlDt: "240",
    beginRow: null,
    bstatnId: "2",
    bstatnNm: "도봉산",
    btrainNo: "7206",
    btrainSttus: "일반",
    curPage: null,
    endRow: null,
    ordkey: "01002도봉산0",
    pageRow: null,
    recptnDt: "2023-11-22 13:56:48",
    rowNum: 1,
    selectedCount: 4,
    statnFid: "1007000758",
    statnId: "1007000757",
    statnList: "1007000757",
    statnNm: "삼산체육관",
    statnTid: "1007000756",
    subwayHeading: null,
    subwayId: "1007",
    subwayList: "1007",
    subwayNm: null,
    totalCount: 4,
    trainCo: null,
    trainLineNm: "도봉산행 - 상동방면",
    trnsitCo: "1",
    updnLine: "상행",
  },
  {
    arvlCd: "99", // 도착 코드
    arvlMsg2: "16분 후 (석남)",
    arvlMsg3: "석남",
    barvlDt: "960",
    beginRow: null,
    bstatnId: "2",
    bstatnNm: "도봉산",
    btrainNo: "7210",
    btrainSttus: "일반",
    curPage: null,
    endRow: null,
    ordkey: "02004도봉산",
    pageRow: null,
    recptnDt: "2023-11-22 13:56:48",
    rowNum: 2,
    selectedCount: 4,
    statnFid: "1007000758",
    statnId: "1007000757",
    statnList: "1007000757",
    statnNm: "삼산체육관",
    statnTid: "1007000756",
    subwayHeading: null,
    subwayId: "1007",
    subwayList: "1007",
    subwayNm: null,
    totalCount: 4,
    trainCo: null,
    trainLineNm: "도봉산행 - 상동방면",
    trnsitCo: "1",
    updnLine: "상행",
  },
  {
    arvlCd: "99",
    arvlMsg2: "3분 후 (부천시청)",
    arvlMsg3: "부천시청",
    barvlDt: "180",
    beginRow: null,
    bstatnId: "53",
    bstatnNm: "석남",
    btrainNo: "7195",
    btrainSttus: "일반",
    curPage: null,
    endRow: null,
    ordkey: "11002석남0",
    pageRow: null,
    recptnDt: "2023-11-22 13:56:38",
    rowNum: 3,
    selectedCount: 4,
    statnFid: "1007000756",
    statnId: "1007000757",
    statnList: "1007000757",
    statnNm: "삼산체육관",
    statnTid: "1007000758",
    subwayHeading: null,
    subwayId: "1007",
    subwayList: "1007",
    subwayNm: null,
    totalCount: 4,
    trainCo: null,
    trainLineNm: "석남행 - 굴포천방면",
    trnsitCo: "1",
    updnLine: "하행",
  },
  {
    arvlCd: "99",
    arvlMsg2: "17분 후 (천왕)",
    arvlMsg3: "천왕",
    barvlDt: "1020",
    beginRow: null,
    bstatnId: "53",
    bstatnNm: "석남",
    btrainNo: "7199",
    btrainSttus: "일반",
    curPage: null,
    endRow: null,
    ordkey: "12008석남0",
    pageRow: null,
    recptnDt: "2023-11-22 13:56:38",
    rowNum: 4,
    selectedCount: 4,
    statnFid: "1007000756",
    statnId: "1007000757",
    statnList: "1007000757",
    statnNm: "삼산체육관",
    statnTid: "1007000758",
    subwayHeading: null,
    subwayId: "1007",
    subwayList: "1007",
    subwayNm: null,
    totalCount: 4,
    trainCo: null,
    trainLineNm: "석남행 - 굴포천방면",
    trnsitCo: "1",
    updnLine: "하행",
  },
];
