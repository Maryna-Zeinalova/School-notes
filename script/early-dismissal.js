let note = document.querySelector('.note-content');

let date = '18.02.2023';
let time = '11 am';
let teacherGender = 'Mr.';
let teacherName = 'Cooper';
let childGender = 'son';
let childName = 'Leonard Hofstadter';
let reason = "family reasons";
let returning = 'will not';
let parentName = 'Beverly Hofstadter';
let parentGender = 'mother';

note.innerHTML = `
<h2>Early dismissal</h2>
<p>${date}</p>        
<p>Dear ${teacherGender} ${teacherName},</p>
<p>My child, ${childName}, needs to leave early on ${date} due to the ${reason}.</p>
<p>My ${childGender} will be picked up at ${time} and ${returning} be returning to school today.</p>
<p>${parentName} <br>(${parentGender})</p>`