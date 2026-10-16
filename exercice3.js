   const t=[10,12,3,10,7]
const [a1,b1]=t;
const[a2,b2,c]=t;
const[a, ,b]=t;
const[, ,...t2]=t;
console.log(t2);
const produit={ id:1,
    nom:"souris",
    prix:20,
    stock:15};
    //const{nom,prix}=produit;
    //console.log(nom,prix);
    const{ nom:designation,prix}=produit;
    console.log(designation,prix);
    const panier=[{id:1,nom:"sourix",prix:20,stock:15},
    {id:2,nom:"clavier",prix:80,stock:3},
    {id:3,nom:"ecran",prix:350,stock:10}];
    const nomprix=panier.map(({nom,prix})=>({nom,prix}));
    console.log(nomprix);
    


