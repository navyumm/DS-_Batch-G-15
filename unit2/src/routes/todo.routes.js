import express from "express";
import { 
    createTodo, 
    deleteTodo, 
    getTodo, 
    getTodoById, 
    updateTodo 
} from "../controllers/todo.controller.js";
const router = express.Router();


router.post("/", createTodo);
router.get("/", getTodo);
router.get("/:id", getTodoById);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;