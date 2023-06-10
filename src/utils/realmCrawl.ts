/*
type : standardWilderness, specialWilderness, standardRoom, specialRoom, passage
*/
// @ts-nocheck

type triggerValueCases = {
        "standardWilderness": number;
        "specialWilderness": number;
        "standardRoom": number;
        "specialRoom": number;
        "passage": number;
    [key:string] : number

}

const monstersCases:triggerValueCases = {
    standardWilderness: 10,
    specialWilderness:9,
    standardRoom:9,
    specialRoom:9,
    passage:11
}
const clueCases:triggerValueCases = {
    standardWilderness: 10,
    specialWilderness:9,
    standardRoom:9,
    specialRoom:7,
    passage:11
}
const npcCases:triggerValueCases = {
    standardWilderness: 12,
    specialWilderness:11,
    standardRoom:12,
    specialRoom:11,
    passage:12
}

function environmentSwitchCase(roll:number, type:string){
    if(type === "standardWilderness"){
        if(roll >=7 && roll <= 10){
            // get feature and return
        } else if(roll === 11){
            // get 2 features and return
        } else if (roll == 12){
            // get trap and return
        }
    }
    if(type === "specialWilderness"){
        if(roll >=5 && roll <= 10){
            // get feature and return
        } else if(roll >=11){
            // get trap
        }
    }
    if(type === "standardRoom"){
        if(roll === 10){
            // get feature and return
        } else if(roll ===11){
            // get 2 features
        } else if (roll ===12){
            // get trap
        }
    }
    if(type === "specialRoom"){
        if(roll === 8 || roll === 9){
            // get feature and return
        } else if(roll ===10){
            // get 2 features
        }else if(roll >=11){
                // get trap
        }
    }
    if(type === "passage"){
        if(roll === 9 || roll === 10){
            // get feature and return
        } else if(roll ===11){
            // get 2 features
        }else if(roll ===12){
                // get trap
        }
    }
}

function treasureSwitchCase(roll:number, type:string){

    if(type === "standardWilderness"){
        if(roll ===9 || roll === 10){
            // get Mundane Item
        } else if(roll === 11){
            // return "if enemies" + individual treasure
        }
    }
    if(type === "specialWilderness"){
        if(roll >=6 && roll <= 18){
            // get Mundane Item
        } else if(roll ===9){
            // return "if enemies" + individual treasure
            
        } else if (roll ===12){
            // get hoard
        }
    }
    if(type === "standardRoom"){
        if(roll >=10 && roll <= 11){
            // return "if enemies" + individual treasure
        }  else if (roll ===12){
            // get hoard
        }
    }
    if(type === "specialRoom"){
        if(roll >=9 && roll <=10){
            // return "if enemies" + individual treasure
        } else if(roll >=11){
            // return "if enemies" + hoard
        }
    }
    if(type === "passage"){
        if(roll >= 11){
            // get individual item
        }
    }
}
function eventSwitchCase(roll:number, type:string){

    if(type === "standardWilderness"){
        if(roll ===7){
            //get bane
        }else if (roll === 8){
            // get boon 
        }
        else if(roll ===9 || roll === 10){
            // get Random Event
        } else if(roll >=11){
            //get skill challenge
        }
    }
    if(type === "specialWilderness"){
        if(roll ===6){
            //get bane
        }else if (roll === 7){
            // get boon 
        }
        else if(roll ===8 || roll === 9){
            // get Random Event
        } else if(roll >=10){
            //get skill challenge
        }
    }
    if(type === "standardRoom"){
        if(roll ===7){
            //get bane
        }else if (roll === 8){
            // get boon 
        }
        else if(roll ===9 || roll === 10){
            // get Random Event
        } else if(roll >=11){
            //get skill challenge
        }
    }
    if(type === "specialRoom"){
        if(roll ===6){
            //get bane
        }else if (roll === 7){
            // get boon 
        }
        else if(roll ===8 || roll === 9){
            // get Random Event
        } else if(roll >=10){
            //get skill challenge
        }
    }
    if(type === "passage"){
        if(roll ===11){
            // Random Event
        }else if (roll === 12){
            // Skill Challenge
        }
    }
}



 function sixDieTwelveMethod( type:string){
// roll 6d6 associated with colors, then evaluate based on the current location and type
function rollDie(sides:number){
return Math.ceil(Math.random()*sides)
}
// const red = Monsters
// const blue = Clues
// const green = Environemnt Features
// const rainbow = NPC
// const gold = Treasures
// const purple = Events
const red = rollDie(12) >= monstersCases[type]
const blue = rollDie(12) >= clueCases[type]
const green = environmentSwitchCase(rollDie(12), type)
const rainbow = rollDie(12) >= npcCases[type]
const gold =  treasureSwitchCase(rollDie(12), type)
const purple = eventSwitchCase(rollDie(12), type)


console.log(red, blue)



 }



