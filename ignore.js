const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher ="MJ";
teachers.splice(3,0,fourthTeacher)
console.log(teachers)

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
const fifthTeacher ="Patrick"
teachers.splice(4,1,fifthTeacher)
console.log(teachers)
// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log(lastTeacher)
console.log(teachers)
// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log(firstTeacher)
console.log(teachers)

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
const newTeacher = "Vanessa"
teachers.push(newTeacher)
console.log(teachers)

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
const newTeacher2 = "Sarah"
teachers.unshift(newTeacher2)
console.log(teachers)

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf("Lewis");
console.log(lewisIndex)
// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty

//devo prima fare una condizione dove se il lenght di teacher è = 0 stampo si e se è > 0 stampo no
let isTeachersEmpty = null
if (teachers.length == 0){
   isTeachersEmpty = true
}
else {
   isTeachersEmpty = false
}
console.log(isTeachersEmpty)
