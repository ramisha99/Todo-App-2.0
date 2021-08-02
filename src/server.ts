import {
	addTodo,
	listAllTodos,
	markTodoAsDone,
	removeTodoById,
} from "./todo_final";

// require the just installed express app
const express = require("express");

// then we call express
const app = express();
// json express convention
app.use(express.json());

// takes us to the root(/) URL. returns list of todos in JSON format and appropriate HTTP status code.
app.get("/", function (req: any, res: any) {
	res.json(listAllTodos());
});

// - Post @ `/` - adds a todo. Returns the newly added object and appropriate HTTP status code.
app.post("/", function (req: any, res: any) {
	res.json(addTodo(req.body.text, req.body.dueAtstr));
});

// Put @ /{id}/done - marks a todo as done and returns a HTTP status code to indicate success/failure.
// parseInt required as reqest are mostly string
app.put("/:id/done", function (req: any, res: any) {
	let result = markTodoAsDone(parseInt(req.params.id)); //positional so userid wont work
	if (result === true) {
		res.status(200).end(); //chaining//json,send,end goes to client not status
	} else {
		res.status(400).end();
	}
});

// Delete @ /{id} - delete a todo item. Returns the deleted object and the appropriate HTTP status code.
app.delete("/:id", function (req: any, res: any) {
	try {
		res.json(removeTodoById(parseInt(req.params.id)));
		res.status(200).end(); //chaining//json,send,end goes to client not status
	} catch (e) {
		res.status(404).end();
	}
});

// the server is listening on port 8080 for connections
app.listen(8080, function () {
	console.log("Server started on port 8080!");
});