sixDieTwelveMethod("standardWilderness")






export const borderlandsDressing = [`
Some
long-­‐gone
traveller
has
stacked
rocks
into
a
pillar,
marking
an
unknown
path.
2
This
mound
of
stones
looks
like
a
hastily
erected
grave.
3
The
party
pass
by
a
large
pond,
with
golden
fish
leaping
from
the
waters
to
snatch
at
the
insects
flitting
about.
4
After
a
closer
look
at
the
gray
cliff-­‐side,
a
PC
realizes
someone
has
carved
a
scowling
face
into
the
rock
at
eye-­‐level.
5
A
wild
wheat
field
stretches
from
here
to
the
nearby
trees;
yellow
stalks
sway
in
the
breeze.
6
This
barren
patch
of
earth
is
strewn
with
bones
from
all
sorts
of
animals.
7
This
row
of
a
dozen
trees
is
entirely
charred
black,
dead
branches
reaching
to
the
sky.
8
A
rusting
sword
has
been
rammed
into
the
earth,
sticking
up
like
a
metal
sapling
in
the
middle
of
nowhere.
9
Several
boulders
lie
split
in
half,
their
mossy
surfaces
looking
gnawed
and
clawed.
10
The
silhouette
of
the
distant
mountain
or
hill
puts
a
PC
in
mind
of
a
slumbering
giant.
11
A
mass
of
berry
bushes
tempts
the
party
with
glistening
red-­‐and-­‐purple
fruit
clusters.
12
The
bottom
of
this
ravine
drops
away
into
the
depths
of
a
lightless,
black
abyss.
13
This
thin
stream
appears
to
be
running
thick
with
ink,
rather
than
water.
14
The
water
of
this
river
looks—and
smells—like
fresh
blood.
15
The
lake
steams
in
the
sun,
and
the
rising
steam
curls
into
the
shapes
of
bodies
and
faces.
16
The
walls
of
this
canyon
are
marked
with
red
and
black
paintings
of
people
and
creatures.
17
This
cave
is
filled
with
mounds
of
green-­‐glowing
fungus.
18
Piles
of
bone
lie
scattered
before
the
entrance
to
this
cave.
19
As
the
party
approach
a
watering
hole,
it
suddenly
forms
a
whirlpool
and
drains
away,
leaving
an
empty
bowl
of
stone.
20
Packed-­down
grass
and
piles
of
droppings
evidence
where
a
herd
of
wild
beasts
bedded
down
for
the
night.
21
Great
furrows
rend
the
soft
earth
here,
as
if
torn
up
by
massive
claws.
22
Several
lines
of
horse
tracks
cross
the
trail.
They
were
definitely
shoed,
so
they
likely
had
riders.
23
From
every
angle
studied,
this
river
appears
to
be
flowing
uphill.
24
The
nearby
hill
has
one
rocky
side
carved
into
the
likeness
of
a
dead
king.
25
Six
piles
of
earth
with
sticks
rammed
into
one
end
of
each
look
to
be
freshly
dug
graves.
26
The
trees
around
this
clearing
seem
to
form
a
perfect
circle.
27
Rocks
have
been
laid
out
to
form
an
arrow
pointing
north.
28
A
skeleton
lies
spread-­‐eagle
on
the
ground,
wrists
and
ankles
bound
to
stakes
by
rusted
chains.
29
This
wooden
and
stone
hut
looks
like
it’s
been
abandoned
for
years,
but
remains
sturdy.
30
A
stink
of
sulphur
precedes
a
sudden
gout
of
flame
from
a
crevasse
in
the
rocky
earth.
31
This
mossy
knoll
looks
like
it
has
a
door
built
into
one
slope.
32
The
area
is
covered
in
boiling,
stinking
mud
pits.
33
The
ground
is
pockmarked
with
dozens
of
deep
holes,
all
roughly
the
same
size.
34
The
party
comes
across
a
boulder
painted
with
garish
red,
white
and
yellow
streaks.
35
A
wooden
signpost
sticks
up
from
the
ground,
and
reads,
“You
Are
Here.”
36
Someone
has
taken
the
time
to
carve
“Gavril
wuz
here”
into
this
tree
trunk.
37
While
the
weather
is
warm
and
sunny,
this
lake
somehow
remains
frozen
over.
38
On
closer
inspection,
these
pillars
of
packed
dirt
are
termite
hives.
39
The
trees
of
this
forest
have
coiled
strips
of
bark
torn
from
them,
leaving
strange
designs
worked
over
the
wood.
40
The
thick,
gray
moss
hanging
from
these
branches
seems
to
be
swelling
and
relaxing,
as
if
breathing.
41
Mushrooms
form
rings
of
orange-spotted
mould
across
this
grassy
field.
42
A
dozen
stone
pillars
have
been
set
in
a
circle
in
the
middle
of
this
clearing.
43
These
vines
hang
heavy
with
plump,
sweet-­
smelling,
wild
grapes.
44
The
party
discover
a
small
waterfall
tumbling
into
a
narrow
ravine.
45
On
closer
inspection,
what
looks
to
be
a
small
hole
in
the
ground
opens
up
into
a
massive
underground
cave.
46
Steam
rises
from
what
appears
to
be
a
natural
hot
spring.
47
Moss
hangs
thickly
from
the
boughs
of
a
gigantic
tree.
48
A
thick
carpet
of
green
scum
covers
this
bog
from
end
to
end.
49
Carved
steps
lead
down
into
the
depths
of
the
otherwise
unbroken
earth.
50
Smoke
rises
from
the
crown
of
a
distant
mountain
or
hill.
51
Red
and
green
swirls
of
vibrant
sand
form
intriguing
whorls
of
colour
across
the
bare
earth.
52
Not
even
a
harsh
wind
disturbs
the
mirror-­‐like
surface
of
this
large
pond.
53
Dead
or
dying
trees
stretch
as
far
as
the
eyes
can
see.
54
The
jagged
sides
of
this
canyon
are
sharp
enough
to
cut
from
the
slightest
brush
or
bump.
55
While
hiking,
the
party
hear
the
sound
of
rushing
water,
and
realize
they’re
standing
over
a
subterranean
river.
56
A
massive
beaver
dam
offers
the
only
way
to
cross
the
river
anywhere
nearby.
57
For
at
least
a
square
mile,
every
exposed
surface
is
covered
in
light
gray
dust.
58
A
single
hill
rears
up
in
the
middle
of
an
otherwise
flat
and
featureless
plain.
59
A
ring
of
dead
earth,
a
hundred
feet
in
diameter,
encircles
the
opening
of
a
large
pit.
60
Before
you
lies
a
stretch
of
blackened
and
burnt
trees
that
runs
both
east
and
west.
61
What
once
was
a
forest
is
now
a
labyrinth
formed
by
thousands
of
fallen
trees.
62
The
sides
of
this
dry
riverbed
are
too
perfectly
formed
to
be
natural.
63
Great
structures
of
red
stone
form
a
maze
of
pillars,
boulders
and
ravines.
64
In
the
middle
of
a
clearing,
a
large,
knotted
tree
stands
solitary
vigil.
65
This
field
is
dotted
with
dozens
of
stone
orbs
of
varying
sizes;
none
are
smaller
than
a
man’s
head.
66
Yellow
wildflowers
form
an
unbroken
golden
carpet.
67
The
ground
is
as
dry,
brittle
and
cracked
as
a
dead
man’s
skin.
68
When
poked
into,
the
earth
oozes
a
thick,
purple
slime
that
smells
like
cooked
meat.
69
The
side
of
the
grassy
hill
has
been
chopped
into
half
a
dozen
straight
tiers.
70
A
ruined
granite
tower
stands
alone
on
the
edge
of
the
woods.
71
This
huge,
conical
pit
looks
like
it
was
formed
by
some
sort
of
explosion.
72
Wildfire
has
ravaged
the
area,
leaving
portions
burnt
to
ash
while
others
remain
pristine.
73
Bubbling
fonts
of
water
spot
this
soggy
field.
74
The
pale,
bare
earth
here
is
streaked
with
crimson
rivulets,
as
if
blood-­‐stained.
75
The
nearby
rocky
hillsides
look
as
if
doors
and
windows
have
been
carved
into
them.
76
A
cobblestone
road
starts
in
the
middle
of
nowhere,
runs
for
a
league
and
ends
just
as
abruptly.
77
The
remains
of
ancient
building
foundations
poke
through
the
weeds
and
bushes.
78
Where
an
ancient
bridge
once
spanned
a
river,
now
only
shattered
foundations
remain.
79
A
stretch
of
baked
clay
imprisons
the
skeletal
remains
of
several
humanoids.
80
The
rotting
remains
of
a
wooden
sailing
ship
rears
up
from
the
bushes.
81
A
nearby
pool
of
water
is
filled
with
vibrant
algae,
ranging
from
vivid
yellow
to
reds
to
greens
and
blues.
82
A
white-­‐blue
glacier
sits
snug
in
the
narrow
mountain
valley.
83
Juts
of
purple
and
green
crystal
shoot
up
from
the
earth
all
around
the
party,
glistening
in
the
sunlight.
84
Bands
of
unearthly
green
and
yellow
light
swirl
and
writhe
in
the
sky.
85
The
party
round
a
hill
to
find
a
small
garden
with
crops
planted
in
tidy
rows.
86
Mound
of
earth
indicate
dozens
of
animal
burrows
dug
in
the
area.
87
Rocky
pillars
seem
to
defy
gravity
with
broad,
flat
tops
that
narrow
to
needle-­‐thin
bases.
88
The
bowed
trees
form
a
natural
hallway
through
this
dense
portion
of
the
forest.
89
In
the
right
light,
the
rounded
rock
outcropping
seems
to
form
the
shape
of
a
human
skull,
complete
with
eyes,
nose
and
teeth.
90
Thick
ash
covers
the
ground;
at
the
centre
of
the
carpet
stands
a
farmhouse’s
smouldering
remains.
91
Every
tree
within
this
copse
is
petrified.
92
A
giant
row
of
bones
forms
the
spine
of
an
ancient,
deceased
monster.
93
A
white
obelisk
stands
proud
in
the
middle
of
a
dusty
field,
a
testament
to
some
forgotten
king’s
ambition
or
triumph.
94
Each
one
of
these
stone
columns
looks
to
have
a
large
bird’s
nest
atop
them.
95
This
ravine
forms
a
natural
wind
tunnel
that
blasts
the
party
with
bitter
gales.
96
Someone
has
built
a
well
in
the
absolute
middle
of
nowhere.
97
The
tracks
of
many
humanoids
mar
the
earth.
98
Every
flower
and
blade
of
grass
in
this
valley
is
formed
of
coloured
crystal
shards.
99
The
party
hike
through
rows
of
clay
statues
in
the
form
of
men,
horses
and
other
strange
creatures.
100
A
burnt
out,
ruined
farmhouse
sits
forlornly
at
the
centre
of
a
small
network
of
fields.`
]

