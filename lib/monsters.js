const fetch = require('node-fetch'); 
const url = 'https://www.dnd5eapi.co/api/monsters/medusa'; 

const getMonster = async() => {
 let data = await fetch(url); 
 return await data.json();  
} 


module.exports =  getMonster