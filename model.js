const db = require("./database/db.js");

const select_cohorts_in_finsbo = db.prepare(/*sql*/ ` 
SELECT
 name 
 FROM cohorts 
 WHERE location = 'Finsbury Park'
`);

function listCohortsInFinsbo() {
  return select_cohorts_in_finsbo.all();
}



const select_students_in_finsbo = db.prepare(/*sql*/ `
SELECT 
students.username
FROM students
JOIN cohorts ON students.cohort_name = cohorts.name
WHERE cohorts.location = 'Finsbury Park'
  -- [2]
`);

function listStudentsInFinsbo() {
  return select_students_in_finsbo.all();
}

const select_students_with_location = db.prepare(/*sql*/ `
  -- [3]
  SELECT 
  cohorts.location, 
  students.username
  FROM students
  JOIN cohorts ON students.cohort_name = cohorts.name
`);

function listStudentsWithLocation() {
  return select_students_with_location.all();
}

const select_students_with_projects = db.prepare(/*sql*/ `
  -- [4]
  SELECT 
  projects.name
  students.username
  FROM projects
  

`);

function listStudentsWithProjects() {
  return select_students_with_projects.all();
}

// const select_students_with_projects_in_finsbo = db.prepare(/*sql*/ `
//   -- [5]
// `);

// function listStudentsWithProjectsInFinsbo() {
//   return select_students_with_projects_in_finsbo.all();
// }

module.exports = {
  listCohortsInFinsbo,
  listStudentsInFinsbo,
  listStudentsWithLocation,
  // listStudentsWithProjects,
  // listStudentsWithProjectsInFinsbo,
};
