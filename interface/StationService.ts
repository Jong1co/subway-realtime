export interface StationService {
  line: string;
  nextStation: string;
  // direction: string;
  arrivalTime: number;
  currentStation: string;
  isUphill: boolean;
  lastStation: string;
  arrivalState: string;
  isFirst: boolean;
  // bookmark: boolean;
  // currentSubwayPositions: string[];
}
