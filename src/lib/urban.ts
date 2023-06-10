interface UrbanEncounterData {
    min: number;
    max: number;
    description: string;
  }
  
  const URBAN_ENCOUNTER_DATA: UrbanEncounterData[] = [
    {
      min: 1,
      max: 1,
      description:
        "You witness a crime and they have a chance to stop the criminal. If you do, you win the favor of the local constabulary. If you try to but fail, the guard gives you an opportunity to help track down the criminal. If you do nothing, you must convince the guard you are not an accomplice."
    },
    { min: 2, max: 2, description: "Stampede of pigs." },
    {
      min: 3,
      max: 3,
      description:
        "A cry rings out through the town. “An army is massing outside the gates!” Are they human, orc, mind flayer? You had better go and find out, or flee right now!"
    },
    {
      min: 4,
      max: 4,
      description:
        "A mysterious hooded beggar conspicuously ducks into an alley as they walk by - they appeared to have a disfigurement. Perhaps they were just trying to hide from people."
    },
    {
      min: 5,
      max: 5,
      description:
        "A guided tour proceeds past, as the guide drops a particularly tasty snippet of local knowledge which the PC was unaware of."
    },
    {
      min: 6,
      max: 6,
      description:
        "A shady figure beckons from an alley. They have wondrous items for sale, they say."
    },
    {
      min: 7,
      max: 7,
      description:
        "Two old ladies, witches of some sort by the look of them, beg you to take a creature off their hands. (Roll Creature Table, Chapter 14). “It never shuts up!” they tell you. “Please, we’ll pay you! We just want to be rid of the damnded thing!” The creature is the trapped soul of a former adventurer..."
    },
    {
      min: 8,
      max: 8,
      description:
        'Two men are arguing about something. One turns to a PC and says, "You look like a reasonable man. What do you think?" Could be literally anything at all, and could result in combat, a job, or just more arguing.'
    },
    {
      min: 9,
      max: 9,
      description:
        "Quest board with rewards for deeds done. Someone has rats in their cellar, missing townsperson in the woods neaby, simple things (or complex!) that give you little things to do that keep you exploring the city, making contacts, and earning gold/interesting items. Use Chapter 14 tables or Q/A rolls to generate."
    },
    {
      min: 10,
      max: 10,
      description:
        "A card shark/con artist is busking in the street, a large crowd gathers."
    },
    {
      min: 11,
      max: 11,
      description:
        "Two local thugs are strong arming a merchant for gold. You can help the merchant, but doing so annoys the local gang. Variation: The merchant is a thief, and the thugs are trying to recover their stolen money."
    },
    {
      min: 12,
      max: 12,
      description:
        "You notice a group of villagers attempting to put out a nearby house fire. This looks like it could easily spread to neighbouring houses, possibly affecting the whole town."
    },
    {
      min: 13,
      max: 13,
      description: "A peddler attempts to sell you a trinket or minor magic item."
    },
    {
      min: 14,
      max: 14,
      description:
        "A giant rat crawls out of a storm drain and gets into a fight with a dog."
    },
    {
      min: 15,
      max: 15,
      description:
        "Minor earthquake shakes things up and in the ensuing panic looters take advantage. Does the party join them, or stop them?"
    },
    {
      min: 16,
      max: 16,
      description:
        "Merchant asking for help stopping local children with slingshots."
    },
    {
      min: 17,
      max: 17,
      description:
        "A young urchin is in an ally, cornered by either thugs or stray dogs."
    },
    {
      min: 18,
      max: 18,
      description:
        "Street is having a block party tomorrow and need help setting up."
    },
    {
      min: 19,
      max: 19,
      description:
        "Someone sentenced to death: You happen across the hanging/beheading scene before it concludes, what do you do?"
    },
    {
      min: 20,
      max: 25,
      description: "Monster: Level appropriate easy encounter."
    },
    {
      min: 26,
      max: 26,
      description:
        "A con man is selling jewels and rare components that you might need."
    },
    {
      min: 27,
      max: 27,
      description:
        "A chamber pot is emptied from above. Make a DC 13 dex save to avoid. If unsuccessful, you disadvantage all charisma and stealth related rolls until you have a bath and change clothes. (Optional: make a con save vs filth fever)."
    },
    {
      min: 28,
      max: 28,
      description:
        "A scrap of paper is pressed into your hand by a young man, who looks at you desperately before turning and running away. You turn over the note and read it. “Please help, he’s coming for us all!”"
    },
    {
      min: 29,
      max: 29,
      description:
        "A member of the local guard asks you what your business is in town."
    },
    {
      min: 30,
      max: 30,
      description:
        "“Stop, thief!” You feel your arms being grabbed. The local guard apprehend you, accusing you of stealing jewels belonging to a noble/royal. Searching your clothes, and/or bag, they successfully turn up the jewels in question. You, however, have never seen them before."
    },
    {
      min: 31,
      max: 31,
      description:
        "A lady / young man on a balcony blows you a kiss and then runs away."
    },
    {
      min: 32,
      max: 32,
      description: "A beggar crouches in a dark corner, clearly diseased."
    },
    {
      min: 33,
      max: 33,
      description:
        "Someone mistakes you for a mercenary, famous performer, or an old friend. They have face blindness. 2% of the population have it."
    },
    {
      min: 34,
      max: 34,
      description: "A bard strikes up a song and starts following you around."
    },
    {
      min: 35,
      max: 35,
      description:
        "A beggar notices the group and offers to guide them around in exchange for coin."
    },
    {
      min: 36,
      max: 36,
      description: "Bar fight bursts out into the street and may involve the PC."
    },
    {
      min: 37,
      max: 37,
      description:
        "Propositioned. Person of the night propositions a player. But they may not be all they seem..."
    },
    {
      min: 38,
      max: 38,
      description:
        "A drunkard sees you and mistakes them for friends or enemies or perhaps throws up on you."
    },
    {
      min: 39,
      max: 39,
      description:
        "A person who claims to be a fan of the PC begins to follow them around."
    },
    {
      min: 40,
      max: 40,
      description:
        "Snake Oil Salesman has gathered a crowd, and has actors in the group to fool people into buying worthless potions. Bonus: they're not worthless, but definitely not as advertised. A healing potion that's really gaseous form? Make Q/A rolls to determine results."
    },
    {
      min: 41,
      max: 41,
      description:
        "Group of smugglers coming out of a sewer grate with a crate of goods."
    },
    {
      min: 42,
      max: 42,
      description: "An old female fortune teller beckons to you from her tent."
    },
    {
      min: 43,
      max: 43,
      description:
        "A man tumbles out a tavern window. He’s fully dressed in nobleman’s garb. A female half-orc jumps out after him, letting out a warcry as he gets up and runs for his life screaming for help. Do you help her and run him down or do you get in her way? Possible: No matter who you help they both begin attacking you!"
    },
    {
      min: 44,
      max: 44,
      description:
        "A street dog runs past with a human hand in its mouth - wearing a large, very obvious jeweled ring. Dog chase or find out what happened to the owner of the ring (and hand)."
    },
    {
      min: 45,
      max: 45,
      description:
        "Someone's horse is spooked and charges through the streets. whether it’s dragging a wagon or just a rider, it is panicked and needs to be stopped."
    },
    {
      min: 46,
      max: 46,
      description:
        "You find a map, discarded, on the street, or just a fragment of one, which arouses your curiosity. It shows a ruin, and there is a sketch of an artifact. Magical? Perhaps a local mage could help you decode this..."
    },
    {
      min: 47,
      max: 47,
      description:
        "A drunk just wakes up nearby. “Wha... where am I?! My... my weapons! My belongings! They’re gone!”"
    },
    {
      min: 48,
      max: 48,
      description:
        "You stop to listen to a talented storyteller relate a story about a famous adventurer and his beast companion. Part of the story is unresolved, however, and gets you thinking..."
    },
    {
      min: 49,
      max: 49,
      description:
        "You feel a thwack in the side of your head, and turn to see that a bunch of drunk young nobles are pelting passers by with rotten vegetables, laughing as they do so!"
    },
    {
      min: 50,
      max: 55,
      description: "Monster: Level appropriate medium encounter."
    },
    {
      min: 56,
      max: 56,
      description:
        "Your sharp eye spots a pickpocket deftly relieve a noblewoman of an expensive necklace."
    },
    {
      min: 57,
      max: 57,
      description:
        "A wizard is carrying a bagful of potions when suddenly the bag rips (perhaps it catches on a nail sticking out of a building, or it catches on a passing cart) and several potions drop out and smash on the ground, exploding with various dramatic effects."
    },
    {
      min: 58,
      max: 58,
      description:
        "A jeweller emerges from his shop, screaming that he’s been robbed by dwarves. A nearby dwarf asks him for proof, but all he has to say is, “Of course it’s dwarves, they lust after gems constantly!”"
    },
    {
      min: 59,
      max: 59,
      description:
        "A female priest is castigating a businesswoman who has set up her wares before the temple (of Lathander, perhaps? Any good-aligned god). Except this business is no ordinary business - a female slaver is parading her wares, selling slaves to whoever’s buying."
    },
    {
      min: 60,
      max: 62,
      description:
        "Something occurs, or you find something, that requires a (roll d10) 1: acrobatics / dex check or save, 2: strength or athletics check, 3: stealth check, 4: con check or save, 5: int check, 6: investigation check, 7: arcana check, 8: history check, 9: nature check, 10: religion check. Use Q/A rolls or Story Element Interaction tables (chapter 14) to find out what."
    },
    {
      min: 63,
      max: 65,
      description:
        "Something occurs, or you find something, that requires a (roll d10), 1: animal handling check, 2: insight check, 3: survival check, 4: medicine check 5: perception check, 6: persuasion check, 7: performance check, 8: deception check, 9: intimidation check, 10: charisma check. Use Q/A roll or Story Element Interaction tables (chapter 14) to find out what."
    },
    {
      min: 66,
      max: 69,
      description:
        "NPC met, who gives PC information about possible quest. Go to Chapter 7 and generate a quest, which you may or may not accept."
    },
    {
      min: 70,
      max: 75,
      description:
        "Monster: Level-appropriate hard encounter. Monster on the loose, marauding through the streets."
    },
    {
      min: 76,
      max: 76,
      description:
        "You are stopped by the local guard who want to congratulate you on your recent successful quest. How do they know?"
    },
    {
      min: 77,
      max: 77,
      description:
        "PC hears a rumour about a job that a local priest might have. Apparently, or so the rumour goes, something is going on in the sacred catacombs beneath the streets."
    },
    {
      min: 78,
      max: 78,
      description:
        "You pass a house which is all boarded up, the gates locked. A passerby informs you that this is the house of a local nobleman who hasn’t been seen in years."
    },
    {
      min: 79,
      max: 79,
      description:
        "You see a dice game going on in an alley off the street you are walking down."
    },
    {
      min: 80,
      max: 80,
      description:
        "A cleric stands atop a box on the roadside, spouting vitriol and nasty rumours about the town’s leader or leaders. The cleric has attracted quite a crowd."
    },
    {
      min: 81,
      max: 81,
      description:
        "A group of protestors has set up outside the Town Hall, protesting the new road which is planned to run right through the middle of their settlement, some distance out of town."
    },
    {
      min: 82,
      max: 82,
      description:
        "A merchant asks you to mind his cart for him while he chases a thief who has stolen merchandise from it. He then leaves, and doesn’t return for a very long time..."
    },
    {
      min: 83,
      max: 83,
      description:
        "A street urchin appears, promising divine favour if the PC comes and volunteers an hour of service at a nearby temple."
    },
    {
      min: 84,
      max: 84,
      description:
        "A shopkeeper is attacking a wasp nest outside of his shop with a broom. He dislodges it and it crashes to the ground, engulfing him in a Swarm of Insects!"
    },
    {
      min: 85,
      max: 85,
      description:
        "Two half-orcs are engaged in a full-on brawl outside a nearby tavern. Apparently one thinks the other cheated at dice."
    },
    {
      min: 86,
      max: 86,
      description:
        "Religious pilgrims making their way quietly through the streets are being mocked and jeered by a group of elven teenagers"
    },
    {
      min: 87,
      max: 87,
      description:
        "A tattered cloak blows up the street. Catching hold of it, you find a note in one of its pockets."
    },
    {
      min: 88,
      max: 88,
      description:
        "Someone has released a hallucinogenic substance into the air, and people are in various states of intoxication."
    },
    {
      min: 89,
      max: 89,
      description:
        "A distraught mother cannot find her child and is convinced it has been kidnapped. She is moving from person to person, begging for help."
    },
    {
      min: 90,
      max: 90,
      description:
        "A sudden gust of wind whips through the town, sending stalls toppling over, hats flying, stacks of parchment fluttering down the street. Perhaps the PC discovers something as a result."
    },
    {
      min: 91,
      max: 91,
      description:
        "A dwarf, armed with greataxe, is threatening a cowering halfling, who is shaking with fear. The dwarf is living with rage, but has just been disarmed by the town guard. What’s the situation here? Has the halfling wronged him in some way?"
    },
    {
      min: 92,
      max: 92,
      description:
        "An overturned cart ahead is causing gridlock - the street is jammed with traffic."
    },
    {
      min: 93,
      max: 93,
      description:
        "“Ay oop luv, looking for a good time?” A prostitute (any sex or race) begins soliciting you earnestly."
    },
    {
      min: 94,
      max: 94,
      description:
        "Suddenly, out of the blue, you see a mage of some sort simply appear in the middle of the street/alley."
    },
    { min: 95, max: 99, description: "NPC appears with quest (see Chapter 7)" },
    {
      min: 100,
      max: 100,
      description: "Monster: Level appropriate deadly encounter."
    },
    {
      min: 101,
      max: 101,
      description:
        "You hear rumours of a nomadic cult that has taken up residence in an abandoned building in a deserted part of town. Who knows what they are planning, but there are strange sounds and lights coming from that area."
    },
    {
      min: 102,
      max: 102,
      description:
        "A strongman is exhibiting a show of strength at the side of the street, and has drawn a large crowd. However, this burly character looks dejected, exhausted, and the announcer who is narrating his feats appears to be the one in control. Does he have the poor brute magically enslaved? Or is some other form of duress going on here?"
    },
    {
      min: 103,
      max: 103,
      description:
        "A guard patrol suddenly runs past you. “To the gates, to the gates!” they are yelling. “We are being attacked!”"
    },
    {
      min: 104,
      max: 104,
      description:
        "You pass a market stall. The stallholder is being harassed by someone in a loud voice. “I know you have it, you liar! Give it to me now!”"
    },
    {
      min: 105,
      max: 105,
      description:
        "Looking down an alleyway, you can see a figure being set upon by three larger individuals - this definitely does not seem to be a fair fight..."
    },
    {
      min: 106,
      max: 106,
      description:
        "Some sort of coloured smoke is billowing out of the windows of a nearby building! Some sort of alchemical chaos perhaps? Or something else..."
    },
    {
      min: 107,
      max: 107,
      description:
        "“Accepting all comers!” a huge bugbear yells as he walks down the street, ringing a hand bell. “Tonight, at the Ancient Chalice! Pit fights, only the dirtiest, meanest fighters will survive. 500 gold prize money! We’ll take anyone!”"
    },
    {
      min: 108,
      max: 108,
      description:
        "You pass a row of abandoned multi-storey buildings, each one with parchment nailed to the front door. They all read the same: Condemned. Do not enter."
    },
    {
      min: 109,
      max: 109,
      description:
        "A large, walled urban garden is here. The sign outside informs you that the garden holds some extremely rare and exotic species."
    },
    {
      min: 110,
      max: 110,
      description:
        "An old man telling a story has gathered a large group of children and adults around him, entranced by his narration. It seems he was a former adventurer and has some enthralling tales to tell."
    },
    {
      min: 111,
      max: 111,
      description:
        "A streetside merchant is selling baubles, inside which strange colours and scenes are swirling. He tells you that at the right phase of the moon, you can enter one of these baubles as a small pocket dimension, which you can shape to your liking. He’s asking 500gp for each of them. But there is an element of shadiness to this merchant and you perhaps don’t trust him..."
    },
    {
      min: 112,
      max: 112,
      description:
        "A local artist is exhibiting works in a gallery. Visitors have reported that his images are so dark and evocative that he must have had some horrific experiences. It’s even said that some descend into madness after viewing these works. Whatever the case, the exhibition seems to be attracting a lot of attention."
    },
    {
      min: 113,
      max: 113,
      description:
        "A cart passes by, built of wood and metal, with bars over the windows. Passers-by remark that it is an infamous criminal, finally caught, who is being transported to the town jail. “They never thought they’d catch him,” someone says. “He’s been eluding them for years!”"
    },
    {
      min: 114,
      max: 114,
      description:
        "Someone is tolling the alarm bell nearby. Has a fire broken out? Magical chaos? Some sort of catastrophe has occurred that is serious enough to call the town guard over."
    },
    {
      min: 115,
      max: 115,
      description:
        "You pass a huge, sprawling graveyard, covering a large area. All the town’s dead are buried here, and it’s said that some tombs connect to a deeper network of catacombs. Currently, however, a crowd is gathered around a freshly-dug grave where a recently-deceased local identity is being interred. This person, you hear someone nearby remark, died in extremely mysterious circumstances. There are many unanswered questions..."
    },
    {
      min: 116,
      max: 116,
      description:
        "You pass a magician’s guildhall. It is very active at the moment - a steady stream of mages is coming and going from the door. Inquiring of one of them, you are informed that this guildhall is currently hosting the annual general meeting to discuss the state of magic in the realm."
    },
    {
      min: 117,
      max: 117,
      description:
        "A royal procession is about to begin. The Queen/King/Emperor/Empress is due to pass along the street you are on with their entourage very shortly. You see the town guard doing a preliminary sweep of buildings, checking for potential assassins or evil-doers. “Make way!” someone shouts. “Make way for our glorious ruler!” Adults and children alike are beginning to throng either side of the street in anticipation of the regal parade."
    },
    {
      min: 118,
      max: 118,
      description:
        "Striking up a conversation with a local, you are told of the old town, a deserted, partially ruined quarter that was recently overrun by monsters. Much slaughter and devastation happened there. “No-one ventures there now,” the local informs you. “It’s said that there are still horrors lurking there, waiting for the foolish to venture in.”"
    },
    {
      min: 119,
      max: 119,
      description:
        "You catch a snatch of conversation from two passing locals. “I overheard them talking about it in The Gobbling Gander. Yes, a heist, planned for tonight! The Guild of Scoundrels has never been so daring as to attempt something like this!”"
    },
    {
      min: 120,
      max: 120,
      description:
        "A small temple is having a festival which involves a bizarre tradition. [d4] (1) Feeding all passers-by, regardless of religion, until they are so full, they can barely move (2) Treating all visitors to the temple like royalty, washing their feet, massaging their shoulders and generally pampering them (3) Hurling insults at people passing by the temple (4) Allowing the children to order the adults about and treat them like slaves for a day. After this tradition is observed, it is customary for a high-ranking priest to tell a story about their god or goddess’s mythology."
    },
    {
      min: 121,
      max: 121,
      description:
        "You pass a grand building under construction. Teams of dwarven stonemasons are crafting this building, working many intricate details into the masonry. Each of the carvings has a story behind it, as the foreman is only too eager to inform you. This building is going to be [d4] (1) An embassy for the dwarven kingdom of _____ (2) An urban residence for a dwarven ruler (3) a temple to a prominent dwarven god (4) A grand tomb, commissioned by the devoted followers of a noted dwarven priest or mage."
    },
    {
      min: 122,
      max: 122,
      description:
        "You begin seeing a poster issuing a reward for a notorious criminal. The thing is, this criminal bears a striking resemblance to a member of your adventuring party!"
    },
    {
      min: 123,
      max: 123,
      description:
        "A duel is about to take place, in the middle of the street / town square / market between two rival mages. By all indications, it’s going to get ugly!"
    },
    {
      min: 124,
      max: 124,
      description:
        "There is a commodity shortage in this part of town (e.g., food/water/building supplies). Perhaps the local government has placed restrictions on this area because of perceived unlawful behaviour, but whatever the case, the citizenry is on the brink of rioting."
    },
    {
      min: 125,
      max: 125,
      description:
        "Since you’ve been in this town, you’ve noticed quite a few suspicious-looking individuals all sporting the same tattoo. You wonder what it could signify."
    },
    {
      min: 126,
      max: 130,
      description:
        "Roll a d4. (1-2) Roll on Skill Challenge table, p.139 (3-4) Level-appropriate easy encounter"
    },
    {
      min: 131,
      max: 131,
      description:
        "A noble passes in a litter carried by servants. “Get out of the way, filthy peasants!” the noble rudely shouts as the litter jostles past."
    },
    {
      min: 132,
      max: 132,
      description:
        "You hear that a huge ship has just arrived in port from a foreign land. No-one has ever encountered these peoples before, and they are looking to make contact with locals to learn more about local customs and culture. They also brought some fascinating items with them to trade."
    },
    {
      min: 133,
      max: 133,
      description:
        "A violent gang conflict (perhaps between two rival thieves’ guilds or other factions) has spilled out into the streets. It’s open warfare out here, with abductions and assassinations happening in broad daylight."
    },
    {
      min: 134,
      max: 134,
      description:
        "From a second-story window, you hear a halfling woman singing a pretty song about an ancient hero and their conquests. The story is very descriptive, and you are perhaps overcome with a desire to know more about this legend."
    },
    {
      min: 135,
      max: 135,
      description:
        "A worried-looking novice mage is making their way down the street carrying an armful of scrolls. “Can’t be late!” she is saying to herself. “Mistress will kill me if I’m late! If only I had someone to help me with these scrolls!”"
    },
    {
      min: 136,
      max: 136,
      description:
        "You see an agile figure bounding across rooftops, carrying something. From quite a way behind, pursuers are yelling at them to stop."
    },
    {
      min: 137,
      max: 137,
      description:
        "An eviction is in progress. You see the town guard forcibly removing a family and their grandfather from their house. A woman is screaming: “This is a disgrace! Do you know who my father is? You have no respect! Wait till the duke hears about this, he’ll have your heads!”"
    },
    {
      min: 138,
      max: 138,
      description:
        "There is a crack of thunder and rain begins falling very heavily. Stall holders and other vendors begin packing up, and citizens doing their business about town begin running for cover. It is an absolute downpour. You see a nearby tavern which looks cosy and inviting."
    },
    {
      min: 139,
      max: 139,
      description:
        "This area of the town is deserted... every house barred, condemned. Then you see them, piled up in the middle of a square. Bodies. A tolling bell catches your attention. “Bring out yer dead!”"
    },
    {
      min: 140,
      max: 140,
      description:
        "You see a man running, looking terrified, clutching a relic of some kind. Then, some distance behind him, a mob of well-armed female priests."
    },
  
    {
      min: 141,
      max: 141,
      description:
        "A desperate-looking half-elf peasant clutching a pitchfork asks you if you’ve seen anyone who looks like him pass by recently. He refuses to explain or give his name."
    },
    {
      min: 142,
      max: 142,
      description:
        "A guard checkpoint stops everyone except a noble and his entourage."
    },
    {
      min: 143,
      max: 143,
      description:
        "You hear word that a ship’s captain is sitting in a nearby tavern, looking for adventurers to accompany him as protection on his next expedition to the outer islands. The pay is terrible and the food worse, but he promises one thing: it won’t be boring."
    },
    {
      min: 144,
      max: 144,
      description:
        "An exhibition is in town featuring artifacts from far-flung countries that most people have never heard of."
    },
    {
      min: 145,
      max: 145,
      description:
        "Passing an open doorway, you catch a strange scent, and cannot help but glimpse several drowsy-looking people stumbling between rooms. A female, seated by the door, notices your interest. “Fancy a taste?” she asks. “Go see Delren in the back room, he’ll sort you out.”"
    },
    {
      min: 146,
      max: 146,
      description:
        "A warrior stumbles out of an alleyway into the middle of the street, a sword impaling him from front to back. “Stop... him...” he manages to say before collapsing onto his knees. He is alive, but only barely."
    },
    {
      min: 147,
      max: 147,
      description:
        "A wizard is casting divination spells at passers-by and then tossing off idle remarks about the person’s future."
    },
    {
      min: 148,
      max: 148,
      description:
        "“Be on the lookout,” a small company of guards is announcing loudly as they patrol the streets. “Prisoners escaped from the tower!”"
    },
    {
      min: 149,
      max: 149,
      description:
        "You see a poster. The local library is getting overstocked and is having a sale of some of its books. Some old books of redundant maps that no-one uses anymore (as they refer to the ancient kingdom, not the current one) and other potentially interesting but obscure tomes are being sold for a fairly reasonable price (100-300 gp per book. depending on rarity)."
    },
    {
      min: 150,
      max: 150,
      description:
        "You spy a large building ahead which is subject to some strange metaphysical anomaly. [d4] (1) The building floats (2) The building is covered by a dark shroud resembling night-time (3) The building is surrounded by light patterns (4) The building is partially spectral (transparent) and you can see its interior."
    },
    {
      min: 151,
      max: 155,
      description:
        "Roll a d4. (1-2) Roll on Boon table, p.152 (3-4) Level-appropriate medium encounter."
    },
    {
      min: 156,
      max: 156,
      description:
        "A young woman is passing out wooden tokens for a free drink at a local tavern."
    },
    {
      min: 157,
      max: 157,
      description:
        "A boat is passing in a nearby canal. It is [d4] (1) A royal barge (2) A goods freighter (3) A pirate or explorer vessel of some description (4) A mage’s ship. If the city is landlocked, make it an airship instead."
    },
    {
      min: 158,
      max: 158,
      description:
        "If you have an NPC or sidekick, they are potentially kidnapped by a group of thugs while you are distracted. You could choose this to happen to your PC instead, or your party could witness a kidnapping."
    },
    {
      min: 159,
      max: 159,
      description:
        "You see workers loading a huge shipment into boats, or into carts if your settlement is landlocked. You wonder what this shipment is, where it might be going, what it is, who it’s for and whether they have protection on the journey."
    },
    {
      min: 160,
      max: 160,
      description:
        "A section of street has fallen into a sinkhole deep below, taking several houses with it. Who knows why this happened, but it is unlikely that the inhabitants of the houses survived."
    },
    {
      min: 161,
      max: 161,
      description:
        "You pass a place of business where many vehicles are parked outside. (These could be any sort of vehicle that fits with the lore of your world, from an oxcart to an airship). They are offering passage to most major settlements in the realm. Fares start at 50 gp."
    },
    {
      min: 162,
      max: 162,
      description:
        "The panicked news comes to you through the city grapevine, and people are fleeing to safety as a result. A famous local wizard, finally driven insane through his dabblings in obscure subject areas, is on a rampage through the city, destroying everything in his path. Authorities are unsure how to deal with him."
    },
    {
      min: 163,
      max: 163,
      description:
        "A stranger runs quickly past you, dropping a random item in your path. [d4] (1) Mundane Item (Roll on Item table, p.163, until you get something that fits context) [2] Weapon [3] Gems and money (roll on CR 1 hoard table, DMG or TSAT) [4] Common magic item."
    },
    {
      min: 164,
      max: 164,
      description:
        "The street suddenly goes empty but for one or two people, and in the next moment even they are gone. You are alone... Where did everyone go? Then you hear it..."
    },
    {
      min: 165,
      max: 165,
      description:
        "A poster announces the public reading of an obscure and arcane scroll recently discovered by an eminent archaeologist in a forgotten tomb near to the city."
    },
    {
      min: 166,
      max: 166,
      description:
        "A huge team of workers is busy fixing this part of town. It turns out that this area of the city houses catacombs which connect to the Underdark, through long networks of twisting passages. Somehow, a purple worm found its way up here and burst through the surface, destroying huge amounts of masonry, businesses, residences, ploughing through several blocks of buildings. The damage was immeasurable and will take months to repair. Also, a small company of men-at-arms is stationed there in case any other nasties come up from below..."
    },
    {
      min: 167,
      max: 167,
      description:
        "News comes to you of beggars and homeless being killed by some unknown terror..."
    },
    {
      min: 168,
      max: 168,
      description:
        "A creature begins following you. [d10] (1-8) Beast, (9) Construct (10) Other. Choose a level-appropriate creature familiar from SRD Monsters, Monster Manual or other resource."
    },
    {
      min: 169,
      max: 169,
      description:
        "A large government building has a crowd protesting outside of it. They could be from a peoples who have been mistreated by the ruling elite. But this is a situation that you know of and has been going on in the realm for years. Decades, even."
    },
    {
      min: 170,
      max: 170,
      description:
        "This part of town bears some interesting ancient hieroglyphs etched on various historical walls. Some of them are in a language that no-one has been able to decipher."
    },
    {
      min: 171,
      max: 171,
      description:
        "To their great surprise, one of your PCs sees someone from their old home town. This NPC shares news of their hometown, as well as gibing access to some local networks."
    },
    {
      min: 172,
      max: 172,
      description:
        "You run into an NPC from a previous adventure. Perhaps they were evil and mended their ways (or perhaps not), but anyway they have some interesting stories to tell."
    },
    {
      min: 173,
      max: 173,
      description:
        "You see an artisan sitting outside their workshop, finishing off some incredibly detailed work while an apprentice looks on."
    },
    {
      min: 174,
      max: 174,
      description:
        "Two expert swordmasters are duelling it out in a public place. The exhibition has drawn a crowd, but no mistake - this is a fight to the death, as evidenced by the expressions of determination on the faces of the competitors."
    },
    {
      min: 175,
      max: 175,
      description:
        "You hear a voice in your head. “Do not be alarmed. I speak to you because I can, and because I have seen you before. I do so through magic, but also because I need your services. Come to me at the Inn of the Three Wands. It is hard to find, but you shall know the way. If you do not wish to, forget I have spoken to you and continue on your way. I shall not bother you again. But I promise you, it will be worth your while.”"
    },
    {
      min: 176,
      max: 180,
      description:
        "Roll a d4. (1-2) Roll on Bane table, p.157 (3-4) level-appropriate hard encounter"
    },
    {
      min: 181,
      max: 181,
      description:
        "You encounter a circus performing in a large plaza. Acrobats, jesters, storytellers, puppeteers, illusionists, all manner of entertainers are here, and many interesting market stalls to boot."
    },
    {
      min: 182,
      max: 182,
      description:
        "A trio of interesting-looking individuals - adventurers perhaps - blinks into view right in front of you. “What... where are we?” one of them stammers."
    },
    {
      min: 183,
      max: 183,
      description:
        "Two halfling women, one old and one young, are walking past you. “It’s all right mother,” the young one says. “It’s only for a little while. The locket should get us a nice purse of gold, then we can be back under a roof before nightfall.” The older one sobs. “That heartless wretch! Casting us out on the street like stray dogs! That locket belonged to my grandmother!”"
    },
    {
      min: 184,
      max: 184,
      description:
        "The local botanic gardens are a fascinating place. There is a section of the garden where the foliage grows exceptionally thick, and some of the plants there are known to be quite dangerous to walk near. The supposed reason is that there is a series of tunnels beneath the gardens, and a powerful relic is hidden under that spot. No-one has ever been able to find the entrance to this alleged dungeon however, and no-one knows if it is a relic that is causing this verdant growth, or some other cause."
    },
    {
      min: 185,
      max: 185,
      description:
        "You notice guards stationed on the battlements around the city walls. Asking a passing citizen why they are so vigilant, the citizen replies, “There were rumours that a nearby giant colony was planning an attack... so, naturally, that’s got everyone worried.”"
    },
    {
      min: 186,
      max: 186,
      description:
        "You pass a building which bears a plaque: “Alyssa Ibold, Scholar of the Realms. Detailed knowledge on all countries and settlements within the known world. Consultations 10 sp per hour.”"
    },
    {
      min: 187,
      max: 187,
      description:
        "If one of your PCs worships a god, they see a festival in progress honouring their god. This might be weird if their god is a rare one, but in that case, this is a rare sighting of public practice of that religion. If it is a major religion, then this is a festival holiday. If this doesn’t fit with your character, reroll."
    },
    {
      min: 188,
      max: 188,
      description:
        "Many guards are stationed on street corners, preventing access to several city blocks. “Don’t go in there,” one of them tells you. “Trust me, you don’t want to go in there.”"
    },
    {
      min: 189,
      max: 189,
      description:
        "You pass a high wall, overrun with creepers. Reaching the gate of this large compound, you peer in to see a huge, dilapidated building, probably once glorious. A sign on the gate reads Compassionate Asylum for Victims of Mind Magic."
    },
    {
      min: 190,
      max: 190,
      description:
        "There is a loud crack, and lightning strikes the ground mere feet away from you, filling the air with a strange, burnt smell. Looking up, you see that it is a clear sky, not a cloud. So where did that come from? Does someone powerful have designs on you?"
    },
    {
      min: 191,
      max: 191,
      description:
        "Two friendly old wizards are using mage hand to put on a puppet show for local children. The story, however, seems almost too fantastical to be true, and you find yourself drawn in. Does this outlandish tale come from the wizards’ own experience?"
    },
    {
      min: 192,
      max: 192,
      description:
        "A gnarled old streetside merchant, who looks like he’s seen some things in his time, is selling pieces of monster anatomy and items made from said anatomy."
    },
    {
      min: 193,
      max: 193,
      description:
        "Some young apprentice mages are being bullied by some young warriors-in-training. A classic jocks vs nerds scenario. As you watch, you see that one of the young mages is quietly forming a spell between his hands... You have to see how this turns out!"
    },
    {
      min: 194,
      max: 194,
      description:
        "A cartload of prisoners rumbles past. You see all sorts of faces in there, male and female, human, orc, elf, halfling, but all having the look of professional soldiers. “Heading to the prisoner of war camp, three miles out of town,” a passer-by remarks, noticing your interest. “Enemy soldiers transported back here after the latest conflict. A rebellion which the Empire just stamped out. Why they don’t just put them out of their misery is beyond me.”"
    },
    {
      min: 195,
      max: 195,
      description:
        "Camped out on the steps of city hall, a tribe of nomadic warriors has erected tents, including a chief’s tent, has made campfires and are roasting a large dead animal on a spit. The town guard are standing around, hesitant to ask these rugged-looking barbarians to move on. Why have they travelled here, you wonder, so far from their homelands? Do they have some issue with the ruling power?"
    },
    { min: 196, max: 200, description: "Level-appropriate deadly encounter" }
  ];
  
  export function getRandomUrbanEncounter(): string {
    const diceRoll = Math.floor(Math.random() * 200) + 1;
    let encounter: string | undefined;
    for (const data of URBAN_ENCOUNTER_DATA) {
      if (diceRoll >= data.min && diceRoll <= data.max) {
        encounter = data.description;
        break;
      }
    }
    return encounter || "No encounter data available";
  }
  