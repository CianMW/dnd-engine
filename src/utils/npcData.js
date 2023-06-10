const npcData = {
    "Spy": {
        "size": "Medium",
        "name": "Spy",
        "xp": "200",
        "page": "mm 349",
        "challenge": "1",
        "type": "Humanoid",
        "environment": {
            "Urban": "yes"
        }
    },
    "Priest": {
        "environment": {
            "Urban": "yes"
        },
        "challenge": "2",
        "type": "Humanoid",
        "page": "mm 348",
        "size": "Medium",
        "name": "Priest",
        "xp": "450"
    },
    "Commoner": {
        "alignment": "Any",
        "xp": "10",
        "size": "Medium",
        "name": "Commoner",
        "page": "mm 344",
        "type": "Humanoid",
        "challenge": 0,
        "environment": {
            "Forest": "yes",
            "Desert": "yes",
            "Urban": "yes",
            "Arctic": "yes",
            "Coastal": "yes",
            "Hill": "yes",
            "Grassland": "yes"
        }
    },
    "Druid": {
        "xp": "450",
        "alignment": "Any",
        "size": "Medium",
        "name": "Druid",
        "environment": {
            "Grassland": "yes",
            "Mountain": "yes",
            "Hill": "yes",
            "Coastal": "yes",
            "Arctic": "yes",
            "Desert": "yes",
            "Swamp": "yes",
            "Forest": "yes",
            "Underdark": "yes"
        },
        "type": "Humanoid",
        "challenge": "2",
        "page": "mm 346"
    },
    "Thug": {
        "page": "mm 350",
        "xp": "100",
        "size": "Medium",
        "name": "Thug",
        "environment": {
            "Urban": "yes"
        },
        "type": "Humanoid",
        "challenge": "1/2"
    },
    "Diviner": {
        "type": "Humanoid",
        "challenge": "8",
        "xp": "3900",
        "alignment": "Any",
        "name": "Diviner",
        "size": "Medium",
        "page": "motm 261, vgm 213"
    },
    "Acolyte": {
        "environment": {
            "Urban": "yes"
        },
        "challenge": "1/4",
        "type": "Humanoid",
        "page": "mm 342",
        "size": "Medium",
        "name": "Acolyte",
        "xp": "50",
        "alignment": "Any"
    },
    "Archdruid": {
        "xp": "8400",
        "alignment": "Any",
        "size": "Medium",
        "name": "Archdruid",
        "page": "motm 48, vgm 210",
        "type": "Humanoid",
        "challenge": "12"
    },
    "Enchanter": {
        "size": "Medium",
        "name": "Enchanter",
        "xp": "1800",
        "alignment": "Any",
        "page": "motm 261, vgm 213",
        "challenge": "5",
        "type": "Humanoid"
    },
    "Veteran": {
        "type": "Humanoid",
        "challenge": "3",
        "environment": {
            "Underdark": "yes",
            "Hill": "yes",
            "Mountain": "yes",
            "Grassland": "yes",
            "Forest": "yes",
            "Coastal": "yes",
            "Arctic": "yes",
            "Urban": "yes"
        },
        "xp": "700",
        "name": "Veteran",
        "size": "Medium",
        "page": "mm 350"
    },
    "Knight": {
        "page": "mm 347",
        "xp": "700",
        "size": "Medium",
        "name": "Knight",
        "environment": {
            "Urban": "yes"
        },
        "type": "Humanoid",
        "challenge": "3"
    },
    "Bard": {
        "alignment": "Any",
        "xp": "450",
        "size": "Medium",
        "name": "Bard",
        "page": "motm 59, vgm 211",
        "type": "Humanoid",
        "challenge": "2"
    },
    "Bandit": {
        "page": "mm 343",
        "challenge": "1/8",
        "type": "Humanoid",
        "environment": {
            "Hill": "yes",
            "Forest": "yes",
            "Arctic": "yes",
            "Coastal": "yes",
            "Desert": "yes",
            "Urban": "yes"
        },
        "name": "Bandit",
        "size": "Medium",
        "alignment": "Any non-lawful",
        "xp": "25"
    },
    "Guard": {
        "environment": {
            "Grassland": "yes",
            "Mountain": "yes",
            "Hill": "yes",
            "Coastal": "yes",
            "Urban": "yes",
            "Desert": "yes",
            "Forest": "yes"
        },
        "type": "Humanoid",
        "challenge": "1/8",
        "page": "mm 347",
        "xp": "25",
        "size": "Medium",
        "name": "Guard"
    },
    "Abjurer": {
        "page": "motm 260, vgm 209",
        "size": "Medium",
        "name": "Abjurer",
        "xp": "5000",
        "alignment": "Any",
        "challenge": "9",
        "type": "Humanoid"
    },
    "Blackguard": {
        "size": "Medium",
        "name": "Blackguard",
        "alignment": "Any non-good",
        "xp": "3900",
        "page": "motm 63, vgm 211",
        "challenge": "8",
        "type": "Humanoid"
    },
    "Martial Arts Adept": {
        "page": "motm 172, vgm 216",
        "xp": "700",
        "alignment": "Any",
        "name": "Martial Arts Adept",
        "size": "Medium",
        "type": "Humanoid",
        "challenge": "3"
    },
    "Illusionist": {
        "name": "Illusionist",
        "size": "Medium",
        "xp": "700",
        "alignment": "Any",
        "page": "motm 263, vgm 214",
        "challenge": "3",
        "type": "Humanoid"
    },
    "Bandit Captain": {
        "challenge": "2",
        "type": "Humanoid",
        "environment": {
            "Hill": "yes",
            "Urban": "yes",
            "Desert": "yes",
            "Arctic": "yes",
            "Coastal": "yes",
            "Forest": "yes"
        },
        "page": "mm 344",
        "size": "Medium",
        "name": "Bandit Captain",
        "alignment": "Any non-lawful",
        "xp": "450"
    },
    "Evoker": {
        "type": "Humanoid",
        "challenge": "9",
        "alignment": "Any",
        "xp": "5000",
        "size": "Medium",
        "name": "Evoker",
        "page": "motm 262, vgm 214"
    },
    "Archmage": {
        "alignment": "Any",
        "xp": "8400",
        "size": "Medium",
        "name": "Archmage",
        "page": "mm 342",
        "environment": {
            "Urban": "yes"
        },
        "type": "Humanoid",
        "challenge": "12"
    },
    "Cultist": {
        "environment": {
            "Urban": "yes"
        },
        "type": "Humanoid",
        "challenge": "1/8",
        "page": "mm 345",
        "xp": "25",
        "alignment": "Any non-good",
        "name": "Cultist",
        "size": "Medium"
    },
    "Kraken Priest": {
        "challenge": "5",
        "type": "Humanoid",
        "size": "Medium",
        "name": "Kraken Priest",
        "xp": "1800",
        "alignment": "Any",
        "page": "motm 167, vgm 215"
    },
    "Berserker": {
        "page": "mm 344",
        "challenge": "2",
        "type": "Humanoid",
        "environment": {
            "Forest": "yes",
            "Desert": "yes",
            "Coastal": "yes",
            "Arctic": "yes",
            "Hill": "yes",
            "Mountain": "yes"
        },
        "name": "Berserker",
        "size": "Medium",
        "xp": "450",
        "alignment": "Any chaotic"
    },
    "Champion": {
        "type": "Humanoid",
        "challenge": "9",
        "alignment": "Any",
        "xp": "5000",
        "size": "Medium",
        "name": "Champion",
        "page": "motm 74, vgm 212"
    },
    "Warlock of the Archfey": {
        "name": "Warlock of the Archfey",
        "size": "Medium",
        "alignment": "Any",
        "xp": "1100",
        "page": "motm 255, vgm 219",
        "challenge": "4",
        "type": "Humanoid"
    },
    "Conjurer": {
        "type": "Humanoid",
        "challenge": "6",
        "alignment": "Any",
        "xp": "2300",
        "size": "Medium",
        "name": "Conjurer",
        "page": "motm 260, vgm 212"
    },
    "Transmuter": {
        "name": "Transmuter",
        "size": "Medium",
        "xp": "1800",
        "alignment": "Any",
        "page": "motm 265, vgm 218",
        "challenge": "5",
        "type": "Humanoid"
    },
    "Cult Fanatic": {
        "xp": "450",
        "alignment": "Any non-good",
        "size": "Medium",
        "name": "Cult Fanatic",
        "page": "mm 345",
        "environment": {
            "Urban": "yes"
        },
        "type": "Humanoid",
        "challenge": "2"
    },
    "Mage": {
        "environment": {
            "Urban": "yes"
        },
        "challenge": "6",
        "type": "Humanoid",
        "page": "mm 347",
        "name": "Mage",
        "size": "Medium",
        "xp": "2300"
    },
    "Swashbuckler": {
        "type": "Humanoid",
        "challenge": "3",
        "alignment": "Any non-lawful",
        "xp": "700",
        "name": "Swashbuckler",
        "size": "Medium",
        "page": "motm 238, vgm 217"
    },
    "Master Thief": {
        "type": "Humanoid",
        "challenge": "5",
        "page": "motm 174, vgm 216",
        "xp": "1800",
        "alignment": "Any",
        "name": "Master Thief",
        "size": "Medium"
    },
    "Gladiator": {
        "page": "mm 346",
        "challenge": "5",
        "type": "Humanoid",
        "environment": {
            "Urban": "yes"
        },
        "size": "Medium",
        "name": "Gladiator",
        "alignment": "Any",
        "xp": "1800"
    },
    "Warlord": {
        "challenge": "12",
        "type": "Humanoid",
        "page": "motm 257, vgm 220",
        "name": "Warlord",
        "size": "Medium",
        "xp": "8400",
        "alignment": "Any"
    },
    "Tribal Warrior": {
        "page": "mm 350",
        "name": "Tribal Warrior",
        "size": "Medium",
        "xp": "25",
        "environment": {
            "Swamp": "yes",
            "Forest": "yes",
            "Desert": "yes",
            "Coastal": "yes",
            "Arctic": "yes",
            "Jungle": "yes",
            "Hill": "yes",
            "Grassland": "yes",
            "Mountain": "yes",
            "Underdark": "yes"
        },
        "challenge": "1/8",
        "type": "Humanoid"
    },
    "Warlock of the Great Old One": {
        "type": "Humanoid",
        "challenge": "6",
        "alignment": "Any",
        "xp": "2300",
        "size": "Medium",
        "name": "Warlock of the Great Old One",
        "page": "motm 256, vgm 220"
    },
    "Scout": {
        "environment": {
            "Underdark": "yes",
            "Hill": "yes",
            "Grassland": "yes",
            "Mountain": "yes",
            "Swamp": "yes",
            "Forest": "yes",
            "Desert": "yes",
            "Jungle": "yes",
            "Arctic": "yes",
            "Coastal": "yes"
        },
        "type": "Humanoid",
        "challenge": "1/2",
        "page": "mm 349",
        "xp": "100",
        "name": "Scout",
        "size": "Medium"
    },
    "War Priest": {
        "type": "Humanoid",
        "challenge": "9",
        "xp": "5000",
        "alignment": "Any",
        "name": "War Priest",
        "size": "Medium",
        "page": "motm 254, vgm 218"
    },
    "Assassin": {
        "xp": "3900",
        "alignment": "Any non-good",
        "name": "Assassin",
        "size": "Medium",
        "page": "mm 343",
        "environment": {
            "Urban": "yes"
        },
        "type": "Humanoid",
        "challenge": "8"
    },
    "Apprentice Wizard": {
        "challenge": "1/4",
        "type": "Humanoid",
        "size": "Medium",
        "name": "Apprentice Wizard",
        "alignment": "Any",
        "xp": "50",
        "page": "motm 259, vgm 209"
    },
    "Necromancer": {
        "type": "Humanoid",
        "challenge": "9",
        "alignment": "Any",
        "xp": "5000",
        "size": "Medium",
        "name": "Necromancer",
        "page": "motm 264, vgm 217"
    },
    "Archer": {
        "type": "Humanoid",
        "challenge": "3",
        "page": "motm 49, vgm 210",
        "xp": "700",
        "alignment": "Any",
        "size": "Medium",
        "name": "Archer"
    },
    "Warlock of the Fiend": {
        "page": "motm 255, vgm 219",
        "name": "Warlock of the Fiend",
        "size": "Medium",
        "alignment": "Any",
        "xp": "2900",
        "challenge": "7",
        "type": "Humanoid"
    },
    "Noble": {
        "name": "Noble",
        "size": "Medium",
        "xp": "25",
        "page": "mm 348",
        "challenge": "1/8",
        "type": "Humanoid",
        "environment": {
            "Urban": "yes"
        }
    }
};
