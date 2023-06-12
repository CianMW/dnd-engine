interface MinorFeatureData{
min:number;
max:number;
description:string;
extra?: Function 
}

const CLEARFELLED_AREA = [
    {min:1, max:50, description:'Clearfeleld area', extra:()=> `Large section of forest removed for local industry`},
    {min:51, max:60, description:`A ${Math.floor(Math.random()*10)+1 >= 4 ? 'humnan':'non-human'} Army cutting down trees to build siegenweapons. 40% human`, extra:()=> `Large section of forest removed for local industry`},
]