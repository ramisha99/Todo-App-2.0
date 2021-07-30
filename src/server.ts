import {
	addTodo,
	removeTodo,
	listAllTodos,
	markTodoAsDone,
} from "./todo_final";

// for req.body
const bodyParser = require("body-parser");

// require the just installed express app
const express = require("express");
const path = require("path");
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
app.put("/:id/done", function (req: any, res: any) {
	console.log(typeof req.params.id);
	res.send(markTodoAsDone(parseInt(req.params.id)));
});

// Delete @ /{id} - delete a todo item. Returns the deleted object and the appropriate HTTP status code.
app.delete("/:id", function (req: any, res: any) {
	res.send(removeTodo(req.params.id));
});

// the server is listening on port 8080 for connections
app.listen(8080, function () {
	console.log("Server started on port 8080!");
});
