const fetch = require('node-fetch'); 
const url = 'https://www.dnd5eapi.co/api/monsters?challenge_rating=5'; 

const getMonster = async() => {
 let data = await fetch(url); 
 return await data.json();  
} 


module.exports =  getMonster