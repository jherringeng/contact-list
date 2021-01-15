var employees, departments, locations;

$( document ).ready(function() {

  getAll()

});

function getAll() {
  console.log('running')
  $.ajax({
    url: "libs/php/getAll.php",
    type: 'POST',
    dataType: 'json',
    data: {

    },
    success: function(result) {

      if (result.status.name == "ok") {

        console.log(result['data'])

        employees = result['data']['employees'];
        departments = result['data']['departments'];
        locations = result['data']['locations'];

        displayEmployees();

        displayDepartments();

        displayLocations();
      }

    },
    error: function(jqXHR, textStatus, errorThrown) {
      // console.log("Request failed");
      console.warn(jqXHR.responseText)
    }
  });
}

function displayEmployees() {

  $('#employees-info-column').html('')

  employees.forEach( function(employee){

    $('#employees-info-column').append(
      `<div class="information employee" data-id="${employee.id}">
          <div><img src="libs/images/blank-profile.png" alt="image" class="avatar"></div>
          <div>
            <h5>${employee.firstName} ${employee.lastName}</h5>
            <p><span class="employee-location">${employee.locationShort}</span> ${employee.department}</p>
          </div>
      </div>`
    );
  });

  scaleEmployeesDiv();
}

function displayDepartments() {

  $('#departments-info-column').html('')

  departments.forEach( function(department){

    var managerName = "N/A";
    if (department.managerID) {
      managerName = department.managerFirstName + " " + department.managerLastName;
    }

    $('#departments-info-column').append(
      `<div class="information department" data-id="${department.id}">
        <div class="card-body">
          <h5>${department.name}</h5>
          <p><span class="employee-location">${department.locationShort}</span> ${managerName}</p>
        </div>
      </div>`
    );

  });

  scaleDepartmentsDiv();
}

function displayLocations() {

  $('#locations-info-column').html('');

  locations.forEach( function(location){

    $('#locations-info-column').append(
      `<div class="information location" data-id="${location.id}">
        <div>
          <h4>${location.name}</h4>
          <div class="location-short">${location.shortName}</div>
        </div>
        <div class="location-buttons">
          <div id="editLocation" class="edit-location" data-id="${location.id}">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" class="bi bi-pencil" viewBox="0 0 16 16">
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
            </svg>
          </div>
          <div id="deleteLocation" class="delete-location" data-id="${location.id}">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" class="bi bi-dash" viewBox="0 0 16 16">
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
            </svg>
          </div>
        </div>
      </div>`
    );

  });
}


$('#employees-select').click( function(){
  $('#employees').show()
  $('#departments').hide()
  $('#locations').hide()
});

$('#departments-select').click( function(){
  $('#departments').show()
  $('#employees').hide()
  $('#locations').hide()
});

$('#locations-select').click( function(){
  $('#locations').show()
  $('#departments').hide()
  $('#employees').hide()
});

$('.employee').click( function(){
  $('.employee-selected').show()
})

$( document ).ready(function() {
  scaleEmployeesDiv();
  scaleDepartmentsDiv();
  scaleLocationsDiv();
})

$( window ).resize(function() {
  scaleEmployeesDiv();
  scaleDepartmentsDiv();
  scaleLocationsDiv();
});

function scaleEmployeesDiv() {
  var setHeight = $(window).height() - $('#employees-header').outerHeight() - $('#employee-selected').outerHeight()
  $('#employees-info-column').outerHeight(setHeight);
}

function scaleDepartmentsDiv() {
  var setHeight = $(window).height() - $('#departments-header').outerHeight() - $('#department-selected').outerHeight()
  $('#departments-info-column').outerHeight(setHeight);
}

function scaleLocationsDiv() {
  var setHeight = $(window).height() - $('#locations-header').outerHeight() - $('#location-selected').outerHeight()
  $('#locations-info-column').outerHeight(setHeight);
}

$(document).on('click', '.employee', function () {

  var employeeID = $(this).data('id');

  displayEmployee(employeeID);
});

