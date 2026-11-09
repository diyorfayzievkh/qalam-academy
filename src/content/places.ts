// Cities and calculation methods for prayer times.

export type City = { key: string; name: string; lat: number; lng: number; tz: string };

export const CITIES: City[] = [
  {
    "key": "tashkent",
    "name": "Tashkent",
    "lat": 41.2995,
    "lng": 69.2401,
    "tz": "Asia/Tashkent"
  },
  {
    "key": "samarkand",
    "name": "Samarkand",
    "lat": 39.6542,
    "lng": 66.9597,
    "tz": "Asia/Samarkand"
  },
  {
    "key": "bukhara",
    "name": "Bukhara",
    "lat": 39.7747,
    "lng": 64.4286,
    "tz": "Asia/Samarkand"
  },
  {
    "key": "namangan",
    "name": "Namangan",
    "lat": 40.9983,
    "lng": 71.6726,
    "tz": "Asia/Tashkent"
  },
  {
    "key": "andijan",
    "name": "Andijan",
    "lat": 40.7821,
    "lng": 72.3442,
    "tz": "Asia/Tashkent"
  },
  {
    "key": "fergana",
    "name": "Fergana",
    "lat": 40.3842,
    "lng": 71.7843,
    "tz": "Asia/Tashkent"
  },
  {
    "key": "nukus",
    "name": "Nukus",
    "lat": 42.4531,
    "lng": 59.6103,
    "tz": "Asia/Samarkand"
  },
  {
    "key": "urgench",
    "name": "Urgench",
    "lat": 41.5506,
    "lng": 60.6311,
    "tz": "Asia/Samarkand"
  },
  {
    "key": "qarshi",
    "name": "Qarshi",
    "lat": 38.8606,
    "lng": 65.7891,
    "tz": "Asia/Samarkand"
  },
  {
    "key": "termez",
    "name": "Termez",
    "lat": 37.2242,
    "lng": 67.2783,
    "tz": "Asia/Samarkand"
  },
  {
    "key": "washington",
    "name": "Washington, DC",
    "lat": 38.9072,
    "lng": -77.0369,
    "tz": "America/New_York"
  },
  {
    "key": "richmond",
    "name": "Richmond, VA",
    "lat": 37.5407,
    "lng": -77.436,
    "tz": "America/New_York"
  },
  {
    "key": "newyork",
    "name": "New York",
    "lat": 40.7128,
    "lng": -74.006,
    "tz": "America/New_York"
  },
  {
    "key": "istanbul",
    "name": "Istanbul",
    "lat": 41.0082,
    "lng": 28.9784,
    "tz": "Europe/Istanbul"
  },
  {
    "key": "london",
    "name": "London",
    "lat": 51.5072,
    "lng": -0.1276,
    "tz": "Europe/London"
  },
  {
    "key": "makkah",
    "name": "Makkah",
    "lat": 21.4225,
    "lng": 39.8262,
    "tz": "Asia/Riyadh"
  }
];

// Fajr angle, and Isha angle in degrees or a fixed delay after Maghrib.
export type Method = { key: string; name: string; fajr: number; isha: number | { minutesAfterMaghrib: number } };

export const METHODS: Method[] = [
  {
    "key": "MWL",
    "name": "Muslim World League",
    "fajr": 18,
    "isha": 17
  },
  {
    "key": "Karachi",
    "name": "Univ. of Islamic Sciences, Karachi",
    "fajr": 18,
    "isha": 18
  },
  {
    "key": "ISNA",
    "name": "ISNA (North America)",
    "fajr": 15,
    "isha": 15
  },
  {
    "key": "Egypt",
    "name": "Egyptian General Authority",
    "fajr": 19.5,
    "isha": 17.5
  },
  {
    "key": "UmmQura",
    "name": "Umm al-Qura, Makkah",
    "fajr": 18.5,
    "isha": {
      "minutesAfterMaghrib": 90
    }
  }
];
