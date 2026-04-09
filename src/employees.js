const maleNames = ["Jakub", "Tomáš", "Jan", "Martin", "Petr", "Lukáš", "Ondřej", "David", "Michal", "Pavel",
  "Jiří", "Radek", "Marek", "Filip", "Václav", "Stanislav", "Roman", "Miroslav", "Zdeněk", "Karel",
  "Jaroslav", "Josef", "Vojtěch", "Adam", "Dominik", "Patrik", "Richard", "Libor", "Miloslav",
  "René", "Vladimír", "Antonín", "Bohumil", "Čestmír", "Dalibor", "Eduard", "František"];

const femaleNames = ["Jana", "Tereza", "Lucie", "Markéta", "Petra", "Kateřina", "Veronika", "Martina", "Eva", "Lenka",
  "Monika", "Alena", "Ivana", "Hana", "Zuzana", "Michaela", "Barbora", "Kristýna", "Renata", "Simona",
  "Dagmar", "Eliška", "Gabriela", "Helena", "Ilona", "Jitka", "Kamila", "Ludmila", "Naděžda", "Olga",
  "Pavlína", "Radka"];

const maleSurnames = ["Novák", "Svoboda", "Novotný", "Dvořák", "Černý", "Procházka", "Kučera", "Veselý", "Horák", "Němec",
  "Pospíšil", "Marek", "Pokorný", "Hájek", "Jelínek", "Král", "Růžička", "Beneš", "Fišer", "Sedláček",
  "Doležal", "Zeman", "Kolář", "Navrátil", "Čermák", "Urban", "Blaha", "Kozák", "Kratochvíl", "Kovář",
  "Málek", "Stehlík", "Vlček", "Horáček"];

const femaleSurnames = ["Nováková", "Svobodová", "Novotná", "Dvořáková", "Černá", "Procházková", "Kučerová", "Veselá", "Horáková", "Němcová",
  "Pospíšilová", "Marková", "Pokorná", "Hájková", "Jelínková", "Králová", "Růžičková", "Benešová", "Fišerová", "Sedláčková",
  "Doležalová", "Zemanová", "Kolářová", "Navrátilová", "Čermáková", "Urbanová", "Blahová", "Kozáková", "Kratochvílová", "Kovářová",
  "Málková", "Stehlíková"];

const workloads = [10, 20, 30, 40];

export function generateGender() {
  return Math.random() < 0.5 ? "male" : "female";
}

export function generateName(gender) {
  if (gender === "male") {
    return maleNames[Math.floor(Math.random() * maleNames.length)];
  } else {
    return femaleNames[Math.floor(Math.random() * femaleNames.length)];
  }
}

export function generateSurname(gender) {
  if (gender === "male") {
    return maleSurnames[Math.floor(Math.random() * maleSurnames.length)];
  } else {
    return femaleSurnames[Math.floor(Math.random() * femaleSurnames.length)];
  }
}

export function generateWorkload() {
  return workloads[Math.floor(Math.random() * workloads.length)];
}

export function generateBirthdate(ageMin, ageMax) {
  const today = new Date();
  const oldestDate = new Date(today.getFullYear() - ageMax, today.getMonth(), today.getDate());
  const youngestDate = new Date(today.getFullYear() - ageMin, today.getMonth(), today.getDate());

  const oldestTimestamp = oldestDate.getTime();
  const youngestTimestamp = youngestDate.getTime();

  const randomTimestamp = oldestTimestamp + Math.random() * (youngestTimestamp - oldestTimestamp);
  return new Date(randomTimestamp).toISOString();
