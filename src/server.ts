import {
	addTodo,
	clearAll,
	removeTodo,
	completeList,
	uncompletedList,
	todoItems,
} from "./todo_final";

//require the just installed express app
var express = require("express");
//then we call express
var app = express();
//takes us to the root(/) URL
app.get("/", function (req: any, res: any) {
	//when we visit the root URL express will respond with 'Hello World'
	res.send("Hello World!");
});
//the server is listening on port 3000 for connections
app.listen(8080, function () {
	console.log("Server started on port 8080!");
});
