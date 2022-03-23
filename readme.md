## EndPoints

# /api/tasks/

GET - get all tasks
POST - create new Task

# /api/tasks/:id

GET - get task by id
PUT - update task by id
DELETE - delete task by id

## Task Schema

content: { type: String, required: true },
date: { type: Date, default: Date.now },