function displayEmployee(employeeID) {
  var employee = employees.find(x => x.id == employeeID)
  $('#employee-selected').data('id', employee.id);

  var managerName = "N/A";
  var department = departments.find(x => x.id == employee.departmentID)
  if (department.managerID && department.managerID != employee.id) {
    managerName = department.managerFirstName + " " + department.managerLastName;
  }

  $('#employee-selected').html(
      `<div id="editEmployee" class="edit" data-id="${employee.id}">
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" class="bi bi-pencil" viewBox="0 0 16 16">
          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
        </svg>
      </div>
      <div id="deleteEmployee" class="delete" data-id="${employee.id}">
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" class="bi bi-dash" viewBox="0 0 16 16">
          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
        </svg>
      </div>
      <img src="libs/images/blank-profile.png" alt="image" class="avatar">
      <h5>${employee.firstName} ${employee.lastName}</h5>
      <p class="employee-location">${employee.location}</p>
      <p>${employee.department}</p>
      <p>${employee.jobTitle}</p>
      <p>
        <span class="fa fa-envelope fa-fw" data-toggle="tooltip" data-original-title="" title=""></span>
        <span class="small text-truncate">${employee.email}</span>
      </p>
      <p>
        <span class="small text-truncate">Manager:</span> ${managerName}
      </p>`
  )

  scaleEmployeesDiv();
}

$(document).on('click', '.department', function () {

  console.log('department-clicked')
  var departmentID = $(this).data('id');
  displayDepartment(departmentID);

});


function displayDepartment(departmentID) {
  var department = departments.find(x => x.id == departmentID)
  $('#department-selected').attr('data-id', department.id);

  var managerName = "N/A";
  if (department.managerID) {
    managerName = department.managerFirstName + " " + department.managerLastName;
  }

  $('#department-selected').html(
      `<div id="editDepartment" class="edit" data-id="${department.id}">
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" class="bi bi-pencil" viewBox="0 0 16 16">
          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
        </svg>
      </div>
      <div id="deleteDepartment" class="delete" data-id="${department.id}">
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" class="bi bi-dash" viewBox="0 0 16 16">
          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
        </svg>
      </div>
      <img src="libs/images/blank-profile.png" alt="image" class="avatar">
      <h5>${department.name}</h5>
      <p class="employee-location">${department.location}</p>
      <p>
        <span class="small text-truncate">Manager:</span> ${managerName}
      </p>`
  )

  scaleDepartmentsDiv();
}

$(document).on('click', '.location', function () {

  console.log('location-clicked')
  var locationID = $(this).data('id');
  displayLocation(locationID);

});


function displayLocation(locationID) {
  var location = locations.find(x => x.id == locationID)
  $('#location-selected').attr('data-id', location.id);

  var departmentsInLocation = departments.filter(x => x.locationID == location.id);
  var departmentsInLocationList = []
  departmentsInLocation.forEach( function(department) {
    departmentsInLocationList.push(department.name);
  });
  var departmentsInLocationNames = departmentsInLocationList.join(", ");

  $('#location-selected').html(
      `<div id="editLocation" class="edit" data-id="${location.id}">
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" class="bi bi-pencil" viewBox="0 0 16 16">
          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
        </svg>
      </div>
      <div id="deleteLocation" class="delete" data-id="${location.id}">
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" class="bi bi-dash" viewBox="0 0 16 16">
          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
        </svg>
      </div>
      <h5>${location.name}</h5>
      <p class="location-short">${location.shortName}</p>
      <p>${departmentsInLocationNames}</p>`
  )
  // <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="image" class="avatar">
  scaleLocationsDiv();
}

function hideEmployee() {
  $('#employee-selected').html('');
  scaleEmployeesDiv();
}

function hideDepartment() {
  $('#department-selected').html('');
  scaleDepartmentsDiv();
}

function hideLocation() {
  $('#location-selected').html('');
  scaleLocationsDiv();
}

$(document).on('click', '#addEmployee', function () {
  $('.modal-header').html('Add Employee');
  $('#modalConfirm').html('Add Employee');
  $('#modalConfirm').show();
  $('.modalForm').attr("id","addEmployeeModal");

  $('.modal-body').html(
    `<div class="form-group">
      <label for="email">First Name:</label>
      <input type="text" class="form-control" id="firstName" placeholder="Enter first name" name="firstName" pattern="[A-Za-z ]+" required>
    </div>
    <div class="form-group">
      <label for="email">Second Name:</label>
      <input type="text" class="form-control" id="lastName" placeholder="Enter second name" name="lastName" pattern="[A-Za-z ]+" required>
    </div>
    <div class="form-group">
      <label for="email">Job Title:</label>
      <input type="text" class="form-control" id="jobTitle" placeholder="Enter job title" name="jobTitle" pattern="[A-Za-z ]+">
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" required>
    </div>
    <div class="form-group">
    <label for="department">Select department</label>
    <select class="form-control" id="department" required>
    </select>
  </div>`
  );
  departments.forEach(function(department) {
    $('#department').append(`<option value="${department.id}">${department.name}</option>`)
  })

  $('#promoteDemoteButton').hide();
  $('#controlModal').modal('show');

});


