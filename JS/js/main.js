// ND numeris 1
// let vardas = "Arnas";
// let pavarde = "Daugela";
// console.log(vardas);
// console.log(pavarde);
// tarpas = " ";

// let metai = 2023;
// let gimimoMetai = 2000;

// console.log("As esu" + tarpas + vardas + tarpas + pavarde + "." + tarpas + "Man yra" + tarpas + (metai - gimimoMetai) + tarpas + "metai.");


// PVZ
// function rnd(min, max) { // min and max included
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }

// const rndInt = rnd(0, 4)
// console.log(rndInt)

// ND numeris 2
// let rnd1 = Math.round(Math.random() * 4)
// console.log(rnd1);
// let rnd2 = Math.round(Math.random() * 4)
// console.log(rnd2);

// if (rnd1 !== 0 && rnd2 !== 0) {
//     if (rnd1 == rnd2) {
//         console.log("equal");
//     } else {
//         if (rnd1 > rnd2) {
//             console.log(Math.round(rnd1 / rnd2 * 100) / 100);
//         } else {
//             console.log(Math.round(rnd2 / rnd1 * 100) / 100);
//         }
//     }
// } else {
//     console.log("one is 0. Please reload");
// }


// ND numeris 3

// let rnd1 = Math.round(Math.random() * 25)
// console.log(rnd1);
// let rnd2 = Math.round(Math.random() * 25)
// console.log(rnd2);
// let rnd3 = Math.round(Math.random() * 25)
// console.log(rnd3);

// let arr = [rnd1, rnd2, rnd3];
// arr.sort((a, b) => a - b);
// let median;
// if (arr.length % 2 != 0) {

//     let middleIndex = Math.floor(arr.length / 2)

//     median = arr[middleIndex]

// } else {
//     let middleIndex = Math.floor(arr.length / 2)

//     median = arr[middleIndex] + arr[middleIndex + 1]
// }
// console.log("vidurinė reikšmė: " + median)

// ND 3 teisingai:

// let rnd1 = Math.round(Math.random() * 25)
// console.log(rnd1);
// let rnd2 = Math.round(Math.random() * 25)
// console.log(rnd2);
// let rnd3 = Math.round(Math.random() * 25)
// console.log(rnd3);

// if ((rnd1 > rnd2 && rnd1 < rnd3) || (rnd1 < rnd2 && rnd1 > rnd3)) {
//     console.log(rnd1);
// }

// if ((rnd2 > rnd1 && rnd2 < rnd3) || (rnd2 < rnd1 && rnd2 > rnd3)) {
//     console.log(rnd2);
// }

// if ((rnd3 > rnd1 && rnd3 < rnd2) || (rnd3 < rnd1 && rnd3 > rnd2)) {
//     console.log(rnd3);
// }

// ND numeris 4
// let a = 1 + Math.round(Math.random() * 9)
// console.log(a);
// let b = 1 + Math.round(Math.random() * 9)
// console.log(b);
// let c = 1 + Math.round(Math.random() * 9)
// console.log(c);

// Jeigu testuociau:
// a = 1;
// b = 7;
// c = 3;

// if (a + b > c && a + c > b && b + c > a) {
//     console.log("Trikampis galimas");
// } else {
//     console.log("Trikampis negalimas");
// }


// ND numeris 5

// let n1 = Math.round(Math.random() * 2)
// let n2 = Math.round(Math.random() * 2)
// let n3 = Math.round(Math.random() * 2)
// let n4 = Math.round(Math.random() * 2)

// let count0 = 0;
// let count1 = 0;
// let count2 = 0;

// console.log(n1, n2, n3, n4);

// if (n1 == 0) {
//     count0++;
// }
// if (n2 == 0) {
//     count0++;
// }
// if (n3 == 0) {
//     count0++;
// }
// if (n4 == 0) {
//     count0++;
// }

// if (n1 == 1) {
//     count1++;
// }
// if (n2 == 1) {
//     count1++;
// }
// if (n3 == 1) {
//     count1++;
// }
// if (n4 == 1) {
//     count1++;
// }

// if (n1 == 2) {
//     count2++;
// }
// if (n2 == 2) {
//     count2++;
// }
// if (n3 == 2) {
//     count2++;
// }
// if (n4 == 2) {
//     count2++;
// }
// console.log(count0, count1, count2);

// ND numeris 6

// let n1 = -10 + Math.round(Math.random() * (10 - -10));
// let n2 = -10 + Math.round(Math.random() * (10 - -10));
// let n3 = -10 + Math.round(Math.random() * (10 - -10));

// console.log(n1);
// console.log(n2);
// console.log(n3);

// if (n1 < 0) {
//     console.log("[" + n1 + "]");
// } else if (n1 == 0) {
//     console.log("(" + n1 + ")");
// } else if (n1 > 0) {
//     console.log("{" + n1 + "}");
// }

