import { sleep } from "./ErgastAPI/ErgastAPI";

const baseUrl = 'http://api.timezonedb.com/v2.1/get-time-zone';

export const getTimeZoneFromLatLng = async (lat: string, lng: string): Promise<string> => {
  if (!lat || !lng) return '';
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') { await sleep(1000); }
  const url = `${baseUrl}?key=${process.env.REACT_APP_TIMEZONEDB_TOKEN as string}&format=json&by=position&lat=${lat}&lng=${lng}`;
  try {
    const data: Response = await fetch(url);
    const json = await data.json();
    // console.log({ lat, lng, timezoneReponse: json });
    return json.zoneName;
  } catch (error) {
    return '';
  }
  return '';
};