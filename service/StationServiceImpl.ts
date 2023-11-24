import { StationService } from "../interface/StationService";

export class StationServiceImpl implements StationService {
  constructor() {}

  get direction() {
    return "인천";
  }

  get line() {
    return "line";
  }

  get nextStation() {
    return "line";
  }
  get currentSubwayPositions() {
    return ["line"];
  }
  get arrivalTime() {
    return "line";
  }
  get bookmark() {
    return false;
  }
}
