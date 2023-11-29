export interface LineService {
  lineColor: string;
  line: {
    [destination in string]: {
      list: string[];
      nextStation: string;
    }[];
  };
}
