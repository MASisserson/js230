"use strict";

function getAvailableSchedules(schedules) {
  return schedules.filter((schedule) => !schedule.student_email);
}

function addStaffNames(schedules, staffList) { // creates and returns new object with names added 
  // Iterate through schedules with map
  // Find the staff member from staffList with the same id as that on the schedule and append name
  return schedules.map(schedule => {
    schedule.name = staffList.find(staff => staff.id === schedule.id).name;
  });
}

function getAvailabilities(schedules) { // Returns object with name: count pairs
  return availableSchedules.reduce((availabilities, schedule) => {
    if (availabilities.flat.includes(schedule.staff_name)) {

    }
  }, []);
}

function alertUser(schedules) {
  let request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:3000/api/staff_members');
  request.timeout = 10000;
  request.responseType = 'json';

  request.addEventListener('load', () => {
    const freeSchedules = getAvailableSchedules(schedules); // currently returning `undefined`
    const namedSchedules = addStaffNames(freeSchedules, request.response);
    // console.log(namedSchedules);
    // const availabilities = getAvailabilities(namedSchedules);
    // console.log(availabilities);
    // alertSuccess(availabilities);
  });
  request.addEventListener('timeout', () => alert('The request timed out.'));
  request.addEventListener('error', () => alert('Some error occurred'));

  request.send();
}

function getAvailableSchedules() {
  let request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:3000/api/schedules');
  request.timeout = 10000;
  request.responseType = 'json';

  request.addEventListener('load', () => alertUser(request.response));
  request.addEventListener('timeout', () => alert('The request timed out.'));
  request.addEventListener('error', () => alert('Some error occurred'));

  request.send();
}

getAvailableSchedules();