$(document).on('submit', '#addEmployeeModal', function () {
  addEmployee();
});

function addEmployee() {
  console.log("Adding employee")

  $.ajax({
    url: "libs/php/addEmployee.php",
    type: 'POST',
    dataType: 'json',
    data: {
      lastName: $('#lastName').val(),
      firstName: $('#firstName').val(),
      jobTitle: $('#jobTitle').val(),
      email: $('#email').val(),
      department: $('#department').val(),
    },
    success: function(result) {

      if (result.status.name == "ok") {
        console.log(result.data)
        employees = result.data.employees
        displayEmployees();
        var employee = result['data']['employee'][0]
        displayEmployee(employee.id)
        $('#controlModal').modal('hide');
      }

    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.warn(jqXHR.responseText);
    }
  });
}


$(document).on('click', '#editEmployee', function () {

  var employeeID = $(this).data('id');
  var employee = employees.find(x => x.id == employeeID)

  $('.modal-header').html('Edit Employee');
  $('#modalConfirm').html('Edit Employee');
  $('#modalConfirm').show();
  $('.modalForm').attr("id","editEmployeeModal");

  $('.modal-body').html(
    `<input type="text" style="display: none" id="id" placeholder="Enter first name" name="id" value="${employee.id}" pattern="[A-Za-z ]+" required>
    <div class="form-group">
      <label for="email">First Name:</label>
      <input type="text" class="form-control" id="firstName" placeholder="Enter first name" name="firstName" value="${employee.firstName}" pattern="[A-Za-z ]+" required>
    </div>
    <div class="form-group">
      <label for="email">Second Name:</label>
      <input type="text" class="form-control" id="lastName" placeholder="Enter second name" name="lastName" value="${employee.lastName}" pattern="[A-Za-z ]+" required>
    </div>
    <div class="form-group">
      <label for="email">Job Title:</label>
      <input type="text" class="form-control" id="jobTitle" placeholder="Enter job title" name="jobTitle" value="${employee.jobTitle}" pattern="[A-Za-z ]+" required>
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" value="${employee.email}" required>
    </div>
    <div class="form-group">
    <label for="department">Select department</label>
    <select class="form-control" id="department" required>
    </select>
  </div>`
  );
  departments.forEach(function(department) {
    $('#department').append(`<option value="${department.id}">${department.name}</option>`)
  })
  $('#department').val(employee.departmentID).change();

  var manager = departments.find(x => x.managerID == employee.id)
  $('#promoteDemoteButton').attr("data-id", employee.id);
  if (manager) {
    $('#promoteDemoteButton').html("Demote");
  } else {
    $('#promoteDemoteButton').html("Promote");
  }
  $('#promoteDemoteButton').show();
  $('#controlModal').modal('show');
});

$(document).on('submit', '#editEmployeeModal', function () {
  updateEmployee();
});

function updateEmployee() {
  // console.log("Saving employee")

  var employeeID = $('#id').val();

  $.ajax({
    url: "libs/php/updateEmployee.php",
    type: 'POST',
    dataType: 'json',
    data: {
      id: employeeID,
      lastName: $('#lastName').val(),
      firstName: $('#firstName').val(),
      jobTitle: $('#jobTitle').val(),
      email: $('#email').val(),
      department: $('#department').val(),
    },
    success: function(result) {

      if (result.status.name == "ok") {
        console.log(result.data)
        employees = result.data;
        displayEmployees();
        var employee = employees.find(x => x.id == employeeID);
        displayEmployee(employee);
        $('#controlModal').modal('hide');
      }

    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.warn(jqXHR.responseText);
    }
  });
}

$(document).on('click', '#deleteEmployee', function () {
  var employeeID = $(this).data('id');
  deleteEmployee(employeeID);
});

