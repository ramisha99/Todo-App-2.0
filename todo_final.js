//this array will contain all the todo list items
let todoItems = [];
function listAllTodos() {
	for (var i = 0; i < todoItems.length; i++) {
		console.log(todoItems[i].id + " " + todoItems[i].text);
	}
}

/* This function will create a new todo object based on the
text that was entered in the text input, and push it into
the `todoItems` array*/
function addTodo(text, dueAtstr) {
	let todo = {
		text, //key and value both are text
		checked: false,
		id: Date.now(), //The static Date.now() method returns the number of milliseconds elapsed since January 1, 1970
		createdAt: new Date(), //it will be the current date when the todo is created
		dueAt: new Date(dueAtstr), //string to date
	};

	todoItems.push(todo);
	return todo.id;
}
//getter
function testItems() {
	return todoItems;
}

//list completed task

function completeList() {
	//filter iterate through each item of the array

	let completedItems = todoItems.filter((item) => item.checked === true);
	for (var i = 0; i < completedItems.length; i++) {
		console.log(completedItems[i].id + " " + completedItems[i].text);
	}
}

//list uncompleted todos
function uncompletedList() {
	/// filter is an array method that returns the position of an element
	// in the array

	const uncompletedItems = todoItems.filter((item) => item.checked === false);
	for (var i = 0; i < uncompletedItems.length; i++) {
		console.log(uncompletedItems[i].id + " " + uncompletedItems[i].text);
	}
}
//for user to write the text of the item they want to remove since they dont know abou the id
function findTodoByText(text) {
	// find the text that matches the text  inside the array
	const findTodoWithText = todoItems.findIndex(
		(todoInsideArray) => todoInsideArray.text == text
	);
	return todoItems[findTodoWithText]; //return the item not the text itself
}

//remove todo by text

function removeTodoByText(text) {
	return removeTodo(findTodoByText(text));
}

function removeTodo(itemsToRemove) {
	// find the index of the todo with the id you are looking for
	const indexOfTodoToDelete = todoItems.indexOf(
		(todoInArray) => todoInArray.id === itemsToRemove.id
	);
	// remove that todo
	todoItems.splice(indexOfTodoToDelete, 1); // delete the todo
}

function clearAll() {
	return (todoItems.length = 0);
}

module.exports = {
	addTodo,
	listAllTodos,
	todoItems,
	completeList,
	uncompletedList,
	removeTodo,
	clearAll,
	testItems,
};
