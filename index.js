const employee ={
    name: "Sam",
    streetAddress: "11 Broadway",
    };

//FUNCTION ONE
    function updateEmployeeWithKeyAndValue(employee, key, value){
       return {
        ...employee,
        [key]: value,
       }
       return employee
    }

//FUNCTION TWO
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

//FUNCTION THREE
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
    return employee;
  
}

//FUNCTION FOUR

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee
}
