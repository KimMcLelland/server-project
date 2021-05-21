const fetch = require('node-fetch'); 
const url = 'https://www.dnd5eapi.co/api/monsters/medusa';

const getIconic = async() => {
    let data = await fetch(url); 
    return await data.json();  
   } 
   
   
module.exports =  getIconic

// let faveMonsters = [
//     {
//         name: "gargoyle",
//         type: "elemental",
//         Armour_class: 0,
//         CR: 3

//     },
//     {
//         name: "Wraith",
//         type: "undead",
//         Armour_class: 0,
//         CR: 5

// },
// {
//     name: "Troll",
//     type: "Giant",
//     Armour_class: 0,
//     CR: 5
// },
// {
//     name: "Medusa",
//     type: "Monstrosity",
//     Armour_class: 0,
//     CR: 6

// },
// {
//     name: "Frost Giant",
//     type: "Giant",
//     Armour_class: 0,
//     CR: 8
// },
// {
//     name: "Aboleth",
//     type: "Aberration",
//     Armour_class: 0,
//     CR: 10

// },
// {
//     name: "Vampire",
//     type: "undead",
//     Armour_class: 0,
//     CR: 13

// },
// {
//     name: "Adult Red Dragon",
//     type: "dragon",
//     Armour_class: 0,
//     CR: 17
// },
// {
//     name: "Balor",
//     type: "Demon",
//     Armour_class: 0,
//     CR: 19
// }]

// const getIconic = () => {
//     return faveMonsters;
// }

// module.exports = getIconic;