export interface LineService {
  lineColor: string;
  line: {
    [direction in string]: {
      list: string[];
      nextStation: string;
    }[];
  };
}
