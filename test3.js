/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
  { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
];

const result = (data) => {
  data.forEach((session, index) => {
    const keys = Object.keys(session);
    keys.forEach((key) => {
      if(session[key] === null || session[key] === undefined) {
        delete data[index][key];
      }
    });

    const keyClass = Object.keys(session.classes);
    

    keyClass.forEach((key) => {
      if(session.classes[key] === null || session.classes[key] === undefined) {
        delete data[index].classes[key];
      }
    });
  });

  return JSON.stringify(data);
}

console.log(result(data));