function deleteEmployee(employeeID) {
  console.log("Deleting employee")

  $.ajax({
    url: "libs/php/deleteEmployee.php",
    type: 'POST',
    dataType: 'json',
    data: {
      id: employeeID
    },
    success: function(result) {

      if (result.status.name == "ok") {
        $('#employee-selected').html('')
        console.log(result.data);
        employees = result.data;
        displayEmployees();
        $('#controlModal').modal('hide');
      }

    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.warn(jqXHR.responseText);
    }
  });
}

$(document).on('click', '#promoteDemoteButton', function () {

  var employeeID = $(this).data('id');
  var employee = employees.find(x => x.id == employeeID)

  if ( $('#promoteDemoteButton').html() == "Promote" ) {
    console.log("Promoting employee")
    promoteEmployeeModal(employeeID, employee);
  } else {
    console.log("Demoting employee")
    demoteEmployee(employeeID);
  }
  // promoteEmployee(employee);
});

function demoteEmployee(employeeID) {
  $.ajax({
    url: "libs/php/demoteEmployee.php",
    type: 'POST',
    dataType: 'json',
    data: {
      id: employeeID
    },
    success: function(result) {

      if (result.status.name == "ok") {
        $('#employee-selected').html('')
        console.log(result.data)
        employees = result.data.employees
        displayEmployees();
        departments = result.data.departments
        displayDepartments();
        hideDepartment();
        $('#controlModal').modal('hide');
      }

    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.warn(jqXHR.responseText);
    }
  });
}

function promoteEmployeeModal(employeeID, employee) {
  $('.modal-header').html('Promote Employee');
  $('#modalConfirm').html('Promote Employee');
  $('#modalConfirm').show();
  $('.modalForm').attr("id","promoteEmployeeModal");

  const departmentsWithoutManager = departments.filter(department => !department.managerID);

  $('.modal-body').html(
    `<div class="form-group">
      <input type="text" id="employee" value="${employeeID}" style="display: none;"></input>
      <label for="department">Promote ${employee.firstName} ${employee.lastName} to Head of:</label>
      <select class="form-control" id="department" required></select>
    </div>`
  );
  departmentsWithoutManager.forEach(function(department) {
    $('#department').append(`<option value="${department.id}">${department.name}</option>`)
  })
  $('#department').val(employee.departmentID).change();

  $('#promoteDemoteButton').hide();
  $('#controlModal').modal('show');
}

$(document).on('submit', '#promoteEmployeeModal', function () {
  promoteEmployee();
});


function promoteEmployee() {
  employeeID = $('#employee').val();
  $.ajax({
    url: "libs/php/promoteEmployee.php",
    type: 'POST',
    dataType: 'json',
    data: {
      employeeID: $('#employee').val(),
      departmentID: $('#department').val(),
      departmentName: $('#department option:selected').text(),
    },
    success: function(result) {

      if (result.status.name == "ok") {
        console.log(result.data)
        employees = result.data.employees
        displayEmployees();
        displayEmployee(employeeID);
        departments = result.data.departments
        displayDepartments();
        hideDepartment();
        $('#controlModal').modal('hide');
      }

    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.warn(jqXHR.responseText);
    }
  });
}


$(document).on('click', '#addDepartment', function () {
  $('.modal-header').html('Add Department');
  $('#modalConfirm').html('Add Department');
  $('#modalConfirm').show();
  $('.modalForm').attr("id","addDepartmentModal");

  $('.modal-body').html(
    `<div class="form-group">
      <label for="email">Name:</label>
      <input type="text" class="form-control" id="name" placeholder="Enter department name" name="name" pattern="[A-Za-z0-9 ]+" required>
    </div>
    <label for="location">Select location</label>
    <select class="form-control" id="location" required>
    </select>`
  );
  locations.forEach(function(location) {
    $('#location').append(`<option value="${location.id}">${location.name}</option>`)
  })

  $('#promoteDemoteButton').hide();
  $('#controlModal').modal('show');
});

$(document).on('submit', '#addDepartmentModal', function () {
  addDepartment();
});

