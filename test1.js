/**
 * Direction:
 * Return a formatted array of sessions with list of classes & students
 * 
 * Expected Result:
 * [
 *  {
 *    session_id: 1,
 *    time: '09:00',
 *    classes: [
 *      {
 *        class_id: 1,
 *        name: 'A',
 *        students: [
 *          { student_id: 1, name: 'Adi' },
 *          { student_id: 1, name: 'Budi' },
 *        ],
 *      },
 *      {
 *        class_id: 2,
 *        name: 'B',
 *        students: [
 *          { student_id: 3, name: 'Bayu' },
 *          { student_id: 4, name: 'Dharma' },
 *        ],
 *      },
 *    ],
 *  },
 *  {
 *    session_id: 2,
 *    time: '10:00',
 *    classes: [
 *      {
 *        class_id: 3,
 *        name: 'C',
 *        students: [
 *          { student_id: 5, name: 'Surya' },
 *          { student_id: 6, name: 'Maha' },
 *        ],
 *      },
 *      {
 *        class_id: 4,
 *        name: 'D',
 *        students: [
 *          { student_id: 7, name: 'Dede' },
 *          { student_id: 8, name: 'Edi' },
 *        ],
 *      },
 *    ],
 *  },
 * ];
 */

const sessions = [
  { session_id: 1, time: '09:00', student: { student_id: 1, name: 'Adi' }, class: { class_id: 1, name: 'A' } },
  { session_id: 2, time: '10:00', student: { student_id: 5, name: 'Surya' }, class: { class_id: 3, name: 'C' } },
  { session_id: 2, time: '10:00', student: { student_id: 8, name: 'Edi' }, class: { class_id: 4, name: 'D' } },
  { session_id: 2, time: '10:00', student: { student_id: 7, name: 'Dede' }, class: { class_id: 4, name: 'D' } },
  { session_id: 1, time: '09:00', student: { student_id: 3, name: 'Bayu' }, class: { class_id: 2, name: 'B' } },
  { session_id: 1, time: '09:00', student: { student_id: 2, name: 'Budi' }, class: { class_id: 1, name: 'A' } },
  { session_id: 1, time: '09:00', student: { student_id: 4, name: 'Dharma' }, class: { class_id: 2, name: 'B' } },
  { session_id: 2, time: '10:00', student: { student_id: 3, name: 'Maha' }, class: { class_id: 3, name: 'C' } },
];

const formattedObject = [];

const sessionCheck = (session_id) => {
  return (formattedObject.filter(session => session.session_id === session_id).length === 0);
};

const classesCheck = (session_id, class_id) => {
  const currentSession = formattedObject.filter(session => session.session_id === session_id)[0];
  const currentClasses = currentSession.classes;

  return (currentClasses.filter(classdata => classdata.class_id === class_id).length === 0);
};

const studentsCheck = (session_id, class_id, student_id) => {
  const currentSession = formattedObject.filter(session => session.session_id === session_id)[0];
  const currentClasses = (currentSession.classes).filter(classData => classData.class_id === class_id)[0];
  const currentStudents = currentClasses.students;

  return {
    searchResult: (currentStudents.filter(student => student.student_id === student_id).length === 0),
    classIndex: (currentSession.classes).findIndex((classData) => classData.class_id === class_id)
  };
};

const result = (sessions) => {
  sessions.forEach((data) => {
    if(sessionCheck(data.session_id)) {
      const newSession = {
        session_id: data.session_id,
        time: data.time,
        classes: []
      }
  
      formattedObject.push(newSession);
    }

    const currentSessionIndex = formattedObject.findIndex((session) => (session.session_id === data.session_id));

    if(classesCheck(data.session_id, data.class.class_id)) {
      const newClass = {
        class_id: data.class.class_id,
        name: data.class.name,
        students: []
      }

      formattedObject[currentSessionIndex].classes.push(newClass);
    }

    const studentData = studentsCheck(data.session_id, data.class.class_id, data.student.student_id);

    if(studentData.searchResult) {
      const newStudent = {
        student_id: data.student.student_id,
        name: data.student.name
      }

      formattedObject[currentSessionIndex].classes[studentData.classIndex].students.push(newStudent);
    }
  });

  return JSON.stringify(formattedObject);
}

console.log(result(sessions));
