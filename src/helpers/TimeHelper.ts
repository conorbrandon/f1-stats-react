export class TimeHelper {
  static raceTimeToMs(raceTime: string | undefined): number {
    if (!raceTime) return Infinity;
    const msPart = parseInt(raceTime.split(".")[1]);
    const secPart = parseInt(raceTime.split(".")[0].split(":")[1]) * 1000;
    const minPart = parseInt(raceTime.split(".")[0].split(":")[0]) * 1000 * 60;
    return minPart + secPart + msPart;
  }
}