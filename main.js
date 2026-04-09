//TODO add imports if needed
import { generateGender, generateName, generateSurname, generateWorkload, generateBirthdate } from "./src/employees.js";

/**
 * The main function which calls the application.
 * This function generates a list of employees with random data.
 * @param {object} dtoIn contains count of employees, age limit of employees {min, max}
 * @returns {Array} of employees
 */
export function main(dtoIn) {
  
  // Empty array to store generated employees
  const employees = []; 

  // Loop runs once for each employee that needs to be generated
  for (let i = 0; i < dtoIn.count; i++) {
    
    // Generate random gender
    const gender = generateGender(); 
    
    // Generate name and surname based on gender
    const name = generateName(gender); 
    const surname = generateSurname(gender);
    
    // Generate random workload 
    const workload = generateWorkload();
    
    // Generate random birthdate within the given age range
    const birthdate = generateBirthdate(dtoIn.age.min, dtoIn.age.max);

    // Create employee object and add it to the array
    employees.push({
      gender: gender,
      name: name,
      surname: surname,
      birthdate: birthdate,
      workload: workload,
    });
  }

  // Return the complete list of employees
  return employees;
}

