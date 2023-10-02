// Write your solution in this file!
// Initialize the employee Object
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // Function to update employee Object non-destructively
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Function to update employee Object destructively
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete a key-value pair non-destructively
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete a key-value pair destructively
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Example usage:
  console.log("Original employee:", employee);
  
  // Non-destructive update
  let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St");
  console.log("Updated employee (non-destructive):", updatedEmployee);
  
  // Destructive update
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Jane Doe");
  console.log("Updated employee (destructive):", employee);
  
  // Non-destructive deletion
  let employeeWithoutStreet = deleteFromEmployeeByKey(employee, "streetAddress");
  console.log("Employee without street address (non-destructive):", employeeWithoutStreet);
  
  // Destructive deletion
  destructivelyDeleteFromEmployeeByKey(employee, "name");
  console.log("Employee without name (destructive):", employee);
  