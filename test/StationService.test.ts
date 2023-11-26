import { RealTimeArrival, dummyData_1_line } from "../repository/data/dummy";
import { StationService } from "../interface/StationService";
import { StationServiceImpl } from "../service/StationServiceImpl";

describe("실시간 지하철 정보 (방향)", () => {
  let stationService: StationService;

  //삼산체육관이 주어졌을 때임
  let realTimeArrival: RealTimeArrival[] = dummyData_1_line;

  beforeEach(() => {});

  it("1호선 - 상행이고, 용산행일 경우 '소요산'을 반환해야 한다.", () => {
    stationService = new StationServiceImpl(realTimeArrival[0]);
    expect(stationService.direction).toBe("소요산");
  });

  it("1호선 - 상행이고, 청량리행일 경우 '소요산'을 반환해야 한다.", () => {
    stationService = new StationServiceImpl(realTimeArrival[1]);
    expect(stationService.direction).toBe("소요산");
  });

  it("1호선 - 상행이고, 광운대행일 경우 '소요산'을 반환해야 한다.", () => {
    stationService = new StationServiceImpl(realTimeArrival[2]);
    expect(stationService.direction).toBe("소요산");
  });

  it("1호선 - 하행이고, 천안행일 경우 '신창'을 반환해야 한다.", () => {
    stationService = new StationServiceImpl(realTimeArrival[4]);
    expect(stationService.direction).toBe("신창");
  });

  it("1호선 - 하행이고, 서동탄일 경우 '신창'을 반환해야 한다.", () => {
    stationService = new StationServiceImpl(realTimeArrival[5]);
    expect(stationService.direction).toBe("신창");
  });

  it("1호선 - 하행이고, 광명행일 경우 '신창'을 반환해야 한다.", () => {
    stationService = new StationServiceImpl(realTimeArrival[6]);
    expect(stationService.direction).toBe("신창");
  });

  it("1호선 - 하행이고, 신창행일 경우 '신창'을 반환해야 한다.", () => {
    stationService = new StationServiceImpl(realTimeArrival[7]);
    expect(stationService.direction).toBe("신창");
  });
});

describe("실시간 지하철 정보 (남은 시간)", () => {
  let stationService: StationService;

  //삼산체육관이 주어졌을 때임
  let realTimeArrival: RealTimeArrival[] = dummyData_1_line;

  beforeEach(() => {});

  it("남은 시간(barvlDt)이 0일 경우, 0을 반환", () => {
    stationService = new StationServiceImpl({
      ...realTimeArrival[0],
      barvlDt: "0",
    });

    expect(stationService.arrivalTime).toBe(0);
  });

  it("남은 시간(barvlDt)이 60일 경우, 1을 반환", () => {
    stationService = new StationServiceImpl({
      ...realTimeArrival[0],
      barvlDt: "60",
    });

    expect(stationService.arrivalTime).toBe(1);
  });

  it("남은 시간(barvlDt)이 61일 경우, 1을 반환", () => {
    stationService = new StationServiceImpl({
      ...realTimeArrival[0],
      barvlDt: "61",
    });

    expect(stationService.arrivalTime).toBe(1);
  });

  it("남은 시간(barvlDt)이 179일 경우, 2을 반환", () => {
    stationService = new StationServiceImpl({
      ...realTimeArrival[0],
      barvlDt: "179",
    });

    expect(stationService.arrivalTime).toBe(2);
  });
});

