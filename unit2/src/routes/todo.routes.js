import express from "express";
import { 
    createTodo, 
    deleteTodo, 
    getTodo, 
    updateTodo 
} from "../controllers/todo.controller.js";
const router = express.Router();


router.post("/", createTodo);
router.get("/", getTodo);
router.put("/", updateTodo);
router.delete("/", deleteTodo);

export default router;