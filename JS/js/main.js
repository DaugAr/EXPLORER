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

// let hours = Math.round(Math.random() * 24);
// let minutes = Math.round(Math.random() * 60);
// let seconds = Math.round(Math.random() * 60);
// let extraSeconds = Math.round(Math.random() * 300);

// // hours = 23;
// // minutes = 59;
// // seconds = 0;
// // extraSeconds = 300;
// let secSum = seconds + extraSeconds;
// let allSec = seconds + minutes * 60 + hours * 3600 + extraSeconds;
// let nowTimeH = Math.floor(allSec / 3600);
// let nowTimeMin = Math.floor((allSec - nowTimeH * 3600) / 60);
// let nowTimeSec = Math.floor(allSec - (nowTimeH * 3600) - (nowTimeMin * 60));

// console.log(hours + "h", minutes + "min.", seconds + "sec.");
// console.log(extraSeconds + " extra sec.");
// // console.log("sec. suma: " + secSum);
// // console.log(allSec + " all-sec.");
// // console.log(nowTimeH);
// // console.log(nowTimeH, nowTimeMin);
// if (nowTimeH < 24) {
//     console.log(nowTimeH + "h ", nowTimeMin + " min. ", nowTimeSec + "sec.");
// } else {
//     console.log(nowTimeH - 24 + "h ", nowTimeMin + " min. ", nowTimeSec + "sec.");
// }


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

// let firstName = "Denzel";
// let lastName = "Washington";

// // console.log(lastName.substring(15, -3));
// // console.log(lastName.substring(7, 10));
// // console.log(firstName.substring(3, 6) + lastName.substring(7, 10));
// console.log(firstName.substring(firstName.length - 3) + lastName.substring(lastName.length - 3));

// String ND - 5

// let american = "An American in Paris"
// let aBig = american.replaceAll("a", "A");

// console.log(american);
// console.log(aBig.replaceAll("A", "*"));
// console.log(american.replaceAll("a", "A").replaceAll("A", "*"));

// String ND - 6

// let american = "An American in Paris"
// let tiff = "Breakfast at Tiffany's"
// let space = "2001: A Space Odyssey"
// let life = "It's a Wonderful Life"

// console.log(american.replace(/[aeiou]/ig, ''));
// console.log(tiff.replace(/[aeiouy]/ig, ''));
// console.log(space.replace(/[aeiouy]/ig, ''));
// console.log(life.replace(/[aeiou]/ig, ''));

// String ND - 7

// let nam = "Star Wars: Episode " + " ".repeat(Math.ceil(Math.random() * 10)) + (Math.ceil(Math.random() * 7) + 1) + " - A New Hope";
// // let num = nam.replace(/^\D+/g, '');
// let thenum = nam.match(/\d+/)[0];

// console.log(nam);
// // console.log(num);
// console.log(thenum);

// kitas variantas
// console.log(nam chartAt(nam.length -14));

// kitas variantas
// console.log(nam.replaceAll(/[a-z:-]/gi, ""));

// String ND - 8

// let nd8 = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood"

// console.log(nd8);


// CIKLAI


// for (let i = 0; i < 5; i++) {
//     console.log("labas " + i);
// }

// let i = 0;
// while (i < 3) {
//     console.log("while " + i);
//     i++;
// }

// while (Math.random() < 0.75) {
//     console.log("sukames");
// }


// Ciklai ND 1

// for (let i = 0; i < 10; i++) {
//     console.log("labas");
// }


// Ciklai ND 2

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// Ciklai ND 6

// for (let i = 10; i <= 50; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


// Ciklai ND 7

// for (let i = 10; i <= 50; i++) {
//     if (i % 2 == 0) {
//         if (i % 10 == 0) continue;
//         { console.log(i); }
//     }
// }


// Pamoka 2023 01 16

// let i = 0
// for (; true;) {
//     console.log(i);
//     i++
//     if (i >= 10) {
//         break;
//     }
// }

// for (let i = 0; i < 25; i += 4) {
//     console.log(i);

// }

// let sk = 0;
// let draugai = ['Saulius', 'Arnoldas', 'Jovita', 'Matas', 'Saulius', 'Arnas', 'Darius'];

// console.log(draugai);

// console.log(draugai[3]);

// draugai[0] = 'Saulius B';

// console.log(draugai.length);

// for (let i = 0; i < draugai.length; i++) {
//     const element = draugai[i];
//     console.log(draugai[i]);
// }

// Daugybos lentelė

// for (let a = 1; a <= 10; a++) {
//     let row = "";
//     for (let i = 1; i <= 10; i++) {
//         row += a * i + " ";
//     }
//     console.log(row);
// }


// Ciklai ND - 3;

// let augalai = ['Bazilikas', 'Paprika', 'Agurkas', 'Pupa', 'braske', 'meta', 'salota', 'Bulve', 'Morka', 'Roze'];

// console.log(augalai);

// Ciklai ND - 4

// let augalai = ['Bazilikas', 'Paprika', 'Agurkas', 'Pupa', 'braske', 'meta', 'salota', 'Bulve', 'Morka', 'Roze'];

// // console.log(augalai);

// for (let i = 0; i < augalai.length; i++) {
//     const element = augalai[i]
//     console.log(augalai[i]);
// }


// Ciklai ND - 5

// let augalai = ['Bazilikas', 'Paprika', 'Agurkas', 'Pupa', 'braske', 'meta', 'salota', 'Bulve', 'Morka', 'Roze'];

// for (let i = 9; i >= 0; i--) {
//     const element = augalai[i]
//     console.log(augalai[i]);
// }


// Ciklai ND - 8


