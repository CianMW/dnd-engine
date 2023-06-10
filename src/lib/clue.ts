interface ClueData {
    min: number;
    max: number;
    description: string;
  }
  
  const CLUE_DATA: ClueData[] = [
    { min: 1, max: 1, description: 'A broken arrow of a distinctive type.' },
    { min: 2, max: 2, description: 'The monster’s / NPCs weapon has dried blood on it. But what type?' },
    { min: 3, max: 3, description: 'The carcass or area has a strange odour.' },
    { min: 4, max: 4, description: 'There is a strange noise coming from somewhere in this area.' },
    { min: 5, max: 5, description: 'You see tracks leading off from this area.' },
    { min: 6, max: 6, description: '1d10 platinum pieces in an ornately embroidered pouch. The embroidery mentions someone’s name.' },
    { min: 7, max: 7, description: 'Magical compass, player has to figure out the command word to activate it.' },
    { min: 8, max: 8, description: 'The corpse is gripping an envelope. The wax sealed with an unknown sigil.' },
    { min: 9, max: 9, description: 'You see fresh blood stains splattered on the wall. One part is still trickling down as you enter the room.' },
    { min: 10, max: 10, description: 'The body is covered in map symbols.' },
    { min: 11, max: 11, description: 'The body is covered in runic tattoos.' },
    { min: 12, max: 12, description: 'The body is contorted, showing evidence of reconstructive surgery to head and chest cavity, with attachments & implants below the skin.' },
    { min: 13, max: 13, description: 'The body is branded with a number, directly behind the neck.' },
    { min: 14, max: 14, description: 'The body has a significant number of healed wounds, suggesting ongoing punishment and whipping.' },
    { min: 15, max: 15, description: 'An old wooden toy-horse, that you were used to play with as a child and that you forgot until now.' },
    { min: 16, max: 16, description: 'You hear loud Ravens/Crows nonstop cawing nearby.' },
    { min: 17, max: 17, description: 'You find a pendant with a missing piece.' },
    { min: 18, max: 18, description: 'You find sacks of bloody corn and wheat.' },
    { min: 19, max: 19, description: 'You notice a bright flash of purplish light just out of the corner of your eye.' },
    { min: 20, max: 20, description: 'The room/corpse is covered in a thin layer of frost.' },
    { min: 21, max: 21, description: 'A note with only the name of the nearby town written in it.' },
    { min: 22, max: 22, description: 'Stones patterned in a directional arrow with the words Help me under it.' },
    { min: 23, max: 23, description: 'Part of a map.' },
    { min: 24, max: 24, description: 'Broken weapon with runes on it.' },
    { min: 25, max: 25, description: 'A holy symbol.' },
    { min: 26, max: 26, description: 'An adventurer’s backpack containing a journal, with entries that stop abruptly.' },
    { min: 27, max: 27, description: 'A rope hanging from above. It appears to have been crudely hacked at the bottom end.' },
    { min: 28, max: 28, description: 'Graffiti on the wall. “Beware the Great Hall!”' },
    { min: 29, max: 29, description: 'In the floor is a hole, and beside it a spade. It appears as if someone started digging and then gave up. Or...' },
    { min: 30, max: 30, description: 'A bear or man trap sitting in a pool of blood. Perhaps a severed limb nearby.' },
    { min: 31, max: 31, description: 'Tracks, only they are made out in flour.' },
    { min: 32, max: 32, description: 'A broken lantern.' },
    { min: 33, max: 33, description: 'An empty coffin, the lid broken.' },
    { min: 34, max: 34, description: 'Lying on the floor, a glass chess piece.' },
    { min: 35, max: 35, description: 'Broken blade of a sword.' },
    { min: 36, max: 36, description: 'Singing, distant and mournful.' },
    { min: 37, max: 37, description: 'Whispering, from somewhere in the room, disembodied. It stops and starts again, unnervingly.' },
    { min: 38, max: 38, description: 'A pile of carefully stacked stones is situated in the middle of this area.' },
    { min: 39, max: 39, description: 'Loud thumping from either above or below the current area you are in.' },
    { min: 40, max: 40, description: 'You notice a loose brick in the wall. Peering behind it, you find a hidden scroll. What is written on it? (Q/A or situations table)' },
    { min: 41, max: 41, description: 'A hole has been bashed through the wall into an adjoining chamber. This chamber doesn’t appear to have any other way in or out.' },
    { min: 42, max: 42, description: 'A pack and its contents strewn across the ground. (Suggests live or dead NPC somewhere in the dungeon)' },
    { min: 43, max: 43, description: 'There is rubble here, but it has been swept to the walls in neat piles by someone, obviously using a broom.' },
    { min: 44, max: 44, description: 'You hear whispering right behind you, but when you turn, no one is there.' },
    { min: 45, max: 45, description: 'A severed hand covered in stitches lies on the floor.' },
    { min: 46, max: 46, description: 'A book of hand-sketched images of various humanoids, some of them with large red crosses through them.' },
    { min: 47, max: 47, description: 'A body is here, and has been savaged, as if by a wild animal.' },
    { min: 48, max: 48, description: 'A shield lies on the ground in two pieces. Whatever ripped through this obviously possesses great strength.' },
    { min: 49, max: 49, description: 'A platinum piece, glued to the floor.' },
    { min: 50, max: 50, description: 'A small ray of light shines through a crack in the ceiling.' },
    { min: 51, max: 51, description: 'A trail of blood, as if a body were being dragged, leads away. It stops suddenly.' },
    { min: 52, max: 52, description: 'A long list of names, all of them crossed out except for the last 5-10. Close to the end is the PCs name.' },
    { min: 53, max: 53, description: 'A detailed colour map of the local area, marked with several previously unknown ruins.' },
    { min: 54, max: 54, description: 'A chill wind, as if someone opened a door onto an arctic tundra, blows through this area briefly.' },
    { min: 55, max: 55, description: 'You hear the sound of metal being dragged across stone. It continues for a while and then stops.' },
    { min: 56, max: 56, description: 'Suddenly you realize your footfalls have become completely silent.' },
    { min: 57, max: 57, description: 'Ball bearings or caltrops litter the floor in this area.' },
    { min: 58, max: 58, description: 'Geometric shapes drawn in chalk on the floor.' },
    { min: 59, max: 59, description: 'The floor is covered by a rug. A close inspection will reveal some spots of a dark liquid, possibly blood...' },
    { min: 60, max: 60, description: 'A map of a labyrinth neatly made on a piece of parchment.' },
    { min: 61, max: 61, description: 'A letter of recommendation from a noble no-one has heard of.' },
    { min: 62, max: 62, description: 'The remains of an adventurer lie slumped against the wall. In his hand he holds a vial or a note.' },
    { min: 63, max: 63, description: 'Hurried footsteps, coming from somewhere up ahead.' },
    { min: 64, max: 64, description: 'A small beast (cockroach?) sits in an alcove. As you pass, it speaks to you!' },
    { min: 65, max: 65, description: 'Bucket of entrails from an unknown creature.' },
    { min: 66, max: 66, description: 'Target practice dummy is nearby.' },
    { min: 67, max: 67, description: 'The sound of glass smashing comes from somewhere, echoing off the walls.' },
    { min: 68, max: 68, description: 'A fine dagger with a retracting blade. Who did it belong to?' },
    { min: 69, max: 69, description: 'A piece of shell that looks like it came from a large egg.' },
    { min: 70, max: 70, description: 'The wall has been carved away, and a large standing stone has been placed in the newly formed alcove. It is covered in strange writing.' },
    { min: 71, max: 71, description: 'A large roast meal is laid out on a table, complete with place settings. It is steaming hot and looks delicious, but it totally untouched.' },
    { min: 72, max: 72, description: 'Goblin graffiti on the walls.' },
    { min: 73, max: 73, description: 'A large collection of animal bones, organized into a pile.' },
    { min: 74, max: 74, description: 'A cauldron sits in the corner.' },
    { min: 75, max: 75, description: 'A hand... it looks severed, but the odd thing is that its made of stone.' },
    { min: 76, max: 76, description: 'You find a stone jar containing teeth of all descriptions.' },
    { min: 77, max: 77, description: 'An adventurer’s journal. Reading through, you see the entries stop suddenly.' },
    { min: 78, max: 78, description: 'A table and single chair is in the corner. The table is spattered with large globs of wax.' },
    { min: 79, max: 79, description: 'An empty net on the ground, torn to shreds.' },
    { min: 80, max: 80, description: 'A stack of clay tablets, all with indecipherable runes.' },
    { min: 81, max: 81, description: 'A lute, but the neck has been smashed from the body and is dangling by the strings.' },
    { min: 82, max: 82, description: 'The shrunken head of a kobold.' },
    { min: 83, max: 83, description: 'Book containing a history of the world - not of this world though.' },
    { min: 84, max: 84, description: 'A well, in the middle of the dungeon. A rope hangs down from its top.' },
    { min: 85, max: 85, description: 'You step on a stone and hear a click...' },
    { min: 86, max: 86, description: 'A clanking sound, followed by a hissing sound, from somewhere below...' },
    { min: 87, max: 87, description: 'A jar of pickled eyes.' },
    { min: 88, max: 88, description: 'There is a campfire circle containing a prepared fire, but it has not been lit.' },
    { min: 89, max: 89, description: 'Hammered to a nearby door or affixed to the wall is a piece of framed parchment - completely blank.' },
    { min: 90, max: 90, description: 'An empty brandy bottle.' },
    { min: 91, max: 91, description: 'A six-sided dice that is all ones.' },
    { min: 92, max: 92, description: 'A halfling’s skull, intact except for a perfect circle removed at the top.' },
    { min: 93, max: 93, description: 'A large assortment of clay pots in alcoves, all containing noxious-smelling liquids.' },
    { min: 94, max: 94, description: 'A weapons rack is on the wall, containing several ancient, rusted weapons. A few of these might be able to be restored if taken to an expert.' },
    { min: 95, max: 95, description: 'A steady flow of moisture down a nearby wall leads you to think you might be below a body of water.' },
    { min: 96, max: 96, description: 'The sound of children’s laughter, echoing from every direction.' },
    { min: 97, max: 97, description: 'A bag of feathers. A successful nature check (DC 12) reveals them to be from a harpy.' },
    { min: 98, max: 98, description: 'You find a parchment containing what looks like a recipe for a particular kind of potion.' },
    { min: 99, max: 99, description: 'A pouch of spell components.' },
    { min: 100, max: 100, description: 'Magic item! Relevant to quest. Roll once on table (d4) 1-2: A, 3-4: B Magic item! Relevant to quest. Roll once on table (d4) 1-2: A, 3-4: B' },
  ];
  

  export default function getRandomClue(): string {
    const diceRoll = Math.floor(Math.random() * 100) + 1;
    let clue: string = '';
    for (const data of CLUE_DATA) {
      if (diceRoll >= data.min && diceRoll <= data.max) {
        clue = data.description;
        break;
      }
    }
    return clue
  }