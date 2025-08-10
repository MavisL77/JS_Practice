const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Javascript' },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python'  },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java'  },
    ];

function displayEmployees(){
     // Function to display all employees
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
  }

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'No employee has been found with this ID.';
    }
 }

 function findEmployeeBySpecialization(employeeSpecialization) {
    const foundEmployee_1 = employees.find(employee => employee.specialization === employeeSpecialization);
    if (foundEmployee_1) {
      document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee_1.id}: ${foundEmployee_1.name}: ${foundEmployee_1.name} - ${foundEmployee_1.specialization} - $${foundEmployee_1.salary} - ${foundEmployee_1.department} </p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'No employee has been found with this specialization.';
    }
 }