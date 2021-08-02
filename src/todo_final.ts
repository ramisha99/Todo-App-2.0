type TodoItem = {
	checked: Boolean;
	createdAt: Date; // Class Date as type, it will be the current date when the todo is created
	dueAt: Date; //string to date
	id: number;
	text: string;
};
let todoItems: TodoItem[] = [];
// this array will contain all the todo list items
function listAllTodos() {
	for (const item of todoItems) {
		console.log(item.id + " " + item.text);
	}
	return todoItems;
}

/*
 * This function will create a new todo object based on the
 * text that was entered in the text input, and push it into
 * the `todoItems` array
 */
function addTodo(text: string, dueAtstr: string) {
	let todo = {
		checked: false,
		createdAt: new Date(), //it will be the current date when the todo is created
		dueAt: new Date(dueAtstr), //string to date
		id: Date.now(), //The static Date.now() method returns the number of milliseconds elapsed since January 1, 1970
		text, // key and value both are text
	};

	todoItems.push(todo);
	return todo;
}
//getter
function getTestItems() {
	return todoItems;
}

// list completed task

function completeList() {
	// filter iterate through each item of the array

	const completedItems = todoItems.filter((item) => item.checked === true);
	for (const item of completedItems) {
		console.log(item.id + " " + item.text);
	}
	return completedItems;
}

// mark a do item as done
// find returns an object filter returns an array
function markTodoAsDone(userId: number) {
	for (const item of todoItems) {
		// check if user input matches or not
		if (item.id === userId) {
			item.checked = true;
			// when it matches return this
			return true;
		}
	}
	// after looping through each item then print this
	return false;
}

// list uncompleted todos
function uncompletedList() {
	/*
	 * filter is an array method that returns the position of an element in the array
	 */
	const uncompletedItems = todoItems.filter((item) => item.checked === false);
	for (const item of uncompletedItems) {
		console.log(item.id + " " + item.text);
	}
	return uncompletedItems;
}

// for user to write the text of the item they want to remove since they dont know abou the id
function findTodoByText(text: string) {
	// find the index where the  text that matches the text  inside the array
	const findTodoWithText = todoItems.findIndex(
		(todoInsideArray) => todoInsideArray.text === text
	);
	return todoItems[findTodoWithText]; // return the item not the text itself
}
function findTodoById(id: number) {
	// find the index where the  text that matches the text  inside the array
	const findTodoWithId = todoItems.findIndex(
		(todoInsideArray) => todoInsideArray.id === id
	);
	return todoItems[findTodoWithId]; // return the item not the text itself
}

// remove todo by text

function removeTodoByText(text: string) {
	return removeTodo(findTodoByText(text));
}
// remove todo by user Id
function removeTodoById(id: number) {
	return removeTodo(findTodoById(id)); //returns the return val of removeTodo
}

function removeTodo(itemsToRemove: TodoItem) {
	if (itemsToRemove === undefined) {
		throw new Error("Item is undefined"); //class
	}
	// find the index of the todo with the id you are looking for and return index itself

	const indexOfTodoToDelete = todoItems.findIndex(
		(todoInArray: { id: any }) => todoInArray.id === itemsToRemove.id // can be undefined
	);
	// remove that todo
	todoItems.splice(indexOfTodoToDelete, 1); // delete the todo
	return itemsToRemove;
}

function clearAll() {
	todoItems.length = 0;
}

export {
	addTodo,
	listAllTodos,
	todoItems,
	completeList,
	uncompletedList,
	removeTodo,
	clearAll,
	getTestItems,
	removeTodoByText,
	findTodoByText,
	markTodoAsDone,
	findTodoById,
	removeTodoById,
};
