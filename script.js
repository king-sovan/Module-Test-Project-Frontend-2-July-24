let employees = [];
let nextId = 1;

const form = document.getElementById('employeeForm');
const nameInput = document.getElementById('name');
const professionInput = document.getElementById('profession');
const ageInput = document.getElementById('age');
const messageDiv = document.getElementById('message');
const employeeList = document.getElementById('employeeList');
const noEmployeesMessage = document.getElementById('noEmployees');
const addUserButton = document.getElementById('addUser');

addUserButton.addEventListener('click', function() {
    addEmployee();
});

function addEmployee() {
    const name = nameInput.value.trim();
    const profession = professionInput.value.trim();
    const age = ageInput.value.trim();

    if (name && profession && age) {
        const newEmployee = {
            id: nextId++,
            name: name,
            profession: profession,
            age: parseInt(age)
        };
        employees.push(newEmployee);
        renderEmployees();
        showMessage('Success : Employee Added!', 'success');
        form.reset();
    } else {
        showMessage('Error : Please Make sure All the fields are filled before adding an employee!', 'error');
    }
}

function deleteEmployee(id) {
    employees = employees.filter(emp => emp.id !== id);
    renderEmployees();
}

function renderEmployees() {
    if (employees.length === 0) {
        noEmployeesMessage.style.display = 'block';
        employeeList.innerHTML = '';
    } else {
        noEmployeesMessage.style.display = 'none';
        employeeList.innerHTML = employees.map(emp => `
            <div class="employee-item">
                <span>${emp.id}. Name : ${emp.name}    Profession : ${emp.profession}    Age : ${emp.age}</span>
                <button onclick="deleteEmployee(${emp.id})" class="delete-btn">Delete User</button>
            </div>
        `).join('');
    }
}

function showMessage(message, type) {
    messageDiv.textContent = message;
    messageDiv.className = type;
    setTimeout(() => {
        messageDiv.textContent = '';
        messageDiv.className = '';
    }, 3000);
}

// Initial render
renderEmployees();
