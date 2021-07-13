const test1 = require("./todo_final");
const addTodo = test1.addTodo;
const clearAll = test1.clearAll;
const removeTodo = test1.removeTodo;
const completeList = test1.completeList;
const uncompletedList = test1.uncompletedList;
const todoItems = test1.todoItems;

/* Runs before each test */
beforeEach(() => {
	clearAll();
});

console.log(test1);

///* Runs after each test */
const originalLog = console.log;
afterEach(() => {
	console.log = originalLog;
});

//test for addtodo
test("add a todo item to the list of todoItems", () => {
	addTodo("buy apple", "6/30/21");
	console.log(todoItems);
	expect(todoItems.length).toEqual(1); //length of one item that is being newly added
	expect(todoItems[0].text).toEqual("buy apple"); //index[0] since it is a test
});

//test for remove item
test("remove an item", () => {
	todoItems.push(
		{
			text: "berry",
			checked: true,
			id: 1300,
			createdAt: "3/20/2021",
			dueAt: "4/20/2021",
		},

		{
			text: "ramisha",
			checked: false,
			id: 1400,
			createdAt: "3/20/2021",
			dueAt: "4/20/2021",
		}
	);

	removeTodo(todoItems[0]); //testing if we can remove the 1st item or  not
	console.log(todoItems);
	expect(todoItems.length).toEqual(1);
	expect(todoItems[0].text).toEqual("berry");
});

//test for clearAll todos
test("clearing the todoItems array", () => {
	todoItems.push(
		{
			text: "chocolate",
			checked: true,
			id: 1900,
			createdAt: "3/20/2021",
			dueAt: "4/20/2021",
		},
		{
			text: "vnc",
			checked: false,
			id: 1600,
			createdAt: "3/20/2021",
			dueAt: "4/20/2021",
		}
	);
	clearAll();
	console.log(todoItems);
	expect(todoItems.length).toBe(0);
});

//test for Complete List
test("view the complete list of todos", () => {
	console.log = jest.fn();

	todoItems.push(
		{
			text: "apple",
			checked: true,
			id: 1500,
			createdAt: "6/20/2021",
			dueAt: "12/20/2021",
		},
		{
			text: "dog",
			checked: false,
			id: 1600,
			createdAt: "8/20/2021",
			dueAt: "11/20/2021",
		},
		{
			text: "cat",
			checked: false,
			id: 1800,
			createdAt: "10/20/2021",
			dueAt: "7/20/2021",
		}
	);

	completeList();
	expect(console.log).toHaveBeenCalledTimes(1);
});

//test for uncompleted Items list
test("view the uncomplete list of todos", () => {
	console.log = jest.fn();
	todoItems.push(
		{
			text: "mango",
			checked: true,
			id: 1900,
			createdAt: "6/1/2020",
			dueAt: "12/2/2020",
		},
		{
			text: "banana",
			checked: true,
			id: 1200,
			createdAt: "2/20/2020",
			dueAt: "10/20/2020",
		},
		{
			text: "bangladesh",
			checked: false,
			id: 2000,
			createdAt: "3/20/2020",
			dueAt: "4/20/2020",
		}
	);

	uncompletedList();
	expect(console.log).toHaveBeenCalledTimes(1);
});
