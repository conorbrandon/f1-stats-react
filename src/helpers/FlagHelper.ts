import { CountryCodes } from "./CountryCodes";
import { DenonymCodes } from "./DenonymCodes";

export class FlagHelper {
  static getFlag(country: string): string {
    country = country.toLowerCase();
    if (country === 'usa') country = 'united states';
    else if (country === 'uk') country = 'united kingdom';
    else if (country === 'uae') country = 'united arab emirates';
    else if (country === 'korea') country = 'south korea';
    // console.log(country);
    return `https://flagcdn.com/w160/${CountryCodes[country]}.png`;
  }
  static getDenonym(denonym: string): string {
    return DenonymCodes[denonym];
  }
  static getFlagFromDenonym(denonym: string): string {
    return this.getFlag(this.getDenonym(denonym));
  }
}