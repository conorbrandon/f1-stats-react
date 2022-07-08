import { ErgastCircuitResponse } from "../../model/ErgastCircuitResponse";
import { ErgastRaceResponse } from "../../model/ErgastRaceResponse";
import { ErgastSeasonResponse } from "../../model/ErgastSeasonResponse";

export const EmptyCircuitResponse:ErgastCircuitResponse = { MRData: { CircuitTable: { Circuits: [] } } };
export const MockBahrainCircuitResponse: ErgastCircuitResponse = {
  "MRData": {
      "xmlns": "http://ergast.com/mrd/1.5",
      "series": "f1",
      "url": "http://ergast.com/api/f1/circuits/bahrain.json",
      "limit": "30",
      "offset": "0",
      "total": "1",
      "CircuitTable": {
          "circuitId": "bahrain",
          "Circuits": [
              {
                  "circuitId": "bahrain",
                  "url": "http://en.wikipedia.org/wiki/Bahrain_International_Circuit",
                  "circuitName": "Bahrain International Circuit",
                  "Location": {
                      "lat": "26.0325",
                      "long": "50.5106",
                      "locality": "Sakhir",
                      "country": "Bahrain"
                  }
              }
          ]
      }
  }
};
export const MockCircuitSeasonsResponse: ErgastSeasonResponse = {
  "MRData": {
      "xmlns": "http://ergast.com/mrd/1.5",
      "series": "f1",
      "url": "http://ergast.com/api/f1/circuits/bahrain/seasons.json",
      "limit": "100",
      "offset": "0",
      "total": "18",
      "SeasonTable": {
          "circuitId": "bahrain",
          "Seasons": [
              {
                  "season": "2004",
                  "url": "http://en.wikipedia.org/wiki/2004_Formula_One_season"
              },
              {
                  "season": "2005",
                  "url": "http://en.wikipedia.org/wiki/2005_Formula_One_season"
              },
              {
                  "season": "2006",
                  "url": "http://en.wikipedia.org/wiki/2006_Formula_One_season"
              },
              {
                  "season": "2007",
                  "url": "http://en.wikipedia.org/wiki/2007_Formula_One_season"
              },
              {
                  "season": "2008",
                  "url": "http://en.wikipedia.org/wiki/2008_Formula_One_season"
              },
              {
                  "season": "2009",
                  "url": "http://en.wikipedia.org/wiki/2009_Formula_One_season"
              },
              {
                  "season": "2010",
                  "url": "http://en.wikipedia.org/wiki/2010_Formula_One_season"
              },
              {
                  "season": "2012",
                  "url": "http://en.wikipedia.org/wiki/2012_Formula_One_season"
              },
              {
                  "season": "2013",
                  "url": "http://en.wikipedia.org/wiki/2013_Formula_One_season"
              },
              {
                  "season": "2014",
                  "url": "http://en.wikipedia.org/wiki/2014_Formula_One_season"
              },
              {
                  "season": "2015",
                  "url": "http://en.wikipedia.org/wiki/2015_Formula_One_season"
              },
              {
                  "season": "2016",
                  "url": "http://en.wikipedia.org/wiki/2016_Formula_One_season"
              },
              {
                  "season": "2017",
                  "url": "http://en.wikipedia.org/wiki/2017_Formula_One_season"
              },
              {
                  "season": "2018",
                  "url": "http://en.wikipedia.org/wiki/2018_Formula_One_World_Championship"
              },
              {
                  "season": "2019",
                  "url": "http://en.wikipedia.org/wiki/2019_Formula_One_World_Championship"
              },
              {
                  "season": "2020",
                  "url": "http://en.wikipedia.org/wiki/2020_Formula_One_World_Championship"
              },
              {
                  "season": "2021",
                  "url": "http://en.wikipedia.org/wiki/2021_Formula_One_World_Championship"
              },
              {
                  "season": "2022",
                  "url": "http://en.wikipedia.org/wiki/2022_Formula_One_World_Championship"
              }
          ]
      }
  }
};
export const MockCircuitResultsResponse2021: ErgastRaceResponse = {
  "MRData": {
      "xmlns": "http://ergast.com/mrd/1.5",
      "series": "f1",
      "url": "http://ergast.com/api/f1/2021/circuits/bahrain/results.json",
      "limit": "100",
      "offset": "0",
      "total": "20",
      "RaceTable": {
          "season": "2021",
          "circuitId": "bahrain",
          "Races": [
              {
                  "season": "2021",
                  "round": "1",
                  "url": "http://en.wikipedia.org/wiki/2021_Bahrain_Grand_Prix",
                  "raceName": "Bahrain Grand Prix",
                  "Circuit": {
                      "circuitId": "bahrain",
                      "url": "http://en.wikipedia.org/wiki/Bahrain_International_Circuit",
                      "circuitName": "Bahrain International Circuit",
                      "Location": {
                          "lat": "26.0325",
                          "long": "50.5106",
                          "locality": "Sakhir",
                          "country": "Bahrain"
                      }
                  },
                  "date": "2021-03-28",
                  "time": "15:00:00Z",
                  "Results": [
                      {
                          "number": "44",
                          "position": "1",
                          "positionText": "1",
                          "points": "25",
                          "Driver": {
                              "driverId": "hamilton",
                              "permanentNumber": "44",
                              "code": "HAM",
                              "url": "http://en.wikipedia.org/wiki/Lewis_Hamilton",
                              "givenName": "Lewis",
                              "familyName": "Hamilton",
                              "dateOfBirth": "1985-01-07",
                              "nationality": "British"
                          },
                          "Constructor": {
                              "constructorId": "mercedes",
                              "url": "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
                              "name": "Mercedes",
                              "nationality": "German"
                          },
                          "grid": "2",
                          "laps": "56",
                          "status": "Finished",
                          "Time": {
                              "millis": "5523897",
                              "time": "1:32:03.897"
                          },
                          "FastestLap": {
                              "rank": "4",
                              "lap": "44",
                              "Time": {
                                  "time": "1:34.015"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "207.235"
                              }
                          }
                      },
                      {
                          "number": "33",
                          "position": "2",
                          "positionText": "2",
                          "points": "18",
                          "Driver": {
                              "driverId": "max_verstappen",
                              "permanentNumber": "33",
                              "code": "VER",
                              "url": "http://en.wikipedia.org/wiki/Max_Verstappen",
                              "givenName": "Max",
                              "familyName": "Verstappen",
                              "dateOfBirth": "1997-09-30",
                              "nationality": "Dutch"
                          },
                          "Constructor": {
                              "constructorId": "red_bull",
                              "url": "http://en.wikipedia.org/wiki/Red_Bull_Racing",
                              "name": "Red Bull",
                              "nationality": "Austrian"
                          },
                          "grid": "1",
                          "laps": "56",
                          "status": "Finished",
                          "Time": {
                              "millis": "5524642",
                              "time": "+0.745"
                          },
                          "FastestLap": {
                              "rank": "2",
                              "lap": "41",
                              "Time": {
                                  "time": "1:33.228"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "208.984"
                              }
                          }
                      },
                      {
                          "number": "77",
                          "position": "3",
                          "positionText": "3",
                          "points": "16",
                          "Driver": {
                              "driverId": "bottas",
                              "permanentNumber": "77",
                              "code": "BOT",
                              "url": "http://en.wikipedia.org/wiki/Valtteri_Bottas",
                              "givenName": "Valtteri",
                              "familyName": "Bottas",
                              "dateOfBirth": "1989-08-28",
                              "nationality": "Finnish"
                          },
                          "Constructor": {
                              "constructorId": "mercedes",
                              "url": "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
                              "name": "Mercedes",
                              "nationality": "German"
                          },
                          "grid": "3",
                          "laps": "56",
                          "status": "Finished",
                          "Time": {
                              "millis": "5561280",
                              "time": "+37.383"
                          },
                          "FastestLap": {
                              "rank": "1",
                              "lap": "56",
                              "Time": {
                                  "time": "1:32.090"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "211.566"
                              }
                          }
                      },
                      {
                          "number": "4",
                          "position": "4",
                          "positionText": "4",
                          "points": "12",
                          "Driver": {
                              "driverId": "norris",
                              "permanentNumber": "4",
                              "code": "NOR",
                              "url": "http://en.wikipedia.org/wiki/Lando_Norris",
                              "givenName": "Lando",
                              "familyName": "Norris",
                              "dateOfBirth": "1999-11-13",
                              "nationality": "British"
                          },
                          "Constructor": {
                              "constructorId": "mclaren",
                              "url": "http://en.wikipedia.org/wiki/McLaren",
                              "name": "McLaren",
                              "nationality": "British"
                          },
                          "grid": "7",
                          "laps": "56",
                          "status": "Finished",
                          "Time": {
                              "millis": "5570363",
                              "time": "+46.466"
                          },
                          "FastestLap": {
                              "rank": "6",
                              "lap": "38",
                              "Time": {
                                  "time": "1:34.396"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "206.398"
                              }
                          }
                      },
                      {
                          "number": "11",
                          "position": "5",
                          "positionText": "5",
                          "points": "10",
                          "Driver": {
                              "driverId": "perez",
                              "permanentNumber": "11",
                              "code": "PER",
                              "url": "http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez",
                              "givenName": "Sergio",
                              "familyName": "Pérez",
                              "dateOfBirth": "1990-01-26",
                              "nationality": "Mexican"
                          },
                          "Constructor": {
                              "constructorId": "red_bull",
                              "url": "http://en.wikipedia.org/wiki/Red_Bull_Racing",
                              "name": "Red Bull",
                              "nationality": "Austrian"
                          },
                          "grid": "0",
                          "laps": "56",
                          "status": "Finished",
                          "Time": {
                              "millis": "5575944",
                              "time": "+52.047"
                          },
                          "FastestLap": {
                              "rank": "3",
                              "lap": "44",
                              "Time": {
                                  "time": "1:33.970"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "207.334"
                              }
                          }
                      },
                      {
                          "number": "16",
                          "position": "6",
                          "positionText": "6",
                          "points": "8",
                          "Driver": {
                              "driverId": "leclerc",
                              "permanentNumber": "16",
                              "code": "LEC",
                              "url": "http://en.wikipedia.org/wiki/Charles_Leclerc",
                              "givenName": "Charles",
                              "familyName": "Leclerc",
                              "dateOfBirth": "1997-10-16",
                              "nationality": "Monegasque"
                          },
                          "Constructor": {
                              "constructorId": "ferrari",
                              "url": "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
                              "name": "Ferrari",
                              "nationality": "Italian"
                          },
                          "grid": "4",
                          "laps": "56",
                          "status": "Finished",
                          "Time": {
                              "millis": "5582987",
                              "time": "+59.090"
                          },
                          "FastestLap": {
                              "rank": "11",
                              "lap": "39",
                              "Time": {
                                  "time": "1:34.988"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "205.112"
                              }
                          }
                      },
                      {
                          "number": "3",
                          "position": "7",
                          "positionText": "7",
                          "points": "6",
                          "Driver": {
                              "driverId": "ricciardo",
                              "permanentNumber": "3",
                              "code": "RIC",
                              "url": "http://en.wikipedia.org/wiki/Daniel_Ricciardo",
                              "givenName": "Daniel",
                              "familyName": "Ricciardo",
                              "dateOfBirth": "1989-07-01",
                              "nationality": "Australian"
                          },
                          "Constructor": {
                              "constructorId": "mclaren",
                              "url": "http://en.wikipedia.org/wiki/McLaren",
                              "name": "McLaren",
                              "nationality": "British"
                          },
                          "grid": "6",
                          "laps": "56",
                          "status": "Finished",
                          "Time": {
                              "millis": "5589901",
                              "time": "+66.004"
                          },
                          "FastestLap": {
                              "rank": "10",
                              "lap": "36",
                              "Time": {
                                  "time": "1:34.932"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "205.233"
                              }
                          }
                      },
                      {
                          "number": "55",
                          "position": "8",
                          "positionText": "8",
                          "points": "4",
                          "Driver": {
                              "driverId": "sainz",
                              "permanentNumber": "55",
                              "code": "SAI",
                              "url": "http://en.wikipedia.org/wiki/Carlos_Sainz_Jr.",
                              "givenName": "Carlos",
                              "familyName": "Sainz",
                              "dateOfBirth": "1994-09-01",
                              "nationality": "Spanish"
                          },
                          "Constructor": {
                              "constructorId": "ferrari",
                              "url": "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
                              "name": "Ferrari",
                              "nationality": "Italian"
                          },
                          "grid": "8",
                          "laps": "56",
                          "status": "Finished",
                          "Time": {
                              "millis": "5590997",
                              "time": "+67.100"
                          },
                          "FastestLap": {
                              "rank": "7",
                              "lap": "48",
                              "Time": {
                                  "time": "1:34.509"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "206.151"
                              }
                          }
                      },
                      {
                          "number": "22",
                          "position": "9",
                          "positionText": "9",
                          "points": "2",
                          "Driver": {
                              "driverId": "tsunoda",
                              "permanentNumber": "22",
                              "code": "TSU",
                              "url": "http://en.wikipedia.org/wiki/Yuki_Tsunoda",
                              "givenName": "Yuki",
                              "familyName": "Tsunoda",
                              "dateOfBirth": "2000-05-11",
                              "nationality": "Japanese"
                          },
                          "Constructor": {
                              "constructorId": "alphatauri",
                              "url": "http://en.wikipedia.org/wiki/Scuderia_AlphaTauri",
                              "name": "AlphaTauri",
                              "nationality": "Italian"
                          },
                          "grid": "13",
                          "laps": "56",
                          "status": "Finished",
                          "Time": {
                              "millis": "5609589",
                              "time": "+85.692"
                          },
                          "FastestLap": {
                              "rank": "8",
                              "lap": "38",
                              "Time": {
                                  "time": "1:34.761"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "205.603"
                              }
                          }
                      },
                      {
                          "number": "18",
                          "position": "10",
                          "positionText": "10",
                          "points": "1",
                          "Driver": {
                              "driverId": "stroll",
                              "permanentNumber": "18",
                              "code": "STR",
                              "url": "http://en.wikipedia.org/wiki/Lance_Stroll",
                              "givenName": "Lance",
                              "familyName": "Stroll",
                              "dateOfBirth": "1998-10-29",
                              "nationality": "Canadian"
                          },
                          "Constructor": {
                              "constructorId": "aston_martin",
                              "url": "http://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
                              "name": "Aston Martin",
                              "nationality": "British"
                          },
                          "grid": "10",
                          "laps": "56",
                          "status": "Finished",
                          "Time": {
                              "millis": "5610610",
                              "time": "+86.713"
                          },
                          "FastestLap": {
                              "rank": "9",
                              "lap": "31",
                              "Time": {
                                  "time": "1:34.865"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "205.378"
                              }
                          }
                      },
                      {
                          "number": "7",
                          "position": "11",
                          "positionText": "11",
                          "points": "0",
                          "Driver": {
                              "driverId": "raikkonen",
                              "permanentNumber": "7",
                              "code": "RAI",
                              "url": "http://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen",
                              "givenName": "Kimi",
                              "familyName": "Räikkönen",
                              "dateOfBirth": "1979-10-17",
                              "nationality": "Finnish"
                          },
                          "Constructor": {
                              "constructorId": "alfa",
                              "url": "http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One",
                              "name": "Alfa Romeo",
                              "nationality": "Swiss"
                          },
                          "grid": "14",
                          "laps": "56",
                          "status": "Finished",
                          "Time": {
                              "millis": "5612761",
                              "time": "+88.864"
                          },
                          "FastestLap": {
                              "rank": "14",
                              "lap": "45",
                              "Time": {
                                  "time": "1:35.192"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "204.672"
                              }
                          }
                      },
                      {
                          "number": "99",
                          "position": "12",
                          "positionText": "12",
                          "points": "0",
                          "Driver": {
                              "driverId": "giovinazzi",
                              "permanentNumber": "99",
                              "code": "GIO",
                              "url": "http://en.wikipedia.org/wiki/Antonio_Giovinazzi",
                              "givenName": "Antonio",
                              "familyName": "Giovinazzi",
                              "dateOfBirth": "1993-12-14",
                              "nationality": "Italian"
                          },
                          "Constructor": {
                              "constructorId": "alfa",
                              "url": "http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One",
                              "name": "Alfa Romeo",
                              "nationality": "Swiss"
                          },
                          "grid": "12",
                          "laps": "55",
                          "status": "+1 Lap",
                          "FastestLap": {
                              "rank": "13",
                              "lap": "32",
                              "Time": {
                                  "time": "1:35.122"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "204.823"
                              }
                          }
                      },
                      {
                          "number": "31",
                          "position": "13",
                          "positionText": "13",
                          "points": "0",
                          "Driver": {
                              "driverId": "ocon",
                              "permanentNumber": "31",
                              "code": "OCO",
                              "url": "http://en.wikipedia.org/wiki/Esteban_Ocon",
                              "givenName": "Esteban",
                              "familyName": "Ocon",
                              "dateOfBirth": "1996-09-17",
                              "nationality": "French"
                          },
                          "Constructor": {
                              "constructorId": "alpine",
                              "url": "http://en.wikipedia.org/wiki/Alpine_F1_Team",
                              "name": "Alpine F1 Team",
                              "nationality": "French"
                          },
                          "grid": "16",
                          "laps": "55",
                          "status": "+1 Lap",
                          "FastestLap": {
                              "rank": "15",
                              "lap": "33",
                              "Time": {
                                  "time": "1:35.250"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "204.548"
                              }
                          }
                      },
                      {
                          "number": "63",
                          "position": "14",
                          "positionText": "14",
                          "points": "0",
                          "Driver": {
                              "driverId": "russell",
                              "permanentNumber": "63",
                              "code": "RUS",
                              "url": "http://en.wikipedia.org/wiki/George_Russell_%28racing_driver%29",
                              "givenName": "George",
                              "familyName": "Russell",
                              "dateOfBirth": "1998-02-15",
                              "nationality": "British"
                          },
                          "Constructor": {
                              "constructorId": "williams",
                              "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                              "name": "Williams",
                              "nationality": "British"
                          },
                          "grid": "15",
                          "laps": "55",
                          "status": "+1 Lap",
                          "FastestLap": {
                              "rank": "12",
                              "lap": "40",
                              "Time": {
                                  "time": "1:35.036"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "205.008"
                              }
                          }
                      },
                      {
                          "number": "5",
                          "position": "15",
                          "positionText": "15",
                          "points": "0",
                          "Driver": {
                              "driverId": "vettel",
                              "permanentNumber": "5",
                              "code": "VET",
                              "url": "http://en.wikipedia.org/wiki/Sebastian_Vettel",
                              "givenName": "Sebastian",
                              "familyName": "Vettel",
                              "dateOfBirth": "1987-07-03",
                              "nationality": "German"
                          },
                          "Constructor": {
                              "constructorId": "aston_martin",
                              "url": "http://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
                              "name": "Aston Martin",
                              "nationality": "British"
                          },
                          "grid": "20",
                          "laps": "55",
                          "status": "+1 Lap",
                          "FastestLap": {
                              "rank": "16",
                              "lap": "26",
                              "Time": {
                                  "time": "1:35.566"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "203.871"
                              }
                          }
                      },
                      {
                          "number": "47",
                          "position": "16",
                          "positionText": "16",
                          "points": "0",
                          "Driver": {
                              "driverId": "mick_schumacher",
                              "permanentNumber": "47",
                              "code": "MSC",
                              "url": "http://en.wikipedia.org/wiki/Mick_Schumacher",
                              "givenName": "Mick",
                              "familyName": "Schumacher",
                              "dateOfBirth": "1999-03-22",
                              "nationality": "German"
                          },
                          "Constructor": {
                              "constructorId": "haas",
                              "url": "http://en.wikipedia.org/wiki/Haas_F1_Team",
                              "name": "Haas F1 Team",
                              "nationality": "American"
                          },
                          "grid": "18",
                          "laps": "55",
                          "status": "+1 Lap",
                          "FastestLap": {
                              "rank": "18",
                              "lap": "38",
                              "Time": {
                                  "time": "1:36.134"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "202.667"
                              }
                          }
                      },
                      {
                          "number": "10",
                          "position": "17",
                          "positionText": "17",
                          "points": "0",
                          "Driver": {
                              "driverId": "gasly",
                              "permanentNumber": "10",
                              "code": "GAS",
                              "url": "http://en.wikipedia.org/wiki/Pierre_Gasly",
                              "givenName": "Pierre",
                              "familyName": "Gasly",
                              "dateOfBirth": "1996-02-07",
                              "nationality": "French"
                          },
                          "Constructor": {
                              "constructorId": "alphatauri",
                              "url": "http://en.wikipedia.org/wiki/Scuderia_AlphaTauri",
                              "name": "AlphaTauri",
                              "nationality": "Italian"
                          },
                          "grid": "5",
                          "laps": "52",
                          "status": "Retired",
                          "FastestLap": {
                              "rank": "5",
                              "lap": "48",
                              "Time": {
                                  "time": "1:34.090"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "207.069"
                              }
                          }
                      },
                      {
                          "number": "6",
                          "position": "18",
                          "positionText": "18",
                          "points": "0",
                          "Driver": {
                              "driverId": "latifi",
                              "permanentNumber": "6",
                              "code": "LAT",
                              "url": "http://en.wikipedia.org/wiki/Nicholas_Latifi",
                              "givenName": "Nicholas",
                              "familyName": "Latifi",
                              "dateOfBirth": "1995-06-29",
                              "nationality": "Canadian"
                          },
                          "Constructor": {
                              "constructorId": "williams",
                              "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                              "name": "Williams",
                              "nationality": "British"
                          },
                          "grid": "17",
                          "laps": "51",
                          "status": "Retired",
                          "FastestLap": {
                              "rank": "19",
                              "lap": "16",
                              "Time": {
                                  "time": "1:36.602"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "201.685"
                              }
                          }
                      },
                      {
                          "number": "14",
                          "position": "19",
                          "positionText": "R",
                          "points": "0",
                          "Driver": {
                              "driverId": "alonso",
                              "permanentNumber": "14",
                              "code": "ALO",
                              "url": "http://en.wikipedia.org/wiki/Fernando_Alonso",
                              "givenName": "Fernando",
                              "familyName": "Alonso",
                              "dateOfBirth": "1981-07-29",
                              "nationality": "Spanish"
                          },
                          "Constructor": {
                              "constructorId": "alpine",
                              "url": "http://en.wikipedia.org/wiki/Alpine_F1_Team",
                              "name": "Alpine F1 Team",
                              "nationality": "French"
                          },
                          "grid": "9",
                          "laps": "32",
                          "status": "Brakes",
                          "FastestLap": {
                              "rank": "17",
                              "lap": "31",
                              "Time": {
                                  "time": "1:36.063"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "202.816"
                              }
                          }
                      },
                      {
                          "number": "9",
                          "position": "20",
                          "positionText": "R",
                          "points": "0",
                          "Driver": {
                              "driverId": "mazepin",
                              "permanentNumber": "9",
                              "code": "MAZ",
                              "url": "http://en.wikipedia.org/wiki/Nikita_Mazepin",
                              "givenName": "Nikita",
                              "familyName": "Mazepin",
                              "dateOfBirth": "1999-03-02",
                              "nationality": "Russian"
                          },
                          "Constructor": {
                              "constructorId": "haas",
                              "url": "http://en.wikipedia.org/wiki/Haas_F1_Team",
                              "name": "Haas F1 Team",
                              "nationality": "American"
                          },
                          "grid": "19",
                          "laps": "0",
                          "status": "Accident"
                      }
                  ]
              }
          ]
      }
  }
};
export const MockCircuitResultsResponse2022: ErgastRaceResponse = {
  "MRData": {
      "xmlns": "http://ergast.com/mrd/1.5",
      "series": "f1",
      "url": "http://ergast.com/api/f1/2022/circuits/bahrain/results.json",
      "limit": "100",
      "offset": "0",
      "total": "20",
      "RaceTable": {
          "season": "2022",
          "circuitId": "bahrain",
          "Races": [
              {
                  "season": "2022",
                  "round": "1",
                  "url": "http://en.wikipedia.org/wiki/2022_Bahrain_Grand_Prix",
                  "raceName": "Bahrain Grand Prix",
                  "Circuit": {
                      "circuitId": "bahrain",
                      "url": "http://en.wikipedia.org/wiki/Bahrain_International_Circuit",
                      "circuitName": "Bahrain International Circuit",
                      "Location": {
                          "lat": "26.0325",
                          "long": "50.5106",
                          "locality": "Sakhir",
                          "country": "Bahrain"
                      }
                  },
                  "date": "2022-03-20",
                  "time": "15:00:00Z",
                  "Results": [
                      {
                          "number": "16",
                          "position": "1",
                          "positionText": "1",
                          "points": "26",
                          "Driver": {
                              "driverId": "leclerc",
                              "permanentNumber": "16",
                              "code": "LEC",
                              "url": "http://en.wikipedia.org/wiki/Charles_Leclerc",
                              "givenName": "Charles",
                              "familyName": "Leclerc",
                              "dateOfBirth": "1997-10-16",
                              "nationality": "Monegasque"
                          },
                          "Constructor": {
                              "constructorId": "ferrari",
                              "url": "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
                              "name": "Ferrari",
                              "nationality": "Italian"
                          },
                          "grid": "1",
                          "laps": "57",
                          "status": "Finished",
                          "Time": {
                              "millis": "5853584",
                              "time": "1:37:33.584"
                          },
                          "FastestLap": {
                              "rank": "1",
                              "lap": "51",
                              "Time": {
                                  "time": "1:34.570"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "206.018"
                              }
                          }
                      },
                      {
                          "number": "55",
                          "position": "2",
                          "positionText": "2",
                          "points": "18",
                          "Driver": {
                              "driverId": "sainz",
                              "permanentNumber": "55",
                              "code": "SAI",
                              "url": "http://en.wikipedia.org/wiki/Carlos_Sainz_Jr.",
                              "givenName": "Carlos",
                              "familyName": "Sainz",
                              "dateOfBirth": "1994-09-01",
                              "nationality": "Spanish"
                          },
                          "Constructor": {
                              "constructorId": "ferrari",
                              "url": "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
                              "name": "Ferrari",
                              "nationality": "Italian"
                          },
                          "grid": "3",
                          "laps": "57",
                          "status": "Finished",
                          "Time": {
                              "millis": "5859182",
                              "time": "+5.598"
                          },
                          "FastestLap": {
                              "rank": "3",
                              "lap": "52",
                              "Time": {
                                  "time": "1:35.740"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "203.501"
                              }
                          }
                      },
                      {
                          "number": "44",
                          "position": "3",
                          "positionText": "3",
                          "points": "15",
                          "Driver": {
                              "driverId": "hamilton",
                              "permanentNumber": "44",
                              "code": "HAM",
                              "url": "http://en.wikipedia.org/wiki/Lewis_Hamilton",
                              "givenName": "Lewis",
                              "familyName": "Hamilton",
                              "dateOfBirth": "1985-01-07",
                              "nationality": "British"
                          },
                          "Constructor": {
                              "constructorId": "mercedes",
                              "url": "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
                              "name": "Mercedes",
                              "nationality": "German"
                          },
                          "grid": "5",
                          "laps": "57",
                          "status": "Finished",
                          "Time": {
                              "millis": "5863259",
                              "time": "+9.675"
                          },
                          "FastestLap": {
                              "rank": "5",
                              "lap": "53",
                              "Time": {
                                  "time": "1:36.228"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "202.469"
                              }
                          }
                      },
                      {
                          "number": "63",
                          "position": "4",
                          "positionText": "4",
                          "points": "12",
                          "Driver": {
                              "driverId": "russell",
                              "permanentNumber": "63",
                              "code": "RUS",
                              "url": "http://en.wikipedia.org/wiki/George_Russell_%28racing_driver%29",
                              "givenName": "George",
                              "familyName": "Russell",
                              "dateOfBirth": "1998-02-15",
                              "nationality": "British"
                          },
                          "Constructor": {
                              "constructorId": "mercedes",
                              "url": "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
                              "name": "Mercedes",
                              "nationality": "German"
                          },
                          "grid": "9",
                          "laps": "57",
                          "status": "Finished",
                          "Time": {
                              "millis": "5864795",
                              "time": "+11.211"
                          },
                          "FastestLap": {
                              "rank": "6",
                              "lap": "56",
                              "Time": {
                                  "time": "1:36.302"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "202.313"
                              }
                          }
                      },
                      {
                          "number": "20",
                          "position": "5",
                          "positionText": "5",
                          "points": "10",
                          "Driver": {
                              "driverId": "kevin_magnussen",
                              "permanentNumber": "20",
                              "code": "MAG",
                              "url": "http://en.wikipedia.org/wiki/Kevin_Magnussen",
                              "givenName": "Kevin",
                              "familyName": "Magnussen",
                              "dateOfBirth": "1992-10-05",
                              "nationality": "Danish"
                          },
                          "Constructor": {
                              "constructorId": "haas",
                              "url": "http://en.wikipedia.org/wiki/Haas_F1_Team",
                              "name": "Haas F1 Team",
                              "nationality": "American"
                          },
                          "grid": "7",
                          "laps": "57",
                          "status": "Finished",
                          "Time": {
                              "millis": "5868338",
                              "time": "+14.754"
                          },
                          "FastestLap": {
                              "rank": "8",
                              "lap": "53",
                              "Time": {
                                  "time": "1:36.623"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "201.641"
                              }
                          }
                      },
                      {
                          "number": "77",
                          "position": "6",
                          "positionText": "6",
                          "points": "8",
                          "Driver": {
                              "driverId": "bottas",
                              "permanentNumber": "77",
                              "code": "BOT",
                              "url": "http://en.wikipedia.org/wiki/Valtteri_Bottas",
                              "givenName": "Valtteri",
                              "familyName": "Bottas",
                              "dateOfBirth": "1989-08-28",
                              "nationality": "Finnish"
                          },
                          "Constructor": {
                              "constructorId": "alfa",
                              "url": "http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One",
                              "name": "Alfa Romeo",
                              "nationality": "Swiss"
                          },
                          "grid": "6",
                          "laps": "57",
                          "status": "Finished",
                          "Time": {
                              "millis": "5869703",
                              "time": "+16.119"
                          },
                          "FastestLap": {
                              "rank": "7",
                              "lap": "53",
                              "Time": {
                                  "time": "1:36.599"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "201.691"
                              }
                          }
                      },
                      {
                          "number": "31",
                          "position": "7",
                          "positionText": "7",
                          "points": "6",
                          "Driver": {
                              "driverId": "ocon",
                              "permanentNumber": "31",
                              "code": "OCO",
                              "url": "http://en.wikipedia.org/wiki/Esteban_Ocon",
                              "givenName": "Esteban",
                              "familyName": "Ocon",
                              "dateOfBirth": "1996-09-17",
                              "nationality": "French"
                          },
                          "Constructor": {
                              "constructorId": "alpine",
                              "url": "http://en.wikipedia.org/wiki/Alpine_F1_Team",
                              "name": "Alpine F1 Team",
                              "nationality": "French"
                          },
                          "grid": "11",
                          "laps": "57",
                          "status": "Finished",
                          "Time": {
                              "millis": "5873007",
                              "time": "+19.423"
                          },
                          "FastestLap": {
                              "rank": "14",
                              "lap": "53",
                              "Time": {
                                  "time": "1:37.110"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "200.630"
                              }
                          }
                      },
                      {
                          "number": "22",
                          "position": "8",
                          "positionText": "8",
                          "points": "4",
                          "Driver": {
                              "driverId": "tsunoda",
                              "permanentNumber": "22",
                              "code": "TSU",
                              "url": "http://en.wikipedia.org/wiki/Yuki_Tsunoda",
                              "givenName": "Yuki",
                              "familyName": "Tsunoda",
                              "dateOfBirth": "2000-05-11",
                              "nationality": "Japanese"
                          },
                          "Constructor": {
                              "constructorId": "alphatauri",
                              "url": "http://en.wikipedia.org/wiki/Scuderia_AlphaTauri",
                              "name": "AlphaTauri",
                              "nationality": "Italian"
                          },
                          "grid": "16",
                          "laps": "57",
                          "status": "Finished",
                          "Time": {
                              "millis": "5873970",
                              "time": "+20.386"
                          },
                          "FastestLap": {
                              "rank": "13",
                              "lap": "53",
                              "Time": {
                                  "time": "1:37.104"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "200.642"
                              }
                          }
                      },
                      {
                          "number": "14",
                          "position": "9",
                          "positionText": "9",
                          "points": "2",
                          "Driver": {
                              "driverId": "alonso",
                              "permanentNumber": "14",
                              "code": "ALO",
                              "url": "http://en.wikipedia.org/wiki/Fernando_Alonso",
                              "givenName": "Fernando",
                              "familyName": "Alonso",
                              "dateOfBirth": "1981-07-29",
                              "nationality": "Spanish"
                          },
                          "Constructor": {
                              "constructorId": "alpine",
                              "url": "http://en.wikipedia.org/wiki/Alpine_F1_Team",
                              "name": "Alpine F1 Team",
                              "nationality": "French"
                          },
                          "grid": "8",
                          "laps": "57",
                          "status": "Finished",
                          "Time": {
                              "millis": "5875974",
                              "time": "+22.390"
                          },
                          "FastestLap": {
                              "rank": "10",
                              "lap": "44",
                              "Time": {
                                  "time": "1:36.733"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "201.412"
                              }
                          }
                      },
                      {
                          "number": "24",
                          "position": "10",
                          "positionText": "10",
                          "points": "1",
                          "Driver": {
                              "driverId": "zhou",
                              "permanentNumber": "24",
                              "code": "ZHO",
                              "url": "http://en.wikipedia.org/wiki/Guanyu_Zhou",
                              "givenName": "Guanyu",
                              "familyName": "Zhou",
                              "dateOfBirth": "1999-05-30",
                              "nationality": "Chinese"
                          },
                          "Constructor": {
                              "constructorId": "alfa",
                              "url": "http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One",
                              "name": "Alfa Romeo",
                              "nationality": "Swiss"
                          },
                          "grid": "15",
                          "laps": "57",
                          "status": "Finished",
                          "Time": {
                              "millis": "5876648",
                              "time": "+23.064"
                          },
                          "FastestLap": {
                              "rank": "9",
                              "lap": "39",
                              "Time": {
                                  "time": "1:36.685"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "201.512"
                              }
                          }
                      },
                      {
                          "number": "47",
                          "position": "11",
                          "positionText": "11",
                          "points": "0",
                          "Driver": {
                              "driverId": "mick_schumacher",
                              "permanentNumber": "47",
                              "code": "MSC",
                              "url": "http://en.wikipedia.org/wiki/Mick_Schumacher",
                              "givenName": "Mick",
                              "familyName": "Schumacher",
                              "dateOfBirth": "1999-03-22",
                              "nationality": "German"
                          },
                          "Constructor": {
                              "constructorId": "haas",
                              "url": "http://en.wikipedia.org/wiki/Haas_F1_Team",
                              "name": "Haas F1 Team",
                              "nationality": "American"
                          },
                          "grid": "12",
                          "laps": "57",
                          "status": "Finished",
                          "Time": {
                              "millis": "5886158",
                              "time": "+32.574"
                          },
                          "FastestLap": {
                              "rank": "11",
                              "lap": "37",
                              "Time": {
                                  "time": "1:36.956"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "200.948"
                              }
                          }
                      },
                      {
                          "number": "18",
                          "position": "12",
                          "positionText": "12",
                          "points": "0",
                          "Driver": {
                              "driverId": "stroll",
                              "permanentNumber": "18",
                              "code": "STR",
                              "url": "http://en.wikipedia.org/wiki/Lance_Stroll",
                              "givenName": "Lance",
                              "familyName": "Stroll",
                              "dateOfBirth": "1998-10-29",
                              "nationality": "Canadian"
                          },
                          "Constructor": {
                              "constructorId": "aston_martin",
                              "url": "http://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
                              "name": "Aston Martin",
                              "nationality": "British"
                          },
                          "grid": "19",
                          "laps": "57",
                          "status": "Finished",
                          "Time": {
                              "millis": "5899457",
                              "time": "+45.873"
                          },
                          "FastestLap": {
                              "rank": "15",
                              "lap": "49",
                              "Time": {
                                  "time": "1:37.146"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "200.555"
                              }
                          }
                      },
                      {
                          "number": "23",
                          "position": "13",
                          "positionText": "13",
                          "points": "0",
                          "Driver": {
                              "driverId": "albon",
                              "permanentNumber": "23",
                              "code": "ALB",
                              "url": "http://en.wikipedia.org/wiki/Alexander_Albon",
                              "givenName": "Alexander",
                              "familyName": "Albon",
                              "dateOfBirth": "1996-03-23",
                              "nationality": "Thai"
                          },
                          "Constructor": {
                              "constructorId": "williams",
                              "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                              "name": "Williams",
                              "nationality": "British"
                          },
                          "grid": "14",
                          "laps": "57",
                          "status": "Finished",
                          "Time": {
                              "millis": "5907516",
                              "time": "+53.932"
                          },
                          "FastestLap": {
                              "rank": "18",
                              "lap": "50",
                              "Time": {
                                  "time": "1:37.355"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "200.125"
                              }
                          }
                      },
                      {
                          "number": "3",
                          "position": "14",
                          "positionText": "14",
                          "points": "0",
                          "Driver": {
                              "driverId": "ricciardo",
                              "permanentNumber": "3",
                              "code": "RIC",
                              "url": "http://en.wikipedia.org/wiki/Daniel_Ricciardo",
                              "givenName": "Daniel",
                              "familyName": "Ricciardo",
                              "dateOfBirth": "1989-07-01",
                              "nationality": "Australian"
                          },
                          "Constructor": {
                              "constructorId": "mclaren",
                              "url": "http://en.wikipedia.org/wiki/McLaren",
                              "name": "McLaren",
                              "nationality": "British"
                          },
                          "grid": "18",
                          "laps": "57",
                          "status": "Finished",
                          "Time": {
                              "millis": "5908559",
                              "time": "+54.975"
                          },
                          "FastestLap": {
                              "rank": "16",
                              "lap": "50",
                              "Time": {
                                  "time": "1:37.261"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "200.318"
                              }
                          }
                      },
                      {
                          "number": "4",
                          "position": "15",
                          "positionText": "15",
                          "points": "0",
                          "Driver": {
                              "driverId": "norris",
                              "permanentNumber": "4",
                              "code": "NOR",
                              "url": "http://en.wikipedia.org/wiki/Lando_Norris",
                              "givenName": "Lando",
                              "familyName": "Norris",
                              "dateOfBirth": "1999-11-13",
                              "nationality": "British"
                          },
                          "Constructor": {
                              "constructorId": "mclaren",
                              "url": "http://en.wikipedia.org/wiki/McLaren",
                              "name": "McLaren",
                              "nationality": "British"
                          },
                          "grid": "13",
                          "laps": "57",
                          "status": "Finished",
                          "Time": {
                              "millis": "5909919",
                              "time": "+56.335"
                          },
                          "FastestLap": {
                              "rank": "12",
                              "lap": "51",
                              "Time": {
                                  "time": "1:36.988"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "200.882"
                              }
                          }
                      },
                      {
                          "number": "6",
                          "position": "16",
                          "positionText": "16",
                          "points": "0",
                          "Driver": {
                              "driverId": "latifi",
                              "permanentNumber": "6",
                              "code": "LAT",
                              "url": "http://en.wikipedia.org/wiki/Nicholas_Latifi",
                              "givenName": "Nicholas",
                              "familyName": "Latifi",
                              "dateOfBirth": "1995-06-29",
                              "nationality": "Canadian"
                          },
                          "Constructor": {
                              "constructorId": "williams",
                              "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                              "name": "Williams",
                              "nationality": "British"
                          },
                          "grid": "20",
                          "laps": "57",
                          "status": "Finished",
                          "Time": {
                              "millis": "5915379",
                              "time": "+1:01.795"
                          },
                          "FastestLap": {
                              "rank": "20",
                              "lap": "51",
                              "Time": {
                                  "time": "1:38.251"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "198.300"
                              }
                          }
                      },
                      {
                          "number": "27",
                          "position": "17",
                          "positionText": "17",
                          "points": "0",
                          "Driver": {
                              "driverId": "hulkenberg",
                              "permanentNumber": "27",
                              "code": "HUL",
                              "url": "http://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg",
                              "givenName": "Nico",
                              "familyName": "Hülkenberg",
                              "dateOfBirth": "1987-08-19",
                              "nationality": "German"
                          },
                          "Constructor": {
                              "constructorId": "aston_martin",
                              "url": "http://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
                              "name": "Aston Martin",
                              "nationality": "British"
                          },
                          "grid": "17",
                          "laps": "57",
                          "status": "Finished",
                          "Time": {
                              "millis": "5917413",
                              "time": "+1:03.829"
                          },
                          "FastestLap": {
                              "rank": "19",
                              "lap": "49",
                              "Time": {
                                  "time": "1:38.201"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "198.401"
                              }
                          }
                      },
                      {
                          "number": "11",
                          "position": "18",
                          "positionText": "18",
                          "points": "0",
                          "Driver": {
                              "driverId": "perez",
                              "permanentNumber": "11",
                              "code": "PER",
                              "url": "http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez",
                              "givenName": "Sergio",
                              "familyName": "Pérez",
                              "dateOfBirth": "1990-01-26",
                              "nationality": "Mexican"
                          },
                          "Constructor": {
                              "constructorId": "red_bull",
                              "url": "http://en.wikipedia.org/wiki/Red_Bull_Racing",
                              "name": "Red Bull",
                              "nationality": "Austrian"
                          },
                          "grid": "4",
                          "laps": "56",
                          "status": "Engine",
                          "FastestLap": {
                              "rank": "4",
                              "lap": "52",
                              "Time": {
                                  "time": "1:36.089"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "202.762"
                              }
                          }
                      },
                      {
                          "number": "1",
                          "position": "19",
                          "positionText": "19",
                          "points": "0",
                          "Driver": {
                              "driverId": "max_verstappen",
                              "permanentNumber": "33",
                              "code": "VER",
                              "url": "http://en.wikipedia.org/wiki/Max_Verstappen",
                              "givenName": "Max",
                              "familyName": "Verstappen",
                              "dateOfBirth": "1997-09-30",
                              "nationality": "Dutch"
                          },
                          "Constructor": {
                              "constructorId": "red_bull",
                              "url": "http://en.wikipedia.org/wiki/Red_Bull_Racing",
                              "name": "Red Bull",
                              "nationality": "Austrian"
                          },
                          "grid": "2",
                          "laps": "54",
                          "status": "Steering",
                          "FastestLap": {
                              "rank": "2",
                              "lap": "51",
                              "Time": {
                                  "time": "1:35.440"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "204.140"
                              }
                          }
                      },
                      {
                          "number": "10",
                          "position": "20",
                          "positionText": "R",
                          "points": "0",
                          "Driver": {
                              "driverId": "gasly",
                              "permanentNumber": "10",
                              "code": "GAS",
                              "url": "http://en.wikipedia.org/wiki/Pierre_Gasly",
                              "givenName": "Pierre",
                              "familyName": "Gasly",
                              "dateOfBirth": "1996-02-07",
                              "nationality": "French"
                          },
                          "Constructor": {
                              "constructorId": "alphatauri",
                              "url": "http://en.wikipedia.org/wiki/Scuderia_AlphaTauri",
                              "name": "AlphaTauri",
                              "nationality": "Italian"
                          },
                          "grid": "10",
                          "laps": "44",
                          "status": "Engine",
                          "FastestLap": {
                              "rank": "17",
                              "lap": "34",
                              "Time": {
                                  "time": "1:37.324"
                              },
                              "AverageSpeed": {
                                  "units": "kph",
                                  "speed": "200.189"
                              }
                          }
                      }
                  ]
              }
          ]
      }
  }
};
export const MockCircuitQualifyingResponse2022: ErgastRaceResponse = {
  "MRData": {
      "xmlns": "http://ergast.com/mrd/1.5",
      "series": "f1",
      "url": "http://ergast.com/api/f1/2022/circuits/bahrain/qualifying.json",
      "limit": "100",
      "offset": "0",
      "total": "20",
      "RaceTable": {
          "season": "2022",
          "circuitId": "bahrain",
          "Races": [
              {
                  "season": "2022",
                  "round": "1",
                  "url": "http://en.wikipedia.org/wiki/2022_Bahrain_Grand_Prix",
                  "raceName": "Bahrain Grand Prix",
                  "Circuit": {
                      "circuitId": "bahrain",
                      "url": "http://en.wikipedia.org/wiki/Bahrain_International_Circuit",
                      "circuitName": "Bahrain International Circuit",
                      "Location": {
                          "lat": "26.0325",
                          "long": "50.5106",
                          "locality": "Sakhir",
                          "country": "Bahrain"
                      }
                  },
                  "date": "2022-03-20",
                  "time": "15:00:00Z",
                  "QualifyingResults": [
                      {
                          "number": "16",
                          "position": "1",
                          "Driver": {
                              "driverId": "leclerc",
                              "permanentNumber": "16",
                              "code": "LEC",
                              "url": "http://en.wikipedia.org/wiki/Charles_Leclerc",
                              "givenName": "Charles",
                              "familyName": "Leclerc",
                              "dateOfBirth": "1997-10-16",
                              "nationality": "Monegasque"
                          },
                          "Constructor": {
                              "constructorId": "ferrari",
                              "url": "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
                              "name": "Ferrari",
                              "nationality": "Italian"
                          },
                          "Q1": "1:31.471",
                          "Q2": "1:30.932",
                          "Q3": "1:30.558"
                      },
                      {
                          "number": "1",
                          "position": "2",
                          "Driver": {
                              "driverId": "max_verstappen",
                              "permanentNumber": "33",
                              "code": "VER",
                              "url": "http://en.wikipedia.org/wiki/Max_Verstappen",
                              "givenName": "Max",
                              "familyName": "Verstappen",
                              "dateOfBirth": "1997-09-30",
                              "nationality": "Dutch"
                          },
                          "Constructor": {
                              "constructorId": "red_bull",
                              "url": "http://en.wikipedia.org/wiki/Red_Bull_Racing",
                              "name": "Red Bull",
                              "nationality": "Austrian"
                          },
                          "Q1": "1:31.785",
                          "Q2": "1:30.757",
                          "Q3": "1:30.681"
                      },
                      {
                          "number": "55",
                          "position": "3",
                          "Driver": {
                              "driverId": "sainz",
                              "permanentNumber": "55",
                              "code": "SAI",
                              "url": "http://en.wikipedia.org/wiki/Carlos_Sainz_Jr.",
                              "givenName": "Carlos",
                              "familyName": "Sainz",
                              "dateOfBirth": "1994-09-01",
                              "nationality": "Spanish"
                          },
                          "Constructor": {
                              "constructorId": "ferrari",
                              "url": "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
                              "name": "Ferrari",
                              "nationality": "Italian"
                          },
                          "Q1": "1:31.567",
                          "Q2": "1:30.787",
                          "Q3": "1:30.687"
                      },
                      {
                          "number": "11",
                          "position": "4",
                          "Driver": {
                              "driverId": "perez",
                              "permanentNumber": "11",
                              "code": "PER",
                              "url": "http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez",
                              "givenName": "Sergio",
                              "familyName": "Pérez",
                              "dateOfBirth": "1990-01-26",
                              "nationality": "Mexican"
                          },
                          "Constructor": {
                              "constructorId": "red_bull",
                              "url": "http://en.wikipedia.org/wiki/Red_Bull_Racing",
                              "name": "Red Bull",
                              "nationality": "Austrian"
                          },
                          "Q1": "1:32.311",
                          "Q2": "1:31.008",
                          "Q3": "1:30.921"
                      },
                      {
                          "number": "44",
                          "position": "5",
                          "Driver": {
                              "driverId": "hamilton",
                              "permanentNumber": "44",
                              "code": "HAM",
                              "url": "http://en.wikipedia.org/wiki/Lewis_Hamilton",
                              "givenName": "Lewis",
                              "familyName": "Hamilton",
                              "dateOfBirth": "1985-01-07",
                              "nationality": "British"
                          },
                          "Constructor": {
                              "constructorId": "mercedes",
                              "url": "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
                              "name": "Mercedes",
                              "nationality": "German"
                          },
                          "Q1": "1:32.285",
                          "Q2": "1:31.048",
                          "Q3": "1:31.238"
                      },
                      {
                          "number": "77",
                          "position": "6",
                          "Driver": {
                              "driverId": "bottas",
                              "permanentNumber": "77",
                              "code": "BOT",
                              "url": "http://en.wikipedia.org/wiki/Valtteri_Bottas",
                              "givenName": "Valtteri",
                              "familyName": "Bottas",
                              "dateOfBirth": "1989-08-28",
                              "nationality": "Finnish"
                          },
                          "Constructor": {
                              "constructorId": "alfa",
                              "url": "http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One",
                              "name": "Alfa Romeo",
                              "nationality": "Swiss"
                          },
                          "Q1": "1:31.919",
                          "Q2": "1:31.717",
                          "Q3": "1:31.560"
                      },
                      {
                          "number": "20",
                          "position": "7",
                          "Driver": {
                              "driverId": "kevin_magnussen",
                              "permanentNumber": "20",
                              "code": "MAG",
                              "url": "http://en.wikipedia.org/wiki/Kevin_Magnussen",
                              "givenName": "Kevin",
                              "familyName": "Magnussen",
                              "dateOfBirth": "1992-10-05",
                              "nationality": "Danish"
                          },
                          "Constructor": {
                              "constructorId": "haas",
                              "url": "http://en.wikipedia.org/wiki/Haas_F1_Team",
                              "name": "Haas F1 Team",
                              "nationality": "American"
                          },
                          "Q1": "1:31.955",
                          "Q2": "1:31.461",
                          "Q3": "1:31.808"
                      },
                      {
                          "number": "14",
                          "position": "8",
                          "Driver": {
                              "driverId": "alonso",
                              "permanentNumber": "14",
                              "code": "ALO",
                              "url": "http://en.wikipedia.org/wiki/Fernando_Alonso",
                              "givenName": "Fernando",
                              "familyName": "Alonso",
                              "dateOfBirth": "1981-07-29",
                              "nationality": "Spanish"
                          },
                          "Constructor": {
                              "constructorId": "alpine",
                              "url": "http://en.wikipedia.org/wiki/Alpine_F1_Team",
                              "name": "Alpine F1 Team",
                              "nationality": "French"
                          },
                          "Q1": "1:32.346",
                          "Q2": "1:31.621",
                          "Q3": "1:32.195"
                      },
                      {
                          "number": "63",
                          "position": "9",
                          "Driver": {
                              "driverId": "russell",
                              "permanentNumber": "63",
                              "code": "RUS",
                              "url": "http://en.wikipedia.org/wiki/George_Russell_%28racing_driver%29",
                              "givenName": "George",
                              "familyName": "Russell",
                              "dateOfBirth": "1998-02-15",
                              "nationality": "British"
                          },
                          "Constructor": {
                              "constructorId": "mercedes",
                              "url": "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
                              "name": "Mercedes",
                              "nationality": "German"
                          },
                          "Q1": "1:32.269",
                          "Q2": "1:31.252",
                          "Q3": "1:32.216"
                      },
                      {
                          "number": "10",
                          "position": "10",
                          "Driver": {
                              "driverId": "gasly",
                              "permanentNumber": "10",
                              "code": "GAS",
                              "url": "http://en.wikipedia.org/wiki/Pierre_Gasly",
                              "givenName": "Pierre",
                              "familyName": "Gasly",
                              "dateOfBirth": "1996-02-07",
                              "nationality": "French"
                          },
                          "Constructor": {
                              "constructorId": "alphatauri",
                              "url": "http://en.wikipedia.org/wiki/Scuderia_AlphaTauri",
                              "name": "AlphaTauri",
                              "nationality": "Italian"
                          },
                          "Q1": "1:32.096",
                          "Q2": "1:31.635",
                          "Q3": "1:32.338"
                      },
                      {
                          "number": "31",
                          "position": "11",
                          "Driver": {
                              "driverId": "ocon",
                              "permanentNumber": "31",
                              "code": "OCO",
                              "url": "http://en.wikipedia.org/wiki/Esteban_Ocon",
                              "givenName": "Esteban",
                              "familyName": "Ocon",
                              "dateOfBirth": "1996-09-17",
                              "nationality": "French"
                          },
                          "Constructor": {
                              "constructorId": "alpine",
                              "url": "http://en.wikipedia.org/wiki/Alpine_F1_Team",
                              "name": "Alpine F1 Team",
                              "nationality": "French"
                          },
                          "Q1": "1:32.041",
                          "Q2": "1:31.782"
                      },
                      {
                          "number": "47",
                          "position": "12",
                          "Driver": {
                              "driverId": "mick_schumacher",
                              "permanentNumber": "47",
                              "code": "MSC",
                              "url": "http://en.wikipedia.org/wiki/Mick_Schumacher",
                              "givenName": "Mick",
                              "familyName": "Schumacher",
                              "dateOfBirth": "1999-03-22",
                              "nationality": "German"
                          },
                          "Constructor": {
                              "constructorId": "haas",
                              "url": "http://en.wikipedia.org/wiki/Haas_F1_Team",
                              "name": "Haas F1 Team",
                              "nationality": "American"
                          },
                          "Q1": "1:32.380",
                          "Q2": "1:31.998"
                      },
                      {
                          "number": "4",
                          "position": "13",
                          "Driver": {
                              "driverId": "norris",
                              "permanentNumber": "4",
                              "code": "NOR",
                              "url": "http://en.wikipedia.org/wiki/Lando_Norris",
                              "givenName": "Lando",
                              "familyName": "Norris",
                              "dateOfBirth": "1999-11-13",
                              "nationality": "British"
                          },
                          "Constructor": {
                              "constructorId": "mclaren",
                              "url": "http://en.wikipedia.org/wiki/McLaren",
                              "name": "McLaren",
                              "nationality": "British"
                          },
                          "Q1": "1:32.239",
                          "Q2": "1:32.008"
                      },
                      {
                          "number": "23",
                          "position": "14",
                          "Driver": {
                              "driverId": "albon",
                              "permanentNumber": "23",
                              "code": "ALB",
                              "url": "http://en.wikipedia.org/wiki/Alexander_Albon",
                              "givenName": "Alexander",
                              "familyName": "Albon",
                              "dateOfBirth": "1996-03-23",
                              "nationality": "Thai"
                          },
                          "Constructor": {
                              "constructorId": "williams",
                              "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                              "name": "Williams",
                              "nationality": "British"
                          },
                          "Q1": "1:32.726",
                          "Q2": "1:32.664"
                      },
                      {
                          "number": "24",
                          "position": "15",
                          "Driver": {
                              "driverId": "zhou",
                              "permanentNumber": "24",
                              "code": "ZHO",
                              "url": "http://en.wikipedia.org/wiki/Guanyu_Zhou",
                              "givenName": "Guanyu",
                              "familyName": "Zhou",
                              "dateOfBirth": "1999-05-30",
                              "nationality": "Chinese"
                          },
                          "Constructor": {
                              "constructorId": "alfa",
                              "url": "http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One",
                              "name": "Alfa Romeo",
                              "nationality": "Swiss"
                          },
                          "Q1": "1:32.493",
                          "Q2": "1:33.543"
                      },
                      {
                          "number": "22",
                          "position": "16",
                          "Driver": {
                              "driverId": "tsunoda",
                              "permanentNumber": "22",
                              "code": "TSU",
                              "url": "http://en.wikipedia.org/wiki/Yuki_Tsunoda",
                              "givenName": "Yuki",
                              "familyName": "Tsunoda",
                              "dateOfBirth": "2000-05-11",
                              "nationality": "Japanese"
                          },
                          "Constructor": {
                              "constructorId": "alphatauri",
                              "url": "http://en.wikipedia.org/wiki/Scuderia_AlphaTauri",
                              "name": "AlphaTauri",
                              "nationality": "Italian"
                          },
                          "Q1": "1:32.750"
                      },
                      {
                          "number": "27",
                          "position": "17",
                          "Driver": {
                              "driverId": "hulkenberg",
                              "permanentNumber": "27",
                              "code": "HUL",
                              "url": "http://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg",
                              "givenName": "Nico",
                              "familyName": "Hülkenberg",
                              "dateOfBirth": "1987-08-19",
                              "nationality": "German"
                          },
                          "Constructor": {
                              "constructorId": "aston_martin",
                              "url": "http://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
                              "name": "Aston Martin",
                              "nationality": "British"
                          },
                          "Q1": "1:32.777"
                      },
                      {
                          "number": "3",
                          "position": "18",
                          "Driver": {
                              "driverId": "ricciardo",
                              "permanentNumber": "3",
                              "code": "RIC",
                              "url": "http://en.wikipedia.org/wiki/Daniel_Ricciardo",
                              "givenName": "Daniel",
                              "familyName": "Ricciardo",
                              "dateOfBirth": "1989-07-01",
                              "nationality": "Australian"
                          },
                          "Constructor": {
                              "constructorId": "mclaren",
                              "url": "http://en.wikipedia.org/wiki/McLaren",
                              "name": "McLaren",
                              "nationality": "British"
                          },
                          "Q1": "1:32.945"
                      },
                      {
                          "number": "18",
                          "position": "19",
                          "Driver": {
                              "driverId": "stroll",
                              "permanentNumber": "18",
                              "code": "STR",
                              "url": "http://en.wikipedia.org/wiki/Lance_Stroll",
                              "givenName": "Lance",
                              "familyName": "Stroll",
                              "dateOfBirth": "1998-10-29",
                              "nationality": "Canadian"
                          },
                          "Constructor": {
                              "constructorId": "aston_martin",
                              "url": "http://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
                              "name": "Aston Martin",
                              "nationality": "British"
                          },
                          "Q1": "1:33.032"
                      },
                      {
                          "number": "6",
                          "position": "20",
                          "Driver": {
                              "driverId": "latifi",
                              "permanentNumber": "6",
                              "code": "LAT",
                              "url": "http://en.wikipedia.org/wiki/Nicholas_Latifi",
                              "givenName": "Nicholas",
                              "familyName": "Latifi",
                              "dateOfBirth": "1995-06-29",
                              "nationality": "Canadian"
                          },
                          "Constructor": {
                              "constructorId": "williams",
                              "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                              "name": "Williams",
                              "nationality": "British"
                          },
                          "Q1": "1:33.634"
                      }
                  ]
              }
          ]
      }
  }
};
export const MockCircuitQualifyingResponse2021: ErgastRaceResponse = {
  "MRData": {
      "xmlns": "http://ergast.com/mrd/1.5",
      "series": "f1",
      "url": "http://ergast.com/api/f1/2021/circuits/bahrain/qualifying.json",
      "limit": "100",
      "offset": "0",
      "total": "20",
      "RaceTable": {
          "season": "2021",
          "circuitId": "bahrain",
          "Races": [
              {
                  "season": "2021",
                  "round": "1",
                  "url": "http://en.wikipedia.org/wiki/2021_Bahrain_Grand_Prix",
                  "raceName": "Bahrain Grand Prix",
                  "Circuit": {
                      "circuitId": "bahrain",
                      "url": "http://en.wikipedia.org/wiki/Bahrain_International_Circuit",
                      "circuitName": "Bahrain International Circuit",
                      "Location": {
                          "lat": "26.0325",
                          "long": "50.5106",
                          "locality": "Sakhir",
                          "country": "Bahrain"
                      }
                  },
                  "date": "2021-03-28",
                  "time": "15:00:00Z",
                  "QualifyingResults": [
                      {
                          "number": "33",
                          "position": "1",
                          "Driver": {
                              "driverId": "max_verstappen",
                              "permanentNumber": "33",
                              "code": "VER",
                              "url": "http://en.wikipedia.org/wiki/Max_Verstappen",
                              "givenName": "Max",
                              "familyName": "Verstappen",
                              "dateOfBirth": "1997-09-30",
                              "nationality": "Dutch"
                          },
                          "Constructor": {
                              "constructorId": "red_bull",
                              "url": "http://en.wikipedia.org/wiki/Red_Bull_Racing",
                              "name": "Red Bull",
                              "nationality": "Austrian"
                          },
                          "Q1": "1:30.499",
                          "Q2": "1:30.318",
                          "Q3": "1:28.997"
                      },
                      {
                          "number": "44",
                          "position": "2",
                          "Driver": {
                              "driverId": "hamilton",
                              "permanentNumber": "44",
                              "code": "HAM",
                              "url": "http://en.wikipedia.org/wiki/Lewis_Hamilton",
                              "givenName": "Lewis",
                              "familyName": "Hamilton",
                              "dateOfBirth": "1985-01-07",
                              "nationality": "British"
                          },
                          "Constructor": {
                              "constructorId": "mercedes",
                              "url": "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
                              "name": "Mercedes",
                              "nationality": "German"
                          },
                          "Q1": "1:30.617",
                          "Q2": "1:30.085",
                          "Q3": "1:29.385"
                      },
                      {
                          "number": "77",
                          "position": "3",
                          "Driver": {
                              "driverId": "bottas",
                              "permanentNumber": "77",
                              "code": "BOT",
                              "url": "http://en.wikipedia.org/wiki/Valtteri_Bottas",
                              "givenName": "Valtteri",
                              "familyName": "Bottas",
                              "dateOfBirth": "1989-08-28",
                              "nationality": "Finnish"
                          },
                          "Constructor": {
                              "constructorId": "mercedes",
                              "url": "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
                              "name": "Mercedes",
                              "nationality": "German"
                          },
                          "Q1": "1:31.200",
                          "Q2": "1:30.186",
                          "Q3": "1:29.586"
                      },
                      {
                          "number": "16",
                          "position": "4",
                          "Driver": {
                              "driverId": "leclerc",
                              "permanentNumber": "16",
                              "code": "LEC",
                              "url": "http://en.wikipedia.org/wiki/Charles_Leclerc",
                              "givenName": "Charles",
                              "familyName": "Leclerc",
                              "dateOfBirth": "1997-10-16",
                              "nationality": "Monegasque"
                          },
                          "Constructor": {
                              "constructorId": "ferrari",
                              "url": "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
                              "name": "Ferrari",
                              "nationality": "Italian"
                          },
                          "Q1": "1:30.691",
                          "Q2": "1:30.010",
                          "Q3": "1:29.678"
                      },
                      {
                          "number": "10",
                          "position": "5",
                          "Driver": {
                              "driverId": "gasly",
                              "permanentNumber": "10",
                              "code": "GAS",
                              "url": "http://en.wikipedia.org/wiki/Pierre_Gasly",
                              "givenName": "Pierre",
                              "familyName": "Gasly",
                              "dateOfBirth": "1996-02-07",
                              "nationality": "French"
                          },
                          "Constructor": {
                              "constructorId": "alphatauri",
                              "url": "http://en.wikipedia.org/wiki/Scuderia_AlphaTauri",
                              "name": "AlphaTauri",
                              "nationality": "Italian"
                          },
                          "Q1": "1:30.848",
                          "Q2": "1:30.513",
                          "Q3": "1:29.809"
                      },
                      {
                          "number": "3",
                          "position": "6",
                          "Driver": {
                              "driverId": "ricciardo",
                              "permanentNumber": "3",
                              "code": "RIC",
                              "url": "http://en.wikipedia.org/wiki/Daniel_Ricciardo",
                              "givenName": "Daniel",
                              "familyName": "Ricciardo",
                              "dateOfBirth": "1989-07-01",
                              "nationality": "Australian"
                          },
                          "Constructor": {
                              "constructorId": "mclaren",
                              "url": "http://en.wikipedia.org/wiki/McLaren",
                              "name": "McLaren",
                              "nationality": "British"
                          },
                          "Q1": "1:30.795",
                          "Q2": "1:30.222",
                          "Q3": "1:29.927"
                      },
                      {
                          "number": "4",
                          "position": "7",
                          "Driver": {
                              "driverId": "norris",
                              "permanentNumber": "4",
                              "code": "NOR",
                              "url": "http://en.wikipedia.org/wiki/Lando_Norris",
                              "givenName": "Lando",
                              "familyName": "Norris",
                              "dateOfBirth": "1999-11-13",
                              "nationality": "British"
                          },
                          "Constructor": {
                              "constructorId": "mclaren",
                              "url": "http://en.wikipedia.org/wiki/McLaren",
                              "name": "McLaren",
                              "nationality": "British"
                          },
                          "Q1": "1:30.902",
                          "Q2": "1:30.099",
                          "Q3": "1:29.974"
                      },
                      {
                          "number": "55",
                          "position": "8",
                          "Driver": {
                              "driverId": "sainz",
                              "permanentNumber": "55",
                              "code": "SAI",
                              "url": "http://en.wikipedia.org/wiki/Carlos_Sainz_Jr.",
                              "givenName": "Carlos",
                              "familyName": "Sainz",
                              "dateOfBirth": "1994-09-01",
                              "nationality": "Spanish"
                          },
                          "Constructor": {
                              "constructorId": "ferrari",
                              "url": "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
                              "name": "Ferrari",
                              "nationality": "Italian"
                          },
                          "Q1": "1:31.653",
                          "Q2": "1:30.009",
                          "Q3": "1:30.215"
                      },
                      {
                          "number": "14",
                          "position": "9",
                          "Driver": {
                              "driverId": "alonso",
                              "permanentNumber": "14",
                              "code": "ALO",
                              "url": "http://en.wikipedia.org/wiki/Fernando_Alonso",
                              "givenName": "Fernando",
                              "familyName": "Alonso",
                              "dateOfBirth": "1981-07-29",
                              "nationality": "Spanish"
                          },
                          "Constructor": {
                              "constructorId": "alpine",
                              "url": "http://en.wikipedia.org/wiki/Alpine_F1_Team",
                              "name": "Alpine F1 Team",
                              "nationality": "French"
                          },
                          "Q1": "1:30.863",
                          "Q2": "1:30.595",
                          "Q3": "1:30.249"
                      },
                      {
                          "number": "18",
                          "position": "10",
                          "Driver": {
                              "driverId": "stroll",
                              "permanentNumber": "18",
                              "code": "STR",
                              "url": "http://en.wikipedia.org/wiki/Lance_Stroll",
                              "givenName": "Lance",
                              "familyName": "Stroll",
                              "dateOfBirth": "1998-10-29",
                              "nationality": "Canadian"
                          },
                          "Constructor": {
                              "constructorId": "aston_martin",
                              "url": "http://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
                              "name": "Aston Martin",
                              "nationality": "British"
                          },
                          "Q1": "1:31.261",
                          "Q2": "1:30.624",
                          "Q3": "1:30.601"
                      },
                      {
                          "number": "11",
                          "position": "11",
                          "Driver": {
                              "driverId": "perez",
                              "permanentNumber": "11",
                              "code": "PER",
                              "url": "http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez",
                              "givenName": "Sergio",
                              "familyName": "Pérez",
                              "dateOfBirth": "1990-01-26",
                              "nationality": "Mexican"
                          },
                          "Constructor": {
                              "constructorId": "red_bull",
                              "url": "http://en.wikipedia.org/wiki/Red_Bull_Racing",
                              "name": "Red Bull",
                              "nationality": "Austrian"
                          },
                          "Q1": "1:31.165",
                          "Q2": "1:30.659"
                      },
                      {
                          "number": "99",
                          "position": "12",
                          "Driver": {
                              "driverId": "giovinazzi",
                              "permanentNumber": "99",
                              "code": "GIO",
                              "url": "http://en.wikipedia.org/wiki/Antonio_Giovinazzi",
                              "givenName": "Antonio",
                              "familyName": "Giovinazzi",
                              "dateOfBirth": "1993-12-14",
                              "nationality": "Italian"
                          },
                          "Constructor": {
                              "constructorId": "alfa",
                              "url": "http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One",
                              "name": "Alfa Romeo",
                              "nationality": "Swiss"
                          },
                          "Q1": "1:30.998",
                          "Q2": "1:30.708"
                      },
                      {
                          "number": "22",
                          "position": "13",
                          "Driver": {
                              "driverId": "tsunoda",
                              "permanentNumber": "22",
                              "code": "TSU",
                              "url": "http://en.wikipedia.org/wiki/Yuki_Tsunoda",
                              "givenName": "Yuki",
                              "familyName": "Tsunoda",
                              "dateOfBirth": "2000-05-11",
                              "nationality": "Japanese"
                          },
                          "Constructor": {
                              "constructorId": "alphatauri",
                              "url": "http://en.wikipedia.org/wiki/Scuderia_AlphaTauri",
                              "name": "AlphaTauri",
                              "nationality": "Italian"
                          },
                          "Q1": "1:30.607",
                          "Q2": "1:31.203"
                      },
                      {
                          "number": "7",
                          "position": "14",
                          "Driver": {
                              "driverId": "raikkonen",
                              "permanentNumber": "7",
                              "code": "RAI",
                              "url": "http://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen",
                              "givenName": "Kimi",
                              "familyName": "Räikkönen",
                              "dateOfBirth": "1979-10-17",
                              "nationality": "Finnish"
                          },
                          "Constructor": {
                              "constructorId": "alfa",
                              "url": "http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One",
                              "name": "Alfa Romeo",
                              "nationality": "Swiss"
                          },
                          "Q1": "1:31.547",
                          "Q2": "1:31.238"
                      },
                      {
                          "number": "63",
                          "position": "15",
                          "Driver": {
                              "driverId": "russell",
                              "permanentNumber": "63",
                              "code": "RUS",
                              "url": "http://en.wikipedia.org/wiki/George_Russell_%28racing_driver%29",
                              "givenName": "George",
                              "familyName": "Russell",
                              "dateOfBirth": "1998-02-15",
                              "nationality": "British"
                          },
                          "Constructor": {
                              "constructorId": "williams",
                              "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                              "name": "Williams",
                              "nationality": "British"
                          },
                          "Q1": "1:31.316",
                          "Q2": "1:33.430"
                      },
                      {
                          "number": "31",
                          "position": "16",
                          "Driver": {
                              "driverId": "ocon",
                              "permanentNumber": "31",
                              "code": "OCO",
                              "url": "http://en.wikipedia.org/wiki/Esteban_Ocon",
                              "givenName": "Esteban",
                              "familyName": "Ocon",
                              "dateOfBirth": "1996-09-17",
                              "nationality": "French"
                          },
                          "Constructor": {
                              "constructorId": "alpine",
                              "url": "http://en.wikipedia.org/wiki/Alpine_F1_Team",
                              "name": "Alpine F1 Team",
                              "nationality": "French"
                          },
                          "Q1": "1:31.724"
                      },
                      {
                          "number": "6",
                          "position": "17",
                          "Driver": {
                              "driverId": "latifi",
                              "permanentNumber": "6",
                              "code": "LAT",
                              "url": "http://en.wikipedia.org/wiki/Nicholas_Latifi",
                              "givenName": "Nicholas",
                              "familyName": "Latifi",
                              "dateOfBirth": "1995-06-29",
                              "nationality": "Canadian"
                          },
                          "Constructor": {
                              "constructorId": "williams",
                              "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                              "name": "Williams",
                              "nationality": "British"
                          },
                          "Q1": "1:31.936"
                      },
                      {
                          "number": "5",
                          "position": "18",
                          "Driver": {
                              "driverId": "vettel",
                              "permanentNumber": "5",
                              "code": "VET",
                              "url": "http://en.wikipedia.org/wiki/Sebastian_Vettel",
                              "givenName": "Sebastian",
                              "familyName": "Vettel",
                              "dateOfBirth": "1987-07-03",
                              "nationality": "German"
                          },
                          "Constructor": {
                              "constructorId": "aston_martin",
                              "url": "http://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
                              "name": "Aston Martin",
                              "nationality": "British"
                          },
                          "Q1": "1:32.056"
                      },
                      {
                          "number": "47",
                          "position": "19",
                          "Driver": {
                              "driverId": "mick_schumacher",
                              "permanentNumber": "47",
                              "code": "MSC",
                              "url": "http://en.wikipedia.org/wiki/Mick_Schumacher",
                              "givenName": "Mick",
                              "familyName": "Schumacher",
                              "dateOfBirth": "1999-03-22",
                              "nationality": "German"
                          },
                          "Constructor": {
                              "constructorId": "haas",
                              "url": "http://en.wikipedia.org/wiki/Haas_F1_Team",
                              "name": "Haas F1 Team",
                              "nationality": "American"
                          },
                          "Q1": "1:32.449"
                      },
                      {
                          "number": "9",
                          "position": "20",
                          "Driver": {
                              "driverId": "mazepin",
                              "permanentNumber": "9",
                              "code": "MAZ",
                              "url": "http://en.wikipedia.org/wiki/Nikita_Mazepin",
                              "givenName": "Nikita",
                              "familyName": "Mazepin",
                              "dateOfBirth": "1999-03-02",
                              "nationality": "Russian"
                          },
                          "Constructor": {
                              "constructorId": "haas",
                              "url": "http://en.wikipedia.org/wiki/Haas_F1_Team",
                              "name": "Haas F1 Team",
                              "nationality": "American"
                          },
                          "Q1": "1:33.273"
                      }
                  ]
              }
          ]
      }
  }
};
export const MockAllFormula1CircuitsResponse: ErgastCircuitResponse = {
  "MRData": {
      "xmlns": "http://ergast.com/mrd/1.5",
      "series": "f1",
      "url": "http://ergast.com/api/f1/circuits.json",
      "limit": "100",
      "offset": "0",
      "total": "76",
      "CircuitTable": {
          "Circuits": [
              {
                  "circuitId": "adelaide",
                  "url": "http://en.wikipedia.org/wiki/Adelaide_Street_Circuit",
                  "circuitName": "Adelaide Street Circuit",
                  "Location": {
                      "lat": "-34.9272",
                      "long": "138.617",
                      "locality": "Adelaide",
                      "country": "Australia"
                  }
              },
              {
                  "circuitId": "ain-diab",
                  "url": "http://en.wikipedia.org/wiki/Ain-Diab_Circuit",
                  "circuitName": "Ain Diab",
                  "Location": {
                      "lat": "33.5786",
                      "long": "-7.6875",
                      "locality": "Casablanca",
                      "country": "Morocco"
                  }
              },
              {
                  "circuitId": "aintree",
                  "url": "http://en.wikipedia.org/wiki/Aintree_Motor_Racing_Circuit",
                  "circuitName": "Aintree",
                  "Location": {
                      "lat": "53.4769",
                      "long": "-2.94056",
                      "locality": "Liverpool",
                      "country": "UK"
                  }
              },
              {
                  "circuitId": "albert_park",
                  "url": "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
                  "circuitName": "Albert Park Grand Prix Circuit",
                  "Location": {
                      "lat": "-37.8497",
                      "long": "144.968",
                      "locality": "Melbourne",
                      "country": "Australia"
                  }
              },
              {
                  "circuitId": "americas",
                  "url": "http://en.wikipedia.org/wiki/Circuit_of_the_Americas",
                  "circuitName": "Circuit of the Americas",
                  "Location": {
                      "lat": "30.1328",
                      "long": "-97.6411",
                      "locality": "Austin",
                      "country": "USA"
                  }
              },
              {
                  "circuitId": "anderstorp",
                  "url": "http://en.wikipedia.org/wiki/Scandinavian_Raceway",
                  "circuitName": "Scandinavian Raceway",
                  "Location": {
                      "lat": "57.2653",
                      "long": "13.6042",
                      "locality": "Anderstorp",
                      "country": "Sweden"
                  }
              },
              {
                  "circuitId": "avus",
                  "url": "http://en.wikipedia.org/wiki/AVUS",
                  "circuitName": "AVUS",
                  "Location": {
                      "lat": "52.4806",
                      "long": "13.2514",
                      "locality": "Berlin",
                      "country": "Germany"
                  }
              },
              {
                  "circuitId": "bahrain",
                  "url": "http://en.wikipedia.org/wiki/Bahrain_International_Circuit",
                  "circuitName": "Bahrain International Circuit",
                  "Location": {
                      "lat": "26.0325",
                      "long": "50.5106",
                      "locality": "Sakhir",
                      "country": "Bahrain"
                  }
              },
              {
                  "circuitId": "baku",
                  "url": "http://en.wikipedia.org/wiki/Baku_City_Circuit",
                  "circuitName": "Baku City Circuit",
                  "Location": {
                      "lat": "40.3725",
                      "long": "49.8533",
                      "locality": "Baku",
                      "country": "Azerbaijan"
                  }
              },
              {
                  "circuitId": "boavista",
                  "url": "http://en.wikipedia.org/wiki/Circuito_da_Boavista",
                  "circuitName": "Circuito da Boavista",
                  "Location": {
                      "lat": "41.1705",
                      "long": "-8.67325",
                      "locality": "Oporto",
                      "country": "Portugal"
                  }
              },
              {
                  "circuitId": "brands_hatch",
                  "url": "http://en.wikipedia.org/wiki/Brands_Hatch",
                  "circuitName": "Brands Hatch",
                  "Location": {
                      "lat": "51.3569",
                      "long": "0.263056",
                      "locality": "Kent",
                      "country": "UK"
                  }
              },
              {
                  "circuitId": "bremgarten",
                  "url": "http://en.wikipedia.org/wiki/Circuit_Bremgarten",
                  "circuitName": "Circuit Bremgarten",
                  "Location": {
                      "lat": "46.9589",
                      "long": "7.40194",
                      "locality": "Bern",
                      "country": "Switzerland"
                  }
              },
              {
                  "circuitId": "buddh",
                  "url": "http://en.wikipedia.org/wiki/Buddh_International_Circuit",
                  "circuitName": "Buddh International Circuit",
                  "Location": {
                      "lat": "28.3487",
                      "long": "77.5331",
                      "locality": "Uttar Pradesh",
                      "country": "India"
                  }
              },
              {
                  "circuitId": "catalunya",
                  "url": "http://en.wikipedia.org/wiki/Circuit_de_Barcelona-Catalunya",
                  "circuitName": "Circuit de Barcelona-Catalunya",
                  "Location": {
                      "lat": "41.57",
                      "long": "2.26111",
                      "locality": "Montmeló",
                      "country": "Spain"
                  }
              },
              {
                  "circuitId": "charade",
                  "url": "http://en.wikipedia.org/wiki/Charade_Circuit",
                  "circuitName": "Charade Circuit",
                  "Location": {
                      "lat": "45.7472",
                      "long": "3.03889",
                      "locality": "Clermont-Ferrand",
                      "country": "France"
                  }
              },
              {
                  "circuitId": "dallas",
                  "url": "http://en.wikipedia.org/wiki/Fair_Park",
                  "circuitName": "Fair Park",
                  "Location": {
                      "lat": "32.7774",
                      "long": "-96.7587",
                      "locality": "Dallas",
                      "country": "USA"
                  }
              },
              {
                  "circuitId": "detroit",
                  "url": "http://en.wikipedia.org/wiki/Detroit_street_circuit",
                  "circuitName": "Detroit Street Circuit",
                  "Location": {
                      "lat": "42.3298",
                      "long": "-83.0401",
                      "locality": "Detroit",
                      "country": "USA"
                  }
              },
              {
                  "circuitId": "dijon",
                  "url": "http://en.wikipedia.org/wiki/Dijon-Prenois",
                  "circuitName": "Dijon-Prenois",
                  "Location": {
                      "lat": "47.3625",
                      "long": "4.89913",
                      "locality": "Dijon",
                      "country": "France"
                  }
              },
              {
                  "circuitId": "donington",
                  "url": "http://en.wikipedia.org/wiki/Donington_Park",
                  "circuitName": "Donington Park",
                  "Location": {
                      "lat": "52.8306",
                      "long": "-1.37528",
                      "locality": "Castle Donington",
                      "country": "UK"
                  }
              },
              {
                  "circuitId": "essarts",
                  "url": "http://en.wikipedia.org/wiki/Rouen-Les-Essarts",
                  "circuitName": "Rouen-Les-Essarts",
                  "Location": {
                      "lat": "49.3306",
                      "long": "1.00458",
                      "locality": "Rouen",
                      "country": "France"
                  }
              },
              {
                  "circuitId": "estoril",
                  "url": "http://en.wikipedia.org/wiki/Aut%C3%B3dromo_do_Estoril",
                  "circuitName": "Autódromo do Estoril",
                  "Location": {
                      "lat": "38.7506",
                      "long": "-9.39417",
                      "locality": "Estoril",
                      "country": "Portugal"
                  }
              },
              {
                  "circuitId": "fuji",
                  "url": "http://en.wikipedia.org/wiki/Fuji_Speedway",
                  "circuitName": "Fuji Speedway",
                  "Location": {
                      "lat": "35.3717",
                      "long": "138.927",
                      "locality": "Oyama",
                      "country": "Japan"
                  }
              },
              {
                  "circuitId": "galvez",
                  "url": "http://en.wikipedia.org/wiki/Aut%C3%B3dromo_Oscar_Alfredo_G%C3%A1lvez",
                  "circuitName": "Autódromo Juan y Oscar Gálvez",
                  "Location": {
                      "lat": "-34.6943",
                      "long": "-58.4593",
                      "locality": "Buenos Aires",
                      "country": "Argentina"
                  }
              },
              {
                  "circuitId": "george",
                  "url": "http://en.wikipedia.org/wiki/Prince_George_Circuit",
                  "circuitName": "Prince George Circuit",
                  "Location": {
                      "lat": "-33.0486",
                      "long": "27.8736",
                      "locality": "Eastern Cape Province",
                      "country": "South Africa"
                  }
              },
              {
                  "circuitId": "hockenheimring",
                  "url": "http://en.wikipedia.org/wiki/Hockenheimring",
                  "circuitName": "Hockenheimring",
                  "Location": {
                      "lat": "49.3278",
                      "long": "8.56583",
                      "locality": "Hockenheim",
                      "country": "Germany"
                  }
              },
              {
                  "circuitId": "hungaroring",
                  "url": "http://en.wikipedia.org/wiki/Hungaroring",
                  "circuitName": "Hungaroring",
                  "Location": {
                      "lat": "47.5789",
                      "long": "19.2486",
                      "locality": "Budapest",
                      "country": "Hungary"
                  }
              },
              {
                  "circuitId": "imola",
                  "url": "http://en.wikipedia.org/wiki/Autodromo_Enzo_e_Dino_Ferrari",
                  "circuitName": "Autodromo Enzo e Dino Ferrari",
                  "Location": {
                      "lat": "44.3439",
                      "long": "11.7167",
                      "locality": "Imola",
                      "country": "Italy"
                  }
              },
              {
                  "circuitId": "indianapolis",
                  "url": "http://en.wikipedia.org/wiki/Indianapolis_Motor_Speedway",
                  "circuitName": "Indianapolis Motor Speedway",
                  "Location": {
                      "lat": "39.795",
                      "long": "-86.2347",
                      "locality": "Indianapolis",
                      "country": "USA"
                  }
              },
              {
                  "circuitId": "interlagos",
                  "url": "http://en.wikipedia.org/wiki/Aut%C3%B3dromo_Jos%C3%A9_Carlos_Pace",
                  "circuitName": "Autódromo José Carlos Pace",
                  "Location": {
                      "lat": "-23.7036",
                      "long": "-46.6997",
                      "locality": "São Paulo",
                      "country": "Brazil"
                  }
              },
              {
                  "circuitId": "istanbul",
                  "url": "http://en.wikipedia.org/wiki/Istanbul_Park",
                  "circuitName": "Istanbul Park",
                  "Location": {
                      "lat": "40.9517",
                      "long": "29.405",
                      "locality": "Istanbul",
                      "country": "Turkey"
                  }
              },
              {
                  "circuitId": "jacarepagua",
                  "url": "http://en.wikipedia.org/wiki/Aut%C3%B3dromo_Internacional_Nelson_Piquet",
                  "circuitName": "Autódromo Internacional Nelson Piquet",
                  "Location": {
                      "lat": "-22.9756",
                      "long": "-43.395",
                      "locality": "Rio de Janeiro",
                      "country": "Brazil"
                  }
              },
              {
                  "circuitId": "jarama",
                  "url": "http://en.wikipedia.org/wiki/Circuito_Permanente_Del_Jarama",
                  "circuitName": "Jarama",
                  "Location": {
                      "lat": "40.6171",
                      "long": "-3.58558",
                      "locality": "Madrid",
                      "country": "Spain"
                  }
              },
              {
                  "circuitId": "jeddah",
                  "url": "http://en.wikipedia.org/wiki/Jeddah_Street_Circuit",
                  "circuitName": "Jeddah Corniche Circuit",
                  "Location": {
                      "lat": "21.6319",
                      "long": "39.1044",
                      "locality": "Jeddah",
                      "country": "Saudi Arabia"
                  }
              },
              {
                  "circuitId": "jerez",
                  "url": "http://en.wikipedia.org/wiki/Circuito_Permanente_de_Jerez",
                  "circuitName": "Circuito de Jerez",
                  "Location": {
                      "lat": "36.7083",
                      "long": "-6.03417",
                      "locality": "Jerez de la Frontera",
                      "country": "Spain"
                  }
              },
              {
                  "circuitId": "kyalami",
                  "url": "http://en.wikipedia.org/wiki/Kyalami",
                  "circuitName": "Kyalami",
                  "Location": {
                      "lat": "-25.9894",
                      "long": "28.0767",
                      "locality": "Midrand",
                      "country": "South Africa"
                  }
              },
              {
                  "circuitId": "las_vegas",
                  "url": "http://en.wikipedia.org/wiki/Las_Vegas,_Nevada",
                  "circuitName": "Las Vegas Street Circuit",
                  "Location": {
                      "lat": "36.1162",
                      "long": "-115.174",
                      "locality": "Nevada",
                      "country": "USA"
                  }
              },
              {
                  "circuitId": "lemans",
                  "url": "http://en.wikipedia.org/wiki/Circuit_de_la_Sarthe#Bugatti_Circuit",
                  "circuitName": "Le Mans",
                  "Location": {
                      "lat": "47.95",
                      "long": "0.224231",
                      "locality": "Le Mans",
                      "country": "France"
                  }
              },
              {
                  "circuitId": "long_beach",
                  "url": "http://en.wikipedia.org/wiki/Long_Beach,_California",
                  "circuitName": "Long Beach",
                  "Location": {
                      "lat": "33.7651",
                      "long": "-118.189",
                      "locality": "California",
                      "country": "USA"
                  }
              },
              {
                  "circuitId": "losail",
                  "url": "http://en.wikipedia.org/wiki/Losail_International_Circuit",
                  "circuitName": "Losail International Circuit",
                  "Location": {
                      "lat": "25.49",
                      "long": "51.4542",
                      "locality": "Al Daayen",
                      "country": "Qatar"
                  }
              },
              {
                  "circuitId": "magny_cours",
                  "url": "http://en.wikipedia.org/wiki/Circuit_de_Nevers_Magny-Cours",
                  "circuitName": "Circuit de Nevers Magny-Cours",
                  "Location": {
                      "lat": "46.8642",
                      "long": "3.16361",
                      "locality": "Magny Cours",
                      "country": "France"
                  }
              },
              {
                  "circuitId": "marina_bay",
                  "url": "http://en.wikipedia.org/wiki/Marina_Bay_Street_Circuit",
                  "circuitName": "Marina Bay Street Circuit",
                  "Location": {
                      "lat": "1.2914",
                      "long": "103.864",
                      "locality": "Marina Bay",
                      "country": "Singapore"
                  }
              },
              {
                  "circuitId": "miami",
                  "url": "http://en.wikipedia.org/wiki/Miami_International_Autodrome",
                  "circuitName": "Miami International Autodrome",
                  "Location": {
                      "lat": "25.9581",
                      "long": "-80.2389",
                      "locality": "Miami",
                      "country": "USA"
                  }
              },
              {
                  "circuitId": "monaco",
                  "url": "http://en.wikipedia.org/wiki/Circuit_de_Monaco",
                  "circuitName": "Circuit de Monaco",
                  "Location": {
                      "lat": "43.7347",
                      "long": "7.42056",
                      "locality": "Monte-Carlo",
                      "country": "Monaco"
                  }
              },
              {
                  "circuitId": "monsanto",
                  "url": "http://en.wikipedia.org/wiki/Monsanto_Park_Circuit",
                  "circuitName": "Monsanto Park Circuit",
                  "Location": {
                      "lat": "38.7197",
                      "long": "-9.20306",
                      "locality": "Lisbon",
                      "country": "Portugal"
                  }
              },
              {
                  "circuitId": "montjuic",
                  "url": "http://en.wikipedia.org/wiki/Montju%C3%AFc_circuit",
                  "circuitName": "Montjuïc",
                  "Location": {
                      "lat": "41.3664",
                      "long": "2.15167",
                      "locality": "Barcelona",
                      "country": "Spain"
                  }
              },
              {
                  "circuitId": "monza",
                  "url": "http://en.wikipedia.org/wiki/Autodromo_Nazionale_Monza",
                  "circuitName": "Autodromo Nazionale di Monza",
                  "Location": {
                      "lat": "45.6156",
                      "long": "9.28111",
                      "locality": "Monza",
                      "country": "Italy"
                  }
              },
              {
                  "circuitId": "mosport",
                  "url": "http://en.wikipedia.org/wiki/Mosport",
                  "circuitName": "Mosport International Raceway",
                  "Location": {
                      "lat": "44.0481",
                      "long": "-78.6756",
                      "locality": "Ontario",
                      "country": "Canada"
                  }
              },
              {
                  "circuitId": "mugello",
                  "url": "http://en.wikipedia.org/wiki/Mugello_Circuit",
                  "circuitName": "Autodromo Internazionale del Mugello",
                  "Location": {
                      "lat": "43.9975",
                      "long": "11.3719",
                      "locality": "Mugello",
                      "country": "Italy"
                  }
              },
              {
                  "circuitId": "nivelles",
                  "url": "http://en.wikipedia.org/wiki/Nivelles-Baulers",
                  "circuitName": "Nivelles-Baulers",
                  "Location": {
                      "lat": "50.6211",
                      "long": "4.32694",
                      "locality": "Brussels",
                      "country": "Belgium"
                  }
              },
              {
                  "circuitId": "nurburgring",
                  "url": "http://en.wikipedia.org/wiki/N%C3%BCrburgring",
                  "circuitName": "Nürburgring",
                  "Location": {
                      "lat": "50.3356",
                      "long": "6.9475",
                      "locality": "Nürburg",
                      "country": "Germany"
                  }
              },
              {
                  "circuitId": "okayama",
                  "url": "http://en.wikipedia.org/wiki/TI_Circuit",
                  "circuitName": "Okayama International Circuit",
                  "Location": {
                      "lat": "34.915",
                      "long": "134.221",
                      "locality": "Okayama",
                      "country": "Japan"
                  }
              },
              {
                  "circuitId": "pedralbes",
                  "url": "http://en.wikipedia.org/wiki/Pedralbes_Circuit",
                  "circuitName": "Circuit de Pedralbes",
                  "Location": {
                      "lat": "41.3903",
                      "long": "2.11667",
                      "locality": "Barcelona",
                      "country": "Spain"
                  }
              },
              {
                  "circuitId": "pescara",
                  "url": "http://en.wikipedia.org/wiki/Pescara_Circuit",
                  "circuitName": "Pescara Circuit",
                  "Location": {
                      "lat": "42.475",
                      "long": "14.1508",
                      "locality": "Pescara",
                      "country": "Italy"
                  }
              },
              {
                  "circuitId": "phoenix",
                  "url": "http://en.wikipedia.org/wiki/Phoenix_street_circuit",
                  "circuitName": "Phoenix street circuit",
                  "Location": {
                      "lat": "33.4479",
                      "long": "-112.075",
                      "locality": "Phoenix",
                      "country": "USA"
                  }
              },
              {
                  "circuitId": "portimao",
                  "url": "http://en.wikipedia.org/wiki/Algarve_International_Circuit",
                  "circuitName": "Autódromo Internacional do Algarve",
                  "Location": {
                      "lat": "37.227",
                      "long": "-8.6267",
                      "locality": "Portimão",
                      "country": "Portugal"
                  }
              },
              {
                  "circuitId": "red_bull_ring",
                  "url": "http://en.wikipedia.org/wiki/Red_Bull_Ring",
                  "circuitName": "Red Bull Ring",
                  "Location": {
                      "lat": "47.2197",
                      "long": "14.7647",
                      "locality": "Spielberg",
                      "country": "Austria"
                  }
              },
              {
                  "circuitId": "reims",
                  "url": "http://en.wikipedia.org/wiki/Reims-Gueux",
                  "circuitName": "Reims-Gueux",
                  "Location": {
                      "lat": "49.2542",
                      "long": "3.93083",
                      "locality": "Reims",
                      "country": "France"
                  }
              },
              {
                  "circuitId": "ricard",
                  "url": "http://en.wikipedia.org/wiki/Paul_Ricard_Circuit",
                  "circuitName": "Circuit Paul Ricard",
                  "Location": {
                      "lat": "43.2506",
                      "long": "5.79167",
                      "locality": "Le Castellet",
                      "country": "France"
                  }
              },
              {
                  "circuitId": "riverside",
                  "url": "http://en.wikipedia.org/wiki/Riverside_International_Raceway",
                  "circuitName": "Riverside International Raceway",
                  "Location": {
                      "lat": "33.937",
                      "long": "-117.273",
                      "locality": "California",
                      "country": "USA"
                  }
              },
              {
                  "circuitId": "rodriguez",
                  "url": "http://en.wikipedia.org/wiki/Aut%C3%B3dromo_Hermanos_Rodr%C3%ADguez",
                  "circuitName": "Autódromo Hermanos Rodríguez",
                  "Location": {
                      "lat": "19.4042",
                      "long": "-99.0907",
                      "locality": "Mexico City",
                      "country": "Mexico"
                  }
              },
              {
                  "circuitId": "sebring",
                  "url": "http://en.wikipedia.org/wiki/Sebring_Raceway",
                  "circuitName": "Sebring International Raceway",
                  "Location": {
                      "lat": "27.4547",
                      "long": "-81.3483",
                      "locality": "Florida",
                      "country": "USA"
                  }
              },
              {
                  "circuitId": "sepang",
                  "url": "http://en.wikipedia.org/wiki/Sepang_International_Circuit",
                  "circuitName": "Sepang International Circuit",
                  "Location": {
                      "lat": "2.76083",
                      "long": "101.738",
                      "locality": "Kuala Lumpur",
                      "country": "Malaysia"
                  }
              },
              {
                  "circuitId": "shanghai",
                  "url": "http://en.wikipedia.org/wiki/Shanghai_International_Circuit",
                  "circuitName": "Shanghai International Circuit",
                  "Location": {
                      "lat": "31.3389",
                      "long": "121.22",
                      "locality": "Shanghai",
                      "country": "China"
                  }
              },
              {
                  "circuitId": "silverstone",
                  "url": "http://en.wikipedia.org/wiki/Silverstone_Circuit",
                  "circuitName": "Silverstone Circuit",
                  "Location": {
                      "lat": "52.0786",
                      "long": "-1.01694",
                      "locality": "Silverstone",
                      "country": "UK"
                  }
              },
              {
                  "circuitId": "sochi",
                  "url": "http://en.wikipedia.org/wiki/Sochi_Autodrom",
                  "circuitName": "Sochi Autodrom",
                  "Location": {
                      "lat": "43.4057",
                      "long": "39.9578",
                      "locality": "Sochi",
                      "country": "Russia"
                  }
              },
              {
                  "circuitId": "spa",
                  "url": "http://en.wikipedia.org/wiki/Circuit_de_Spa-Francorchamps",
                  "circuitName": "Circuit de Spa-Francorchamps",
                  "Location": {
                      "lat": "50.4372",
                      "long": "5.97139",
                      "locality": "Spa",
                      "country": "Belgium"
                  }
              },
              {
                  "circuitId": "suzuka",
                  "url": "http://en.wikipedia.org/wiki/Suzuka_Circuit",
                  "circuitName": "Suzuka Circuit",
                  "Location": {
                      "lat": "34.8431",
                      "long": "136.541",
                      "locality": "Suzuka",
                      "country": "Japan"
                  }
              },
              {
                  "circuitId": "tremblant",
                  "url": "http://en.wikipedia.org/wiki/Circuit_Mont-Tremblant",
                  "circuitName": "Circuit Mont-Tremblant",
                  "Location": {
                      "lat": "46.1877",
                      "long": "-74.6099",
                      "locality": "Quebec",
                      "country": "Canada"
                  }
              },
              {
                  "circuitId": "valencia",
                  "url": "http://en.wikipedia.org/wiki/Valencia_Street_Circuit",
                  "circuitName": "Valencia Street Circuit",
                  "Location": {
                      "lat": "39.4589",
                      "long": "-0.331667",
                      "locality": "Valencia",
                      "country": "Spain"
                  }
              },
              {
                  "circuitId": "villeneuve",
                  "url": "http://en.wikipedia.org/wiki/Circuit_Gilles_Villeneuve",
                  "circuitName": "Circuit Gilles Villeneuve",
                  "Location": {
                      "lat": "45.5",
                      "long": "-73.5228",
                      "locality": "Montreal",
                      "country": "Canada"
                  }
              },
              {
                  "circuitId": "watkins_glen",
                  "url": "http://en.wikipedia.org/wiki/Watkins_Glen_International",
                  "circuitName": "Watkins Glen",
                  "Location": {
                      "lat": "42.3369",
                      "long": "-76.9272",
                      "locality": "New York State",
                      "country": "USA"
                  }
              },
              {
                  "circuitId": "yas_marina",
                  "url": "http://en.wikipedia.org/wiki/Yas_Marina_Circuit",
                  "circuitName": "Yas Marina Circuit",
                  "Location": {
                      "lat": "24.4672",
                      "long": "54.6031",
                      "locality": "Abu Dhabi",
                      "country": "UAE"
                  }
              },
              {
                  "circuitId": "yeongam",
                  "url": "http://en.wikipedia.org/wiki/Korean_International_Circuit",
                  "circuitName": "Korean International Circuit",
                  "Location": {
                      "lat": "34.7333",
                      "long": "126.417",
                      "locality": "Yeongam County",
                      "country": "Korea"
                  }
              },
              {
                  "circuitId": "zandvoort",
                  "url": "http://en.wikipedia.org/wiki/Circuit_Zandvoort",
                  "circuitName": "Circuit Park Zandvoort",
                  "Location": {
                      "lat": "52.3888",
                      "long": "4.54092",
                      "locality": "Zandvoort",
                      "country": "Netherlands"
                  }
              },
              {
                  "circuitId": "zeltweg",
                  "url": "http://en.wikipedia.org/wiki/Zeltweg_Airfield",
                  "circuitName": "Zeltweg",
                  "Location": {
                      "lat": "47.2039",
                      "long": "14.7478",
                      "locality": "Styria",
                      "country": "Austria"
                  }
              },
              {
                  "circuitId": "zolder",
                  "url": "http://en.wikipedia.org/wiki/Zolder",
                  "circuitName": "Zolder",
                  "Location": {
                      "lat": "50.9894",
                      "long": "5.25694",
                      "locality": "Heusden-Zolder",
                      "country": "Belgium"
                  }
              }
          ]
      }
  }
};
export const Mock2022CircuitsResponse: ErgastCircuitResponse = {
  "MRData": {
      "xmlns": "http://ergast.com/mrd/1.5",
      "series": "f1",
      "url": "http://ergast.com/api/f1/2022/circuits.json",
      "limit": "100",
      "offset": "0",
      "total": "22",
      "CircuitTable": {
          "season": "2022",
          "Circuits": [
              {
                  "circuitId": "albert_park",
                  "url": "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
                  "circuitName": "Albert Park Grand Prix Circuit",
                  "Location": {
                      "lat": "-37.8497",
                      "long": "144.968",
                      "locality": "Melbourne",
                      "country": "Australia"
                  }
              },
              {
                  "circuitId": "americas",
                  "url": "http://en.wikipedia.org/wiki/Circuit_of_the_Americas",
                  "circuitName": "Circuit of the Americas",
                  "Location": {
                      "lat": "30.1328",
                      "long": "-97.6411",
                      "locality": "Austin",
                      "country": "USA"
                  }
              },
              {
                  "circuitId": "bahrain",
                  "url": "http://en.wikipedia.org/wiki/Bahrain_International_Circuit",
                  "circuitName": "Bahrain International Circuit",
                  "Location": {
                      "lat": "26.0325",
                      "long": "50.5106",
                      "locality": "Sakhir",
                      "country": "Bahrain"
                  }
              },
              {
                  "circuitId": "baku",
                  "url": "http://en.wikipedia.org/wiki/Baku_City_Circuit",
                  "circuitName": "Baku City Circuit",
                  "Location": {
                      "lat": "40.3725",
                      "long": "49.8533",
                      "locality": "Baku",
                      "country": "Azerbaijan"
                  }
              },
              {
                  "circuitId": "catalunya",
                  "url": "http://en.wikipedia.org/wiki/Circuit_de_Barcelona-Catalunya",
                  "circuitName": "Circuit de Barcelona-Catalunya",
                  "Location": {
                      "lat": "41.57",
                      "long": "2.26111",
                      "locality": "Montmeló",
                      "country": "Spain"
                  }
              },
              {
                  "circuitId": "hungaroring",
                  "url": "http://en.wikipedia.org/wiki/Hungaroring",
                  "circuitName": "Hungaroring",
                  "Location": {
                      "lat": "47.5789",
                      "long": "19.2486",
                      "locality": "Budapest",
                      "country": "Hungary"
                  }
              },
              {
                  "circuitId": "imola",
                  "url": "http://en.wikipedia.org/wiki/Autodromo_Enzo_e_Dino_Ferrari",
                  "circuitName": "Autodromo Enzo e Dino Ferrari",
                  "Location": {
                      "lat": "44.3439",
                      "long": "11.7167",
                      "locality": "Imola",
                      "country": "Italy"
                  }
              },
              {
                  "circuitId": "interlagos",
                  "url": "http://en.wikipedia.org/wiki/Aut%C3%B3dromo_Jos%C3%A9_Carlos_Pace",
                  "circuitName": "Autódromo José Carlos Pace",
                  "Location": {
                      "lat": "-23.7036",
                      "long": "-46.6997",
                      "locality": "São Paulo",
                      "country": "Brazil"
                  }
              },
              {
                  "circuitId": "jeddah",
                  "url": "http://en.wikipedia.org/wiki/Jeddah_Street_Circuit",
                  "circuitName": "Jeddah Corniche Circuit",
                  "Location": {
                      "lat": "21.6319",
                      "long": "39.1044",
                      "locality": "Jeddah",
                      "country": "Saudi Arabia"
                  }
              },
              {
                  "circuitId": "marina_bay",
                  "url": "http://en.wikipedia.org/wiki/Marina_Bay_Street_Circuit",
                  "circuitName": "Marina Bay Street Circuit",
                  "Location": {
                      "lat": "1.2914",
                      "long": "103.864",
                      "locality": "Marina Bay",
                      "country": "Singapore"
                  }
              },
              {
                  "circuitId": "miami",
                  "url": "http://en.wikipedia.org/wiki/Miami_International_Autodrome",
                  "circuitName": "Miami International Autodrome",
                  "Location": {
                      "lat": "25.9581",
                      "long": "-80.2389",
                      "locality": "Miami",
                      "country": "USA"
                  }
              },
              {
                  "circuitId": "monaco",
                  "url": "http://en.wikipedia.org/wiki/Circuit_de_Monaco",
                  "circuitName": "Circuit de Monaco",
                  "Location": {
                      "lat": "43.7347",
                      "long": "7.42056",
                      "locality": "Monte-Carlo",
                      "country": "Monaco"
                  }
              },
              {
                  "circuitId": "monza",
                  "url": "http://en.wikipedia.org/wiki/Autodromo_Nazionale_Monza",
                  "circuitName": "Autodromo Nazionale di Monza",
                  "Location": {
                      "lat": "45.6156",
                      "long": "9.28111",
                      "locality": "Monza",
                      "country": "Italy"
                  }
              },
              {
                  "circuitId": "red_bull_ring",
                  "url": "http://en.wikipedia.org/wiki/Red_Bull_Ring",
                  "circuitName": "Red Bull Ring",
                  "Location": {
                      "lat": "47.2197",
                      "long": "14.7647",
                      "locality": "Spielberg",
                      "country": "Austria"
                  }
              },
              {
                  "circuitId": "ricard",
                  "url": "http://en.wikipedia.org/wiki/Paul_Ricard_Circuit",
                  "circuitName": "Circuit Paul Ricard",
                  "Location": {
                      "lat": "43.2506",
                      "long": "5.79167",
                      "locality": "Le Castellet",
                      "country": "France"
                  }
              },
              {
                  "circuitId": "rodriguez",
                  "url": "http://en.wikipedia.org/wiki/Aut%C3%B3dromo_Hermanos_Rodr%C3%ADguez",
                  "circuitName": "Autódromo Hermanos Rodríguez",
                  "Location": {
                      "lat": "19.4042",
                      "long": "-99.0907",
                      "locality": "Mexico City",
                      "country": "Mexico"
                  }
              },
              {
                  "circuitId": "silverstone",
                  "url": "http://en.wikipedia.org/wiki/Silverstone_Circuit",
                  "circuitName": "Silverstone Circuit",
                  "Location": {
                      "lat": "52.0786",
                      "long": "-1.01694",
                      "locality": "Silverstone",
                      "country": "UK"
                  }
              },
              {
                  "circuitId": "spa",
                  "url": "http://en.wikipedia.org/wiki/Circuit_de_Spa-Francorchamps",
                  "circuitName": "Circuit de Spa-Francorchamps",
                  "Location": {
                      "lat": "50.4372",
                      "long": "5.97139",
                      "locality": "Spa",
                      "country": "Belgium"
                  }
              },
              {
                  "circuitId": "suzuka",
                  "url": "http://en.wikipedia.org/wiki/Suzuka_Circuit",
                  "circuitName": "Suzuka Circuit",
                  "Location": {
                      "lat": "34.8431",
                      "long": "136.541",
                      "locality": "Suzuka",
                      "country": "Japan"
                  }
              },
              {
                  "circuitId": "villeneuve",
                  "url": "http://en.wikipedia.org/wiki/Circuit_Gilles_Villeneuve",
                  "circuitName": "Circuit Gilles Villeneuve",
                  "Location": {
                      "lat": "45.5",
                      "long": "-73.5228",
                      "locality": "Montreal",
                      "country": "Canada"
                  }
              },
              {
                  "circuitId": "yas_marina",
                  "url": "http://en.wikipedia.org/wiki/Yas_Marina_Circuit",
                  "circuitName": "Yas Marina Circuit",
                  "Location": {
                      "lat": "24.4672",
                      "long": "54.6031",
                      "locality": "Abu Dhabi",
                      "country": "UAE"
                  }
              },
              {
                  "circuitId": "zandvoort",
                  "url": "http://en.wikipedia.org/wiki/Circuit_Zandvoort",
                  "circuitName": "Circuit Park Zandvoort",
                  "Location": {
                      "lat": "52.3888",
                      "long": "4.54092",
                      "locality": "Zandvoort",
                      "country": "Netherlands"
                  }
              }
          ]
      }
  }
};