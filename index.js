// Write your solution in this file!
const employee={
    name:'Ben',
    streetAddress:'87 Kinoo Kanairo Apt',
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee={...employee};
    newEmployee[key]=value;
    return newEmployee;
    
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee=employee
    newEmployee[key]=value
    return newEmployee
}
function deleteFromEmployeeByKey(employee, key, value){
    const newEmployee={...employee}
    delete newEmployee[key]
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    const newEmployee=employee
    delete newEmployee[key]
    return newEmployee

}
