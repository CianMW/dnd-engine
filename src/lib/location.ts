interface LocationData {
    range: number;
    description: string|Function
  }
  
  const LOCATION_DATA: LocationData[] = [
    { range: 1, description: "In this settlement/area" },
    { range: 2, description: "Just outside settlement" },
    {
      range: 3,
      description: () =>
        `${
          Math.floor(Math.random() * 4) + 1
        } miles away, in a structure (consult Structure Table, Chapter 9)`
    },
    { range: 4, description: "In the nearest forest" },
    { range: 5, description: "In the nearest hills" },
    { range: 6, description: "In the nearest mountains" },
    { range: 7, description: "In the nearest swamp" },
    { range: 8, description: "In/beside the nearest body of water" },
    { range: 9, description: "In the next village" },
    { range: 10, description: "In the next large town" },
    { range: 11, description: "In the capital of the realm" },
    { range: 12, description: "In the next realm" }
  ];
  
  export function getRumorLocation(): string {
    const diceRoll = Math.floor(Math.random() * 12) + 1;
    let location: string | undefined;
    for (const data of LOCATION_DATA) {
      if (diceRoll <= data.range) {
        if (typeof data.description === "function") {
          location = data.description();
        } else {
          location = data.description;
        }
        break;
      }
    }
    return location || "No location data available";
  }
  