# elearning-task


# Before you start
Create `tag` collections and insert a some documents
## Sample document
`{name: 'test'}`

# API'S
1. http://localhost:4000/api/v1/course, method: POST -> create course
#### sample body request
`
    "name": "test 3",
    
    "description": "test test 3334444",
    "tagsId": ["ID"]
`
2. http://localhost:4000/api/v1/course, method: GET -> get all courses
3. http://localhost:4000/api/v1/course/:id, method: GET -> get course by id
4. http://localhost:4000/api/v1/course/:id, method: PUT -> update course
#### sample body request
`
    "_id": "ID",
    "name": "test 3",
    "description": "test test 3334444",
    "tagsId": ["ID"]
`
5. http://localhost:4000/api/v1/course/:id, method: DELETE -> delete course

# How you to run
1. `nvm use`
2. `npm i`
3. `npm run start`