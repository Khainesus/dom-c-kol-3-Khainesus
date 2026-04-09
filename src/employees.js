// Arrays of Czech male and female first names
const maleNames = ["Jakub", "Tomáš", "Jan", "Martin", "Petr", "Lukáš", "Ondřej", "David", "Michal", "Pavel",
  "Jiří", "Radek", "Marek", "Filip", "Václav", "Stanislav", "Roman", "Miroslav", "Zdeněk", "Karel",
  "Jaroslav", "Josef", "Vojtěch", "Adam", "Dominik", "Patrik", "Richard", "Libor", "Miloslav",
  "René", "Vladimír", "Antonín", "Bohumil", "Čestmír", "Dalibor", "Eduard", "František"];

const femaleNames = ["Jana", "Tereza", "Lucie", "Markéta", "Petra", "Kateřina", "Veronika", "Martina", "Eva", "Lenka",
  "Monika", "Alena", "Ivana", "Hana", "Zuzana", "Michaela", "Barbora", "Kristýna", "Renata", "Simona",
  "Dagmar", "Eliška", "Gabriela", "Helena", "Ilona", "Jitka", "Kamila", "Ludmila", "Naděžda", "Olga",
  "Pavlína", "Radka"];

// Arrays of Czech male and female surnames
const maleSurnames = ["Novák", "Svoboda", "Novotný", "Dvořák", "Černý", "Procházka", "Kučera", "Veselý", "Horák", "Němec",
  "Pospíšil", "Marek", "Pokorný", "Hájek", "Jelínek", "Král", "Růžička", "Beneš", "Fišer", "Sedláček",
  "Doležal", "Zeman", "Kolář", "Navrátil", "Čermák", "Urban", "Blaha", "Kozák", "Kratochvíl", "Kovář",
  "Málek", "Stehlík", "Vlček", "Horáček"];

const femaleSurnames = ["Nováková", "Svobodová", "Novotná", "Dvořáková", "Černá", "Procházková", "Kučerová", "Veselá", "Horáková", "Němcová",
  "Pospíšilová", "Marková", "Pokorná", "Hájková", "Jelínková", "Králová", "Růžičková", "Benešová", "Fišerová", "Sedláčková",
  "Doležalová", "Zemanová", "Kolářová", "Navrátilová", "Čermáková", "Urbanová", "Blahová", "Kozáková", "Kratochvílová", "Kovářová",
  "Málková", "Stehlíková"];

// Possible workload values in hours per week
const workloads = [10, 20, 30, 40];

/**
 * Randomly returns "male" or "female"
 * @returns {string} gender
 */
export function generateGender() {
  return Math.random() < 0.5 ? "male" : "female";
}

/**
 * Returns a random first name based on gender
 * @param {string} gender - "male" or "female"
 * @returns {string} first name
 */
export function generateName(gender) {
  if (gender === "male") {
    return maleNames[Math.floor(Math.random() * maleNames.length)];
  } else {
    return femaleNames[Math.floor(Math.random() * femaleNames.length)];
  }
}

/**
 * Returns a random surname based on gender
 * @param {string} gender - "male" or "female"
 * @returns {string} surname
 */
export function generateSurname(gender) {
  if (gender === "male") {
    return maleSurnames[Math.floor(Math.random() * maleSurnames.length)];
  } else {
    return femaleSurnames[Math.floor(Math.random() * femaleSurnames.length)];
  }
}

/**
 * Returns a random workload value
 * @returns {number} workload in hours per week
 */
export function generateWorkload() {
  return workloads[Math.floor(Math.random() * workloads.length)];
}

/**
 * Returns a random birthdate in ISO format within the given age range
 * @param {number} ageMin - minimum age
 * @param {number} ageMax - maximum age
 * @returns {string} birthdate in ISO format
 */
export function generateBirthdate(ageMin, ageMax) {
  const today = new Date();
  
  // Calculate the oldest and youngest allowed birthdates
  const oldestDate = new Date(today.getFullYear() - ageMax, today.getMonth(), today.getDate());
  const youngestDate = new Date(today.getFullYear() - ageMin, today.getMonth(), today.getDate());
  
  // Convert dates to timestamps and pick a random value between them
  const oldestTimestamp = oldestDate.getTime();
  const youngestTimestamp = youngestDate.getTime();
  const randomTimestamp = oldestTimestamp + Math.random() * (youngestTimestamp - oldestTimestamp);
  
  // Convert the random timestamp back to ISO format
  return new Date(randomTimestamp).toISOString();
}
