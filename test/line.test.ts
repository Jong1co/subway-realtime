import { LineServiceImpl } from "../service/LineServiceImpl";
import { getLineCode } from "../utils/getLineCode";

describe("6호선 ", () => {
  const lineCode = getLineCode("6호선");

  it("출발역: 석계역", () => {
    const subwayLineByStation = new LineServiceImpl("석계", lineCode).line;
    expect(subwayLineByStation["응암순환(상선)"][0].list).toEqual([
      "석계",
      "태릉입구",
      "화랑대(서울여대입구)",
      "봉화산",
      "신내",
    ]);
    expect(subwayLineByStation["신내"][0].list).toEqual([
      "석계",
      "돌곶이",
      "상월곡(한국과학기술연구원)",
      "월곡(동덕여대)",
      "고려대",
    ]);
  });

  it("출발역: 태릉입구", () => {
    const subwayLineByStation = new LineServiceImpl("태릉입구", lineCode).line;
    expect(subwayLineByStation["응암순환(상선)"][0].list).toEqual([
      "석계",
      "태릉입구",
      "화랑대(서울여대입구)",
      "봉화산",
      "신내",
    ]);
    expect(subwayLineByStation["신내"][0].list).toEqual([
      "태릉입구",
      "석계",
      "돌곶이",
      "상월곡(한국과학기술연구원)",
      "월곡(동덕여대)",
    ]);
  });

  it("출발역: 구산", () => {
    const subwayLineByStation = new LineServiceImpl("구산", lineCode).line;

    expect(subwayLineByStation["신내"][0].nextStation).toEqual(
      "응암순환(상선)"
    );
  });
});
