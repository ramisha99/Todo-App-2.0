import {
	addTodo,
	clearAll,
	removeTodo,
	completeList,
	uncompletedList,
	todoItems,
	getUncompletedItems,
} from "./todo_final";

// Runs before each test *
beforeEach(() => {
	clearAll();
});

// Runs after each test
const originalLog = console.log;
afterEach(() => {
	console.log = originalLog;
});

// test for addtodo
test("add a todo item to the list of todoItems", () => {
	addTodo("buy apple", "6/30/21");
	const length = todoItems.length;
	expect(length).toEqual(1); //length of one item that is being newly added
	expect(todoItems[0].text).toEqual("buy apple"); //index[0] since it is a test
});

// test for remove item
test("remove an item", () => {
	todoItems.push(
		{
			text: "berry",
			checked: true,
			id: 1300,
			createdAt: new Date("3/20/2021"),
			dueAt: new Date("4/20/2021"),
		},

		{
			text: "ramisha",
			checked: false,
			id: 1400,
			createdAt: new Date("3/20/2021"),
			dueAt: new Date("4/20/2021"),
		}
	);

	removeTodo(todoItems[0]); // testing if we can remove the 1st item or  not
	expect(todoItems.length).toEqual(1);
	expect(todoItems[0].text).toEqual("ramisha");
});

// test for clearAll todos
test("clearing the todoItems array", () => {
	todoItems.push(
		{
			text: "chocolate",
			checked: true,
			id: 1900,
			createdAt: new Date("3/20/2021"),
			dueAt: new Date("4/20/2021"),
		},
		{
			text: "vnc",
			checked: false,
			id: 1600,
			createdAt: new Date("3/20/2021"),
			dueAt: new Date("4/20/2021"),
		}
	);
	clearAll();

	expect(todoItems.length).toBe(0);
});

// test for Complete List
test("view the completed list of todos", () => {
	//mocking console log
	console.log = jest.fn();

	todoItems.push(
		{
			text: "apple",
			checked: false,
			id: 1500,
			createdAt: new Date("6/20/2021"),
			dueAt: new Date("12/20/2021"),
		},
		{
			text: "dog",
			checked: true,
			id: 1600,
			createdAt: new Date("8/20/2021"),
			dueAt: new Date("11/20/2021"),
		},
		{
			text: "cat",
			checked: false,
			id: 1800,
			createdAt: new Date("10/20/2021"),
			dueAt: new Date("7/20/2021"),
		}
	);

	completeList();
	expect(console.log).toHaveBeenCalledTimes(1);
	let completedItems = completeList();
	expect(completedItems[0].text).toEqual("dog");
});

// test for uncompleted Items list
test("view the uncompleted list of todos", () => {
	console.log = jest.fn();

	todoItems.push(
		{
			text: "mango",
			checked: true,
			id: 1900,
			createdAt: new Date("6/1/2020"),
			dueAt: new Date("12/2/2020"),
		},
		{
			text: "banana",
			checked: false,
			id: 1200,
			createdAt: new Date("2/20/2020"),
			dueAt: new Date("10/20/2020"),
		},
		{
			text: "Lawrence",
			checked: false,
			id: 2000,
			createdAt: new Date("3/20/2020"),
			dueAt: new Date("4/20/2020"),
		}
	);

	uncompletedList();
	expect(console.log).toHaveBeenCalledTimes(2);
	let uncompletedItems = uncompletedList();
	expect(uncompletedItems[1].text).toBe("Lawrence");
	expect(uncompletedItems[0].text).toBe("banana");
});
