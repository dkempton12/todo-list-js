// To-do list app built with vanillaJS

// should have an object that stores to-do-list function methods

var todoList = {
	// list
	todos: [],

	// display todos
	displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
    } else {
      console.log('My todos');
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('()', this.todos[i].todoText);
        }
      }
    }
  },

	// addTodos - adding todo objects with text description and completed property
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		todoList.displayTodos();
	},

	// updateTodo - change todos that were previously added
	updateTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
		todoList.displayTodos();
	},

	// deleteTodo - delete todos that have been added
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
		todoList.displayTodos();
	},

	// mark completed todo items
	markCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed; // flipping completed property from false to true
		todoList.displayTodos();
	},

	// toggle all items - off an on
	toggleAll: function() {
		// total todos
		var totalTodos = this.todos.length;
		var completedTodos = 0;
		// determine number of completed todos
		this.todos.forEach(function(todo){
			if (todo.completed === true) {
				completedTodos++;
			}
		});
		// if everything is true, make everything false to toggle off
		this.todos.forEach(function(todo){
			if (totalTodos === completedTodos) {
				todo.completed = false;
			} else {
				todo.completed = true;
			}
		});
		todoList.displayTodos();
	}
};


// should have an object that stores handlers - inputs and buttons
var handlers = {
	addTodo: function() {
		var addTodoTextInput = document.getElementById('addTodoTextInput');
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = '';
	}
};
// should have an object for the view / display of the list 