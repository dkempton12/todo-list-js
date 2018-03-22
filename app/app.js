// To-do list app built with vanillaJS

// should have an object that stores to-do-list function methods

var todoList = {
	// list
	todos: [],

	// addTodos - adding todo objects with text description and completed property
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
	},

	// updateTodo - change todos that were previously added
	updateTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
	},

	// deleteTodo - delete todos that have been added
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
	},

	// mark completed todo items
	markCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed; // flipping completed property from false to true
	} 
};


// should have an object that stores handlers - inputs and buttons

// should have an object for the view / display of the list 