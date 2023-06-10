export interface WeatherData {
    range: number;
    description: string;
  }
  
  export const WEATHER_DATA: Record<string, WeatherData[]> = {
    summer: [
      { range: 1, description: "Unseasonably cold" },
      { range: 4, description: "Rainy" },
      { range: 8, description: "Overcast" },
      { range: 11, description: "Clear, Warm" },
      { range: 18, description: "Clear, Hot" },
      { range: 20, description: "Very Hot" }
    ],
    autumn: [
      { range: 1, description: "Sleet / Blizzard" },
      { range: 4, description: "Rainy" },
      { range: 8, description: "Light rain" },
      { range: 11, description: "Overcast" },
      { range: 18, description: "Clear Skies" },
      { range: 20, description: "Hot" }
    ],
    winter: [
      { range: 1, description: "Heavy snow" },
      { range: 4, description: "Snowstorm" },
      { range: 8, description: "Rain" },
      { range: 11, description: "Overcast" },
      { range: 18, description: "Clear skies" },
      { range: 20, description: "Unseasonably warm" }
    ],
    spring: [
      { range: 1, description: "Sleet / Blizzard" },
      { range: 4, description: "Rainy" },
      { range: 8, description: "Overcast" },
      { range: 11, description: "Clear Skies" },
      { range: 18, description: "Warm" },
      { range: 20, description: "Hot" }
    ]
  };
  
  export function getWeather(
    season: "summer" | "autumn" | "winter" | "spring"
  ): string {
    const seasonData = WEATHER_DATA[season];
    if (!seasonData) throw new Error("Invalid season");
  
    const diceRoll = Math.floor(Math.random() * 20) + 1;
  
    let weather: string | undefined;
    for (const data of seasonData) {
      if (diceRoll <= data.range) {
        weather = data.description;
        break;
      }
    }
  
    return weather || "No weather data available";
  }
  