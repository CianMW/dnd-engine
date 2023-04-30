
export default function generateEncounter(pcNumber, environment, level){
let encounterLevel 
if(pcNumber > 1){
    encounterLevel= getEncounterLevel(convertPcLevel(level))
} else {
    encounterLevel = getEncounterLevel(level)
}

return encounterLevel.forEach(cr => {
    let listLength = Data[environment][cr].listLength;
    let monster = Data[environment][cr][Math.floor(Math.random()* listLength)]
    return monster
});
}