// let p = 0;
// for (let i = 0; i <= 20; i++) {
//     if (i % 2 == 0 && i !== 0) {
//         p++;
//     }
// }
// console.log(p);


// Ciklai ND - 9

// let augalai = ['Bazilikas', 'Paprika', 'Agurkas', 'Pupa', 'Braske', 'Meta', 'Salota', 'Bulve', 'Morka', 'Roze'];
// let less5 = 0;
// let more7 = 0;

// for (let i = 0; i < augalai.length; i++) {
//     if (augalai[i].length < 5) {
//         less5++;
// continue;
//     }
// }
// console.log(less5 + " - maziau nei 5 raides");

// for (let i = 0; i < augalai.length; i++) {
//     if (augalai[i].length > 7) {
//         more7++;
//     }
// }
// console.log(more7 + " - daugiau nei 7 raides");


// Ciklai Sunkesni ND - 1

// let number = "";
// let count = 0;

// for (let i = 0; i < 300; i++) {
//     let randomNumber = Math.round(Math.random() * 300);

//     if (randomNumber <= 275) {
//         number += randomNumber + " ";
//     } else {
//         number += "[" + randomNumber + "]";
//     }

//     if (randomNumber > 150) {
//         count++;
//     }
// }
// console.log(count);
// console.log(number);



// Ciklai Sunkesni ND - 2

// let skaicius = "";

// for (let i = 1; i <= 3000; i++) {
//     if (i % 77 == 0) {
//         skaicius += i + ", ";
//     }
// }
// console.log(skaicius.slice(0, -2));




// let vaisius = ['obuolys', 'bananas', 'apelsinas', 'kriause'];
// console.log(vaisius);
// let removed = vaisius.splice(-1, 1);
// console.log(vaisius);
// console.log(removed);


// let vaisius = ['obuolys', 'bananas', 'apelsinas', 'kriause'];
// console.log(vaisius);
// let citrusinius = vaisius.slice(vaisius.length - 2, vaisius.length - 1);
// console.log(citrusinius);
// // console.log(vaisius);


// Ciklai Sunkesni ND - 3

// for (let i = 0; i < 11; i++) {
//     let row = "";
//     for (let a = 0; a < 11; a++) {
//         row += "*";
//     }
//     console.log(row);
// }


// Ciklai Sunkesni ND - 4

// let row = "";
// for (let i = 0; i < 11; i++) {
//     for (let a = 0; a < 11; a++) {
//         if (i == a || i == 10 - a) {
//             row += "x";
//         } else {
//             row += "*";
//         }
//     }
//     row += "\n";
// }
// console.log(row);


// Ciklai Sunkesni ND - 5

// a

// while (true) {
//     let metimas = Math.floor(Math.random() * 2);
//     if (metimas === 0) {
//         console.log("H");
//         break;
//     } else {
//         console.log("S");
//     }
// }

// b

// let herbas = 0;
// while (herbas < 3) {
//     let metimas = Math.floor(Math.random() * 2);
//     if (metimas === 0) {
//         console.log("H");
//         herbas++;
//     } else {
//         console.log("S");
//     }
// }

// c

// let herbas = 0;
// while (herbas < 3) {
//     let metimas = Math.floor(Math.random() * 2);
//     if (metimas === 0) {
//         console.log("H");
//         herbas++;
//     } else {
//         console.log("S");
//         herbas = 0;
//     }
// }


// Ciklai Sunkesni ND - 6

// let Kazys = 0;
// let Petras = 0;

// while (Kazys < 222 && Petras < 222) {
//     Kazys += Math.floor(Math.random() * 21) + 5;
//     Petras += Math.floor(Math.random() * 11) + 10;
// }

// let laimetojas = Kazys > Petras ? "Kazys" : "Petras";
// console.log("Kazys: " + Kazys);
// console.log("Petras: " + Petras);
// console.log("Laimetojas: " + laimetojas);

// Ciklai Sunkesni ND - 8

// a

// let maziSmugiai = 0;
// for (let i = 0; i < 5; i++) {
//     let gylis = 0;
//     while (gylis < 85) {
//         let smugis = Math.floor(Math.random() * 16) + 5;
//         gylis += smugis;
//         maziSmugiai++;
//     }
// }
// console.log("Kalimu kiekis: " + maziSmugiai);

// b

// let dideliSmugiai = 0;
// for (let i = 0; i < 5; i++) {
//     let gylis = 0;
//     while (gylis < 85) {
//         let smugis = Math.random() < 0.5;
//         if (smugis) {
//             let smugioGylis = Math.floor(Math.random() * 11) + 20;
//             gylis += smugioGylis;
//             dideliSmugiai++;
//         } else {
//             dideliSmugiai++
//         }
//     }
// }
// console.log("Kalimu kiekis: " + dideliSmugiai);


// Ciklai Sunkesni ND - 7


// Reikia nupaišyti pilnavidurį rombą, taip pat, kaip ir pilnavidurį kvadratą (https://lt.wikipedia.org/wiki/Rombas), kurio aukštis 21 eilutė.

// let height = 21;

// for (let i = 0; i < height; i++) {
//     let n = "";
//     for (let a = 0; a < height; a++) {
//         n += "*";
//     }
//     console.log(n);
// }


// let row = "";
// for (let i = 0; i < 5; i++) {
//     for (let a = 0; a < 5; a++) {
//         if (i == a || i == 4 - a) {
//             row += "x";
//         } else {
//             row += "*";
//         }
//     }
//     row += "\n";
// }
// console.log(row);


// Ciklai Sunkesni ND - 9

// let numbers = new Set();
// while (numbers.size < 50) {
//     numbers.add(Math.floor(Math.random() * 200) + 1);
// }
// let string = [...numbers].join(", ");
// console.log(string);


