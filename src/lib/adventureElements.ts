interface AdventureElement {
  max: number;
  min: number;
  data: string;
  [key:string]:number|string;
}
interface AdventureElementData {
  ["standard wilderness"]: AdventureElement[];
  ["special wilderness"]: AdventureElement[];
  ["standard room"]: AdventureElement[];
  ["special room"]: AdventureElement[];
  ["passage"]: AdventureElement[];
  [key:string]:AdventureElement[]
}

const monsters: AdventureElementData = {
  ["standard wilderness"]: [{ max: 12, min: 10, data: "monsters found" }],
  ["special wilderness"]: [{ max: 12, min: 9, data: "monsters found" }],
  ["standard room"]: [{ max: 12, min: 9, data: "monsters found" }],
  ["special room"]: [{ max: 12, min: 9, data: "monsters found" }],
  ["passage"]: [{ max: 12, min: 11, data: "monsters found" }],
};

const clues: AdventureElementData = {
  ["standard wilderness"]: [{ max: 12, min: 10, data: "clue found" }],
  ["special wilderness"]: [{ max: 12, min: 9, data: "clue found" }],
  ["standard room"]: [{ max: 12, min: 9, data: "clue found" }],
  ["special room"]: [{ max: 12, min: 7, data: "clue found" }],
  ["passage"]: [{ max: 12, min: 10, data: "clue found" }],
};
const environmentFeatures: AdventureElementData = {
  ["standard wilderness"]: [
    { max: 10, min: 7, data: "Feature found" },
    { max: 11, min: 11, data: "2 Features" },
    { max: 12, min: 12, data: "Trap" },
  ],
  ["special wilderness"]: [
    { max: 10, min: 5, data: "Feature found" },
    { max: 12, min: 11, data: "Trap" },
  ],
  ["standard room"]: [
    { max: 10, min: 10, data: "Feature found" },
    { max: 11, min: 11, data: "2 Features" },
    { max: 12, min: 12, data: "Trap" },
  ],
  ["special room"]: [
    { max: 9, min: 8, data: "Feature found" },
    { max: 10, min: 10, data: "2 Features" },
    { max: 12, min: 11, data: "Trap" },
  ],
  ["passage"]: [
    { max: 10, min: 9, data: "Feature found" },
    { max: 11, min: 11, data: "2 Features" },
    { max: 12, min: 12, data: "Trap" },
  ],
};

const npc: AdventureElementData = {
  ["standard wilderness"]: [{ max: 12, min: 12, data: "npc found" }],
  ["special wilderness"]: [{ max: 12, min: 11, data: "npc found" }],
  ["standard room"]: [{ max: 12, min: 12, data: "npc found" }],
  ["special room"]: [{ max: 12, min: 11, data: "npc found" }],
  ["passage"]: [{ max: 12, min: 12, data: "npc found" }],
};

const treasure: AdventureElementData = {
    ["standard wilderness"]: [
        { max: 10, min: 9, data: "Mundane item" },
        { max: 12, min: 11, data: "If enemies : Individual treasure" },
      ],
      ["special wilderness"]: [
        { max: 8, min: 6, data: "Mundane item" },
        { max: 11, min: 9, data: "If enemies : Individual treasure(or Mundane item)" },
        { max: 12, min: 12, data: "If enemies : Hoard(or individual treasure)" },
      ],
      ["standard room"]: [
        { max: 11, min: 10, data: "If enemies : Individual treasure(or Mundane item)" },
        { max: 12, min: 12, data: "If enemies : Hoard | no enemies: Hoard (CR last monster)" },
      ],
      ["special room"]: [
        { max: 10, min: 9, data: "If enemies : Individual treasure(or Mundane item)" },
        { max: 12, min: 11, data: "If enemies : Hoard " },
      ],
      ["passage"]: [
        { max: 12, min: 11, data: "If enemies : Individual treasure" },
      ],
}

const randomEvent: AdventureElementData = {
    ["standard wilderness"]: [
        { max: 7, min: 7, data: "Bane" },
        { max: 8, min: 8, data: "Boon" },
        { max: 10, min: 9, data: "Random Event" },
        { max: 12, min: 11, data: "Skill Challenge" },
      ],
      ["special wilderness"]: [
        { max: 6, min: 6, data: "Bane" },
        { max: 7, min: 7, data: "Boon" },
        { max: 9, min: 8, data: "Random Event" },
        { max: 12, min: 10, data: "Skill Challenge" },
      ],
      ["standard room"]: [
        { max: 7, min: 7, data: "Bane" },
        { max: 8, min: 8, data: "Boon" },
        { max: 10, min: 9, data: "Random Event" },
        { max: 12, min: 11, data: "Skill Challenge" },
      ],
      ["special room"]: [
        { max: 6, min: 6, data: "Bane" },
        { max: 7, min: 7, data: "Boon" },
        { max: 9, min: 8, data: "Random Event" },
        { max: 12, min: 10, data: "Skill Challenge" },
      ],
      ["passage"]: [
        { max: 11, min: 11, data: "Random Event" },
        { max: 12, min: 12, data: "Skill Challenge" }
          ],
}

function getAdventureElement(elementObject:AdventureElementData, roll:number, location:string){
    let foundElement = null
    for (const element of elementObject[location]) {
        if (roll >= element.min && roll <= element.max) {
            foundElement = element.data;
          break;
        }
      }
      if(foundElement){
        return foundElement
      } else {
        return 'none'
      }

}

export function getRandomAdventureElements(location:string): string {
    const diceRoll = () => Math.floor(Math.random() * 12) + 1;
    // const monstersNum = diceRoll()
    // const cluesNum = diceRoll()
    // const environmentFeaturesNum = diceRoll()
    // const npcNum = diceRoll()
    // const treasureNum = diceRoll()
    // const randomEventNum = diceRoll()

    
    let adventureElements= [`Monsters: ${getAdventureElement(monsters, diceRoll(), location)}`,
    `Clues: ${getAdventureElement(clues, diceRoll(), location)}`,
    `Environment Features: ${getAdventureElement(environmentFeatures, diceRoll(), location)}`,
    `NPC: ${getAdventureElement(npc, diceRoll(), location)}`,
    `Treasure: ${getAdventureElement(treasure, diceRoll(), location)}`,
    `Random Event: ${getAdventureElement(randomEvent, diceRoll(), location)}`
]
  //@ts-ignore
    return adventureElements
  }