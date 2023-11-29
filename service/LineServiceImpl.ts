import { LineService } from "../interface/LineService";
import { getLineCode } from "../utils/getLineCode";
import { 인천_소요산, 신창_소요산 } from "../repository/data/line";

export class LineServiceImpl implements LineService {
  private lineCode: string = "";

  //이걸 호선마다 바꿔줘야 함
  private _lineList: { list: string[]; direction: string }[] = [
    { list: 인천_소요산, direction: 인천_소요산[0] },
    { list: 신창_소요산, direction: 신창_소요산[0] },
    {
      list: [...인천_소요산].reverse(),
      direction: [...인천_소요산].reverse()[0],
    },
    {
      list: [...신창_소요산].reverse(),
      direction: [...인천_소요산].reverse()[0],
    },
  ];

  constructor(private station: string, private lineName: string) {
    this.lineCode = getLineCode(this.lineName);
  }

  get lineColor() {
    return "";
  }

  get line() {
    const result: { list: string[]; direction: string; nextStation: string }[] =
      [];
    this._lineList.forEach((line) => {
      const index = line.list.indexOf(this.station);
      const createdLine = line.list.slice(index, index + 5);

      const resultHashKey = JSON.stringify(result);
      const hashKey = JSON.stringify(createdLine);

      if (index !== -1) {
        result.push({
          list: createdLine,
          direction: line.direction,
          nextStation: line.list[index - 1],
        });
      }
    });

    return result.reduce((accr, curr) => {
      const { direction, ...rest } = curr;

      accr[direction] ? accr[direction].push(rest) : (accr[direction] = [rest]);
      // console.log(direction, accr[direction]);
      return accr;
    }, {} as { [direction in string]: { list: string[]; nextStation: string }[] });
  }
}

// private getLineGroup = (station: string, lineName: string) => {

//   Object.values(stationData).forEach((stationInfo) => {
//     if (stationInfo.station_nm === station) {

//     }
//   });

//   return [...set];
// };

// this._lineList = this.getLineGroup(this.station, this.lineName);