function addDepartment() {
  console.log("Adding department")

  $.ajax({
    url: "libs/php/addDepartment.php",
    type: 'POST',
    dataType: 'json',
    data: {
      name: $('#name').val(),
      location: $('#location').val()
    },
    success: function(result) {
      console.log(result)
      if (result.status.name == "ok") {
        console.log(result.data)
        departments = result.data.departments
        displayDepartments();
        var department = result['data']['department'][0];
        displayDepartment(department.id);
        $('#controlModal').modal('hide');
      }

    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.warn(jqXHR.responseText);
    }
  });
}


$(document).on('click', '#editDepartment', function () {

  var departmentID = $(this).data('id');
  var department = departments.find(x => x.id == departmentID)

  $('.modal-header').html('Edit Department');
  $('#modalConfirm').html('Edit Department');
  $('#modalConfirm').show();
  $('.modalForm').attr("id","editDepartmentModal");

  $('.modal-body').html(
    `<div class="form-group">
      <input type="text" style="display: none" id="id" name="id" value="${department.id}">
      <label for="email">Name:</label>
      <input type="text" class="form-control" id="name" placeholder="Enter department name" name="name" value="${department.name}" pattern="[A-Za-z0-9 ]+" required>
    </div>
    <label for="location">Select location</label>
    <select class="form-control" id="location" required>
    </select>`
  );
  locations.forEach(function(location) {
    $('#location').append(`<option value="${location.id}">${location.name}</option>`)
  })
  $('#location').val(department.locationID).change();

  $('#promoteDemoteButton').hide();
  $('#controlModal').modal('show');
});


$(document).on('submit', '#editDepartmentModal', function () {

  updateDepartment();
});

function updateDepartment() {
  // console.log("Saving employee")

  var departmentID = $('#id').val();

  $.ajax({
    url: "libs/php/updateDepartment.php",
    type: 'POST',
    dataType: 'json',
    data: {
      id: departmentID,
      name: $('#name').val(),
      location: $('#location').val(),
    },
    success: function(result) {

      if (result.status.name == "ok") {
        console.log(result.data)
        departments = result.data.departments
        displayDepartments();
        displayDepartment(departmentID);
        employees = result.data.employees
        displayEmployees();
        hideEmployee();
        $('#controlModal').modal('hide');
      }

    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.warn(jqXHR.responseText);
    }
  });
}


$(document).on('click', '#deleteDepartment', function () {
  var departmentID = $(this).data('id');
  var employeesInLocation = employees.filter(x => x.departmentID == departmentID);
  if (employeesInLocation.length != 0){
    $('.modal-header').html('Cannot Delete Department');
    $('#modalConfirm').hide();

    $('.modal-body').html(
      `Please move or remove employees in this department to delete.`
    );

    $('#promoteDemoteButton').hide();
    $('#controlModal').modal('show');
  }
  else {
    deleteDepartment(departmentID);
  }

});

function deleteDepartment(departmentID) {
  console.log("Deleting department")

  $.ajax({
    url: "libs/php/deleteDepartment.php",
    type: 'POST',
    dataType: 'json',
    data: {
      id: departmentID
    },
    success: function(result) {

      if (result.status.name == "ok") {
        $('#department-selected').html('')
        departments = result.data
        console.log(departments)
        displayDepartments();
        $('#controlModal').modal('hide');
      }

    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.warn(jqXHR.responseText);
    }
  });
}

$(document).on('click', '#addLocation', function () {
  $('.modal-header').html('Add Location');
  $('#modalConfirm').html('Add Location');
  $('#modalConfirm').show();
  $('.modalForm').attr("id","addLocationModal");

  $('.modal-body').html(
    `<div class="form-group">
      <label for="email">Name:</label>
      <input type="text" class="form-control" id="name" placeholder="Enter location name" name="name" pattern="[A-Za-z0-9 ]+" required>
    </div>
    <div class="form-group">
      <label for="email">Short name (max 3 letters, all caps):</label>
      <input type="text" class="form-control" id="shortName" placeholder="Enter short location name" name="shortName" pattern="[A-Z]{1,3}" required>
    </div>`
  );

  $('#promoteDemoteButton').hide();
  $('#controlModal').modal('show');
});

$(document).on('submit', '#addLocationModal', function () {
  addLocation();
});

