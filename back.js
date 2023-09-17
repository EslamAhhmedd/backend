const express = require('express');
const app = express();

app.use(express.json());

const todos = [];

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    res.json({ message: 'Todo added successfully', todo: newTodo });
});

app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;
    todos.splice(id, 1);
    res.json({ message: 'Todo deleted successfully' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});