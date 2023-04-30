type MonsterData = {
    name: string;
    id: number|null;
  };
  
  type CR =
    | "cr0"
    | "cr1/8"
    | "cr1/4"
    | "cr1/2"
    | "cr1"
    | "cr2"
    | "cr3"
    | "cr4"
    | "cr5"
    | "cr6"
    | "cr7"
    | "cr8"
    | "cr9"
    | "cr10"
    | "cr11"
    | "cr12"
    | "cr13"
    | "cr14";
  
    type TerrainData = {
        [key in CR]?: MonsterData[];
      };
  export type Data = {
    [key:string]: TerrainData;
  };

export const gameData:any = {
    "aquatic":{
        "cr0": [
            {name: "Quipper", id: null},
            {name: "Sea Horse", id: null},
            {name: "Crab", id: null},
            {name: "Octopus", id: null}
            ],
            "cr1/8": [
            {name: "Dolphin", id: null},
            {name: "Merfolk", id: null},
            {name: "Giant Crab", id: null}
            ],
            "cr1/4": [
            {name: "Constrictor Snake", id: null},
            {name: "Steam Mephit", id: null},
            {name: "Kuo-toa", id: null},
            ],
            "cr1/2": [
            {name: "Reef Shark", id: null},
            {name: "Giant Seahorse", id: null},
            {name: "Sahuagin", id: null},
            {name: "Crocodile", id: null}
            ],
            "cr1": [
            {name: "Giant Octopus", id: null},
            {name: "Seaspawn", id: null},
            {name: "Swarm of Quippers", id: null},
            {name: "Kuo-toa whip", id: null}
            ],
            "cr2": [
            {name: "Giant Constrictor Snake", id: null},
            {name: "Hunter Shark", id: null},
            {name: "Merrow", id: null},
            {name: "Sahuagin Priestess", id: null},
            {name: "Sea Hag", id: null}
            ],
            "cr3": [
            {name: "Deep Scion", id: null},
            {name: "Killer Whale", id: null}
            ],
            "cr5": [
            {name: "Giant Shark", id: null},
            {name: "Sahuagin Baron", id: null},
            {name: "Water Elemental", id: null}
            ],
            "cr6": [
            {name: "Invisible Stalker", id: null},
            {name: "Kuo-toa Archpriest", id: null},
            {name: "Galeb Duhr", id: null}
            ],
            "cr7": [
            {name: "Shield Guardian", id: null},
            {name: "Water Elemental Myrmidon", id: null}
            ],
            "cr8": [
            {name: "Hydra", id: null},
            ],
            "cr9": [
            {name: "Frost Salamander", id: null},
            ],
            "cr10": [
            {name: "Aboleth", id: null},
            {name: "Stone Golem", id: null}
            ],
            "cr11": [
            {name: "Marid", id: null},
            {name: "Morkoth", id: null}
            ],
            "cr12": [
            {name: "Morkoth (in lair)", id: null},
            ],
            "cr13": [
            {name: "Wastrilith", id: null},
            ]
            
    },
    coastal:{
        cr0: [
            { name: "Lizard", id: null },
            { name: "Eagle", id: null },
            { name: "Rat", id: null },
            { name: "Crab", id: null },
            { name: "Scorpion", id: null },
            { name: "Blood Hawk", id: null },
          ],
        "cr1/8": [
            { name: "Bandit", id: null },
            { name: "Poisonous Snake", id: null },
            { name: "Tribal Warrior", id: null },
            { name: "Giant Crab", id: null },
            { name: "Kobold", id: null },
            { name: "Merfolk", id: null },
            { name: "Stirge", id: null },
          ],
        "cr1/4": [
            { name: "Dimetrodon", id: null },
            { name: "Giant Lizard", id: null },
            { name: "Giant Wolf Spider", id: null },
            { name: "Pseudodragon", id: null },
            { name: "Tortle", id: null },
            { name: "Winged Kobold", id: null },
          ],
        "cr1/2": [
            { name: "Sahuagin", id: null },
            { name: "Scout", id: null },
            { name: "Skulk", id: null },
          ],
          cr1: [
            { name: "Giant Eagle", id: null },
            { name: "Giant Toad", id: null },
            { name: "Harpy", id: null },
            { name: "Sea Spawn", id: null },
          ],
          cr2: [
            { name: "Bandit Captain", id: null },
            { name: "Berserker", id: null },
            { name: "Griffon", id: null },
            { name: "Merrow", id: null },
            { name: "Ogre", id: null },
            { name: "Sahuagin Priestess", id: null },
            { name: "Sea Hag", id: null },
            { name: "Quetzalcoatlus", id: null },
          ],
          cr3: [
            { name: "Deep Scion", id: null },
            { name: "Manticore", id: null },
            { name: "Merrenoloth", id: null },
            { name: "Vampiric Mist", id: null },
            { name: "Veteran", id: null },
          ],
          cr4: [
            { name: "Banshee", id: null },
            { name: "Orc War Chief", id: null },
          ],
          cr5: [
            { name: "Sahuagin Baron", id: null },
            { name: "Water Elemental", id: null },
          ],
          cr6: [
            { name: "Cyclops", id: null },
            { name: "Kuo-toa Archpriest", id: null },
          ],
          cr7: [
            { name: "Water Elemental Myrmidon", id: null },
            { name: "Kuo-toa Archpriest", id: null },
          ],
          cr8: [
            { name: "Canoloth", id: null },
            { name: "Young Bronze Dragon", id: null },
          ],
          cr9: [
            { name: "Lonely Sorrowsworn", id: null },
            { name: "Young Blue Dragon", id: null },
          ],
          cr10: [
            { name: "Stone Giant Dreamwalker", id: null },
            { name: "Froghemoth", id: null },
          ],
          cr11: [
            { name: "Balhannoth", id: null },
            { name: "Djinni", id: null },
            { name: "Marid", id: null },
            { name: "Morkoth", id: null },
            { name: "Roc", id: null },
            { name: "Spirit Troll", id: null },
          ],
          cr12: [
            { name: "Eidolon", id: null },
            { name: "Frost Giant Everlasting One", id: null },
            { name: "Ki-rin", id: null },
            { name: "Morkoth (in lair)", id: null },
          ],
          cr13: [
            { name: "Storm Giant", id: null },
            { name: "Wastrilith", id: null },
          ],
    },
    desert:{
        ["cr0"]:[
          { name: "Lizard", id: null },
          { name: "Hyena", id: null },
          { name: "Jackal", id: null },
          { name: "Scorpion", id: null },
          { name: "Vulture", id: null },
          { name: "Giant Fire Beetle", id: null },
          
        ],
        ["cr1/8"]:[
          { name: "Bandit", id: null },
          { name: "Flying Snake", id: null },
          { name: "Kobold", id: null },
          { name: "Poisonous Snake", id: null },
          { name: "Tribal Warrior", id: null },
          { name: "Young Kruthik", id: null },
        ],
        ["cr1/4"]:[        
          { name: "Constrictor Snake", id: null },
          { name: "Giant Lizard", id: null },
          { name: "Giant Poisonous Snake", id: null },
          { name: "Giant Wolf Spider", id: null },
          { name: "Pseudodragon", id: null },
          { name: "Winged Kobold", id: null },
        ],
        ["cr1/2"]:[
          { name: "Dust Mephit", id: null },
          { name: "Firenewt Warrior", id: null },
          { name: "Gnoll", id: null },
          { name: "Hobgoblin", id: null },
          { name: "Jackalwere", id: null },
          { name: "Scout", id: null },
          { name: "Swarm of Insects", id: null },
          { name: "Gnoll Hunter", id: null },
        ],
        "cr1": [
          { "name": "Firenewt Warlock of Imix", "id": null },
          { "name": "Death Dog", "id": null },
          { "name": "Giant Spider", "id": null },
          { "name": "Giant Hyena", "id": null },
          { "name": "Giant Vulture", "id": null },
          { "name": "Giant Toad", "id": null },
          { "name": "Meazel", "id": null },
          { "name": "Half Ogre", "id": null },
          { "name": "Thri-keen", "id": null },
          { "name": "Stone Cursed", "id": null },
          { "name": "Vargouille", "id": null },
          { "name": "Yuan-ti Pureblood", "id": null }
        ],
        "cr2": [
          { "name": "Adult Kruthik", "id": null },
          { "name": "Guard Drake", "id": null },
          { "name": "Bandit Captain", "id": null },
          { "name": "Berbalang", "id": null },
          { "name": "Berserker", "id": null },
          { "name": "Giant Constrictor Snake", "id": null },
          { "name": "Gnoll Pack Lord", "id": null },
          { "name": "Ogre", "id": null },
          { "name": "Yuan-ti Broodguard", "id": null },
          { "name": "Ogre Zombie", "id": null }
        ],
        "cr3": [
          { "name": "Giant Scorpion", "id": null },
          { "name": "Hobgoblin Captain", "id": null },
          { "name": "Leucrotta", "id": null },
          { "name": "Mummy", "id": null },
          { "name": "Phase Spider", "id": null },
          { "name": "Wight", "id": null },
          { "name": "Yuan-ti Mallison", "id": null },
          { "name": "Bearded Devil", "id": null }
        ],
        "cr4": [
          { "name": "Couatl", "id": null },
          { "name": "Dybbuk", "id": null },
          { "name": "Gnoll Fang of Yeenoghu", "id": null },
          { "name": "Lamia", "id": null },
          { "name": "Weretiger", "id": null },
          { "name": "Yuan-ti Mind Whisperer", "id": null },
          { "name": "Yuan-ti Nightmare Speaker", "id": null }
        ],
        "cr5": [
          { "name": "Air Elemental", "id": null },
          { "name": "Kruthik Hive Lord", "id": null },
          { "name": "Fire Elemental", "id": null },
          { "name": "Revenant", "id": null },
          { "name": "Tanarukk", "id": null },
          { "name": "Spawn of Kyuss", "id": null },
          { "name": "Tlincalli", "id": null },
          { "name": "Yuan-ti Pitmaster", "id": null }
        ],
        "cr6": [
          { "name": "Cyclops", "id": null },
          { "name": "Hobgoblin Warlord", "id": null },
          { "name": "Medusa", "id": null },
          { "name": "Young Brass Dragon", "id": null }
        ],
        "cr7": [
          { "name": "Lost Sorrowsworn", "id": null },
          { "name": "Yuan-ti Abomination", "id": null }
        ],
        "cr8": [
          { "name": "Howler", "id": null },
          { "name": "Chained Devil", "id": null }
        ],
        "cr9": [
          { "name": "Fire Giant", "id": null },
          { "name": "Lonely Sorrowsworn", "id": null },
          { "name": "Rot Troll", "id": null },
          { "name": "Young Blue Dragon", "id": null }
        ],
        "cr10": [
          { "name": "Githyanki Gish", "id": null },
          { "name": "Githzerai Enlightened", "id": null },
          { "name": "Guardian Naga", "id": null },
          { "name": "Orthon", "id": null },
          { "name": "Summer Eladrin", "id": null }
        ],
        "cr11": [
          { "name": "Djinni", "id": null },
          { "name": "Efreeti", "id": null },
          { "name": "Gynosphinx", "id": null },
          { "name": "Roc", "id": null }
        ],
        "cr12": [
          { "name": "Boneclaw", "id": null },
          { "name": "Eidolon", "id": null },
          { "name": "Githyanki Kith'rak", "id": null },
          { "name": "Ki-rin", "id": null },
          { "name": "Oinoloth", "id": null },
          { "name": "Yuan-ti Anathema", "id": null }
        ],
        "cr13": [
          { "name": "Rakshasa", "id": null },
          { "name": "Adult Brass Dragon", "id": null }
        ]
      },
      "Dungeon/Underdark": {
        "cr0": [
          { "name": "Cranium Rat", "id": null },
          { "name": "Crawling Claw", "id": null },
          { "name": "Giant Fire Beetle", "id": null },
          { "name": "Homunculus", "id": null },
          { "name": "Lemure", "id": null },
          { "name": "Myconid Sprout", "id": null },
          { "name": "Rat", "id": null },
          { "name": "Scorpion", "id": null },
          { "name": "Shrieker", "id": null },
          { "name": "Spider", "id": null }
        ],
        "cr1/8": [
          { "name": "Boggle", "id": null },
          { "name": "Flumph", "id": null },
          { "name": "Giant Rat", "id": null },
          { "name": "Kobold", "id": null },
          { "name": "Manes", "id": null },
          { "name": "Monodrone", "id": null },
          { "name": "Neogi Hatchling", "id": null },
          { "name": "Poisonous Snake", "id": null },
          { "name": "Slaad Tadpole", "id": null },
          { "name": "Stirge", "id": null },
          { "name": "Xvaart", "id": null },
          { "name": "Young Kruthik", "id": null }
        ],
        "cr1/4": [
          { "name": "Deep Rothe", "id": null },
          { "name": "Derro", "id": null },
          { "name": "Drow", "id": null },
          { "name": "Giant Bat", "id": null },
          { "name": "Giant Centipede", "id": null },
          { "name": "Giant Lizard", "id": null },
          { "name": "Giant Poisonous Snake", "id": null },
          { "name": "Goblin", "id": null },
          { "name": "Grimlock", "id": null },
          { "name": "Kobold Inventor", "id": null },
          { "name": "Kuo-toa", "id": null },
          { "name": "Male Steeder", "id": null },
          { "name": "Oblex Spawn", "id": null },
          { "name": "Swarm Of Bats", "id": null },
          { "name": "Troglodyte", "id": null },
          { "name": "Violet Fungus", "id": null },
          { "name": "Winged Kobold", "id": null },
          { "name": "Wretched Sorrowsworn", "id": null }
        ],
        "cr1/2": [
          { "name": "Chitine", "id": null },
          { "name": "Darkling", "id": null },
          { "name": "Darkmantle", "id": null },
          { "name": "Firenewt Warrior", "id": null },
          { "name": "Gas Spore", "id": null },
          { "name": "Gazer", "id": null },
          { "name": "Gray Ooze", "id": null },
          { "name": "Hobgoblin", "id": null },
          { "name": "Magma Mephit", "id": null },
          { "name": "Myconid Adult", "id": null },
          { "name": "Orc", "id": null },
          { "name": "Orc Nurtured One of Yurtrus", "id": null },
          { "name": "Piercer", "id": null },
          { "name": "Rust Monster", "id": null },
          { "name": "Scout", "id": null },
          { "name": "Shadow", "id": null },
          { "name": "Skulk", "id": null },
          { "name": "Svirfneblin", "id": null },
          { "name": "Swarm of Insects", "id": null },
          { "name": "Swarm of Rot Grubs", "id": null }
        ],
        "cr1": [
          { "name": "Bugbear ", "id": null },
          { "name": "Choker", "id": null },
          { "name": "Duergar", "id": null },
          { "name": "Female Steeder", "id": null },
          { "name": "Fire Snake", "id": null },
          { "name": "Firenewt Warlock of Imix", "id": null },
          { "name": "Ghoul", "id": null },
          { "name": "Giant Spider", "id": null },
          { "name": "Quaggoth Spore Servant", "id": null },
          { "name": "Giant Toad", "id": null },
          { "name": "Goblin Boss", "id": null },
          { "name": "Half Ogre", "id": null },
          { "name": "Kobold Dragonshield", "id": null },
          { "name": "Kobold Scale Sorcerer", "id": null },
          { "name": "Kuo-toa Whip", "id": null },
          { "name": "Maw Demon", "id": null },
          { "name": "Meazel", "id": null },
          { "name": "Nilbog", "id": null },
          { "name": "Vargouille", "id": null },
          { "name": "Xvart Warlock of Raxivort", "id": null }
        ],
        "cr2": [
          { "name": "Adult Kruthik", "id": null },
          { "name": "Carrion Crawler", "id": null },
          { "name": "Darkling Elder", "id": null },
          { "name": "Duergar Hammerer", "id": null },
          { "name": "Duergar Kavalrachni", "id": null },
          { "name": "Duergar Mind Master", "id": null },
          { "name": "Duergar Stone Guard", "id": null },
          { "name": "Duergar Xarrorn", "id": null },
          { "name": "Gargoyle", "id": null },
          { "name": "Gelatinous Cube", "id": null },
          { "name": "Ghast", "id": null },
          { "name": "Giant", "id": null },
          { "name": "Constrictor Snake", "id": null },
          { "name": "Gibbering Mouther", "id": null },
          { "name": "Grick", "id": null },
          { "name": "Guard Drake", "id": null },
          { "name": "Intellect Devourer", "id": null },
          { "name": "Mimic", "id": null },
          { "name": "Minotaur", "id": null },
          { "name": "Skeleton", "id": null },
          { "name": "Nothic", "id": null },
          { "name": "Ochre Jelly", "id": null },
          { "name": "Ogre", "id": null },
          { "name": "Orc Claw of Luthic", "id": null },
          { "name": "Orc Eye of Gruumsh", "id": null },
          { "name": "Orc Hand of Yurtrus", "id": null },
          { "name": "Orog", "id": null },
          { "name": "Quaggoth", "id": null },
          { "name": "Yuan-ti Broodguard", "id": null }
        ],
        "cr3": [
          { "name": "Cave Fisher", "id": null },
          { "name": "Choldrith", "id": null },
          { "name": "Derro Savant", "id": null },
          { "name": "Doppelganger", "id": null },
          { "name": "Duergar Screamer", "id": null },
          { "name": "Flail Snail", "id": null },
          { "name": "Grell", "id": null },
          { "name": "Hell Hound", "id": null },
          { "name": "Hobgoblin Captain", "id": null },
          { "name": "Hook Horror", "id": null },
          { "name": "Minotaur", "id": null },
          { "name": "Neogi", "id": null },
          { "name": "Orc Red Fang of Shargaas", "id": null },
          { "name": "Phase Spider", "id": null },
          { "name": "Quaggoth Thonot", "id": null },
          { "name": "Slithering Tracker", "id": null },
          { "name": "Spectator", "id": null },
          { "name": "Trapper", "id": null },
          { "name": "Vampiric Mist", "id": null },
          { "name": "Wight", "id": null }
        ],
        "cr4": [
          { "name": "Babau", "id": null },
          { "name": "Barghest", "id": null },
          { "name": "Black Pudding", "id": null },
          { "name": "Bone Naga", "id": null },
          { "name": "Chuul", "id": null },
          { "name": "Ettin", "id": null },
          { "name": "Flameskull", "id": null },
          { "name": "Ghost", "id": null },
          { "name": "Neogi Master", "id": null },
          { "name": "Orc Blade of Ilneval", "id": null },
          { "name": "Yuan-ti Mind Whisperer", "id": null },
          { "name": "Yuan-ti Nightmare Speaker", "id": null }
        ],
        "cr5": [
          { "name": "Adult Oblex", "id": null },
          { "name": "Beholder Zombie", "id": null },
          { "name": "Drow Elite Warrior", "id": null },
          { "name": "Earth Elemental", "id": null },
          { "name": "Kruthik Hive Lord", "id": null },
          { "name": "Mindwitness", "id": null },
          { "name": "Otyugh", "id": null },
          { "name": "Roper", "id": null },
          { "name": "Salamander", "id": null },
          { "name": "Spawn of Kyuss", "id": null },
          { "name": "Swarm of Cranium Rats", "id": null },
          { "name": "Tanarukk", "id": null },
          { "name": "Troll", "id": null },
          { "name": "Umber Hulk", "id": null },
          { "name": "Vampire Spawn", "id": null },
          { "name": "Wraith", "id": null },
          { "name": "Xorn", "id": null },
          { "name": "Yuan-ti Pit Master", "id": null }
        ],
        "cr6": [
          { "name": "Bodak", "id": null },
          { "name": "Chimera", "id": null },
          { "name": "Cyclops", "id": null },
          { "name": "Drider", "id": null },
          { "name": "Duergar Warlord", "id": null },
          { "name": "Gauth", "id": null },
          { "name": "Hobgoblin Warlord", "id": null },
          { "name": "Kuo-toa Archpriest", "id": null }
        ],
        "cr7": [
          { "name": "Bodak", "id": null },
          { "name": "Chimera", "id": null },
          { "name": "Cyclops", "id": null },
          { "name": "Drider", "id": null },
          { "name": "Duergar Warlord", "id": null },
          { "name": "Gauth", "id": null },
          { "name": "Hobgoblin Warlord", "id": null },
          { "name": "Kuo-toa Archpriest", "id": null }
        ],
        "cr8": [
          { "name": "Canoloth", "id": null },
          { "name": "Cloaker", "id": null },
          { "name": "Fomorian", "id": null },
          { "name": "Howler", "id": null },
          { "name": "Mind Flayer Arcanist", "id": null },
          { "name": "Spirit Naga", "id": null }
        ],
        "cr9": [
          { "name": "Drow House Captain", "id": null },
          { "name": "Fire Giant", "id": null },
          { "name": "Gloom Weaver", "id": null },
          { "name": "Lonely Sorrowsworn", "id": null },
          { "name": "Rot Troll", "id": null },
          { "name": "Ulitharid", "id": null }
        ],
        "cr10": [
          { "name": "Aboleth", "id": null },
          { "name": "Alhoon", "id": null },
          { "name": "Death Kiss", "id": null },
          { "name": "Elder Oblex", "id": null },
          { "name": "Froghemoth", "id": null },
          { "name": "Orthon", "id": null }
        ],
        "cr11": [
          { "name": "Alkilith", "id": null },
          { "name": "Balhannoth", "id": null },
          { "name": "Behir", "id": null },
          { "name": "Dao", "id": null },
          { "name": "Drow Shadowblade", "id": null },
          { "name": "Hungry Sorrowsworn", "id": null },
          { "name": "Soul Monger", "id": null },
          { "name": "Spirit Troll", "id": null }
        ],
        "cr12": [
          { "name": "Duergar Despot", "id": null },
          { "name": "Oinoloth", "id": null },
          { "name": "Yuan-ti Anathema", "id": null }
        ],
        "cr13": [
          { "name": "Angry Sorrowsworn", "id": null },
          { "name": "Beholder", "id": null },
          { "name": "Devourer", "id": null },
          { "name": "Dire Troll", "id": null },
          { "name": "Drow Arachnomancer", "id": null },
          { "name": "Neothelid", "id": null },
          { "name": "Wastrilith", "id": null },
          { "name": "Young Red Shadow Dragon", "id": null }
        ]
      },
      "Forest": {
        "cr0": [
          { "name": "Awakened Shrub", "id": null },
          { "name": "Baboon", "id": null },
          { "name": "Badger", "id": null },
          { "name": "Cat", "id": null },
          { "name": "Deer", "id": null },
          { "name": "Hyena", "id": null },
          { "name": "Owl", "id": null },
          { "name": "Weasel", "id": null },
          { "name": "Goat", "id": null },
          { "name": "Spider", "id": null }
        ],
        "cr1/8": [
          { "name": "Bandit", "id": null },
          { "name": "Blood Hawk", "id": null },
          { "name": "Boggle", "id": null },
          { "name": "Flying Snake", "id": null },
          { "name": "Giant Rat", "id": null },
          { "name": "Giant Weasel", "id": null },
          { "name": "Guard", "id": null },
          { "name": "Kobold", "id": null },
          { "name": "Mastiff", "id": null },
          { "name": "Poisonous Snake", "id": null },
          { "name": "Stirge", "id": null },
          { "name": "Tribal Warrior", "id": null },
          { "name": "Twig Blight", "id": null },
          { "name": "Cultist", "id": null },
          { "name": "Noble", "id": null }
        ],
        "cr1/4": [
          { "name": "Blink Dog", "id": null },
          { "name": "Boar", "id": null },
          { "name": "Constrictor Snake", "id": null },
          { "name": "Giant Badger", "id": null },
          { "name": "Giant Bat", "id": null },
          { "name": "Giant Frog", "id": null },
          { "name": "Giant Lizard", "id": null },
          { "name": "Giant Owl", "id": null },
          { "name": "Giant Poisonous Snake", "id": null },
          { "name": "Giant Wolf Spider", "id": null },
          { "name": "Gnoll Witherling", "id": null },
          { "name": "Goblin", "id": null },
          { "name": "Grung", "id": null },
          { "name": "Kenku", "id": null },
          { "name": "Kobold Inventor", "id": null },
          { "name": "Needle Blight", "id": null },
          { "name": "Panther", "id": null },
          { "name": "Pixie", "id": null },
          { "name": "Pseudodragon", "id": null },
          { "name": "Sprite", "id": null },
          { "name": "Swarm of Ravens", "id": null },
          { "name": "Vegepygmy", "id": null },
          { "name": "Winged Kobold", "id": null },
          { "name": "Wolf", "id": null }
        ],
        "cr1/2": [
          { "name": "Ape", "id": null },
          { "name": "Black Bear", "id": null },
          { "name": "Darkling", "id": null },
          { "name": "Giant Wasp Gnoll", "id": null },
          { "name": "Gnoll Hunter", "id": null },
          { "name": "Hobgoblin", "id": null },
          { "name": "Lizardfolk", "id": null },
          { "name": "Orc", "id": null },
          { "name": "Ore Nurtured One of Yurtrus", "id": null },
          { "name": "Satyr", "id": null },
          { "name": "Scout", "id": null },
          { "name": "Skulk", "id": null },
          { "name": "Swarm of Insects", "id": null },
          { "name": "Vine Blight", "id": null },
          { "name": "Worg", "id": null }
        ],
        "cr1": [
          { "name": "Bronze Scout", "id": null },
          { "name": "Bugbear", "id": null },
          { "name": "Choker", "id": null },
          { "name": "Dire Wolf", "id": null },
          { "name": "Dryad", "id": null },
          { "name": "Giant Spider", "id": null },
          { "name": "Giant Toad", "id": null },
          { "name": "Gnoll Flesh Gnawer", "id": null },
          { "name": "Goblin Boss", "id": null },
          { "name": "Grung Wildling", "id": null },
          { "name": "Half Ogre", "id": null },
          { "name": "Harpy", "id": null },
          { "name": "Kobold Dragonshield", "id": null },
          { "name": "Kobold Scale Sorcerer", "id": null },
          { "name": "Meazel", "id": null },
          { "name": "Nilbog", "id": null },
          { "name": "Quickling", "id": null },
          { "name": "Thorny", "id": null },
          { "name": "Young Faerie Dragon", "id": null },
          { "name": "Yuan-ti Pureblood", "id": null }
        ],
        "cr2": [
          { "name": "Adult Faerie Dragon", "id": null },
          { "name": "Ankheg", "id": null },
          { "name": "Awakened Tree", "id": null },
          { "name": "Bandit Captain", "id": null },
          { "name": "Berserker", "id": null },
          { "name": "Centaur", "id": null },
          { "name": "Darkling Elder", "id": null },
          { "name": "Druid", "id": null },
          { "name": "Ettercap", "id": null },
          { "name": "Giant Boar", "id": null },
          { "name": "Giant Constrictor Snake", "id": null },
          { "name": "Giant Elk", "id": null },
          { "name": "Gnoll Pack Lord", "id": null },
          { "name": "Grick", "id": null },
          { "name": "Grung Elite Warrior", "id": null },
          { "name": "Guard Drake", "id": null },
          { "name": "Hobgoblin Iron Shadow", "id": null },
          { "name": "Lizardfolk Shaman", "id": null },
          { "name": "Meenlock", "id": null },
          { "name": "Ogre", "id": null },
          { "name": "Ore Eye of Gruumsh", "id": null },
          { "name": "Ore Hand of Yurtrus", "id": null },
          { "name": "Orog", "id": null },
          { "name": "Pegasus", "id": null },
          { "name": "Shadow Mastiff", "id": null },
          { "name": "Swarm of Poisonous Snakes", "id": null },
          { "name": "Vegepygmy Chief", "id": null },
          { "name": "Wererat", "id": null },
          { "name": "Will-o-wisp", "id": null },
          { "name": "Yuan-ti Broodguard", "id": null }
        ],
        "cr3": [
          { "name": "Displacer Beast", "id": null },
          { "name": "Flail Snail", "id": null },
          { "name": "Green Hag", "id": null },
          { "name": "Hobgoblin Captain", "id": null },
          { "name": "Orc Red Fang of Shargaas", "id": null },
          { "name": "Owlbear", "id": null },
          { "name": "Phase Spider", "id": null },
          { "name": "Redcap", "id": null },
          { "name": "Vampiric Mist", "id": null },
          { "name": "Veteran", "id": null },
          { "name": "Werewolf", "id": null },
          { "name": "Yuan-ti Malison", "id": null }
        ],
        "cr4": [
          { "name": "Banshee", "id": null },
          { "name": "Barghest", "id": null },
          { "name": "Couatl", "id": null },
          { "name": "Girallon", "id": null },
          { "name": "Gnoll Fang of Yeenoghu", "id": null },
          { "name": "Hobgoblin Devastator", "id": null },
          { "name": "Iron Cobra", "id": null },
          { "name": "Orc Blade of Ilneval", "id": null },
          { "name": "Stone Defender", "id": null },
          { "name": "Wereboar", "id": null },
          { "name": "Weretiger", "id": null },
          { "name": "Yeth Hound", "id": null }
        ],
        "cr5": [
          { "name": "Gorgon", "id": null },
          { "name": "Oaken Bolter", "id": null },
          { "name": "Revenant", "id": null },
          { "name": "Shambling Mound", "id": null },
          { "name": "Troll", "id": null },
          { "name": "Werebear", "id": null },
          { "name": "Wood Woad", "id": null },
          { "name": "Yuan-ti Pit Master", "id": null }
        ],
        "cr6": [
          { "name": "Hobgoblin Warlord", "id": null },
          { "name": "Annis Hag", "id": null },
          { "name": "Chimera", "id": null },
          { "name": "Cyclops", "id": null },
          { "name": "Wyvern", "id": null }
        ],
        "cr7": [
          { "name": "Earth Elemental Myrmidon", "id": null },
          { "name": "Giant Ape", "id": null },
          { "name": "Grick Alpha", "id": null },
          { "name": "Korred", "id": null },
          { "name": "Lost Sorrowsworn", "id": null },
          { "name": "Oni", "id": null },
          { "name": "Shadow Dancer", "id": null },
          { "name": "Shield Guardian", "id": null },
          { "name": "Venom Troll", "id": null },
          { "name": "Yuan-ti Abomination", "id": null }
        ],
        "cr8": [
          { "name": "Sword Wraith Commander", "id": null },
          { "name": "Corpse Flower", "id": null },
          { "name": "Shoosuva", "id": null },
          { "name": "Young Green Dragon", "id": null }
        ],
        "cr9": [
          { "name": "Flind", "id": null },
          { "name": "Rot Troll", "id": null },
          { "name": "Treant", "id": null }
        ],
        "cr10": [
          { "name": "Autumn Eladrin", "id": null },
          { "name": "Guardian Naga", "id": null },
          { "name": "Spring Eladrin", "id": null },
          { "name": "Summer Eladrin", "id": null },
          { "name": "Winter Eladrin", "id": null },
          { "name": "Young Gold Dragon", "id": null }
        ],
        "cr11": [
          { "name": "Hungry Sorrowsworn", "id": null },
          { "name": "Spirit Troll", "id": null }
        ],
        "cr12": [
          { "name": "Archdruid", "id": null },
          { "name": "Eidolon", "id": null },
          { "name": "Grey Render", "id": null },
          { "name": "Yuan-ti Anathema", "id": null }
        ],
        "cr13": [{ "name": "Dire Troll", "id": null }]
      },
      "grassland/plain": {
        "cr0": [{ "name": "Dire Troll", "id": null }],
        "cr1/8": [
          { "name": "Blood Hawk", "id": null },
          { "name": "Flying Snake", "id": null },
          { "name": "Giant Weasel", "id": null },
          { "name": "Guard", "id": null },
          { "name": "Poisonous Snake", "id": null },
          { "name": "Stirge", "id": null },
          { "name": "Tribal Warrior", "id": null },
          { "name": "Cultist", "id": null }
        ],
        "cr1/4": [
          { "name": "Axe Beak", "id": null },
          { "name": "Boar", "id": null },
          { "name": "Elk", "id": null },
          { "name": "Giant Poisonous Snake", "id": null },
          { "name": "Giant Wolf Spider", "id": null },
          { "name": "Gnoll Witherling", "id": null },
          { "name": "Goblin", "id": null },
          { "name": "Panther", "id": null },
          { "name": "Riding Horse", "id": null },
          { "name": "Wolf", "id": null }
        ],
        "cr1/2": [
          { "name": "Cockatrice", "id": null },
          { "name": "Giant Goat", "id": null },
          { "name": "Giant Wasp", "id": null },
          { "name": "Gnoll", "id": null },
          { "name": "Gnoll Hunter", "id": null },
          { "name": "Hobgoblin", "id": null },
          { "name": "Jackalwere", "id": null },
          { "name": "Orc", "id": null },
          { "name": "Orc Nurtured One of Yurtrus", "id": null },
          { "name": "Scout", "id": null },
          { "name": "Swarm of Insects", "id": null },
          { "name": "Worg", "id": null }
        ],
        "cr1": [
          { "name": "Bronze Scout", "id": null },
          { "name": "Bugbear", "id": null },
          { "name": "Giant Eagle", "id": null },
          { "name": "Giant Hyena", "id": null },
          { "name": "Giant Vulture", "id": null },
          { "name": "Gnoll Flesh Gnawer", "id": null },
          { "name": "Goblin Boss", "id": null },
          { "name": "Hippogriff", "id": null },
          { "name": "Meazel", "id": null },
          { "name": "Thri-keen", "id": null }
        ],
        "cr2": [
          { "name": "Ankheg", "id": null },
          { "name": "Aurochs", "id": null },
          { "name": "Centaur", "id": null },
          { "name": "Druid", "id": null },
          { "name": "Giant Boar", "id": null },
          { "name": "Giant Elk", "id": null },
          { "name": "Gnoll Pack Lord", "id": null },
          { "name": "Griffon", "id": null },
          { "name": "Hobgoblin Iron Shadow", "id": null },
          { "name": "Ogre", "id": null },
          { "name": "Ogre Bolt Launcher", "id": null },
          { "name": "Ogre Howday", "id": null },
          { "name": "Orc Eye of Gruumsh", "id": null },
          { "name": "Orc Hand of Yurtrus", "id": null },
          { "name": "Orog", "id": null },
          { "name": "Pegasus", "id": null },
          { "name": "Sabre-toothed Tiger", "id": null },
          { "name": "Bandit Captain", "id": null }
        ],
        "cr3": [
          { "name": "Hobgoblin Captain", "id": null },
          { "name": "Leucrotta", "id": null },
          { "name": "Manticore", "id": null },
          { "name": "Ogre Chain Brute", "id": null },
          { "name": "Phase Spider", "id": null },
          { "name": "Sword Wraith Warrior", "id": null },
          { "name": "Vampiric Mist", "id": null },
          { "name": "Veteran", "id": null }
        ],
        "cr4": [
          { "name": "Barghest", "id": null },
          { "name": "Couatl", "id": null },
          { "name": "Gnoll Fang of Yeenoghu", "id": null },
          { "name": "Hobgoblin Devastator", "id": null },
          { "name": "Iron Cobra", "id": null },
          { "name": "Ogre Battering Ram", "id": null },
          { "name": "Orc Blade of Ilneval", "id": null },
          { "name": "Stone Defender", "id": null },
          { "name": "Wereboar", "id": null },
          { "name": "Yeth Hound", "id": null }
        ],
        "cr5": [
          { "name": "Bulette", "id": null },
          { "name": "Gorgon", "id": null },
          { "name": "Oaken Bolter", "id": null }
        ],
        "cr6": [
          { "name": "Chimera", "id": null },
          { "name": "Cyclops", "id": null },
          { "name": "Hobgoblin Warlord", "id": null },
          { "name": "Mouth of Grolantor", "id": null }
        ],
        "cr7": [
          { "name": "Giant Ape", "id": null },
          { "name": "Grick Alpha", "id": null },
          { "name": "Korred", "id": null },
          { "name": "Lost Sorrowsworn", "id": null },
          { "name": "Oni", "id": null },
          { "name": "Shadow Dancer", "id": null },
          { "name": "Venom Troll", "id": null },
          { "name": "Yuan-ti Abomination", "id": null }
        ],
        "cr8": [
          { "name": "Corpse Flower", "id": null },
          { "name": "Shoosuva", "id": null },
          { "name": "Young Green Dragon", "id": null }
        ],
        "cr9": [
          { "name": "Flind", "id": null },
          { "name": "Rot Troll", "id": null },
          { "name": "Treant", "id": null }
        ],
        "cr10": [
          { "name": "Autumn Eladrin", "id": null },
          { "name": "Guardian Naga", "id": null },
          { "name": "Spring Eladrin", "id": null },
          { "name": "Summer Eladrin", "id": null },
          { "name": "Winter Eladrin", "id": null },
          { "name": "Young Gold Dragon", "id": null }
        ],
        "cr11": [
          { "name": "Hungry Sorrowsworn", "id": null },
          { "name": "Spirit Troll", "id": null }
        ],
        "cr12": [
          { "name": "Warlord", "id": null },
          { "name": "Eidolon", "id": null },
          { "name": "Grey Render", "id": null },
          { "name": "Yuan-ti Anathema", "id": null }
        ]
      },
      "hills": {
        "cr0": [
          { "name": "Baboon", "id": null },
          { "name": "Deer", "id": null },
          { "name": "Eagle", "id": null },
          { "name": "Goat", "id": null },
          { "name": "Hyena", "id": null },
          { "name": "Raven", "id": null },
          { "name": "Vulture", "id": null },
          { "name": "Lizard", "id": null }
        ],
        "cr1/8": [
          { "name": "Bandit", "id": null },
          { "name": "Blood Hawk", "id": null },
          { "name": "Boggle", "id": null },
          { "name": "Giant Weasel", "id": null },
          { "name": "Guard", "id": null },
          { "name": "Kobold", "id": null },
          { "name": "Mastiff", "id": null },
          { "name": "Neogi Hatchling", "id": null },
          { "name": "Poisonous Snake", "id": null },
          { "name": "Stirge", "id": null },
          { "name": "Tribal Warrior", "id": null },
          { "name": "Xvart", "id": null }
        ],
        "cr1/4": [
          { "name": "Axe Beak", "id": null },
          { "name": "Boar", "id": null },
          { "name": "Giant Wolf Spider", "id": null },
          { "name": "Gnoll Witherling", "id": null },
          { "name": "Goblin", "id": null },
          { "name": "Kobold Inventor", "id": null },
          { "name": "Panther", "id": null },
          { "name": "Pseudodragon", "id": null },
          { "name": "Swarm of Bats", "id": null },
          { "name": "Swarm of Ravens", "id": null },
          { "name": "Winged Kobold", "id": null },
          { "name": "Wolf", "id": null }
        ],
        "cr1/2": [
          { "name": "Firenewt Warrior", "id": null },
          { "name": "Giant Goat", "id": null },
          { "name": "Gnoll", "id": null },
          { "name": "Gnoll Hunter", "id": null },
          { "name": "Hobgoblin", "id": null },
          { "name": "Orc", "id": null },
          { "name": "Orc Nurtured One of Yurtrus", "id": null },
          { "name": "Scout", "id": null },
          { "name": "Swarm of Insects", "id": null },
          { "name": "Worg", "id": null }
        ],
        "cr1": [
          { "name": "Brown Bear", "id": null },
          { "name": "Bugbear", "id": null },
          { "name": "Dire Wolf", "id": null },
          { "name": "Giant Eagle", "id": null },
          { "name": "Giant Hyena", "id": null },
          { "name": "Goblin Boss", "id": null },
          { "name": "Half-ogre", "id": null },
          { "name": "Harpy", "id": null },
          { "name": "Hippogriff", "id": null },
          { "name": "FireSnake", "id": null },
          { "name": "Bronze Scout", "id": null },
          { "name": "Meazel", "id": null },
          { "name": "Firenewt Warlock of Imix", "id": null },
          { "name": "Giant Strider", "id": null },
          { "name": "Gnoll Flew Gnawer", "id": null },
          { "name": "Kobold Dragonshield", "id": null },
          { "name": "Kobold Scale Sorcerer", "id": null },
          { "name": "Nilbog", "id": null },
          { "name": "Xvart Warlock of Raxivort", "id": null }
        ],
        "cr2": [
          { "name": "Ogre", "id": null },
          { "name": "Giant Boar", "id": null },
          { "name": "Giant Elk", "id": null },
          { "name": "Gnoll Pack Lord", "id": null },
          { "name": "Griffon", "id": null },
          { "name": "Orog", "id": null },
          { "name": "Pegasus", "id": null },
          { "name": "Peryton", "id": null },
          { "name": "Quetzalcoatlus", "id": null },
          { "name": "Ogre Howdah", "id": null },
          { "name": "Ogre Bolt Launcher", "id": null },
          { "name": "Shadow Mastiff", "id": null },
          { "name": "Orc Hand of Yurtrus", "id": null },
          { "name": "Hobgoblin Iron Shadow", "id": null },
          { "name": "Aurochs", "id": null }
        ],
        "cr3": [
          { "name": "Green Hag", "id": null },
          { "name": "Hobgoblin Captain", "id": null },
          { "name": "Manticore", "id": null },
          { "name": "Neogi", "id": null },
          { "name": "Ogre Chain Brute", "id": null },
          { "name": "Orc Red Fang of Shargaas", "id": null },
          { "name": "Phase Spider", "id": null },
          { "name": "Redcap", "id": null },
          { "name": "Werewolf", "id": null },
          { "name": "Veteran", "id": null }
        ],
        "cr4": [
          { "name": "Barghest", "id": null },
          { "name": "Ettin", "id": null },
          { "name": "Gnoll Fang of Yeenoghu", "id": null },
          { "name": "Hobgoblin Devastator", "id": null },
          { "name": "Iron Cobra", "id": null },
          { "name": "Neogi Master", "id": null },
          { "name": "Ogre Battering Ram", "id": null },
          { "name": "Orc Blade of Ilneval", "id": null },
          { "name": "Stone Defender", "id": null },
          { "name": "Wereboar", "id": null },
          { "name": "Yeth Hound", "id": null }
        ],
        "cr5": [
          { "name": "Bulette", "id": null },
          { "name": "Gorgon", "id": null },
          { "name": "Hill Giant", "id": null },
          { "name": "Oaken Bolter", "id": null },
          { "name": "Revenant", "id": null },
          { "name": "Tanarukk", "id": null },
          { "name": "Troll", "id": null },
          { "name": "Werebear", "id": null }
        ],
        "cr6": [
          { "name": "Annis Hag", "id": null },
          { "name": "Chimera", "id": null },
          { "name": "Cyclops", "id": null },
          { "name": "Galeb Duhr", "id": null },
          { "name": "Hobgoblin Warlord", "id": null },
          { "name": "Mouth of Grolantor", "id": null }
        ],
        "cr7": [
          { "name": "Stone Giant", "id": null },
          { "name": "Young Copper Dragon", "id": null }
        ],
        "cr8": [
          { "name": "Diviner", "id": null },
          { "name": "Howler", "id": null },
          { "name": "Shoosuva", "id": null }
        ],
        "cr9": [
          { "name": "Flind", "id": null },
          { "name": "Clay Golem", "id": null }
        ],
        "cr10": [
          { "name": "Stone Giant Dreamwalker", "id": null },
          { "name": "Young Red Dragon", "id": null }
        ],
        "cr11": [
          { "name": "Roc", "id": null },
          { "name": "Spirit Troll", "id": null }
        ],
        "cr12": [{ "name": "Grey Render", "id": null }],
        "cr13": [{ "name": "Dire Troll", "id": null }]
      },
      "ice steppe/mountain": {
        "cr0": [
          { "name": "Goat", "id": null },
          { "name": "Owl", "id": null },
          { "name": "Eagle", "id": null },
          { "name": "Hawk", "id": null }
        ],
        "cr1/8": [
          { "name": "Blood Hawk", "id": null },
          { "name": "Guard", "id": null },
          { "name": "Kobold", "id": null },
          { "name": "Stirge", "id": null },
          { "name": "Tribal Warrior", "id": null },
          { "name": "Young Kruthik", "id": null }
        ],
        "cr1/4": [
          { "name": "Aarakocra", "id": null },
          { "name": "Derro", "id": null },
          { "name": "Kobold Inventor", "id": null },
          { "name": "Pseudodragon", "id": null },
          { "name": "Star Spawn Grue", "id": null },
          { "name": "Winged Kobold", "id": null }
        ],
        "cr1/2": [
          { "name": "Firenewt Warrior", "id": null },
          { "name": "Giant Goat", "id": null },
          { "name": "Orc", "id": null },
          { "name": "Ice Mephit", "id": null },
          { "name": "Orc Nurtured One of Yurtrus", "id": null }
        ],
        "cr1": [
          { "name": "Bronze Scout", "id": null },
          { "name": "Brown Bear", "id": null },
          { "name": "Duergar Soulblade", "id": null },
          { "name": "Firenewt Warlock of Imix", "id": null },
          { "name": "Giant Eagle", "id": null },
          { "name": "Giant Strider", "id": null },
          { "name": "Gnoll Flesh Gnawer", "id": null },
          { "name": "Half Ogre", "id": null },
          { "name": "Harpy", "id": null },
          { "name": "Hippogriff", "id": null },
          { "name": "Kobold Dragonshield", "id": null },
          { "name": "Kobold Scale", "id": null },
          { "name": "Sorcerer", "id": null }
        ],
        "cr2": [
          { "name": "Adult Kruthik", "id": null },
          { "name": "Aurochs", "id": null },
          { "name": "Bandit Captain", "id": null },
          { "name": "Berserker", "id": null },
          { "name": "Duergar Hammerer", "id": null },
          { "name": "Duergar Kavalrachni", "id": null },
          { "name": "Duergar Mind Master", "id": null },
          { "name": "Duergar Stone Guard", "id": null },
          { "name": "Duergar Xarrorn Giant Elk", "id": null },
          { "name": "Griffon", "id": null },
          { "name": "Guard Drake", "id": null },
          { "name": "Ogre", "id": null },
          { "name": "Ogre Bolt", "id": null },
          { "name": "Launcher", "id": null },
          { "name": "Ogre Howdah", "id": null },
          { "name": "Orc Claw of Luthic", "id": null },
          { "name": "Orog", "id": null },
          { "name": "Peryton", "id": null },
          { "name": "Polar Bear", "id": null },
          { "name": "Saber-toothed Tiger", "id": null }
        ],
        "cr3": [
          { "name": "Basilisk", "id": null },
          { "name": "Duergar Screamer", "id": null },
          { "name": "Hell Hound", "id": null },
          { "name": "Manticore", "id": null },
          { "name": "Ogre Chain Brute", "id": null },
          { "name": "Orc Red Fang of Shargaas", "id": null },
          { "name": "Vampiric Mist", "id": null },
          { "name": "Veteran", "id": null },
          { "name": "Winter Wolf", "id": null },
          { "name": "Yeti", "id": null }
        ],
        "cr4": [
          { "name": "Barghest", "id": null },
          { "name": "Ettin", "id": null },
          { "name": "Iron Cobra", "id": null },
          { "name": "Ogre Battering Ram", "id": null },
          { "name": "Orc Blade of Ilneval", "id": null },
          { "name": "Stone Defender", "id": null }
        ],
        "cr5": [
          { "name": "Air Elemental", "id": null },
          { "name": "Bulette", "id": null },
          { "name": "Kruthik Hive Lord", "id": null },
          { "name": "Oaken Bolter", "id": null },
          { "name": "Revenant", "id": null },
          { "name": "Tanarukk", "id": null },
          { "name": "Troll", "id": null },
          { "name": "Werebear", "id": null },
          { "name": "Young Remorhaz", "id": null },
          { "name": "Umber Hulk", "id": null }
        ],
        "cr6": [
          { "name": "Annis Hag", "id": null },
          { "name": "Chimera", "id": null },
          { "name": "Cyclops", "id": null },
          { "name": "Duergar Warlord", "id": null },
          { "name": "Galeb Duhr", "id": null },
          { "name": "Mammoth", "id": null },
          { "name": "Wyvern", "id": null },
          { "name": "Young White", "id": null },
          { "name": "Dragon", "id": null }
        ],
        "cr7": [
          { "name": "Bheur Hag", "id": null },
          { "name": "Lost Sorrowsworn", "id": null },
          { "name": "Stone Giant", "id": null }
        ],
        "cr8": [
          { "name": "Frost Giant", "id": null },
          { "name": "Shoosuva", "id": null }
        ],
        "cr9": [
          { "name": "Abominable Yeti", "id": null },
          { "name": "Flind", "id": null },
          { "name": "Frost Salamander", "id": null }
        ],
        "cr10": [{ "name": "Winter Eladrin", "id": null }],
        "cr11": [
          { "name": "Remorhaz", "id": null },
          { "name": "Roc", "id": null }
        ],
        "cr12": [
          { "name": "Boneclaw", "id": null },
          { "name": "Frost Giant Everlasting One", "id": null }
        ],
        "cr13": [
          { "name": "Adult White Dragon", "id": null },
          { "name": "Dire Troll", "id": null }
        ]
      },
      "swamp": {
        "cr0": [
          { "name": "Rat", "id": null },
          { "name": "Raven", "id": null },
          { "name": "Frog", "id": null },
          { "name": "Spider", "id": null }
        ],
        "cr1/8": [
          { "name": "Giant Rat", "id": null },
          { "name": "Kobold", "id": null },
          { "name": "Poisonous Snake", "id": null },
          { "name": "Stirge", "id": null },
          { "name": "Tribal Warrior", "id": null }
        ],
        "cr1/4": [
          { "name": "Bullywug", "id": null },
          { "name": "Constrictor Snake", "id": null },
          { "name": "Giant Frog", "id": null },
          { "name": "Giant Lizard", "id": null },
          { "name": "Giant Poisonous Snake", "id": null },
          { "name": "Mud Mephit", "id": null },
          { "name": "Oblex Spawn", "id": null },
          { "name": "Star Spawn Grue", "id": null },
          { "name": "Swarm of Ravens", "id": null },
          { "name": "Vegepygmy", "id": null },
          { "name": "Winged Kobold", "id": null },
          { "name": "Wretched Sorrowsworn", "id": null }
        ],
        "cr1/2": [
          { "name": "Crocodile", "id": null },
          { "name": "Darkling", "id": null },
          { "name": "Lizardfolk", "id": null },
          { "name": "Orc", "id": null },
          { "name": "Scout", "id": null },
          { "name": "Skulk", "id": null },
          { "name": "Swarm of Insects", "id": null },
          { "name": "Swarm of Rot Grubs", "id": null }
        ],
        "cr1": [
          { "name": "Ghoul", "id": null },
          { "name": "Giant Spider", "id": null },
          { "name": "Giant Toad", "id": null },
          { "name": "Meazel", "id": null },
          { "name": "Thorny", "id": null },
          { "name": "Vargouille", "id": null },
          { "name": "Yuan-ti Pureblood", "id": null },
          { "name": "Bugbear", "id": null }
        ],
        "cr2": [
          { "name": "Darkling Elder", "id": null },
          { "name": "Ghast", "id": null },
          { "name": "Giant Constrictor Snake", "id": null },
          { "name": "Guard Drake", "id": null },
          { "name": "Lizardfolk Shaman", "id": null },
          { "name": "Meenlock", "id": null },
          { "name": "Ogre", "id": null },
          { "name": "Orc Eye of Gruumsh", "id": null },
          { "name": "Shadow Mastiff", "id": null },
          { "name": "Swarm of Poisonous Snakes", "id": null },
          { "name": "Vegepygmy Chief", "id": null },
          { "name": "Will-o-wisp", "id": null }
        ],
        "cr3": [
          { "name": "Flail Snail", "id": null },
          { "name": "Green Hag", "id": null },
          { "name": "Redcap", "id": null },
          { "name": "Sword Wraith Warrior", "id": null },
          { "name": "Vampiric Mist", "id": null },
          { "name": "Wight", "id": null },
          { "name": "Yuan-ti Malison", "id": null },
          { "name": "Bugbear Chief", "id": null }
        ],
        "cr4": [
          { "name": "Chuul", "id": null },
          { "name": "Ghost", "id": null },
          { "name": "Lizard King/Queen", "id": null },
          { "name": "Orc War Chief", "id": null },
          { "name": "Wereboar", "id": null },
          { "name": "Yuan-ti Mind", "id": null },
          { "name": "Whisperer", "id": null }
        ],
        "cr5": [
          { "name": "Adult Oblex", "id": null },
          { "name": "Allip Catoblepas", "id": null },
          { "name": "Giant Crocodile", "id": null },
          { "name": "Revenant", "id": null },
          { "name": "Shambling Mound", "id": null },
          { "name": "Troll", "id": null },
          { "name": "Water Elemental", "id": null }
        ],
        "cr6": [
          { "name": "Bodak", "id": null },
          { "name": "Annis Hag", "id": null },
          { "name": "Chimera", "id": null },
          { "name": "Hobgoblin Warlord", "id": null }
        ],
        "cr7": [
          { "name": "Lost Sorrowsworn", "id": null },
          { "name": "Maurezhi", "id": null },
          { "name": "Venom Troll", "id": null },
          { "name": "Young Black Dragon", "id": null },
          { "name": "Yuan-ti Abomination", "id": null }
        ],
        "cr8": [
          { "name": "Cloaker", "id": null },
          { "name": "Corpse Flower", "id": null },
          { "name": "Hydra", "id": null },
          { "name": "Sword Wraith Commander", "id": null }
        ],
        "cr9": [
          { "name": "Necromancer", "id": null },
          { "name": "Rot Troll", "id": null },
          { "name": "Clay Golem", "id": null },
          { "name": "Treant", "id": null }
        ],
        "cr10": [
          { "name": "Elder Oblex", "id": null },
          { "name": "Froghemoth", "id": null }
        ],
        "cr11": [{ "name": "Spirit Troll", "id": null }],
        "cr12": [
          { "name": "Archdruid", "id": null },
          { "name": "Grey Render", "id": null },
          { "name": "Yuan-ti Anathema", "id": null }
        ],
        "cr13": [
          { "name": "Star Spawn Seer", "id": null },
          { "name": "Wastrilith", "id": null }
        ]
      },
      "urban": {
        "cr0": [
          { "name": "Rat", "id": null },
          { "name": "Raven", "id": null },
          { "name": "Frog", "id": null },
          { "name": "Spider", "id": null }
        ],
        "cr1/8": [
          { "name": "Bandit", "id": null },
          { "name": "Boggle", "id": null },
          { "name": "Cultist", "id": null },
          { "name": "Flying Snake", "id": null },
          { "name": "Giant Rat", "id": null },
          { "name": "Guard", "id": null },
          { "name": "Kobold", "id": null },
          { "name": "Mastiff", "id": null },
          { "name": "Mule", "id": null },
          { "name": "Noble", "id": null },
          { "name": "Pony", "id": null },
          { "name": "Stirge", "id": null }
        ],
        "cr1/4": [
          { "name": "Acolyte", "id": null },
          { "name": "Draft Horse", "id": null },
          { "name": "Giant Centipede", "id": null },
          { "name": "Giant Poisonous Snake", "id": null },
          { "name": "Kenku", "id": null },
          { "name": "Kobold Inventor", "id": null },
          { "name": "Oblex Spawn", "id": null },
          { "name": "Ox", "id": null },
          { "name": "Pseudodragon", "id": null },
          { "name": "Riding Horse", "id": null },
          { "name": "Skeleton", "id": null },
          { "name": "Smoke Mephit", "id": null },
          { "name": "Swarm of Bats", "id": null },
          { "name": "Swarm of Rats", "id": null },
          { "name": "Swarm of Ravens", "id": null },
          { "name": "Winged Kobold", "id": null },
          { "name": "Wretched Sorrowsworn", "id": null },
          { "name": "Zombie", "id": null },
          { "name": "Goblin", "id": null },
          { "name": "Giant Wolf", "id": null },
          { "name": "Spider", "id": null }
        ],
        "cr1/2": [
          { "name": "Crocodile", "id": null },
          { "name": "Darkling Giant Wasp", "id": null },
          { "name": "Shadow", "id": null },
          { "name": "Skulk", "id": null },
          { "name": "Swarm of Insects", "id": null },
          { "name": "Thug", "id": null },
          { "name": "Warhorse", "id": null }
        ],
        "cr1": [
          { "name": "Ghoul", "id": null },
          { "name": "Giant Spider", "id": null },
          { "name": "Half Ogre", "id": null },
          { "name": "Kobold Scale Sorcerer", "id": null },
          { "name": "Meazel", "id": null },
          { "name": "Specter", "id": null },
          { "name": "Spy", "id": null },
          { "name": "Stone Cursed", "id": null },
          { "name": "Yuan-ti Pureblood", "id": null },
          { "name": "Animated Armour", "id": null }
        ],
        "cr2": [
          { "name": "Bandit Captain", "id": null },
          { "name": "Cult Fanatic", "id": null },
          { "name": "Gargoyle", "id": null },
          { "name": "Darkling Eldet", "id": null },
          { "name": "Ghast", "id": null },
          { "name": "Guard Drake", "id": null },
          { "name": "Meenlock", "id": null },
          { "name": "Priest", "id": null },
          { "name": "Mimic", "id": null },
          { "name": "Wererat", "id": null },
          { "name": "Will o' Wisp", "id": null },
          { "name": "Rug of Smothering", "id": null }
        ],
        "cr3": [
          { "name": "Doppelganger", "id": null },
          { "name": "Giff", "id": null },
          { "name": "Knight", "id": null },
          { "name": "Orc Red Fang of Shargaas", "id": null },
          { "name": "Phase Spider", "id": null },
          { "name": "Slithering Tracker", "id": null },
          { "name": "Vampiric Mist", "id": null },
          { "name": "Veteran", "id": null },
          { "name": "Water Weird", "id": null },
          { "name": "Wight", "id": null }
        ],
        "cr4": [
          { "name": "Babau", "id": null },
          { "name": "Couatl", "id": null },
          { "name": "Deathlock", "id": null },
          { "name": "Dybbuk", "id": null },
          { "name": "Ghost", "id": null },
          { "name": "Incubus", "id": null },
          { "name": "Succubus", "id": null },
          { "name": "Orc Blade of Ilneval", "id": null }
        ],
        "cr5": [
          { "name": "Adult Oblex", "id": null },
          { "name": "Allip", "id": null },
          { "name": "Banderhobb", "id": null },
          { "name": "Cambion", "id": null },
          { "name": "Gladiator", "id": null },
          { "name": "Revenant", "id": null },
          { "name": "Swarm of Cranium", "id": null },
          { "name": "Rats", "id": null },
          { "name": "Vampire Spawn", "id": null }
        ],
        "cr6": [
          { "name": "Bodak", "id": null },
          { "name": "Invisible Stalker", "id": null },
          { "name": "Mage", "id": null },
          { "name": "White Abishai", "id": null }
        ],
        "cr7": [
          { "name": "Black Abishai", "id": null },
          { "name": "Lost Sorrowsworn", "id": null },
          { "name": "Maurezhi", "id": null },
          { "name": "Oni", "id": null },
          { "name": "Shadow Dancer", "id": null },
          { "name": "Shield Guardian", "id": null }
        ],
        "cr8": [
          { "name": "Assassin", "id": null },
          { "name": "Canoloth", "id": null },
          { "name": "Corpse Flower", "id": null },
          { "name": "Deathlock Mastermind", "id": null }
        ],
        "cr9": [
          { "name": "Gloom Weaver", "id": null },
          { "name": "Grey Slaad", "id": null },
          { "name": "Lonely Sorrowsworn", "id": null },
          { "name": "Young Silver Dragon", "id": null }
        ],
        "cr10": [
          { "name": "Elder Oblex", "id": null },
          { "name": "Githyanki Gish", "id": null },
          { "name": "Githzerai Enlightened", "id": null },
          { "name": "Orthon", "id": null }
        ],
        "cr11": [
          { "name": "Alkilith", "id": null },
          { "name": "Hungry Sorrowsworn", "id": null },
          { "name": "Soul Monger", "id": null },
          { "name": "Yagnoloth", "id": null }
        ],
        "cr12": [
          { "name": "Archmage", "id": null },
          { "name": "Boneclaw", "id": null },
          { "name": "Eidolon", "id": null },
          { "name": "Githyanki Kith'rak", "id": null }
        ],
        "cr13": [
          { "name": "Angry Sorrowsworn", "id": null },
          { "name": "Rakshasa", "id": null },
          { "name": "Star Spawn Seer", "id": null },
          { "name": "Vampire", "id": null }
        ]
      }
    }
    