const desertDressing =[]
const farmlandDressing = []
const forestDressing = []
const frozenlandsDressing = []
const hillsDressing = []
const mountainsDressing = []
const plainsDressing = []
const swampsDressing = []
const waterwayDressing = []
const lakeDressing = []
const oceanDressing = []
const coastDressing = []
const settlementDressing = []


function getArrayValue(arr:string[], amount:number){
let responseArr = []
for (let i = 0; i < arr.length; i++) {
    const element = array[i];
    responseArr.push(element)
}
// TBC add check in the loop to 

return responseArr
}


// TBF this only contains page 1 , reformat this and finish moving the data
const boonTable = [
    "Boon of Magic Resistance",
"You have advantage on saving throws against spells and other magical effects. This boon lasts until you finish your current quest.",
"Blessing of Torm",
"When you miss with a melee attack, you can choose to hit instead. You can use this boon once.",
"Boon of Peerless Aim",
"You can give yourself a +20 bonus to a ranged attack roll you make. Once you use this boon twice, you can't use it again.",
"Quickening",
"You may use this boon to take an extra action on your turn. This can be an attack or any other action. What you did during your first action has no bearing on what action you can use this boon for. This boon can be used once.",
"Boon of Perfect Health",
"You are immune to all diseases and poisons, and you have advantage on Constitution saving throws. This boon lasts until the end of your current quest.",
"Fitting Armour",
"You are really getting the hang of this armour now. After a while spent getting accustomed to it, you can take advantage of its features well, especially against attacks from certain angles. You may add +2 to your AC as a reaction, 1d4 times, after which this boon disappears.",
"Revitalising Touch",
"The gods have smiled on your efforts. Immediately take the benefits of a long rest. If you have just completed a long rest, or do not need one, you may roll again on the Boon table but must use the new roll.",
"Boon of Planar Travel",
"When you gain this boon, choose a plane of existence other than the Material Plane. You can now use an action to cast the plane shift spell (no spell slot or components required), targeting yourself only, and travel to the chosen plane, or from that plane back to the Material Plane. Once you use this boon 1d4 times, you can't use it again.",
"Animal Mastery",
"You feel tuned in to the world around you, especially to animals. Until you complete this quest, you have advantage on Wisdom (Animal Handling) checks, and +2 on Perception checks relating to animals."
]


/*To be used later 
LIKELIHOOD MODIFIERS
Impossible -8
Highly Unlikely -5
Unlikely -3
Possible 0
Likely +3
Highly Likely +5
A Certainty +8
 */

function oracle(likelihood){
if()
}