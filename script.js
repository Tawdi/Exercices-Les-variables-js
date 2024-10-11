'use strict';

// ex1
console.log("EXERCICE 1");

let prenom = 'ahmed';
console.log(`prenom : ${prenom}`);

// ex2
console.log("");

console.log("EXERCICE 2");

let a=2;
let b=4;
console.log(`somme : ${a+b}`);
console.log(`différence : ${a-b}`);
console.log(`produit : ${a*b}`);
console.log(`quotient : ${a/b}`);

// ex3
console.log("");

console.log("EXERCICE 3");
// let prenom = 'ahmed';  // déja declaré
let nom = 'taoudi';
let nomComplet1 = prenom + " "+ nom;
let nomComplet2 =`${prenom} ${nom}`; 
console.log(nomComplet1);
console.log(nomComplet2);

// ex4
console.log("");
console.log("EXERCICE 4");
let age=80;
let age1=12;

let majeur;

if(age>= 18){
majeur=true;
}else{
majeur=false;
}
let majeur1= age1>=18;
console.log(majeur , majeur1);
// ex5
console.log("");

console.log("EXERCICE 5");
let x=15,y=30;
console.log(x,y);
x=x+y;//x=45 y=30
y=x-y;  //x=45 y=15
x=x-y; //x=30 y=15

// [y,x]=[x,y];  // avec destraction "ilakant hadi hiya smiya"
console.log(x,y);

// ex6
console.log("");

console.log("EXERCICE 6");
let rayon=8; 
console.log("circonférence d'un cercle de rayon " , rayon , " est  : " ,2*3.14*rayon);

// ex7
console.log("");

console.log("EXERCICE 7");

let celsuis=10;
console.log("Conversion de température " , celsuis , " celsuis en Fahrenheit est : " ,celsuis*9/5 +32);

// ex8
console.log("");

console.log("EXERCICE 8");
let anneeNaissance=2002;
let anneeActuelle= 2024;

console.log( "age:",anneeActuelle - anneeNaissance);

// ex9
console.log("");

console.log("EXERCICE 9");
let longueur = 10 ;
let largeur  = 20;
console.log("périmètre d'un rectangle de longueur " , longueur , " et de largeur de ",largeur," est : ",2*(largeur+longueur));

// ex10 finally
console.log("");

console.log("EXERCICE 10");
let note1  = 15;
let note2  = 20;
let note3  = 16;

console.log(`Moyenne de trois nombres ${ note1}, ${ note2}, ${ note3} est ${ (note1+note2+note3)/3} `);
