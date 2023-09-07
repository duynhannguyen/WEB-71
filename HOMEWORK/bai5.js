const employeesInfo = [
    { name: "David", workingTime: 98, salary: 10 },
    { name: "Luiz", workingTime: 78, salary: 20 },
    { name: "Silva", workingTime: 165, salary: 25 },
    { name: "Santos", workingTime: 215, salary: 30 },
    { name: "Alex", workingTime: 143, salary: 28 },
  ];
  function getTotalSalaryOfCompany(){

    let salary = 0
    for(let i = 0; i< employeesInfo.length; i++){
        const employees = employeesInfo[i]
        salary += employees.workingTime * employees.salary
    }
    return salary
  }
  //  console.log(getTotalSalaryOfCompany());

  function getBonus (workingTime){
    let bonus = 0 
    switch (true) {
      case workingTime >= 150:
        return bonus = 200
      case workingTime >= 100:
        return bonus = 150
        case workingTime >= 50:
          return bonus = 100
      default: 
        return bonus = 50
    }
  }
   function getTotalSalaryOfEmployee(name){
    let employeesSalary = 0
     for(let i = 0; i < employeesInfo.length; i++ ){
      const employees = employeesInfo[i]
      if(employees.name === name){
        const {salary, workingTime} = employees
        employeesSalary = (salary * workingTime) + getBonus(workingTime)
        // return employeesSalary;
        return `${name}'s salary: $${employeesSalary}`
      }
      
    }
    return "Nhân viên không tồn tại"
  }
   console.log(getTotalSalaryOfEmployee("Alex"));
   console.log(getTotalSalaryOfEmployee("Nhân"));
   console.log(getTotalSalaryOfEmployee("David"));