var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
]; 

var currentEnrollment = [ 410, 105, 664, 375 ];


//Função que recebe um id e devolve o aluno
function getStudantById(studentId) {
  return studentRecords.find(function matchId(record) {
    return (record.id == studentId); // ao inves de retornar true ou false, o find devolve o obj
  })
}
/*Arrow version*/ 
var getStudantById = (studentId) => 
  studentRecords.find(
    record => record.id == studentId
  );


// Função que deixa apenas os IDs no array
function deleteNameAndPaid(array) {
  array.forEach( function deleteProps(element) {
    delete element.name
    delete element.paid
  });
  return array
}
// Função que pega records e devolve array com apenas Ids
function catchIds(array) {
  var Ids = []
  array.forEach(
    function catchElementId(element) {
      Ids.push(element.id)
    })
  return Ids
}
//******************************

function printRecords(studentIds) {
  var records = studentIds.map(getStudantById);
  records.sort(function sortByNameAsc(record1, record2) {
    if (record1.name < record2.name) {
      return -1;
    }
    else if (record1.name > record2.name) {
      return 1;
    }
    else {
      return 0
    } 
  });
  records.forEach(function printRecord(record) {
    console.log(`${record.name} (${record.id}): ${record.paid ? 'Paid' : 'Not paid'}`);
  })
}
/*Arrow Version*/ 
var printRecords = (studentIds) =>  {
  studentIds.map(getStudantById)
  .sort((record1, record2) => {
    (record1.name < record2.name) ? -1 : (record1.name < record2.name) ? 1 : 0
  })
  .forEach((record) => 
  console.log(`${record.name} (${record.id}): ${record.paid ? 'Paid' : 'Not paid'}`)
  ); 
}

function paidStudentsToEnroll() {
  var toBeEnrolled = studentRecords.filter(function needsToEnroll(record) {
    return (record.paid && !currentEnrollment.includes(record.id))
  }) 
  .map(function getStudentId(record) {
    return record.id
  });
  return [...toBeEnrolled, ...currentEnrollment]
}
/* Arrow function*/
var paidStudentsToEnroll = () => [
  ...currentEnrollment,
  studentRecords.filter((record) =>
  (record.paid && !currentEnrollment.includes(record.id)) 
  )
  .map((record) => record.id)
]


function remindUnpaid(recordIds) {
  var unpaidIds = recordIds.map(getStudantById)
  .filter(function getUnpaids(record) {
    return (!record.paid)
  })
  return unpaidIds
  }
  /* Arrow function */
  var remindUnpaid = (recordIds) => {
    printRecords(
    recordIds.filter((studentId) => !getStudantById(studentId).paid)
    );
  } 
  
  // con sole.log(printRecords(remindUnpaid(recordIds)))