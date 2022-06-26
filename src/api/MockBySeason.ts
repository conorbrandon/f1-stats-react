import { ErgastRaceResponse } from "../model/ErgastRaceResponse";
import { ErgastSeasonResponse } from "../model/ErgastSeasonResponse";

export const MockDriversSeasonsResponse: ErgastSeasonResponse = {
  "MRData": {
      "xmlns": "http://ergast.com/mrd/1.5",
      "series": "f1",
      "url": "http://ergast.com/api/f1/drivers/massa/seasons.json",
      "limit": "30",
      "offset": "0",
      "total": "15",
      "SeasonTable": {
          "driverId": "massa",
          "Seasons": [
              {
                  "season": "2002",
                  "url": "http://en.wikipedia.org/wiki/2002_Formula_One_season"
              },
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
                  "season": "2011",
                  "url": "http://en.wikipedia.org/wiki/2011_Formula_One_season"
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
              }
          ]
      }
  }
};
export const MockDriversResultsResponse2017: ErgastRaceResponse = {
    "MRData": {
        "xmlns": "http://ergast.com/mrd/1.5",
        "series": "f1",
        "url": "http://ergast.com/api/f1/2017/drivers/massa/results.json",
        "limit": "100",
        "offset": "0",
        "total": "19",
        "RaceTable": {
            "season": "2017",
            "driverId": "massa",
            "Races": [
                {
                    "season": "2017",
                    "round": "1",
                    "url": "http://en.wikipedia.org/wiki/2017_Australian_Grand_Prix",
                    "raceName": "Australian Grand Prix",
                    "Circuit": {
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
                    "date": "2017-03-26",
                    "time": "05:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "6",
                            "positionText": "6",
                            "points": "8",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "7",
                            "laps": "57",
                            "status": "Finished",
                            "Time": {
                                "millis": "5135058",
                                "time": "+1:23.386"
                            },
                            "FastestLap": {
                                "rank": "9",
                                "lap": "49",
                                "Time": {
                                    "time": "1:28.045"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "216.830"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2017",
                    "round": "2",
                    "url": "http://en.wikipedia.org/wiki/2017_Chinese_Grand_Prix",
                    "raceName": "Chinese Grand Prix",
                    "Circuit": {
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
                    "date": "2017-04-09",
                    "time": "06:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "14",
                            "positionText": "14",
                            "points": "0",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "6",
                            "laps": "55",
                            "status": "+1 Lap",
                            "FastestLap": {
                                "rank": "5",
                                "lap": "50",
                                "Time": {
                                    "time": "1:36.511"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "203.330"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2017",
                    "round": "3",
                    "url": "http://en.wikipedia.org/wiki/2017_Bahrain_Grand_Prix",
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
                    "date": "2017-04-16",
                    "time": "15:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "6",
                            "positionText": "6",
                            "points": "8",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "8",
                            "laps": "57",
                            "status": "Finished",
                            "Time": {
                                "millis": "5687700",
                                "time": "+54.326"
                            },
                            "FastestLap": {
                                "rank": "6",
                                "lap": "39",
                                "Time": {
                                    "time": "1:34.256"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "206.705"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2017",
                    "round": "4",
                    "url": "http://en.wikipedia.org/wiki/2017_Russian_Grand_Prix",
                    "raceName": "Russian Grand Prix",
                    "Circuit": {
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
                    "date": "2017-04-30",
                    "time": "12:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "9",
                            "positionText": "9",
                            "points": "2",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "6",
                            "laps": "51",
                            "status": "+1 Lap",
                            "FastestLap": {
                                "rank": "4",
                                "lap": "45",
                                "Time": {
                                    "time": "1:38.232"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "214.317"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2017",
                    "round": "5",
                    "url": "http://en.wikipedia.org/wiki/2017_Spanish_Grand_Prix",
                    "raceName": "Spanish Grand Prix",
                    "Circuit": {
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
                    "date": "2017-05-14",
                    "time": "12:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "13",
                            "positionText": "13",
                            "points": "0",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "9",
                            "laps": "64",
                            "status": "+2 Laps",
                            "FastestLap": {
                                "rank": "13",
                                "lap": "64",
                                "Time": {
                                    "time": "1:26.472"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "193.796"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2017",
                    "round": "6",
                    "url": "http://en.wikipedia.org/wiki/2017_Monaco_Grand_Prix",
                    "raceName": "Monaco Grand Prix",
                    "Circuit": {
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
                    "date": "2017-05-28",
                    "time": "12:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "9",
                            "positionText": "9",
                            "points": "2",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "14",
                            "laps": "78",
                            "status": "Finished",
                            "Time": {
                                "millis": "6303785",
                                "time": "+19.445"
                            },
                            "FastestLap": {
                                "rank": "12",
                                "lap": "50",
                                "Time": {
                                    "time": "1:16.543"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "156.947"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2017",
                    "round": "7",
                    "url": "http://en.wikipedia.org/wiki/2017_Canadian_Grand_Prix",
                    "raceName": "Canadian Grand Prix",
                    "Circuit": {
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
                    "date": "2017-06-11",
                    "time": "18:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "19",
                            "positionText": "R",
                            "points": "0",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "7",
                            "laps": "0",
                            "status": "Collision"
                        }
                    ]
                },
                {
                    "season": "2017",
                    "round": "8",
                    "url": "http://en.wikipedia.org/wiki/2017_Azerbaijan_Grand_Prix",
                    "raceName": "Azerbaijan Grand Prix",
                    "Circuit": {
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
                    "date": "2017-06-25",
                    "time": "13:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "16",
                            "positionText": "R",
                            "points": "0",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "9",
                            "laps": "25",
                            "status": "Suspension",
                            "FastestLap": {
                                "rank": "17",
                                "lap": "10",
                                "Time": {
                                    "time": "1:47.340"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "201.330"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2017",
                    "round": "9",
                    "url": "http://en.wikipedia.org/wiki/2017_Austrian_Grand_Prix",
                    "raceName": "Austrian Grand Prix",
                    "Circuit": {
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
                    "date": "2017-07-09",
                    "time": "12:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "9",
                            "positionText": "9",
                            "points": "2",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "17",
                            "laps": "70",
                            "status": "+1 Lap",
                            "FastestLap": {
                                "rank": "7",
                                "lap": "49",
                                "Time": {
                                    "time": "1:08.419"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "227.200"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2017",
                    "round": "10",
                    "url": "http://en.wikipedia.org/wiki/2017_British_Grand_Prix",
                    "raceName": "British Grand Prix",
                    "Circuit": {
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
                    "date": "2017-07-16",
                    "time": "12:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "10",
                            "positionText": "10",
                            "points": "1",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "14",
                            "laps": "50",
                            "status": "+1 Lap",
                            "FastestLap": {
                                "rank": "16",
                                "lap": "39",
                                "Time": {
                                    "time": "1:33.562"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "226.668"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2017",
                    "round": "12",
                    "url": "http://en.wikipedia.org/wiki/2017_Belgian_Grand_Prix",
                    "raceName": "Belgian Grand Prix",
                    "Circuit": {
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
                    "date": "2017-08-27",
                    "time": "12:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "8",
                            "positionText": "8",
                            "points": "4",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "16",
                            "laps": "44",
                            "status": "Finished",
                            "Time": {
                                "millis": "5119469",
                                "time": "+36.649"
                            },
                            "FastestLap": {
                                "rank": "11",
                                "lap": "37",
                                "Time": {
                                    "time": "1:49.637"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "229.980"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2017",
                    "round": "13",
                    "url": "http://en.wikipedia.org/wiki/2017_Italian_Grand_Prix",
                    "raceName": "Italian Grand Prix",
                    "Circuit": {
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
                    "date": "2017-09-03",
                    "time": "12:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "8",
                            "positionText": "8",
                            "points": "4",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "7",
                            "laps": "53",
                            "status": "Finished",
                            "Time": {
                                "millis": "4607146",
                                "time": "+1:14.834"
                            },
                            "FastestLap": {
                                "rank": "9",
                                "lap": "30",
                                "Time": {
                                    "time": "1:25.477"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "243.981"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2017",
                    "round": "14",
                    "url": "http://en.wikipedia.org/wiki/2017_Singapore_Grand_Prix",
                    "raceName": "Singapore Grand Prix",
                    "Circuit": {
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
                    "date": "2017-09-17",
                    "time": "12:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "11",
                            "positionText": "11",
                            "points": "0",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "17",
                            "laps": "58",
                            "status": "Finished",
                            "Time": {
                                "millis": "7450080",
                                "time": "+46.536"
                            },
                            "FastestLap": {
                                "rank": "8",
                                "lap": "58",
                                "Time": {
                                    "time": "1:47.055"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "170.323"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2017",
                    "round": "15",
                    "url": "http://en.wikipedia.org/wiki/2017_Malaysian_Grand_Prix",
                    "raceName": "Malaysian Grand Prix",
                    "Circuit": {
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
                    "date": "2017-10-01",
                    "time": "07:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "9",
                            "positionText": "9",
                            "points": "2",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "11",
                            "laps": "55",
                            "status": "+1 Lap",
                            "FastestLap": {
                                "rank": "14",
                                "lap": "44",
                                "Time": {
                                    "time": "1:36.944"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "205.838"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2017",
                    "round": "16",
                    "url": "http://en.wikipedia.org/wiki/2017_Japanese_Grand_Prix",
                    "raceName": "Japanese Grand Prix",
                    "Circuit": {
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
                    "date": "2017-10-08",
                    "time": "05:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "10",
                            "positionText": "10",
                            "points": "1",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "8",
                            "laps": "52",
                            "status": "+1 Lap",
                            "FastestLap": {
                                "rank": "16",
                                "lap": "50",
                                "Time": {
                                    "time": "1:35.943"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "217.891"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2017",
                    "round": "17",
                    "url": "http://en.wikipedia.org/wiki/2017_United_States_Grand_Prix",
                    "raceName": "United States Grand Prix",
                    "Circuit": {
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
                    "date": "2017-10-22",
                    "time": "19:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "9",
                            "positionText": "9",
                            "points": "2",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "10",
                            "laps": "55",
                            "status": "+1 Lap",
                            "FastestLap": {
                                "rank": "10",
                                "lap": "36",
                                "Time": {
                                    "time": "1:40.131"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "198.208"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2017",
                    "round": "18",
                    "url": "http://en.wikipedia.org/wiki/2017_Mexican_Grand_Prix",
                    "raceName": "Mexican Grand Prix",
                    "Circuit": {
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
                    "date": "2017-10-29",
                    "time": "19:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "11",
                            "positionText": "11",
                            "points": "0",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "10",
                            "laps": "70",
                            "status": "+1 Lap",
                            "FastestLap": {
                                "rank": "13",
                                "lap": "55",
                                "Time": {
                                    "time": "1:21.136"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "190.968"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2017",
                    "round": "19",
                    "url": "http://en.wikipedia.org/wiki/2017_Brazilian_Grand_Prix",
                    "raceName": "Brazilian Grand Prix",
                    "Circuit": {
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
                    "date": "2017-11-12",
                    "time": "16:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "7",
                            "positionText": "7",
                            "points": "6",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "9",
                            "laps": "71",
                            "status": "Finished",
                            "Time": {
                                "millis": "5555144",
                                "time": "+1:08.882"
                            },
                            "FastestLap": {
                                "rank": "11",
                                "lap": "60",
                                "Time": {
                                    "time": "1:13.452"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "211.190"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2017",
                    "round": "20",
                    "url": "http://en.wikipedia.org/wiki/2017_Abu_Dhabi_Grand_Prix",
                    "raceName": "Abu Dhabi Grand Prix",
                    "Circuit": {
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
                    "date": "2017-11-26",
                    "time": "13:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "10",
                            "positionText": "10",
                            "points": "1",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "10",
                            "laps": "54",
                            "status": "+1 Lap",
                            "FastestLap": {
                                "rank": "13",
                                "lap": "45",
                                "Time": {
                                    "time": "1:43.026"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "194.071"
                                }
                            }
                        }
                    ]
                }
            ]
        }
    }
};
export const MockDriversResultsResponse2016: ErgastRaceResponse = {
    "MRData": {
        "xmlns": "http://ergast.com/mrd/1.5",
        "series": "f1",
        "url": "http://ergast.com/api/f1/2016/drivers/massa/results.json",
        "limit": "100",
        "offset": "0",
        "total": "21",
        "RaceTable": {
            "season": "2016",
            "driverId": "massa",
            "Races": [
                {
                    "season": "2016",
                    "round": "1",
                    "url": "http://en.wikipedia.org/wiki/2016_Australian_Grand_Prix",
                    "raceName": "Australian Grand Prix",
                    "Circuit": {
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
                    "date": "2016-03-20",
                    "time": "05:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "5",
                            "positionText": "5",
                            "points": "10",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "6",
                            "laps": "57",
                            "status": "Finished",
                            "Time": {
                                "millis": "6554544",
                                "time": "+58.979"
                            },
                            "FastestLap": {
                                "rank": "9",
                                "lap": "39",
                                "Time": {
                                    "time": "1:32.288"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "206.861"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2016",
                    "round": "2",
                    "url": "http://en.wikipedia.org/wiki/2016_Bahrain_Grand_Prix",
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
                    "date": "2016-04-03",
                    "time": "15:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "8",
                            "positionText": "8",
                            "points": "4",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "7",
                            "laps": "56",
                            "status": "+1 Lap",
                            "FastestLap": {
                                "rank": "16",
                                "lap": "31",
                                "Time": {
                                    "time": "1:37.560"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "199.704"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2016",
                    "round": "3",
                    "url": "http://en.wikipedia.org/wiki/2016_Chinese_Grand_Prix",
                    "raceName": "Chinese Grand Prix",
                    "Circuit": {
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
                    "date": "2016-04-17",
                    "time": "06:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "6",
                            "positionText": "6",
                            "points": "8",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "10",
                            "laps": "56",
                            "status": "Finished",
                            "Time": {
                                "millis": "6009402",
                                "time": "+1:15.511"
                            },
                            "FastestLap": {
                                "rank": "16",
                                "lap": "34",
                                "Time": {
                                    "time": "1:41.815"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "192.737"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2016",
                    "round": "4",
                    "url": "http://en.wikipedia.org/wiki/2016_Russian_Grand_Prix",
                    "raceName": "Russian Grand Prix",
                    "Circuit": {
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
                    "date": "2016-05-01",
                    "time": "12:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "5",
                            "positionText": "5",
                            "points": "10",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "4",
                            "laps": "53",
                            "status": "Finished",
                            "Time": {
                                "millis": "5636424",
                                "time": "+1:14.427"
                            },
                            "FastestLap": {
                                "rank": "2",
                                "lap": "52",
                                "Time": {
                                    "time": "1:39.743"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "211.070"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2016",
                    "round": "5",
                    "url": "http://en.wikipedia.org/wiki/2016_Spanish_Grand_Prix",
                    "raceName": "Spanish Grand Prix",
                    "Circuit": {
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
                    "date": "2016-05-15",
                    "time": "12:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "8",
                            "positionText": "8",
                            "points": "4",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "18",
                            "laps": "66",
                            "status": "Finished",
                            "Time": {
                                "millis": "6180724",
                                "time": "+1:20.707"
                            },
                            "FastestLap": {
                                "rank": "9",
                                "lap": "43",
                                "Time": {
                                    "time": "1:29.238"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "187.789"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2016",
                    "round": "6",
                    "url": "http://en.wikipedia.org/wiki/2016_Monaco_Grand_Prix",
                    "raceName": "Monaco Grand Prix",
                    "Circuit": {
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
                    "date": "2016-05-29",
                    "time": "12:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "10",
                            "positionText": "10",
                            "points": "1",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "14",
                            "laps": "77",
                            "status": "+1 Lap",
                            "FastestLap": {
                                "rank": "9",
                                "lap": "69",
                                "Time": {
                                    "time": "1:19.213"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "151.656"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2016",
                    "round": "7",
                    "url": "http://en.wikipedia.org/wiki/2016_Canadian_Grand_Prix",
                    "raceName": "Canadian Grand Prix",
                    "Circuit": {
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
                    "date": "2016-06-12",
                    "time": "18:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "20",
                            "positionText": "R",
                            "points": "0",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "8",
                            "laps": "35",
                            "status": "Retired",
                            "FastestLap": {
                                "rank": "14",
                                "lap": "32",
                                "Time": {
                                    "time": "1:17.424"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "202.774"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2016",
                    "round": "8",
                    "url": "http://en.wikipedia.org/wiki/2016_European_Grand_Prix",
                    "raceName": "European Grand Prix",
                    "Circuit": {
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
                    "date": "2016-06-19",
                    "time": "13:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "10",
                            "positionText": "10",
                            "points": "1",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "5",
                            "laps": "51",
                            "status": "Finished",
                            "Time": {
                                "millis": "5657741",
                                "time": "+1:25.375"
                            },
                            "FastestLap": {
                                "rank": "13",
                                "lap": "35",
                                "Time": {
                                    "time": "1:47.761"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "200.543"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2016",
                    "round": "9",
                    "url": "http://en.wikipedia.org/wiki/2016_Austrian_Grand_Prix",
                    "raceName": "Austrian Grand Prix",
                    "Circuit": {
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
                    "date": "2016-07-03",
                    "time": "12:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "20",
                            "positionText": "20",
                            "points": "0",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "0",
                            "laps": "63",
                            "status": "Brakes",
                            "FastestLap": {
                                "rank": "7",
                                "lap": "59",
                                "Time": {
                                    "time": "1:09.899"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "222.801"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2016",
                    "round": "10",
                    "url": "http://en.wikipedia.org/wiki/2016_British_Grand_Prix",
                    "raceName": "British Grand Prix",
                    "Circuit": {
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
                    "date": "2016-07-10",
                    "time": "12:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "11",
                            "positionText": "11",
                            "points": "0",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "12",
                            "laps": "51",
                            "status": "+1 Lap",
                            "FastestLap": {
                                "rank": "5",
                                "lap": "40",
                                "Time": {
                                    "time": "1:36.141"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "220.588"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2016",
                    "round": "11",
                    "url": "http://en.wikipedia.org/wiki/2016_Hungarian_Grand_Prix",
                    "raceName": "Hungarian Grand Prix",
                    "Circuit": {
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
                    "date": "2016-07-24",
                    "time": "12:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "18",
                            "positionText": "18",
                            "points": "0",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "18",
                            "laps": "68",
                            "status": "+2 Laps",
                            "FastestLap": {
                                "rank": "12",
                                "lap": "68",
                                "Time": {
                                    "time": "1:25.296"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "184.904"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2016",
                    "round": "12",
                    "url": "http://en.wikipedia.org/wiki/2016_German_Grand_Prix",
                    "raceName": "German Grand Prix",
                    "Circuit": {
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
                    "date": "2016-07-31",
                    "time": "12:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "22",
                            "positionText": "R",
                            "points": "0",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "10",
                            "laps": "36",
                            "status": "Suspension",
                            "FastestLap": {
                                "rank": "20",
                                "lap": "31",
                                "Time": {
                                    "time": "1:21.476"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "202.101"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2016",
                    "round": "13",
                    "url": "http://en.wikipedia.org/wiki/2016_Belgian_Grand_Prix",
                    "raceName": "Belgian Grand Prix",
                    "Circuit": {
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
                    "date": "2016-08-28",
                    "time": "12:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "10",
                            "positionText": "10",
                            "points": "1",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "10",
                            "laps": "44",
                            "status": "Finished",
                            "Time": {
                                "millis": "6356931",
                                "time": "+1:05.873"
                            },
                            "FastestLap": {
                                "rank": "14",
                                "lap": "25",
                                "Time": {
                                    "time": "1:54.342"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "220.517"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2016",
                    "round": "14",
                    "url": "http://en.wikipedia.org/wiki/2016_Italian_Grand_Prix",
                    "raceName": "Italian Grand Prix",
                    "Circuit": {
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
                    "date": "2016-09-04",
                    "time": "12:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "9",
                            "positionText": "9",
                            "points": "2",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "11",
                            "laps": "53",
                            "status": "Finished",
                            "Time": {
                                "millis": "4713706",
                                "time": "+1:05.617"
                            },
                            "FastestLap": {
                                "rank": "7",
                                "lap": "50",
                                "Time": {
                                    "time": "1:26.400"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "241.375"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2016",
                    "round": "15",
                    "url": "http://en.wikipedia.org/wiki/2016_Singapore_Grand_Prix",
                    "raceName": "Singapore Grand Prix",
                    "Circuit": {
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
                    "date": "2016-09-18",
                    "time": "12:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "12",
                            "positionText": "12",
                            "points": "0",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "11",
                            "laps": "60",
                            "status": "+1 Lap",
                            "FastestLap": {
                                "rank": "14",
                                "lap": "53",
                                "Time": {
                                    "time": "1:51.455"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "163.599"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2016",
                    "round": "16",
                    "url": "http://en.wikipedia.org/wiki/2016_Malaysian_Grand_Prix",
                    "raceName": "Malaysian Grand Prix",
                    "Circuit": {
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
                    "date": "2016-10-02",
                    "time": "07:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "13",
                            "positionText": "13",
                            "points": "0",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "10",
                            "laps": "55",
                            "status": "+1 Lap",
                            "FastestLap": {
                                "rank": "16",
                                "lap": "53",
                                "Time": {
                                    "time": "1:39.920"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "199.707"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2016",
                    "round": "17",
                    "url": "http://en.wikipedia.org/wiki/2016_Japanese_Grand_Prix",
                    "raceName": "Japanese Grand Prix",
                    "Circuit": {
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
                    "date": "2016-10-09",
                    "time": "05:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "9",
                            "positionText": "9",
                            "points": "2",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "12",
                            "laps": "53",
                            "status": "Finished",
                            "Time": {
                                "millis": "5301096",
                                "time": "+1:37.763"
                            },
                            "FastestLap": {
                                "rank": "14",
                                "lap": "35",
                                "Time": {
                                    "time": "1:37.785"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "213.787"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2016",
                    "round": "18",
                    "url": "http://en.wikipedia.org/wiki/2016_United_States_Grand_Prix",
                    "raceName": "United States Grand Prix",
                    "Circuit": {
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
                    "date": "2016-10-23",
                    "time": "19:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "7",
                            "positionText": "7",
                            "points": "6",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "9",
                            "laps": "55",
                            "status": "+1 Lap",
                            "FastestLap": {
                                "rank": "9",
                                "lap": "33",
                                "Time": {
                                    "time": "1:43.414"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "191.915"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2016",
                    "round": "19",
                    "url": "http://en.wikipedia.org/wiki/2016_Mexican_Grand_Prix",
                    "raceName": "Mexican Grand Prix",
                    "Circuit": {
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
                    "date": "2016-10-30",
                    "time": "19:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "9",
                            "positionText": "9",
                            "points": "2",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "9",
                            "laps": "71",
                            "status": "Finished",
                            "Time": {
                                "millis": "6107608",
                                "time": "+1:16.206"
                            },
                            "FastestLap": {
                                "rank": "12",
                                "lap": "64",
                                "Time": {
                                    "time": "1:23.576"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "185.392"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2016",
                    "round": "20",
                    "url": "http://en.wikipedia.org/wiki/2016_Brazilian_Grand_Prix",
                    "raceName": "Brazilian Grand Prix",
                    "Circuit": {
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
                    "date": "2016-11-13",
                    "time": "16:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "18",
                            "positionText": "R",
                            "points": "0",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "13",
                            "laps": "46",
                            "status": "Collision",
                            "FastestLap": {
                                "rank": "9",
                                "lap": "39",
                                "Time": {
                                    "time": "1:26.767"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "178.782"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2016",
                    "round": "21",
                    "url": "http://en.wikipedia.org/wiki/2016_Abu_Dhabi_Grand_Prix",
                    "raceName": "Abu Dhabi Grand Prix",
                    "Circuit": {
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
                    "date": "2016-11-27",
                    "time": "13:00:00Z",
                    "Results": [
                        {
                            "number": "19",
                            "position": "9",
                            "positionText": "9",
                            "points": "2",
                            "Driver": {
                                "driverId": "massa",
                                "permanentNumber": "19",
                                "code": "MAS",
                                "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
                                "givenName": "Felipe",
                                "familyName": "Massa",
                                "dateOfBirth": "1981-04-25",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "10",
                            "laps": "55",
                            "status": "Finished",
                            "Time": {
                                "millis": "5943449",
                                "time": "+59.436"
                            },
                            "FastestLap": {
                                "rank": "10",
                                "lap": "33",
                                "Time": {
                                    "time": "1:45.675"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "189.206"
                                }
                            }
                        }
                    ]
                }
            ]
        }
    }
};

export const MockConstructorsSeasonsResponse: ErgastSeasonResponse = {
  "MRData": {
      "xmlns": "http://ergast.com/mrd/1.5",
      "series": "f1",
      "url": "http://ergast.com/api/f1/constructors/ferrari/seasons.json",
      "limit": "1000",
      "offset": "0",
      "total": "73",
      "SeasonTable": {
          "constructorId": "ferrari",
          "Seasons": [
              {
                  "season": "1950",
                  "url": "http://en.wikipedia.org/wiki/1950_Formula_One_season"
              },
              {
                  "season": "1951",
                  "url": "http://en.wikipedia.org/wiki/1951_Formula_One_season"
              },
              {
                  "season": "1952",
                  "url": "http://en.wikipedia.org/wiki/1952_Formula_One_season"
              },
              {
                  "season": "1953",
                  "url": "http://en.wikipedia.org/wiki/1953_Formula_One_season"
              },
              {
                  "season": "1954",
                  "url": "http://en.wikipedia.org/wiki/1954_Formula_One_season"
              },
              {
                  "season": "1955",
                  "url": "http://en.wikipedia.org/wiki/1955_Formula_One_season"
              },
              {
                  "season": "1956",
                  "url": "http://en.wikipedia.org/wiki/1956_Formula_One_season"
              },
              {
                  "season": "1957",
                  "url": "http://en.wikipedia.org/wiki/1957_Formula_One_season"
              },
              {
                  "season": "1958",
                  "url": "http://en.wikipedia.org/wiki/1958_Formula_One_season"
              },
              {
                  "season": "1959",
                  "url": "http://en.wikipedia.org/wiki/1959_Formula_One_season"
              },
              {
                  "season": "1960",
                  "url": "http://en.wikipedia.org/wiki/1960_Formula_One_season"
              },
              {
                  "season": "1961",
                  "url": "http://en.wikipedia.org/wiki/1961_Formula_One_season"
              },
              {
                  "season": "1962",
                  "url": "http://en.wikipedia.org/wiki/1962_Formula_One_season"
              },
              {
                  "season": "1963",
                  "url": "http://en.wikipedia.org/wiki/1963_Formula_One_season"
              },
              {
                  "season": "1964",
                  "url": "http://en.wikipedia.org/wiki/1964_Formula_One_season"
              },
              {
                  "season": "1965",
                  "url": "http://en.wikipedia.org/wiki/1965_Formula_One_season"
              },
              {
                  "season": "1966",
                  "url": "http://en.wikipedia.org/wiki/1966_Formula_One_season"
              },
              {
                  "season": "1967",
                  "url": "http://en.wikipedia.org/wiki/1967_Formula_One_season"
              },
              {
                  "season": "1968",
                  "url": "http://en.wikipedia.org/wiki/1968_Formula_One_season"
              },
              {
                  "season": "1969",
                  "url": "http://en.wikipedia.org/wiki/1969_Formula_One_season"
              },
              {
                  "season": "1970",
                  "url": "http://en.wikipedia.org/wiki/1970_Formula_One_season"
              },
              {
                  "season": "1971",
                  "url": "http://en.wikipedia.org/wiki/1971_Formula_One_season"
              },
              {
                  "season": "1972",
                  "url": "http://en.wikipedia.org/wiki/1972_Formula_One_season"
              },
              {
                  "season": "1973",
                  "url": "http://en.wikipedia.org/wiki/1973_Formula_One_season"
              },
              {
                  "season": "1974",
                  "url": "http://en.wikipedia.org/wiki/1974_Formula_One_season"
              },
              {
                  "season": "1975",
                  "url": "http://en.wikipedia.org/wiki/1975_Formula_One_season"
              },
              {
                  "season": "1976",
                  "url": "http://en.wikipedia.org/wiki/1976_Formula_One_season"
              },
              {
                  "season": "1977",
                  "url": "http://en.wikipedia.org/wiki/1977_Formula_One_season"
              },
              {
                  "season": "1978",
                  "url": "http://en.wikipedia.org/wiki/1978_Formula_One_season"
              },
              {
                  "season": "1979",
                  "url": "http://en.wikipedia.org/wiki/1979_Formula_One_season"
              },
              {
                  "season": "1980",
                  "url": "http://en.wikipedia.org/wiki/1980_Formula_One_season"
              },
              {
                  "season": "1981",
                  "url": "http://en.wikipedia.org/wiki/1981_Formula_One_season"
              },
              {
                  "season": "1982",
                  "url": "http://en.wikipedia.org/wiki/1982_Formula_One_season"
              },
              {
                  "season": "1983",
                  "url": "http://en.wikipedia.org/wiki/1983_Formula_One_season"
              },
              {
                  "season": "1984",
                  "url": "http://en.wikipedia.org/wiki/1984_Formula_One_season"
              },
              {
                  "season": "1985",
                  "url": "http://en.wikipedia.org/wiki/1985_Formula_One_season"
              },
              {
                  "season": "1986",
                  "url": "http://en.wikipedia.org/wiki/1986_Formula_One_season"
              },
              {
                  "season": "1987",
                  "url": "http://en.wikipedia.org/wiki/1987_Formula_One_season"
              },
              {
                  "season": "1988",
                  "url": "http://en.wikipedia.org/wiki/1988_Formula_One_season"
              },
              {
                  "season": "1989",
                  "url": "http://en.wikipedia.org/wiki/1989_Formula_One_season"
              },
              {
                  "season": "1990",
                  "url": "http://en.wikipedia.org/wiki/1990_Formula_One_season"
              },
              {
                  "season": "1991",
                  "url": "http://en.wikipedia.org/wiki/1991_Formula_One_season"
              },
              {
                  "season": "1992",
                  "url": "http://en.wikipedia.org/wiki/1992_Formula_One_season"
              },
              {
                  "season": "1993",
                  "url": "http://en.wikipedia.org/wiki/1993_Formula_One_season"
              },
              {
                  "season": "1994",
                  "url": "http://en.wikipedia.org/wiki/1994_Formula_One_season"
              },
              {
                  "season": "1995",
                  "url": "http://en.wikipedia.org/wiki/1995_Formula_One_season"
              },
              {
                  "season": "1996",
                  "url": "http://en.wikipedia.org/wiki/1996_Formula_One_season"
              },
              {
                  "season": "1997",
                  "url": "http://en.wikipedia.org/wiki/1997_Formula_One_season"
              },
              {
                  "season": "1998",
                  "url": "http://en.wikipedia.org/wiki/1998_Formula_One_season"
              },
              {
                  "season": "1999",
                  "url": "http://en.wikipedia.org/wiki/1999_Formula_One_season"
              },
              {
                  "season": "2000",
                  "url": "http://en.wikipedia.org/wiki/2000_Formula_One_season"
              },
              {
                  "season": "2001",
                  "url": "http://en.wikipedia.org/wiki/2001_Formula_One_season"
              },
              {
                  "season": "2002",
                  "url": "http://en.wikipedia.org/wiki/2002_Formula_One_season"
              },
              {
                  "season": "2003",
                  "url": "http://en.wikipedia.org/wiki/2003_Formula_One_season"
              },
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
                  "season": "2011",
                  "url": "http://en.wikipedia.org/wiki/2011_Formula_One_season"
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
export const MockConstructorResultsResponse2022: ErgastRaceResponse = {
    "MRData": {
        "xmlns": "http://ergast.com/mrd/1.5",
        "series": "f1",
        "url": "http://ergast.com/api/f1/2022/constructors/ferrari/results.json",
        "limit": "100",
        "offset": "0",
        "total": "18",
        "RaceTable": {
            "season": "2022",
            "constructorId": "ferrari",
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
                        }
                    ]
                },
                {
                    "season": "2022",
                    "round": "2",
                    "url": "http://en.wikipedia.org/wiki/2022_Saudi_Arabian_Grand_Prix",
                    "raceName": "Saudi Arabian Grand Prix",
                    "Circuit": {
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
                    "date": "2022-03-27",
                    "time": "17:00:00Z",
                    "Results": [
                        {
                            "number": "16",
                            "position": "2",
                            "positionText": "2",
                            "points": "19",
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
                            "grid": "2",
                            "laps": "50",
                            "status": "Finished",
                            "Time": {
                                "millis": "5059842",
                                "time": "+0.549"
                            },
                            "FastestLap": {
                                "rank": "1",
                                "lap": "48",
                                "Time": {
                                    "time": "1:31.634"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "242.556"
                                }
                            }
                        },
                        {
                            "number": "55",
                            "position": "3",
                            "positionText": "3",
                            "points": "15",
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
                            "laps": "50",
                            "status": "Finished",
                            "Time": {
                                "millis": "5067390",
                                "time": "+8.097"
                            },
                            "FastestLap": {
                                "rank": "3",
                                "lap": "48",
                                "Time": {
                                    "time": "1:31.905"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "241.841"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2022",
                    "round": "3",
                    "url": "http://en.wikipedia.org/wiki/2022_Australian_Grand_Prix",
                    "raceName": "Australian Grand Prix",
                    "Circuit": {
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
                    "date": "2022-04-10",
                    "time": "05:00:00Z",
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
                            "laps": "58",
                            "status": "Finished",
                            "Time": {
                                "millis": "5266548",
                                "time": "1:27:46.548"
                            },
                            "FastestLap": {
                                "rank": "1",
                                "lap": "58",
                                "Time": {
                                    "time": "1:20.260"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "236.740"
                                }
                            }
                        },
                        {
                            "number": "55",
                            "position": "20",
                            "positionText": "R",
                            "points": "0",
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
                            "grid": "9",
                            "laps": "1",
                            "status": "Spun off"
                        }
                    ]
                },
                {
                    "season": "2022",
                    "round": "4",
                    "url": "http://en.wikipedia.org/wiki/2022_Emilia_Romagna_Grand_Prix",
                    "raceName": "Emilia Romagna Grand Prix",
                    "Circuit": {
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
                    "date": "2022-04-24",
                    "time": "13:00:00Z",
                    "Results": [
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
                            "grid": "2",
                            "laps": "63",
                            "status": "Finished",
                            "Time": {
                                "millis": "5584058",
                                "time": "+56.072"
                            },
                            "FastestLap": {
                                "rank": "2",
                                "lap": "63",
                                "Time": {
                                    "time": "1:18.574"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "224.914"
                                }
                            }
                        },
                        {
                            "number": "55",
                            "position": "20",
                            "positionText": "R",
                            "points": "0",
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
                            "grid": "4",
                            "laps": "0",
                            "status": "Collision"
                        }
                    ]
                },
                {
                    "season": "2022",
                    "round": "5",
                    "url": "http://en.wikipedia.org/wiki/2022_Miami_Grand_Prix",
                    "raceName": "Miami Grand Prix",
                    "Circuit": {
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
                    "date": "2022-05-08",
                    "time": "19:30:00Z",
                    "Results": [
                        {
                            "number": "16",
                            "position": "2",
                            "positionText": "2",
                            "points": "18",
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
                                "millis": "5668044",
                                "time": "+3.786"
                            },
                            "FastestLap": {
                                "rank": "2",
                                "lap": "53",
                                "Time": {
                                    "time": "1:31.488"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "212.959"
                                }
                            }
                        },
                        {
                            "number": "55",
                            "position": "3",
                            "positionText": "3",
                            "points": "15",
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
                            "grid": "2",
                            "laps": "57",
                            "status": "Finished",
                            "Time": {
                                "millis": "5672487",
                                "time": "+8.229"
                            },
                            "FastestLap": {
                                "rank": "3",
                                "lap": "56",
                                "Time": {
                                    "time": "1:31.790"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "212.258"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2022",
                    "round": "6",
                    "url": "http://en.wikipedia.org/wiki/2022_Spanish_Grand_Prix",
                    "raceName": "Spanish Grand Prix",
                    "Circuit": {
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
                    "date": "2022-05-22",
                    "time": "13:00:00Z",
                    "Results": [
                        {
                            "number": "55",
                            "position": "4",
                            "positionText": "4",
                            "points": "12",
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
                            "laps": "66",
                            "status": "Finished",
                            "Time": {
                                "millis": "5885683",
                                "time": "+45.208"
                            },
                            "FastestLap": {
                                "rank": "7",
                                "lap": "49",
                                "Time": {
                                    "time": "1:25.985"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "195.731"
                                }
                            }
                        },
                        {
                            "number": "16",
                            "position": "20",
                            "positionText": "R",
                            "points": "0",
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
                            "laps": "27",
                            "status": "Turbo",
                            "FastestLap": {
                                "rank": "13",
                                "lap": "25",
                                "Time": {
                                    "time": "1:27.030"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "193.381"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2022",
                    "round": "7",
                    "url": "http://en.wikipedia.org/wiki/2022_Monaco_Grand_Prix",
                    "raceName": "Monaco Grand Prix",
                    "Circuit": {
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
                    "date": "2022-05-29",
                    "time": "13:00:00Z",
                    "Results": [
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
                            "grid": "2",
                            "laps": "64",
                            "status": "Finished",
                            "Time": {
                                "millis": "6991419",
                                "time": "+1.154"
                            },
                            "FastestLap": {
                                "rank": "7",
                                "lap": "47",
                                "Time": {
                                    "time": "1:16.421"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "157.197"
                                }
                            }
                        },
                        {
                            "number": "16",
                            "position": "4",
                            "positionText": "4",
                            "points": "12",
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
                            "laps": "64",
                            "status": "Finished",
                            "Time": {
                                "millis": "6993187",
                                "time": "+2.922"
                            },
                            "FastestLap": {
                                "rank": "6",
                                "lap": "46",
                                "Time": {
                                    "time": "1:16.249"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "157.552"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2022",
                    "round": "8",
                    "url": "http://en.wikipedia.org/wiki/2022_Azerbaijan_Grand_Prix",
                    "raceName": "Azerbaijan Grand Prix",
                    "Circuit": {
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
                    "date": "2022-06-12",
                    "time": "11:00:00Z",
                    "Results": [
                        {
                            "number": "16",
                            "position": "19",
                            "positionText": "R",
                            "points": "0",
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
                            "laps": "21",
                            "status": "Power Unit",
                            "FastestLap": {
                                "rank": "6",
                                "lap": "13",
                                "Time": {
                                    "time": "1:47.531"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "200.972"
                                }
                            }
                        },
                        {
                            "number": "55",
                            "position": "20",
                            "positionText": "R",
                            "points": "0",
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
                            "grid": "4",
                            "laps": "8",
                            "status": "Brakes",
                            "FastestLap": {
                                "rank": "19",
                                "lap": "3",
                                "Time": {
                                    "time": "1:48.978"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "198.304"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2022",
                    "round": "9",
                    "url": "http://en.wikipedia.org/wiki/2022_Canadian_Grand_Prix",
                    "raceName": "Canadian Grand Prix",
                    "Circuit": {
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
                    "date": "2022-06-19",
                    "time": "18:00:00Z",
                    "Results": [
                        {
                            "number": "55",
                            "position": "2",
                            "positionText": "2",
                            "points": "19",
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
                            "laps": "70",
                            "status": "Finished",
                            "Time": {
                                "millis": "5782750",
                                "time": "+0.993"
                            },
                            "FastestLap": {
                                "rank": "1",
                                "lap": "63",
                                "Time": {
                                    "time": "1:15.749"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "207.258"
                                }
                            }
                        },
                        {
                            "number": "16",
                            "position": "5",
                            "positionText": "5",
                            "points": "10",
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
                            "grid": "19",
                            "laps": "70",
                            "status": "Finished",
                            "Time": {
                                "millis": "5796925",
                                "time": "+15.168"
                            },
                            "FastestLap": {
                                "rank": "3",
                                "lap": "62",
                                "Time": {
                                    "time": "1:15.901"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "206.843"
                                }
                            }
                        }
                    ]
                }
            ]
        }
    }
};
export const MockConstructorResultsResponse2021: ErgastRaceResponse = {
    "MRData": {
        "xmlns": "http://ergast.com/mrd/1.5",
        "series": "f1",
        "url": "http://ergast.com/api/f1/2021/constructors/ferrari/results.json",
        "limit": "100",
        "offset": "0",
        "total": "44",
        "RaceTable": {
            "season": "2021",
            "constructorId": "ferrari",
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
                        }
                    ]
                },
                {
                    "season": "2021",
                    "round": "2",
                    "url": "http://en.wikipedia.org/wiki/2021_Emilia_Romagna_Grand_Prix",
                    "raceName": "Emilia Romagna Grand Prix",
                    "Circuit": {
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
                    "date": "2021-04-18",
                    "time": "13:00:00Z",
                    "Results": [
                        {
                            "number": "16",
                            "position": "4",
                            "positionText": "4",
                            "points": "12",
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
                            "laps": "63",
                            "status": "Finished",
                            "Time": {
                                "millis": "7380177",
                                "time": "+25.579"
                            },
                            "FastestLap": {
                                "rank": "6",
                                "lap": "60",
                                "Time": {
                                    "time": "1:18.379"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "225.473"
                                }
                            }
                        },
                        {
                            "number": "55",
                            "position": "5",
                            "positionText": "5",
                            "points": "10",
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
                            "grid": "11",
                            "laps": "63",
                            "status": "Finished",
                            "Time": {
                                "millis": "7381634",
                                "time": "+27.036"
                            },
                            "FastestLap": {
                                "rank": "7",
                                "lap": "60",
                                "Time": {
                                    "time": "1:18.490"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "225.154"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2021",
                    "round": "3",
                    "url": "http://en.wikipedia.org/wiki/2021_Portuguese_Grand_Prix",
                    "raceName": "Portuguese Grand Prix",
                    "Circuit": {
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
                    "date": "2021-05-02",
                    "time": "14:00:00Z",
                    "Results": [
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
                            "grid": "8",
                            "laps": "66",
                            "status": "Finished",
                            "Time": {
                                "millis": "5727202",
                                "time": "+55.781"
                            },
                            "FastestLap": {
                                "rank": "6",
                                "lap": "63",
                                "Time": {
                                    "time": "1:21.496"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "205.541"
                                }
                            }
                        },
                        {
                            "number": "55",
                            "position": "11",
                            "positionText": "11",
                            "points": "0",
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
                            "grid": "5",
                            "laps": "66",
                            "status": "Finished",
                            "Time": {
                                "millis": "5750376",
                                "time": "+1:18.955"
                            },
                            "FastestLap": {
                                "rank": "14",
                                "lap": "60",
                                "Time": {
                                    "time": "1:22.325"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "203.471"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2021",
                    "round": "4",
                    "url": "http://en.wikipedia.org/wiki/2021_Spanish_Grand_Prix",
                    "raceName": "Spanish Grand Prix",
                    "Circuit": {
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
                    "date": "2021-05-09",
                    "time": "13:00:00Z",
                    "Results": [
                        {
                            "number": "16",
                            "position": "4",
                            "positionText": "4",
                            "points": "12",
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
                            "laps": "66",
                            "status": "Finished",
                            "Time": {
                                "millis": "5642296",
                                "time": "+54.616"
                            },
                            "FastestLap": {
                                "rank": "4",
                                "lap": "64",
                                "Time": {
                                    "time": "1:20.459"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "209.174"
                                }
                            }
                        },
                        {
                            "number": "55",
                            "position": "7",
                            "positionText": "7",
                            "points": "6",
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
                            "grid": "6",
                            "laps": "66",
                            "status": "Finished",
                            "Time": {
                                "millis": "5662350",
                                "time": "+1:14.670"
                            },
                            "FastestLap": {
                                "rank": "9",
                                "lap": "53",
                                "Time": {
                                    "time": "1:21.568"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "206.330"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2021",
                    "round": "5",
                    "url": "http://en.wikipedia.org/wiki/2021_Monaco_Grand_Prix",
                    "raceName": "Monaco Grand Prix",
                    "Circuit": {
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
                    "date": "2021-05-23",
                    "time": "13:00:00Z",
                    "Results": [
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
                            "grid": "4",
                            "laps": "78",
                            "status": "Finished",
                            "Time": {
                                "millis": "5945788",
                                "time": "+8.968"
                            },
                            "FastestLap": {
                                "rank": "5",
                                "lap": "35",
                                "Time": {
                                    "time": "1:14.621"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "160.989"
                                }
                            }
                        },
                        {
                            "number": "16",
                            "position": "20",
                            "positionText": "W",
                            "points": "0",
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
                            "laps": "0",
                            "status": "Driveshaft"
                        }
                    ]
                },
                {
                    "season": "2021",
                    "round": "6",
                    "url": "http://en.wikipedia.org/wiki/2021_Azerbaijan_Grand_Prix",
                    "raceName": "Azerbaijan Grand Prix",
                    "Circuit": {
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
                    "date": "2021-06-06",
                    "time": "12:00:00Z",
                    "Results": [
                        {
                            "number": "16",
                            "position": "4",
                            "positionText": "4",
                            "points": "12",
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
                            "laps": "51",
                            "status": "Finished",
                            "Time": {
                                "millis": "8020238",
                                "time": "+3.828"
                            },
                            "FastestLap": {
                                "rank": "8",
                                "lap": "46",
                                "Time": {
                                    "time": "1:45.382"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "205.071"
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
                            "grid": "5",
                            "laps": "51",
                            "status": "Finished",
                            "Time": {
                                "millis": "8024119",
                                "time": "+7.709"
                            },
                            "FastestLap": {
                                "rank": "13",
                                "lap": "42",
                                "Time": {
                                    "time": "1:45.700"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "204.454"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2021",
                    "round": "7",
                    "url": "http://en.wikipedia.org/wiki/2021_French_Grand_Prix",
                    "raceName": "French Grand Prix",
                    "Circuit": {
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
                    "date": "2021-06-20",
                    "time": "13:00:00Z",
                    "Results": [
                        {
                            "number": "55",
                            "position": "11",
                            "positionText": "11",
                            "points": "0",
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
                            "grid": "5",
                            "laps": "53",
                            "status": "Finished",
                            "Time": {
                                "millis": "5345107",
                                "time": "+1:39.337"
                            },
                            "FastestLap": {
                                "rank": "18",
                                "lap": "19",
                                "Time": {
                                    "time": "1:38.931"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "212.584"
                                }
                            }
                        },
                        {
                            "number": "16",
                            "position": "16",
                            "positionText": "16",
                            "points": "0",
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
                            "grid": "7",
                            "laps": "52",
                            "status": "+1 Lap",
                            "FastestLap": {
                                "rank": "8",
                                "lap": "43",
                                "Time": {
                                    "time": "1:37.681"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "215.304"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2021",
                    "round": "8",
                    "url": "http://en.wikipedia.org/wiki/2021_Styrian_Grand_Prix",
                    "raceName": "Styrian Grand Prix",
                    "Circuit": {
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
                    "date": "2021-06-27",
                    "time": "13:00:00Z",
                    "Results": [
                        {
                            "number": "55",
                            "position": "6",
                            "positionText": "6",
                            "points": "8",
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
                            "grid": "12",
                            "laps": "70",
                            "status": "+1 Lap",
                            "FastestLap": {
                                "rank": "4",
                                "lap": "64",
                                "Time": {
                                    "time": "1:08.609"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "226.570"
                                }
                            }
                        },
                        {
                            "number": "16",
                            "position": "7",
                            "positionText": "7",
                            "points": "6",
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
                            "grid": "7",
                            "laps": "70",
                            "status": "+1 Lap",
                            "FastestLap": {
                                "rank": "6",
                                "lap": "64",
                                "Time": {
                                    "time": "1:08.738"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "226.145"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2021",
                    "round": "9",
                    "url": "http://en.wikipedia.org/wiki/2021_Austrian_Grand_Prix",
                    "raceName": "Austrian Grand Prix",
                    "Circuit": {
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
                    "date": "2021-07-04",
                    "time": "13:00:00Z",
                    "Results": [
                        {
                            "number": "55",
                            "position": "5",
                            "positionText": "5",
                            "points": "10",
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
                            "grid": "10",
                            "laps": "71",
                            "status": "Finished",
                            "Time": {
                                "millis": "5091687",
                                "time": "+57.144"
                            },
                            "FastestLap": {
                                "rank": "2",
                                "lap": "70",
                                "Time": {
                                    "time": "1:07.762"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "229.402"
                                }
                            }
                        },
                        {
                            "number": "16",
                            "position": "8",
                            "positionText": "8",
                            "points": "4",
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
                            "grid": "12",
                            "laps": "71",
                            "status": "Finished",
                            "Time": {
                                "millis": "5095738",
                                "time": "+1:01.195"
                            },
                            "FastestLap": {
                                "rank": "13",
                                "lap": "55",
                                "Time": {
                                    "time": "1:08.698"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "226.277"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2021",
                    "round": "10",
                    "url": "http://en.wikipedia.org/wiki/2021_British_Grand_Prix",
                    "raceName": "British Grand Prix",
                    "Circuit": {
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
                    "date": "2021-07-18",
                    "time": "14:00:00Z",
                    "Results": [
                        {
                            "number": "16",
                            "position": "2",
                            "positionText": "2",
                            "points": "18",
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
                            "laps": "52",
                            "status": "Finished",
                            "Time": {
                                "millis": "7107155",
                                "time": "+3.871"
                            },
                            "FastestLap": {
                                "rank": "5",
                                "lap": "45",
                                "Time": {
                                    "time": "1:30.569"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "234.159"
                                }
                            }
                        },
                        {
                            "number": "55",
                            "position": "6",
                            "positionText": "6",
                            "points": "8",
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
                            "grid": "10",
                            "laps": "52",
                            "status": "Finished",
                            "Time": {
                                "millis": "7146738",
                                "time": "+43.454"
                            },
                            "FastestLap": {
                                "rank": "7",
                                "lap": "51",
                                "Time": {
                                    "time": "1:31.223"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "232.480"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2021",
                    "round": "11",
                    "url": "http://en.wikipedia.org/wiki/2021_Hungarian_Grand_Prix",
                    "raceName": "Hungarian Grand Prix",
                    "Circuit": {
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
                    "date": "2021-08-01",
                    "time": "13:00:00Z",
                    "Results": [
                        {
                            "number": "55",
                            "position": "3",
                            "positionText": "3",
                            "points": "15",
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
                            "grid": "15",
                            "laps": "70",
                            "status": "Finished",
                            "Time": {
                                "millis": "7498217",
                                "time": "+15.018"
                            },
                            "FastestLap": {
                                "rank": "6",
                                "lap": "54",
                                "Time": {
                                    "time": "1:21.423"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "193.699"
                                }
                            }
                        },
                        {
                            "number": "16",
                            "position": "18",
                            "positionText": "R",
                            "points": "0",
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
                            "grid": "7",
                            "laps": "0",
                            "status": "Collision"
                        }
                    ]
                },
                {
                    "season": "2021",
                    "round": "12",
                    "url": "http://en.wikipedia.org/wiki/2021_Belgian_Grand_Prix",
                    "raceName": "Belgian Grand Prix",
                    "Circuit": {
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
                    "date": "2021-08-29",
                    "time": "13:00:00Z",
                    "Results": [
                        {
                            "number": "16",
                            "position": "8",
                            "positionText": "8",
                            "points": "2",
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
                            "grid": "9",
                            "laps": "1",
                            "status": "Finished",
                            "Time": {
                                "millis": "219679",
                                "time": "+12.608"
                            }
                        },
                        {
                            "number": "55",
                            "position": "10",
                            "positionText": "10",
                            "points": "0.5",
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
                            "grid": "11",
                            "laps": "1",
                            "status": "Finished",
                            "Time": {
                                "millis": "223237",
                                "time": "+16.166"
                            }
                        }
                    ]
                },
                {
                    "season": "2021",
                    "round": "13",
                    "url": "http://en.wikipedia.org/wiki/2021_Dutch_Grand_Prix",
                    "raceName": "Dutch Grand Prix",
                    "Circuit": {
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
                    "date": "2021-09-05",
                    "time": "13:00:00Z",
                    "Results": [
                        {
                            "number": "16",
                            "position": "5",
                            "positionText": "5",
                            "points": "10",
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
                            "grid": "5",
                            "laps": "71",
                            "status": "+1 Lap",
                            "FastestLap": {
                                "rank": "9",
                                "lap": "58",
                                "Time": {
                                    "time": "1:14.780"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "205.033"
                                }
                            }
                        },
                        {
                            "number": "55",
                            "position": "7",
                            "positionText": "7",
                            "points": "6",
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
                            "grid": "6",
                            "laps": "71",
                            "status": "+1 Lap",
                            "FastestLap": {
                                "rank": "13",
                                "lap": "45",
                                "Time": {
                                    "time": "1:15.260"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "203.725"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2021",
                    "round": "14",
                    "url": "http://en.wikipedia.org/wiki/2021_Italian_Grand_Prix",
                    "raceName": "Italian Grand Prix",
                    "Circuit": {
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
                    "date": "2021-09-12",
                    "time": "13:00:00Z",
                    "Results": [
                        {
                            "number": "16",
                            "position": "4",
                            "positionText": "4",
                            "points": "12",
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
                            "grid": "5",
                            "laps": "53",
                            "status": "Finished",
                            "Time": {
                                "millis": "4921674",
                                "time": "+7.309"
                            },
                            "FastestLap": {
                                "rank": "6",
                                "lap": "53",
                                "Time": {
                                    "time": "1:25.319"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "244.433"
                                }
                            }
                        },
                        {
                            "number": "55",
                            "position": "6",
                            "positionText": "6",
                            "points": "8",
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
                            "grid": "6",
                            "laps": "53",
                            "status": "Finished",
                            "Time": {
                                "millis": "4924900",
                                "time": "+10.535"
                            },
                            "FastestLap": {
                                "rank": "8",
                                "lap": "53",
                                "Time": {
                                    "time": "1:25.559"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "243.747"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2021",
                    "round": "15",
                    "url": "http://en.wikipedia.org/wiki/2021_Russian_Grand_Prix",
                    "raceName": "Russian Grand Prix",
                    "Circuit": {
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
                    "date": "2021-09-26",
                    "time": "12:00:00Z",
                    "Results": [
                        {
                            "number": "55",
                            "position": "3",
                            "positionText": "3",
                            "points": "15",
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
                            "grid": "2",
                            "laps": "53",
                            "status": "Finished",
                            "Time": {
                                "millis": "5503476",
                                "time": "+1:02.475"
                            },
                            "FastestLap": {
                                "rank": "12",
                                "lap": "40",
                                "Time": {
                                    "time": "1:39.294"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "212.024"
                                }
                            }
                        },
                        {
                            "number": "16",
                            "position": "15",
                            "positionText": "15",
                            "points": "0",
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
                            "grid": "19",
                            "laps": "52",
                            "status": "+1 Lap",
                            "FastestLap": {
                                "rank": "7",
                                "lap": "45",
                                "Time": {
                                    "time": "1:38.994"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "212.667"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2021",
                    "round": "16",
                    "url": "http://en.wikipedia.org/wiki/2021_Turkish_Grand_Prix",
                    "raceName": "Turkish Grand Prix",
                    "Circuit": {
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
                    "date": "2021-10-10",
                    "time": "12:00:00Z",
                    "Results": [
                        {
                            "number": "16",
                            "position": "4",
                            "positionText": "4",
                            "points": "12",
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
                            "grid": "3",
                            "laps": "58",
                            "status": "Finished",
                            "Time": {
                                "millis": "5501917",
                                "time": "+37.814"
                            },
                            "FastestLap": {
                                "rank": "8",
                                "lap": "57",
                                "Time": {
                                    "time": "1:32.737"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "207.218"
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
                            "grid": "19",
                            "laps": "58",
                            "status": "Finished",
                            "Time": {
                                "millis": "5515629",
                                "time": "+51.526"
                            },
                            "FastestLap": {
                                "rank": "2",
                                "lap": "49",
                                "Time": {
                                    "time": "1:31.921"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "209.057"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2021",
                    "round": "17",
                    "url": "http://en.wikipedia.org/wiki/2021_United_States_Grand_Prix",
                    "raceName": "United States Grand Prix",
                    "Circuit": {
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
                    "date": "2021-10-24",
                    "time": "19:00:00Z",
                    "Results": [
                        {
                            "number": "16",
                            "position": "4",
                            "positionText": "4",
                            "points": "12",
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
                                "millis": "5728798",
                                "time": "+52.246"
                            },
                            "FastestLap": {
                                "rank": "3",
                                "lap": "41",
                                "Time": {
                                    "time": "1:39.303"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "199.861"
                                }
                            }
                        },
                        {
                            "number": "55",
                            "position": "7",
                            "positionText": "7",
                            "points": "6",
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
                            "grid": "5",
                            "laps": "56",
                            "status": "Finished",
                            "Time": {
                                "millis": "5760097",
                                "time": "+1:23.545"
                            },
                            "FastestLap": {
                                "rank": "9",
                                "lap": "40",
                                "Time": {
                                    "time": "1:40.377"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "197.722"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2021",
                    "round": "18",
                    "url": "http://en.wikipedia.org/wiki/2021_Mexican_Grand_Prix",
                    "raceName": "Mexico City Grand Prix",
                    "Circuit": {
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
                    "date": "2021-11-07",
                    "time": "19:00:00Z",
                    "Results": [
                        {
                            "number": "16",
                            "position": "5",
                            "positionText": "5",
                            "points": "10",
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
                            "grid": "8",
                            "laps": "71",
                            "status": "Finished",
                            "Time": {
                                "millis": "6000123",
                                "time": "+1:21.037"
                            },
                            "FastestLap": {
                                "rank": "9",
                                "lap": "63",
                                "Time": {
                                    "time": "1:20.665"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "192.083"
                                }
                            }
                        },
                        {
                            "number": "55",
                            "position": "6",
                            "positionText": "6",
                            "points": "8",
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
                            "grid": "6",
                            "laps": "70",
                            "status": "+1 Lap",
                            "FastestLap": {
                                "rank": "5",
                                "lap": "63",
                                "Time": {
                                    "time": "1:20.081"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "193.484"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2021",
                    "round": "19",
                    "url": "http://en.wikipedia.org/wiki/2021_S%C3%A3o_Paulo_Grand_Prix",
                    "raceName": "São Paulo Grand Prix",
                    "Circuit": {
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
                    "date": "2021-11-14",
                    "time": "17:00:00Z",
                    "Results": [
                        {
                            "number": "16",
                            "position": "5",
                            "positionText": "5",
                            "points": "10",
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
                            "grid": "6",
                            "laps": "71",
                            "status": "Finished",
                            "Time": {
                                "millis": "5592368",
                                "time": "+49.517"
                            },
                            "FastestLap": {
                                "rank": "7",
                                "lap": "61",
                                "Time": {
                                    "time": "1:12.822"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "213.018"
                                }
                            }
                        },
                        {
                            "number": "55",
                            "position": "6",
                            "positionText": "6",
                            "points": "8",
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
                            "laps": "71",
                            "status": "Finished",
                            "Time": {
                                "millis": "5594671",
                                "time": "+51.820"
                            },
                            "FastestLap": {
                                "rank": "6",
                                "lap": "63",
                                "Time": {
                                    "time": "1:12.710"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "213.346"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2021",
                    "round": "20",
                    "url": "http://en.wikipedia.org/wiki/2021_Qatar_Grand_Prix",
                    "raceName": "Qatar Grand Prix",
                    "Circuit": {
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
                    "date": "2021-11-21",
                    "time": "14:00:00Z",
                    "Results": [
                        {
                            "number": "55",
                            "position": "7",
                            "positionText": "7",
                            "points": "6",
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
                            "grid": "5",
                            "laps": "57",
                            "status": "Finished",
                            "Time": {
                                "millis": "5150382",
                                "time": "+1:21.911"
                            },
                            "FastestLap": {
                                "rank": "9",
                                "lap": "46",
                                "Time": {
                                    "time": "1:26.570"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "223.726"
                                }
                            }
                        },
                        {
                            "number": "16",
                            "position": "8",
                            "positionText": "8",
                            "points": "4",
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
                            "grid": "13",
                            "laps": "57",
                            "status": "Finished",
                            "Time": {
                                "millis": "5151597",
                                "time": "+1:23.126"
                            },
                            "FastestLap": {
                                "rank": "8",
                                "lap": "46",
                                "Time": {
                                    "time": "1:26.555"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "223.765"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2021",
                    "round": "21",
                    "url": "http://en.wikipedia.org/wiki/2021_Saudi_Arabian_Grand_Prix",
                    "raceName": "Saudi Arabian Grand Prix",
                    "Circuit": {
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
                    "date": "2021-12-05",
                    "time": "17:30:00Z",
                    "Results": [
                        {
                            "number": "16",
                            "position": "7",
                            "positionText": "7",
                            "points": "6",
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
                            "laps": "50",
                            "status": "Finished",
                            "Time": {
                                "millis": "7619593",
                                "time": "+44.475"
                            },
                            "FastestLap": {
                                "rank": "4",
                                "lap": "46",
                                "Time": {
                                    "time": "1:31.601"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "242.643"
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
                            "grid": "15",
                            "laps": "50",
                            "status": "Finished",
                            "Time": {
                                "millis": "7621724",
                                "time": "+46.606"
                            },
                            "FastestLap": {
                                "rank": "7",
                                "lap": "37",
                                "Time": {
                                    "time": "1:31.851"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "241.983"
                                }
                            }
                        }
                    ]
                },
                {
                    "season": "2021",
                    "round": "22",
                    "url": "http://en.wikipedia.org/wiki/2021_Abu_Dhabi_Grand_Prix",
                    "raceName": "Abu Dhabi Grand Prix",
                    "Circuit": {
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
                    "date": "2021-12-12",
                    "time": "13:00:00Z",
                    "Results": [
                        {
                            "number": "55",
                            "position": "3",
                            "positionText": "3",
                            "points": "15",
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
                            "grid": "5",
                            "laps": "58",
                            "status": "Finished",
                            "Time": {
                                "millis": "5422518",
                                "time": "+5.173"
                            },
                            "FastestLap": {
                                "rank": "9",
                                "lap": "51",
                                "Time": {
                                    "time": "1:27.618"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "216.982"
                                }
                            }
                        },
                        {
                            "number": "16",
                            "position": "10",
                            "positionText": "10",
                            "points": "1",
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
                            "grid": "7",
                            "laps": "58",
                            "status": "Finished",
                            "Time": {
                                "millis": "5483402",
                                "time": "+1:06.057"
                            },
                            "FastestLap": {
                                "rank": "12",
                                "lap": "40",
                                "Time": {
                                    "time": "1:28.433"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "214.983"
                                }
                            }
                        }
                    ]
                }
            ]
        }
    }
};

export const EmptySeasonsResponse: ErgastSeasonResponse = {
  "MRData": {
    "xmlns": "http://ergast.com/mrd/1.5",
    "series": "f1",
    "url": "http://ergast.com/api/f1/drivers/massa/seasons.json",
    "limit": "30",
    "offset": "0",
    "total": "0",
    "SeasonTable": {
        "Seasons": []
    }
  }
};