// if (n2 < 0) {
//     console.log("[" + n2 + "]");
// } else if (n2 == 0) {
//     console.log("(" + n2 + ")");
// } else if (n2 > 0) {
//     console.log("{" + n2 + "}");
// }

// if (n3 < 0) {
//     console.log("[" + n3 + "]");
// } else if (n3 == 0) {
//     console.log("(" + n3 + ")");
// } else if (n3 > 0) {
//     console.log("{" + n3 + "}");
// }


// ND numeris 7

// let zvakiuKaina = 5 + Math.round(Math.random() * 2995);
// console.log("Kiekis: " + zvakiuKaina + "vnt.");

// if (zvakiuKaina >= 1000 && zvakiuKaina < 2000) {
//     console.log(Math.round(zvakiuKaina * 0.97 * 100 / 100) + "eur." + "Taikoma 3% nuolaida");
// } else if (zvakiuKaina >= 2000) {
//     console.log(Math.round(zvakiuKaina * 0.96 * 100 / 100) + "eur." + "Taikoma 4% nuolaida");
// } else if (zvakiuKaina < 1000) {
//     console.log(zvakiuKaina + "eur.");
// }


// ND numeris 8

// let n1 = Math.round(Math.random() * 100);
// let n2 = Math.round(Math.random() * 100);
// let n3 = Math.round(Math.random() * 100);
// let vidurkis = (n1 + n2 + n3) / 3;

// console.log(n1, n2, n3);
// console.log(Math.round((n1 + n2 + n3) / 3 * 100));

// if (vidurkis >= 10 && vidurkis <= 90) {
//     console.log(Math.round(vidurkis * 100));
// } else {
//     console.log("vidurkio nėra");
// }


// ND numeris 9

// let valandos = Math.round(Math.random() * 24);
// let minutės = Math.round(Math.random() * 60);
// let sekundės = Math.round(Math.random() * 60);
// let papildomosSekundės = Math.round(Math.random() * 300);
// let secSum = sekundės + papildomosSekundės;
// let allSec = sekundės + minutės * 60 + valandos * 3600;
// let nowTimeH = Math.floor(allSec / 3600);
// let nowTimeMin = Math.floor((allSec - nowTimeH * 3600) / 60);
// // let nowTimeSec = Math.floor((allSec - nowTimeH * 3600) / 60);

// console.log(valandos + "h", minutės + "min.", sekundės + "sec.");
// console.log(papildomosSekundės + " extra sec.");
// console.log("sec. suma: " + secSum);
// console.log(allSec + " all-sec.");
// console.log(nowTimeH);
// console.log(nowTimeH, nowTimeMin);


// neaktualu
// if (secSum >= 0 && secSum < 60) {
//     console.log(valandos + "h", minutės + "min.", secSum + "sec.");
// } else if (secSum >= 60 && secSum < 120) {
//     console.log(valandos + "h", minutės + 1 + "min.", secSum - 60 + "sec.");
// } else if (secSum >= 120 && secSum < 180) {
//     console.log(valandos + "h", minutės + 2 + "min.", secSum - 120 + "sec.");
// } else if (secSum >= 180 && secSum < 240) {
//     console.log(valandos + "h", minutės + 3 + "min.", secSum - 180 + "sec.");
// } else if (secSum >= 240 && secSum < 300) {
//     console.log(valandos + "h", minutės + 4 + "min.", secSum - 240 + "sec.");
// } else if (secSum = 300) {
//     console.log(valandos + "h", minutės + 5 + "min.", secSum - 300 + "sec.");
// }


// string ND

// 1. actorName.lenght

// 2. actorName.toLowerCase()
// 2. console.log(actorName.toUpperCase());

// 3. console.log(actorName.charAt(0));
// 3. console.log(actorName.charAt(1));
// 3. console.log(actorName.lenght(-3);

// slice ka jie daro?
// splice ka jie daro?

// 4. console.log(actorName.replace("a","u"));
// 4. console.log(actorName.replace("a","u"));
// google redeksus ar kazkaip panasiai
// pregReplace(/\s);

// 5. console.log(actorName.());

// 9. pabandyti

// String ND - 1

// let firstName = "Denzel";
// let lastName = "Washington";

// console.log(firstName.length);
// console.log(lastName.length);

// if (firstName < lastName) {
//     console.log(firstName);
// } else {
//     console.log(lastName);
// }

// String ND - 2

// let firstName = "Denzel";
// let lastName = "Washington";

// console.log(firstName.toUpperCase() + " " + lastName.toLowerCase());

// String ND - 3

// let firstName = "Denzel";
// let lastName = "Washington";
// let thirdName = firstName.charAt(0) + lastName.charAt(0);

// console.log(thirdName);

// String ND - 4

let firstName = "Denzel";
let lastName = "Washington";

// console.log(lastName.substring(15, -3));
// console.log(lastName.substring(7, 10));
// console.log(firstName.substring(3, 6) + lastName.substring(7, 10));
console.log(firstName.substring(firstName.length - 3) + lastName.substring(lastName.length - 3));

// String ND - 5

