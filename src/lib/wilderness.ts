interface WildernessEncounterData {
    min: number;
    max: number;
    description: string;
  }
  
  const WILDERNESS_ENCOUNTER_DATA: WildernessEncounterData[] = [
    {
      min: 1,
      max: 4,
      description:
        "Small dungeon or crypt found. Purpose and history unknown. If entering, go to Chapter 8: Random Dungeon Generation."
    },
    {
      min: 5,
      max: 5,
      description:
        "Ready-made camp found, or cosy cave, that could potentially be used as shelter for the night, or a base while exploring. Inhabited?"
    },
    {
      min: 6,
      max: 6,
      description:
        "A small creek, babbling pleasantly. Or a large crack, bubbling pungently."
    },
    {
      min: 7,
      max: 7,
      description:
        "A storm on the horizon, lightning dancing underneath dark grey clouds."
    },
    { min: 8, max: 8, description: "A sinkhole has opened up nearby." },
    { min: 9, max: 9, description: "Abandoned, empty town." },
    {
      min: 11,
      max: 15,
      description:
        "NPC met, who gives PC information about possible quest. Go to Chapter 7 and generate a quest, which you may or may not choose to accept."
    },
    {
      min: 16,
      max: 16,
      description: "Abandoned campsite found. Use Q/A rolls to find out more."
    },
    {
      min: 17,
      max: 17,
      description: "A tree with what looks like Druid markings."
    },
    {
      min: 18,
      max: 18,
      description:
        "You find survivors of some sort of attack, and they have a tale to tell..."
    },
    {
      min: 19,
      max: 19,
      description:
        "Plundered barrow / burial mound. But did they get everything? And what still waits there? (50% mostly empty)"
    },
    {
      min: 20,
      max: 20,
      description:
        "On the road, a dropped item. A backpack, a purse with interesting contents / a hat with a note tucked inside / an engraved ring... could be anything. Use Q/A roll to find out details."
    },
    {
      min: 21,
      max: 21,
      description:
        "Interesting traveller. This character has obviously seen some things..."
    },
    {
      min: 22,
      max: 22,
      description:
        "Cemetery. Some of the graves have been looted, and most of the tombstones are so old that the names have worn off."
    },
    {
      min: 23,
      max: 23,
      description: "Prisoner(s) being escorted in a heavily-armoured cart."
    },
    {
      min: 24,
      max: 24,
      description:
        "Interesting geological feature. Use Q/A mechanic to find out what."
    },
    {
      min: 25,
      max: 25,
      description: "You find a discarded backpack with some intriguing contents."
    },
    {
      min: 26,
      max: 26,
      description: "An odd noise is coming from some distance ahead..."
    },
    {
      min: 27,
      max: 27,
      description:
        "Strange lights in the nearby hills are attracting your attention."
    },
    {
      min: 28,
      max: 28,
      description:
        "You stumble across an orchard, filled with ripe and delicious fruit. The owner is nowhere in sight."
    },
    {
      min: 29,
      max: 29,
      description:
        "Bounty hunters, searching for a fugitive. “You seen anyone?” (Who they are working for is unclear)"
    },
    { min: 30, max: 30, description: "Sudden and abrupt change in weather" },
    { min: 31, max: 31, description: "Abandoned mine, dwarven or otherwise." },
    {
      min: 32,
      max: 32,
      description:
        "You hear howling in the distance. It could be wolves, but the sound is strange somehow..."
    },
    {
      min: 33,
      max: 33,
      description:
        "Debris from a recent, large battle. Who fought here, and who won? How recent was this?"
    },
    {
      min: 34,
      max: 34,
      description:
        "Humanoid corpse. 25% you find a clue (see Clue table in Chapter 9)."
    },
    {
      min: 35,
      max: 35,
      description:
        "A bird (or some other creature – roll Creature Table Chapter 14) begins talking to you, in fluent Common! And not just mindless parroting..."
    },
    {
      min: 36,
      max: 36,
      description:
        "A royal/noble personage and their entourage passes in an opulent carriage."
    },
    {
      min: 37,
      max: 37,
      description:
        "A flock of birds (vultures? ravens?) circles over a point somewhere overhead"
    },
    {
      min: 38,
      max: 38,
      description:
        "You find an old, ruined monument. Is it to a god, a famous local figure, or something else?"
    },
    {
      min: 39,
      max: 39,
      description:
        "A traveller with information/warning about a situation in the next settlement."
    },
    {
      min: 40,
      max: 40,
      description: "Unmarked settlement: town/village/hamlet. Human?"
    },
    {
      min: 41,
      max: 41,
      description:
        "You reach a bridge over a small river. The bridge is washed out. Travellers are waiting here, unsure what to do."
    },
    { min: 42, max: 42, description: "You find an injured beast" },
    {
      min: 43,
      max: 43,
      description:
        "A farmer invites you into his house for a meal, and possibly some of his home brew ale/mead as well"
    },
    {
      min: 44,
      max: 44,
      description: "Overturned/broken-down cart. Is it attended?"
    },
    {
      min: 45,
      max: 50,
      description:
        "Monster ambush. Level-appropriate easy encounter. Go to Chapter 16."
    },
    {
      min: 51,
      max: 51,
      description:
        "An animal wanders across your path. It glances up at you but doesn’t seem particularly bothered by your presence."
    },
    {
      min: 52,
      max: 52,
      description: "Trapped creature (humanoid? monster? What type of trap?)"
    },
    {
      min: 53,
      max: 55,
      description:
        "An abandoned/ruined structure of some kind, which may or may not have a subterranean component."
    },
    { min: 56, max: 56, description: "An old hermit. What’s he babbling about?" },
    { min: 57, max: 57, description: "A creepy and unsettling token/sign." },
    { min: 58, max: 58, description: "Traveling merchant" },
    {
      min: 59,
      max: 59,
      description:
        "A traveling adventurer who is impressed and wants to join your party."
    },
    {
      min: 60,
      max: 65,
      description:
        "Monster Encounter: Level-appropriate medium encounter. Go to Chapter 16."
    },
    {
      min: 66,
      max: 66,
      description:
        "A traveller, resting by the side of the road, begins pointing and laughing uproariously at you. Is she mad?"
    },
    { min: 67, max: 67, description: "Heavily-guarded transport passes." },
    { min: 68, max: 68, description: "Travelling sage/archivist." },
    {
      min: 69,
      max: 69,
      description: "Bandits (human or otherwise) demand a toll from you."
    },
    {
      min: 70,
      max: 75,
      description: "Monster: Level appropriate hard encounter."
    },
    {
      min: 76,
      max: 76,
      description: "A starving family begging for food or gold."
    },
    {
      min: 77,
      max: 77,
      description:
        "A tribe who owns the land demands a tribute from you for passage (and in return will escort you through – whether you like it or not)."
    },
    {
      min: 78,
      max: 78,
      description: "A travelling troupe of performers (80% Friendly)."
    },
    {
      min: 79,
      max: 79,
      description:
        "A travelling merchant, but his wares are not the ordinary. Indeed, much of it is illegal in some way. Is he a smuggler? A drug dealer? A heist thief?"
    },
    {
      min: 80,
      max: 80,
      description: "Hunters/travellers/adventurers. Camped up and relaxing."
    },
    {
      min: 81,
      max: 81,
      description:
        "You see a low rocky hill, where faces have been carved into the rocks, along with the shapes of various beasts. It is artfully done, and seems to tell some sort of story."
    },
    {
      min: 82,
      max: 82,
      description:
        "You see a track leading away from the road and into the forest/hills. Who knows where it leads..."
    },
    {
      min: 83,
      max: 83,
      description: "Bandits waylay you and demand all your money."
    },
    {
      min: 84,
      max: 84,
      description:
        "On a lonely stretch of road, you see a lone cabin, but cannot tell if it is inhabited or not."
    },
    {
      min: 85,
      max: 85,
      description: "A long-forgotten battlefield. How many died here?"
    },
    {
      min: 86,
      max: 86,
      description: "A tower, visible off the road some distance."
    },
    { min: 87, max: 87, description: "Patrol from the nearest settlement." },
    { min: 88, max: 88, description: "Unmarked settlement." },
    {
      min: 89,
      max: 89,
      description:
        "The road disappears and the place looks nothing like on the map."
    },
    { min: 90, max: 94, description: "NPC appears with quest. (Use Chapter 7)." },
    {
      min: 95,
      max: 100,
      description: "Monster! Level-appropriate encounter. 1-3: Hard, 4: Deadly."
    },
    {
      min: 101,
      max: 101,
      description:
        "You find an assortment of personal possessions in this area. Roll 5 times on the Items table (p.163), ignoring natural results such as rubble, leaves etc. Only things that would have reasonably been possessions."
    },
    {
      min: 102,
      max: 102,
      description:
        "A large number of birds have amassed in an area ahead. Enough to make you wonder why they are all there, filling every tree branch, perched on every boulder and available surface..."
    },
    {
      min: 103,
      max: 103,
      description:
        "You meet a local hunter setting traps in the area. She has some interesting information to relate regarding things she has seen in her travels."
    },
    {
      min: 104,
      max: 104,
      description:
        "A malevolent, treacherous energy lurks in this area. The god of trickery is worming his way into the minds of all. If you have any sidekicks with you, or if there is more than one PC in your party, then have either a sidekick, PC or NPC make a Wisdom saving throw. If they fail, they turn on your main character, attacking them with their most powerful attack. The effect ceases as soon as this sidekick, PC or NPC either takes damage, or has a spell such as remove curse cast on them. You could also play it like this: have your main PC make a Wisdom save, and if they fail, they attack the NPC/sidekick."
    },
    {
      min: 105,
      max: 105,
      description:
        "An NPC (roll on NPC tables if you desire, or simply decide their characteristics) catches up with you and begins asking all sorts of questions. “Where are you coming from? Have you any tales to tell? What is your profession?” They come across as very eager and interested. You’re not sure if they have any motives... perhaps they have just been without company for some time."
    },
    {
      min: 106,
      max: 106,
      description:
        "You come across a section of forest that has been destroyed. A druid is in the process of casting plant growth on various small plants to re-vegetate the area."
    },
    {
      min: 107,
      max: 107,
      description:
        "You come across an abandoned cabin, its door hanging off the hinges. Belongings are scattered everywhere. There are traces of blood to be found, but no creatures in sight."
    },
    {
      min: 108,
      max: 108,
      description:
        "You pass a small inn. A wealthy noblewoman, just passing through, has stopped here and is buying everyone drinks. It seems she has had great luck in business recently."
    },
    {
      min: 109,
      max: 109,
      description:
        "A local wizard is accepting visitors to his tower - a group of apprentices from a local alchemy school, who have come to hear a lecture from him on the creation of exotic potions."
    },
    {
      min: 110,
      max: 110,
      description:
        "A cart passes, being driven by a figure in a hood who does not address you in any way or even look up from the reins. In the back are various cages and crates. Two of them are covered with thick canvasses, and from within you hear a strange, feral barking and yowling. There are creatures of some kind in there, but you don’t know exactly what species."
    },
    {
      min: 111,
      max: 111,
      description:
        "A group of pilgrims are on a walking journey towards a temple no-one in the party has heard of. They have been walking for some months already, picking up people along the way."
    },
    {
      min: 112,
      max: 112,
      description:
        "You see a wanted poster. A notorious criminal is in the area. 10% chance it is someone you know (NPC or even someone in the party)."
    },
    {
      min: 113,
      max: 113,
      description:
        "You come across an ancient fortress that has been inhabited by a group of opportunistic humanoids. They are currently practicing combat manoeuvres and preparing for something. You are a little way off and they have not seen you (yet) but it appears preparations are underway for some kind of combat action."
    },
    {
      min: 114,
      max: 114,
      description:
        "Roll a d4. (1) The air crackles with some unknown energy (2) The ground shakes (3) An ominous peal of thunder resounds in the sky (4) The sun turns a dark shade of red. Ominous portents all point towards some cataclysmic event. You don’t know what it is, but in your soul, you feel as if something momentous has just happened or is about to happen."
    },
    {
      min: 115,
      max: 115,
      description:
        "Make a DC 16 Wisdom (Perception) check. If unsuccessful, you fail to notice a [d6] (1-2) Rope trap (3-4) Net trap (5-6) Pit trap which you blunder into. Moments later, cultists emerge from the undergrowth and secure you in ropes. They will try to convert you to their beliefs as part of an aggressive recruitment drive! They have already captured a dozen or so people in this way. You will be subject to enchantment spells and may actually succumb to believing their philosophy, at least for a while."
    },
    {
      min: 116,
      max: 116,
      description:
        "You see [d4] rangers who look like they are hot on the trial of something or someone. They stop, crouching to the ground and examining signs in the dirt."
    },
    {
      min: 117,
      max: 117,
      description:
        "The smell of yeast and hops is heavy in the air. You emerge in a smallish open area where a neatly-kept building stands beside a babbling brook. Dwarves and halflings are hard at work, milling about this building and performing various jobs. A sign on the outside reads “Stoutfolk Brewery.” (Or perhaps you’d rather come up with your own name!)"
    },
    {
      min: 118,
      max: 118,
      description:
        "A shooting pain stabs through your head, nay, your very soul! You feel as though someone is trying to control your mind with magic, or targeting you with some kind of psychic attack."
    },
    {
      min: 119,
      max: 119,
      description:
        "You come across a merchant who is deep in haggling with a nobleman. The nobleman is demanding that the merchant sell him some rare item the merchant has in their possession, but the merchant is not budging, insisting that it is not for sale. The nobleman is getting rather hot under the collar. What is this item that has them so fired up?"
    },
    {
      min: 120,
      max: 120,
      description:
        "You enter an area where a gallows has been erected. A small crowd has gathered to witness the execution of a monk who has been accused of spying on the local authorities for some rival nation or faction."
    },
    {
      min: 121,
      max: 121,
      description:
        "A robbery has been foiled! Highwaymen are lying prone and bound at the side of the road, and a group of passengers have disembarked from an ornate-looking carriage and are preparing to dispense some brutal justice to these unfortunate criminals. The carriage driver and a slightly-dishevelled looking nobleman, bearing cudgels, have somehow got the upper hand."
    },
    {
      min: 122,
      max: 122,
      description:
        "Something is approaching. You hear [d6] (1-2) The tread of many feet, as of an army (3-4) A heavy tread, as of a large creature (5-6) The patter of many tiny feet, a large group of smaller creatures. You will have time to hide and watch them go by with a successful DC 10 Dexterity (Stealth) check."
    },
    {
      min: 123,
      max: 123,
      description:
        "You chance upon a network of caves that look like they could have once been inhabited by a tribe of humanoids."
    },
    {
      min: 124,
      max: 124,
      description:
        "You come across two carts which have collided badly. One of the carts overturned and spilled its contents across the road, and now the owner of the goods is having a tantrum and demanding the other cart driver pay for the ruined goods. However, as this is happening, their argument is interrupted by a dull roar from something nearby..."
    },
    {
      min: 125,
      max: 125,
      description: "A ruined hut is here, with its roof partially caved in."
    },
    {
      min: 126,
      max: 130,
      description:
        "Roll a d4. (1-2) Roll on Skill Challenge table (p.139) (3-4) Level-appropriate easy encounter"
    },
    {
      min: 131,
      max: 131,
      description:
        "A piece of parchment is stuck into a tree with a dagger. The parchment is scrawled with messy writing that looks like it was written by a child. It reads: “You are entering the republic of the Forsaken Ones. All who wander in here without proper consent are trespassing and will be dealt with harshly.”"
    },
    {
      min: 132,
      max: 132,
      description:
        "You come across an ancient cemetery. All the gravestones are neglected bar one which has had the weeds cleared from around it and fresh flowers placed before it."
    },
    {
      min: 133,
      max: 133,
      description:
        "Perched on the edge of a cliff overlooking a small lake, a dilapidated castle, its walls crumbling in places, lies ahead."
    },
    {
      min: 134,
      max: 134,
      description:
        "A patrol from a nearby town is halted by the road, their cart having gotten stuck in a muddy rut. They impolitely demand that you assist them in getting the stuck vehicle free. “As a citizen of this realm, it is your civic duty to assist us!”"
    },
    {
      min: 135,
      max: 135,
      description:
        "A rustle in some bushes ahead and some easily overheard conversation gives away the position of some juvenile criminals (from a nearby village/town?) planning to ambush a passing cart."
    },
    {
      min: 136,
      max: 136,
      description:
        "You come to the top of a gully, thick with vegetation. The sound of drums drifts up to you and smoke from numerous fires rises in plumes above the forest canopy below. Every now and then you hear chanting, different songs, sometimes a dozen or so voices joined as one."
    },
    {
      min: 137,
      max: 137,
      description:
        "Making your way through a patch of dense undergrowth, you find a concealed tomb, covered in vines and creepers. Nature has begun reclaiming this forgotten structure, and all signs of who previously inhabited it are gone. Ripping away foliage, you find a stone door."
    },
    {
      min: 138,
      max: 138,
      description:
        "You are approaching a grove of trees (or a clearing if you are in a forest) and can see a group of people assembled there. One figure in robes stands before them, and appears to be chanting a litany of some kind. The others repeat the words in a ritualistic fashion."
    },
    {
      min: 139,
      max: 139,
      description:
        "Several wizards are here, surrounding a swirling field of energy, attempting to control it. They do not notice your presence, too busy are they with this desperate work! This is some sort of extra-dimensional energy, trying to enter this world..."
    },
    {
      min: 140,
      max: 140,
      description:
        "You are approaching a large castle or fortress of some kind. It appears a small military force is arrayed outside its walls, laying siege to the place."
    },
    {
      min: 141,
      max: 141,
      description:
        "A band of clerics and monks is tending to what appears to be a huge throng of displaced refugees. Food is being served from huge pots to an endless queue of people. What is their story, how were they forced out of their home, and where will they go from here?"
    },
    {
      min: 142,
      max: 142,
      description:
        "High above you see a flying craft, either magical or created using some unknown technology, pass overhead. Where is it heading?"
    },
    {
      min: 143,
      max: 143,
      description:
        "Suddenly a group of humanoids passes you. Halflings or gnomes, intent on something and all bearing weapons, are marching purposefully towards some unknown destination. Every now and then, one particularly angry one at the head of the party yells “Come on boys, time for some payback eh?” To which the others all roar in approval."
    },
    {
      min: 144,
      max: 144,
      description:
        "You are approached by a group of fey creatures. “Please, we need your help, we’re at our wits end! Our village is being attacked!”"
    },
    {
      min: 145,
      max: 145,
      description:
        "A patch of large fungi is ahead. These strange growths appear to be dripping with a violet sap. Looking closer, you see that where this sap has landed on the ground, it has killed everything growing there. It appears to be a virulent poison."
    },
    {
      min: 146,
      max: 146,
      description:
        "You come across an enchanted glade, an oasis of some kind. Clear blue water falls from above into a serene pond with a sound like the tinkling of crystals, and trees bearing sweet-smelling flowers arc out over the water, occasionally dropping delicate blooms onto the water’s surface. It is almost too beautiful to be believed..."
    },
    {
      min: 147,
      max: 147,
      description:
        "A huge boom, like an explosion, comes from somewhere ahead, perhaps a few miles. It is so massive that you feel the vibration through the earth. What is it? A meteor? A volcano? A powerful spell? The only way to find out is to go and investigate."
    },
    {
      min: 148,
      max: 148,
      description:
        "A mansion, the estate of some noble who apparently likes to be away from civilisation, lies ahead. The gates to the place are guarded."
    },
    {
      min: 149,
      max: 149,
      description:
        "The moon is high in the sky (whether day or night) but does not appear as normal. Roll a d4. (1) It is a different colour (2) A huge chunk has been blasted off by a comet or something similar, which looks epic but is rather worrying (3) It appears closer than normal (4) It is in a phase that it shouldn’t be."
    },
    {
      min: 150,
      max: 150,
      description:
        "A group of soldiers and nobles are supervising a book burning."
    },
    {
      min: 151,
      max: 155,
      description:
        "Roll a d4. (1-2) Roll on Boon table (p.152) (3-4) Level-appropriate medium encounter"
    },
    {
      min: 156,
      max: 156,
      description:
        "You enter a copse of trees. Then, in the midst of this small, dense wood, you come across several carved symbols of various gods, some festooned with cobwebs, others kept clean and orderly with fresh offerings before them."
    },
    {
      min: 157,
      max: 157,
      description:
        "You come across a travelling salesman who deals exclusively in exotic beasts that he keeps in cages. His cart is loaded with them! Perhaps you think him cruel, and no doubt there is an element of cruelty here. But more worrying is the fact that he has gathered all these strange animals together in one place. What would happen if one or more of them were to somehow get free?"
    },
    {
      min: 158,
      max: 158,
      description:
        "“Friend!” a voice addresses you from somewhere. “Want to make some money? I need a hand with something. I promise it will be worth your while...” This ragged-looking individual has a story to tell. Use random keywords or event meaning tables (or both) to determine what work he is proposing."
    },
    {
      min: 159,
      max: 159,
      description:
        "A pair of warriors, utterly spent and bloodied, lie panting after a ferocious duel. They appear to have been fighting each other all day but are too evenly matched, and neither can get the upper hand. Perhaps you can mediate in this situation. But first, you’ll need to understand their dispute. Keywords!"
    },
    {
      min: 160,
      max: 160,
      description:
        "A wide river is ahead, and a large band of workers (probably from a nearby settlement) are creating a dam wall."
    },
    {
      min: 161,
      max: 161,
      description:
        "A garishly-coloured bird alights in a nearby tree and regards you with a gaze that is distinctly un-birdlike. “Hmm,” it says, looking you up and down. “Intriguing.”"
    },
    {
      min: 162,
      max: 162,
      description:
        "You arrive at a rope bridge which extends over a narrow but deep canyon. However, you are hesitant. The rope looks old and frayed, and you are unsure if it will hold."
    },
    {
      min: 163,
      max: 163,
      description:
        "A lone figure is slumped against a tree sobbing. “My master is dead,” they sob."
    },
    {
      min: 164,
      max: 164,
      description:
        "You reach the top of a low cliff where you are looking down into what appears to be a quarry. Several ogres are here, bearing whips and other weapons, and are putting a variety of humanoids to work, using them as slaves to mine this area."
    },
    {
      min: 165,
      max: 165,
      description:
        "You hear a chorus of soft, melodious voices calling to you from nearby, beckoning you to come closer. The words are almost formed as a song."
    },
    {
      min: 166,
      max: 166,
      description:
        "You meet an adventurer, on their way to explore a famed local ruins. Roll on NPC tables (or choose a random, level-appropriate sidekick) and generate a dungeon-based quest using either Chapter 7 of TSAT 1 or any of the quest generation tools in this book. If you wish to pursue this thread, you must take this NPC with you as they are the one who is on this quest. You are accompanying them."
    },
    {
      min: 167,
      max: 167,
      description:
        "The foliage suddenly becomes lush and thick in this area. It is a little out of place, and seems to have sprung up unnaturally, as if the result of some kind of natural magic."
    },
    {
      min: 168,
      max: 168,
      description:
        "You pass a cave in a low cliff. Someone has fitted a door over the entrance. Has it been turned into a dwelling of some sort? Or, perhaps they merely wanted to restrict entrance."
    },
    {
      min: 169,
      max: 169,
      description:
        "You pass rocks that have strange markings on them, that look to be from the earliest humanoid civilization that populated these lands. A DC 14 History check will enable you to determine their basic meaning. Otherwise, who knows what they speak of..."
    },
    {
      min: 170,
      max: 170,
      description:
        "A storm approaches from the [d4] (1) Northern (2) Southern (3) Eastern (4) Western horizon. You fancy you can see the shapes of various creatures within it. Ominous, dark grey and laced with lightning, it is approaching fast!"
    },
    {
      min: 171,
      max: 171,
      description:
        "The sound of fighting nearby, the vibration of heavy footfalls felt through the ground - it seems like two huge creatures of some description are going at it, fighting to the death!"
    },
    {
      min: 172,
      max: 172,
      description:
        "A disembodied voice speaks to you directly. Roll on event meaning tables or keywords list to discover what this supernatural voice says to you."
    },
    {
      min: 173,
      max: 173,
      description:
        "An absolutely vile smell reaches your nostrils, coming from the [d4] (1) North (2) South (3) East (4) West. It smells like [d4] (1) Rotting corpses (2) Unwashed bodies (3) Spoiled Food (4) Excrement."
    },
    {
      min: 174,
      max: 174,
      description:
        "As you watch, you see something shimmer into view, as if teleported from somewhere else. What is it that you see? [d10] (1-2) Interesting natural landscape feature (3-4) NPC (5-6) Structure (7-8) Vehicle (9-10) Something else (roll on Keywords table, p.167)."
    },
    {
      min: 175,
      max: 175,
      description:
        "Ancient, ruined fortifications lie ahead, although what is behind them is anyone’s guess."
    },
    {
      min: 176,
      max: 180,
      description:
        "Roll a d4. (1-2) Roll on Bane table. p.157 (3-4) level-appropriate hard encounter"
    },
    {
      min: 181,
      max: 181,
      description:
        "A marked change in elevation is causing the land to slope upwards towards a plateau. Several tracks wind their way up towards the summit of this elevation, which should afford a good view of the surrounding terrain."
    },
    {
      min: 182,
      max: 182,
      description:
        "A travelling apothecary is offering strange herbal remedies with a variety of outlandish effects. Use keywords to determine the nature of these effects."
    },
    {
      min: 183,
      max: 183,
      description:
        "The landscape on the side of a gently-sloping hill has been marked with white chalk to resemble the outline of a beast. This land carving may have been here for millennia."
    },
    {
      min: 184,
      max: 184,
      description:
        "Steam is rising from a hot springs ahead. You hear conversation also. (Roll for 1d4+1 NPCs relaxing here, using the NPC tables in TSAT 1)."
    },
    {
      min: 185,
      max: 185,
      description:
        "More and more, you notice that the wildlife in this area - birds, deer, insects, small creatures of all descriptions - appear to have been magically altered. At first it starts with differences in colouration, but then progresses to mismatched body parts and then totally hybrid creatures. What is causing this anomaly?"
    },
    {
      min: 186,
      max: 186,
      description:
        "You reach a low hill - or is it a structure of some kind - which appears to be entirely formed of [d4] (1) Glass (2) Steel (3) Gemstone (too hard to mine) (4) Some other non-precious mineral."
    },
    {
      min: 187,
      max: 187,
      description:
        "These rocks look strange here, out of place, and not fitting with the geology of the area. Not only that, there is a curious pattern of spirals covering them which you cannot initially see the purpose of."
    },
    {
      min: 188,
      max: 188,
      description:
        "A geyser is erupting clouds of poisonous steam into the air. You may want to avoid this area. However, you see activity going on there... are there creatures living here, even subsisting off these fumes?"
    },
    {
      min: 189,
      max: 189,
      description:
        "A patrol from a nearby town is set up here in a roadside booth. Several carts are pulled up and are being inspected for stolen or smuggled goods and contraband."
    },
    {
      min: 190,
      max: 190,
      description:
        "You meet a lone NPC on your route. They are a bit confused and keep repeating the same phrase over and over again. “It must never be allowed to happen. It must never be allowed to happen.” Over and over."
    },
    {
      min: 191,
      max: 191,
      description:
        "Overhead, you see some sort of astronomical portent. [d4] (1) Comet (2) Meteor shower (3) Eclipse (4) Day or night suddenly appears, no matter what the time. The scriptures/prophecies of old spoke of this, and what it signified..."
    },
    {
      min: 192,
      max: 192,
      description:
        "Ahead, you see what appears to be a large walled garden of some kind. A construct stands guard outside it, unmoving. What type of construct is it? [d6] (1) Animated armour (2) Stone defender (3) Shield guardian (4) Clay golem (5) Stone golem (6) Iron golem."
    },
    {
      min: 193,
      max: 193,
      description:
        "A crow flies overhead, and drops a scroll in your path, then turns and departs in an eastern direction. The scroll bears a different message relevant to the quest you are on. Or, if you prefer, the scroll reads as follows: Adventurer! Heed my call! I am in need of your services. Head east, until you see a great tower, with a sigil marking in its door. That is where I reside. I have a proposition for you."
    },
    {
      min: 194,
      max: 194,
      description:
        "You come across a large rock. The top half of this rock has been carved into the likeness of a local renowned deity, but the carving is only half-finished and the bottom half of the rock is still in its natural state. It appears this work was abandoned halfway through. Coming closer, you notice that the carver’s tools are still there, scattered on the ground amidst rock chippings."
    },
    {
      min: 195,
      max: 195,
      description:
        "You encounter an open-air forge in the middle of this wilderness. There is a hut nearby, and 1d4 burly blacksmiths are forging weapons, domestic items, building materials, smelting iron, copper, many different metals, and generally just doing blacksmith stuff."
    },
    { min: 196, max: 100, description: "Level-appropriate deadly encounter" }
  ];
  
  export function getRandomWildernessEncounter(): string {
    const diceRoll = Math.floor(Math.random() * 200) + 1;
    let encounter: string | undefined;
    for (const data of WILDERNESS_ENCOUNTER_DATA) {
      if (diceRoll >= data.min && diceRoll <= data.max) {
        encounter = data.description;
        break;
      }
    }
    return encounter || "No encounter data available";
  }
  