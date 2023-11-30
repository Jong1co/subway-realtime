import { LineService } from "../interface/LineService";
import { getLineCode } from "../utils/getLineCode";
import { 인천_소요산, 신창_소요산, routeStore } from "../repository/data/line";

export class LineServiceImpl implements LineService {
  // 내 역으로 접근하는 뒤의 두 역이 두 라인에 걸쳐있는 역
  private _twoLineStation: string[] = [];

  // 분기점이 되는 역
  private _threeLineStation: string[] = [];

  //상행, 하행 역
  private _lineList: {
    list: string[];
    destination: string;
    direction: string;
  }[] = [];

  constructor(private station: string, private lineCode: string) {
    const routeInfo = routeStore[this.lineCode];
    if (routeStore[this.lineCode]) {
      this._lineList = routeInfo.lineList;
      this._twoLineStation = routeInfo.twoLineStation;
      this._threeLineStation = routeInfo.threeLineStation;
    }
  }

  get lineColor() {
    return "";
  }

  get line() {
    const result: {
      list: string[];
      destination: string;
      nextStation: string;
      direction: string;
    }[] = [];
    this._lineList.forEach((line) => {
      const index = line.list.indexOf(this.station);
      if (index === -1) {
        // throw new Error("역이 존재하지 않습니다.");
        return;
      }

      const createdLine = line.list.slice(index, index + 5);
      if (createdLine.length < 5) {
        let i = 1;
        while (createdLine.length < 5) {
          createdLine.unshift(line.list[index - i]);
          i++;
        }
      }

      const isLastStation = line.list.indexOf(this.station) === 0;
      const isThreeLineStation = this._threeLineStation.includes(this.station);
      const isTwoLineStation = this._twoLineStation.includes(this.station);

      const resultHashKey = JSON.stringify(result);
      const hashKey = JSON.stringify(createdLine);
      const isExistRoute = resultHashKey.includes(hashKey);

      if (
        (!isTwoLineStation && !isExistRoute) ||
        (!isExistRoute && isTwoLineStation) ||
        isThreeLineStation
      ) {
        //만약 종점역이라면 리스트를 보여줄 필요가 없다.
        if (isLastStation) return;
        result.push({
          list: createdLine,
          destination: line.destination,
          nextStation: line.list[index - 1],
          direction: line.direction,
        });
      } else if (isTwoLineStation && isExistRoute) {
        const targetStation = result.find(
          (item) => JSON.stringify(item.list) === hashKey
        );
        if (targetStation) targetStation.destination += `, ${line.destination}`;
      }
    });

    return result.reduce((accr, curr) => {
      const { destination, ...rest } = curr;

      accr[destination]
        ? accr[destination].push(rest)
        : (accr[destination] = [rest]);

      return accr;
    }, {} as { [destination in string]: { list: string[]; nextStation: string; direction: string }[] });
  }
}
