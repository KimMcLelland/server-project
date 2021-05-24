const fetch = require('node-fetch'); 
const url = 'https://www.dnd5eapi.co/api/monsters/wraith';

const getIconic = async() => {
    let data = await fetch(url); 
    return await data.json();  
   } 
   
   
module.exports =  getIconic

