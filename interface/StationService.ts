export interface StationService {
  line: string;
  nextStation: string;
  direction: string;
  bookmark: boolean;
  arrivalTime: string;
  currentSubwayPositions: string[];
}
