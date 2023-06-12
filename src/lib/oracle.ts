interface UrbanEncounterData {
    min: number;
    max: number;
    description: string;
  }

const ORACLE_DATA=[
    {min:1,max:2, description:'No, and'},
    {min:3,max:7, description:'No'},
    {min:8,max:9, description:'No, but'},
    {min:10,max:10, description:'Maybe (skill check or reroll)'},
    {min:11,max:12, description:'Yes, but'},
    {min:13,max:18, description:'Yes'},
    {min:19,max:20, description:'Yes, and'},
]


  
export function askOracle(modifier:number=0): string|undefined {
    let diceRoll = (Math.floor(Math.random() * 20) + 1) + modifier;
      if(diceRoll > 20) {diceRoll = 20}
      if(diceRoll < 1){ diceRoll = 1}
    let result: string
    for (const data of ORACLE_DATA) {
      if (diceRoll >= data.min && diceRoll <= data.max) {
        result = data.description;
        break;
      }
    }
    //@ts-ignore
    if(result){
      return result
    }
  }
  