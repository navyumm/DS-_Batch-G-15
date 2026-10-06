import todos from "../models/todo.model.js";

const createTodo = (req, res) => {
  // const { title } = req.body

  // if(!title){
  //     res.send("title is required")
  // }

  try {
    const newTodo = {
      id: todos.length + 1,
      title: req.body.title,
    };

    todos.push(newTodo);

    res.status(201).json({
      message: "Todo created sucessfully",
      data: newTodo,
    });
  } catch (error) {
    throw error;
  }
};

const getTodo = (req, res) => {
  res.status(200).json({
    message: "get all todos succesfully",
    data: todos,
  });
};

// GET single todo
const getTodoById = (req, res) => {
  const id = Number(req.params.id);

  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    return res.status(404).json({
      message: "Todo not found",
    });
  }

  res.json(todo);
};

const updateTodo = (req, res) => {
  const id = Number(req.params.id);

  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    return res.status(404).json({
      message: "Todo not found",
    });
  }

  const { title } = req.body;

  if (title !== undefined) {
    todo.title = title;
  }

  res.json({
    message: "Todo updated successfully",
    todo: todo,
  });
};

const deleteTodo = (req, res) => {
  const id = Number(req.params.id);

  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex === -1) {
    return res.status(404).json({
      message: "Todo not found",
    });
  }

  const deletedTodo = todos.splice(todoIndex, 1);

  res.json({
    message: "Todo deleted successfully",
    todo: deletedTodo[0],
  });
};

export { createTodo, getTodo, getTodoById, updateTodo, deleteTodo };
