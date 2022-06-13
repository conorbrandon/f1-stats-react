export class TimeHelper {
  static raceTimeToMs(raceTime: string | undefined): number {
    if (!raceTime) return Infinity;
    const msPart = parseInt(raceTime.split(".")[1]);
    const secPart = parseInt(raceTime.split(".")[0].split(":")[1]) * 1000;
    const minPart = parseInt(raceTime.split(".")[0].split(":")[0]) * 1000 * 60;
    return minPart + secPart + msPart;
  }
  static msToRaceTime(timestamp: number | undefined): string {
    // console.log({timestamp});
    if (!timestamp || timestamp === Infinity || timestamp === -Infinity) return '';
    const hour = 1000 * 60 * 60;
    const minute = 1000 * 60;
    const second = 1000;
    const ms = 1;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let mss = 0;
    while (timestamp >= hour) {
      console.log({timestamp});
      timestamp -= hour;
      hours += 1;
    }
    while (timestamp >= minute) {
      timestamp -= minute;
      minutes += 1;
    }
    while (timestamp >= second) {
      timestamp -= second;
      seconds += 1;
    }
    while (timestamp >= ms) {
      timestamp -= ms;
      mss += 1;
    }
    let raceTime = '';
    if (hours) raceTime += `${hours}:`;
    if (minutes) raceTime += `${String(minutes).padStart(2, '0')}:`;
    raceTime += `${String(seconds).padStart(2, '0')}.`;
    raceTime += `${String(mss).padStart(3, '0')}`;
    return raceTime;
  }
}