function addLocation() {
  console.log("Adding location")

  $.ajax({
    url: "libs/php/addLocation.php",
    type: 'POST',
    dataType: 'json',
    data: {
      name: $('#name').val(),
      shortName: $('#shortName').val()
    },
    success: function(result) {
      console.log(result)
      if (result.status.name == "ok") {
        console.log(result.data)
        locations = result.data
        displayLocations();
        $('#controlModal').modal('hide');
      }

    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.warn(jqXHR.responseText);
    }
  });
}

$(document).on('click', '#editLocation', function () {

  var locationID = $(this).data('id');
  var location = locations.find(x => x.id == locationID)

  $('.modal-header').html('Edit Location');
  $('#modalConfirm').html('Edit Location');
  $('#modalConfirm').show();
  $('.modalForm').attr("id","editLocationModal");

  $('.modal-body').html(
    `<div class="form-group">
      <input type="text" style="display: none" id="id" name="id" value="${location.id}">
      <label for="email">Name:</label>
      <input type="text" class="form-control" id="name" placeholder="Enter location name" name="name" value="${location.name}" pattern="[A-Za-z0-9 ]+" required>
    </div>
    <div class="form-group">
      <label for="email">Short name:</label>
      <input type="text" class="form-control" id="shortName" placeholder="Enter short location name" name="shortName" value="${location.shortName}" pattern="[A-Z]{1,3}">
    </div>`
  );

  $('#promoteDemoteButton').hide();
  $('#controlModal').modal('show');
});


$(document).on('submit', '#editLocationModal', function () {

  updateLocation();
});

function updateLocation() {
  // console.log("Saving employee")

  var locationID = $('#id').val();

  $.ajax({
    url: "libs/php/updateLocation.php",
    type: 'POST',
    dataType: 'json',
    data: {
      id: locationID,
      name: $('#name').val(),
      shortName: $('#shortName').val(),
    },
    success: function(result) {

      if (result.status.name == "ok") {
        console.log(result.data)
        locations = result.data.locations
        displayLocations();
        displayLocation(locationID);
        departments = result.data.departments
        displayDepartments();
        hideDepartment();
        employees = result.data.employees
        displayEmployees();
        hideEmployee();
        $('#controlModal').modal('hide');
      }

    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.warn(jqXHR.responseText);
    }
  });
}


$(document).on('click', '#deleteLocation', function () {
  var locationID = $(this).data('id');
  var departmentsInLocation = departments.filter(x => x.locationID == locationID);
  console.log(departmentsInLocation)
  if (departmentsInLocation.length != 0){
    $('.modal-header').html('Cannot Delete Location');
    $('#modalConfirm').hide();
    $('.modalForm').attr("id","addLocationModal");

    $('.modal-body').html(
      `Please move or remove departments in this location to delete.`
    );

    $('#promoteDemoteButton').hide();
    $('#controlModal').modal('show');
  }
  else {
    deleteLocation(locationID);
  }
});

function deleteLocation(locationID) {
  console.log("Deleting Location")

  $.ajax({
    url: "libs/php/deleteLocation.php",
    type: 'POST',
    dataType: 'json',
    data: {
      id: locationID
    },
    success: function(result) {

      if (result.status.name == "ok") {
        locations = result.data
        console.log(locations)
        displayLocations();
        hideLocation();
        $('#controlModal').modal('hide');
      }

    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.warn(jqXHR.responseText);
    }
  });
}

$(document).on('click', '#searchEmployees', function () {

  $('.modal-header').html('Search Employees');
  $('#modalConfirm').hide();
  $('.modalForm').attr("id","");

  $('.modal-body').html(
    `<div class="form-group">
      <label for="email">Search for employee firstname, last name, department or locations:</label>
      <input type="text" class="form-control" id="searchEmployeesInput" placeholder="Search..." name="name">
    </div>`
  );

  $('#promoteDemoteButton').hide();
  $('#controlModal').modal('show');

});

$(document).on('keyup', '#searchEmployeesInput', function () {

  var searchTerm = $('#searchEmployeesInput').val();
  searchEmployees(searchTerm)

});

function searchEmployees(searchTerm) {
  console.log("Searching Employees")

  $.ajax({
    url: "libs/php/searchEmployees.php",
    type: 'POST',
    dataType: 'json',
    data: {
      searchTerm: searchTerm
    },
    success: function(result) {

      if (result.status.name == "ok") {
        employees = result.data
        console.log(locations)
        displayEmployees();
      }

    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.warn(jqXHR.responseText);
    }
  });
}
