import { LineService } from "../interface/LineService";
import { routeStore } from "../repository/data/line";

export class LineServiceImpl implements LineService {
  // 내 역으로 접근하는 뒤의 두 역이 두 라인에 걸쳐있는 역
  private _twoLineStation: string[] = [];

  // 분기점이 되는 역
  private _threeLineStation: string[] = [];

  // 6호선 단방향
  private _oneWay: string[] | undefined = [];

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
      this._oneWay = routeInfo.oneWay;
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
    if (this.lineCode === "1006") {
      if (this.station === "응암순환(상선)") {
        return {
          "응암순환(상선)": [
            {
              list: [
                "응암순환(상선)",
                "월드컵경기장(성산)",
                "디지털미디어시티",
                "증산(명지대앞)",
                "새절(신사)",
              ],
              nextStation: "역촌",
              direction: "상행",
            },
          ],
          신내: [
            {
              list: [
                "응암순환(상선)",
                "구산", //
                "연신내",
                "독바위",
                "불광",
              ],
              nextStation: "새절",
              direction: "하행",
            },
          ],
        };
      }
      if (this.station === "역촌") {
        return {
          신내: [
            {
              list: [
                "역촌",
                "응암순환(상선)",
                "새절(신사)",
                "증산(명지대앞)",
                "디지털미디어시티",
              ],
              destination: "신내",
              nextStation: "불광",
              direction: "하행",
            },
          ],
        };
      }
      if (this.station === "불광") {
        return {
          신내: [
            {
              list: [
                "불광",
                "역촌",
                "응암순환(상선)",
                "새절(신사)",
                "증산(명지대앞)",
              ],
              destination: "신내",
              nextStation: "독바위",
              direction: "하행",
            },
          ],
        };
      }
      if (this.station === "독바위") {
        return {
          신내: [
            {
              list: ["독바위", "불광", "역촌", "응암순환(상선)", "새절(신사)"],
              destination: "신내",
              nextStation: "연신내",
              direction: "하행",
            },
          ],
        };
      }
      if (this.station === "연신내") {
        return {
          신내: [
            {
              list: ["연신내", "독바위", "불광", "역촌", "응암순환(상선)"],
              destination: "신내",
              nextStation: "구산",
              direction: "하행",
            },
          ],
        };
      }
      if (this.station === "구산") {
        return {
          신내: [
            {
              list: [
                "구산",
                "연신내",
                "독바위",
                "불광", //
                "역촌",
              ],
              destination: "신내",
              nextStation: "응암순환(상선)",
              direction: "하행",
            },
          ],
        };
      }
    }

    this._lineList.forEach((line) => {
      const index = line.list.indexOf(this.station);
      if (index === -1) {
        // throw new Error("역이 존재하지 않습니다.");
        return;
      }

      let createdLine: string[] = [];

      // if (this.lineCode === "1006" && this._oneWay) {
      //   if (this._oneWay.includes(this.station)) {
      //     createdLine = line.list.slice(index, index + 5);
      //   } else {
      //     createdLine = line.list.slice(index, index + 5);
      //   }
      // } else
      if (this.lineCode === "1002" && line.list.length > 10) {
        while (createdLine.length < 5) {
          createdLine.push(
            line.list[(index + createdLine.length) % line.list.length]
          );
        }
      } else {
        createdLine = line.list.slice(index, index + 5);
      }

      if (createdLine.length < 5) {
        let i = 1;
        while (createdLine.length < 5) {
          createdLine.unshift(line.list[index - i]);
          i++;
        }
      }

      const isLastStation =
        (this.lineCode !== "1002" && line.list.indexOf(this.station) === 0) ||
        (this.lineCode === "1002" &&
          line.list.length < 10 &&
          line.list.indexOf(this.station) === 0);

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
          nextStation: line.list[index - 1] ?? line.list.at(-1),
          direction: line.direction,
        });
      } else if (isExistRoute) {
        const targetStation = result.find(
          (item) => JSON.stringify(item.list) === hashKey
        );
        if (targetStation && targetStation.destination !== line.destination)
          targetStation.destination += `, ${line.destination}`;
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