// [
//   {
//     arvlCd: "99", // 도착 코드: (0:진입, 1:도착, 2:출발, 3:전역출발, 4:전역진입, 5:전역도착, 99:운행중)
//     arvlMsg2: "16분 후 (석남)",
//     arvlMsg3: "석남",
//     barvlDt: "960", //열차도착예정시간 (단위:초)
//     beginRow: null,
//     bstatnId: "2",
//     bstatnNm: "도봉산", //종착지하철역 명
//     btrainNo: "7210", //열차 번호
//     btrainSttus: "일반", // 열차 종류 (급행,ITX,일반,특급)
//     curPage: null,
//     endRow: null,
//     // (상하행코드(1자리), 순번(첫번째, 두번째 열차 , 1자리),
//     // 첫번째 도착예정 정류장 - 현재 정류장(3자리),
//     // 두번째 한자리는 순번 (1: 첫번째 열차, 2: 두번째 열차)
//     // 상하행 (0: 상행/내선, 1: 하행/외선)
//     // 목적지 정류장, 급행여부(1자리))
//     ordkey: "02004도봉산",
//     pageRow: null,
//     recptnDt: "2023-11-22 13:56:48",
//     rowNum: 2,
//     selectedCount: 4,
//     statnFid: "1007000758",
//     statnId: "1007000757",
//     statnList: "1007000757",
//     statnNm: "삼산체육관",
//     statnTid: "1007000756",
//     subwayHeading: null,
//     subwayId: "1007",
//     subwayList: "1007",
//     subwayNm: null,
//     totalCount: 4,
//     trainCo: null,
//     trainLineNm: "도봉산행 - 상동방면",
//     trnsitCo: "1",
//     updnLine: "상행",
//   },
// ];

describe("실시간 지하철 정보 (다음 역)", () => {
  let stationService: StationService;

  //삼산체육관이 주어졌을 때임
  let realTimeArrival: RealTimeArrival[] = dummyData_1_line;

  it("1호선 - 상행이고, 용산행일 경우 '신도림방면'을 반환해야 한다.", () => {
    stationService = new StationServiceImpl(realTimeArrival[0]);
    expect(stationService.nextStation).toBe("신도림방면");
  });

  it("1호선 - 상행이고, 청량리행일 경우 '신도림방면'을 반환해야 한다.", () => {
    stationService = new StationServiceImpl(realTimeArrival[1]);
    expect(stationService.nextStation).toBe("신도림방면");
  });

  it("1호선 - 상행이고, 광운대행일 경우 '신도림방면'을 반환해야 한다.", () => {
    stationService = new StationServiceImpl(realTimeArrival[2]);
    expect(stationService.nextStation).toBe("신도림방면");
  });

  // it("1호선 - 하행이고, 천안행일 경우 '구'을 반환해야 한다.", () => {
  //   stationService = new StationServiceImpl(realTimeArrival[4]);
  //   expect(stationService.nextStation).toBe("구");
  // });

  // it("1호선 - 하행이고, 서동탄일 경우 '구'을 반환해야 한다.", () => {
  //   stationService = new StationServiceImpl(realTimeArrival[5]);
  //   expect(stationService.nextStation).toBe("구");
  // });

  // it("1호선 - 하행이고, 광명행일 경우 '구'을 반환해야 한다.", () => {
  //   stationService = new StationServiceImpl(realTimeArrival[6]);
  //   expect(stationService.nextStation).toBe("구");
  // });

  // it("1호선 - 하행이고, 구행일 경우 '구'을 반환해야 한다.", () => {
  //   stationService = new StationServiceImpl(realTimeArrival[7]);
  //   expect(stationService.nextStation).toBe("구");
  // });
});

describe("실시간 지하철 정보 (호선 이름)", () => {
  let stationService: StationService;

  //삼산체육관이 주어졌을 때임
  let realTimeArrival: RealTimeArrival[] = dummyData_1_line;

  it("subwayId가 1001일 경우, 1호선을 반환", () => {
    stationService = new StationServiceImpl(realTimeArrival[0]);
    expect(stationService.line).toBe("1호선");
  });

  it("subwayId가 1007일 경우, 7호선을 반환", () => {
    stationService = new StationServiceImpl({
      ...realTimeArrival[0],
      subwayId: "1007",
    });
    expect(stationService.line).toBe("7호선");
  });
});
