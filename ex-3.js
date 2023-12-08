const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];
let TodoTopics = []
function getTodoTopics(todos) {
  // Start coding here
  TodoTopics.push(todos.topic)

}
let Topics= todos.map(getTodoTopics);
console.log(TodoTopics)

/* 
	Output:
	[
		'Doing pre-work',
		'Workout',
		'Playing computer games',
		'Relax',
		'Clean the room'
	]
*/
