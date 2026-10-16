const destinationsEurope = ["Rome", "Paris", "Madrid"];
const destinationsAsie = ["Tokyo", "Bali", "Bangkok"];
const copie=[...destinationsEurope];
console.log(copie);
const fusion=[...destinationsEurope,...destinationsAsie];
const ajout=["Lisbonne",...destinationsEurope];
const ajoutfin =[...destinationsEurope,"landre"];
