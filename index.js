

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee }; // Create a clone of the employee object
  
    // Update the clone with the new key-value pair
    updatedEmployee[key] = value;
  
    // Return the updated employee object
    return updatedEmployee;
  }
  
  // Example usage
  const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
  };
  console.log(employee);
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'age', 30);
  console.log(updatedEmployee);
          

  function deleteFromEmployeeByKey(employee, key) {
    // Create a clone of the employee object
    const updatedEmployee = { ...employee };
    
    // Delete the specified key from the clone
    delete updatedEmployee[key];
    
    return updatedEmployee;
  }


  function destructivelyDeleteFromEmployeeByKey(employee, key,value) {
    // Delete the specified key from the original employee
    delete employee[key];
    
    return employee;
  }


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}




console.log(employee); // Before update
destructivelyUpdateEmployeeWithKeyAndValue(employee, "age", 31);
console.log(employee); // After update
