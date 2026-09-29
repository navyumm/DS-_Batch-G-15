import todos from "../models/todo.model.js";

const createTodo = (req, res) => {
    // const { title } = req.body

    // if(!title){
    //     res.send("title is required")
    // }

try {
        const newTodo = {
            id : todos.length + 1,
            title: req.body.title
        }
    
        todos.push(newTodo);
    
        res.status(201).json({
            message: "Todo created sucessfully",
            data: newTodo
        })
} catch (error) {
    throw error
}

}

const getTodo = (req, res) => {
    res.status(200).json({
        message: "get all todos succesfully",
        data : todos
    })
}


const updateTodo = (req, res) => {}

const deleteTodo = (req, res) => {}

export {
    createTodo,
    getTodo,
    updateTodo,
    deleteTodo
}