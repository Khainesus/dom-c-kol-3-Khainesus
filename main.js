//TODO add imports if needed
//TODO doc
/**
 * The main function which calls the application.
 * Please, add specific description here for the application purpose.
 * @param {object} dtoIn contains count of employees, age limit of employees {min, max}
 * @returns {Array} of employees
 */
import { generateGender, generateName, generateSurname, generateWorkload, generateBirthdate } from "./src/employees.js";

export function main(dtoIn) {
  const employees = [];

  for (let i = 0; i < dtoIn.count; i++) {
    const gender = generateGender();
    const name = generateName(gender);
    const surname = generateSurname(gender);
    const workload = generateWorkload();
    const birthdate = generateBirthdate(dtoIn.age.min, dtoIn.age.max);

    employees.push({
      gender: gender,
      name: name,
      surname: surname,
      birthdate: birthdate,
      workload: workload,
    });
  }

  return employees;
}

