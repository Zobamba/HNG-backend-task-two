# Standard formats for requests and responses for each endpoint

### POST /api

Use this to add a new user

Request Body 
```
{
  "name": "Onah Zoba"
}
```

Response Code
```
201
```

Response Body
```
{
"id": 3,
"Name": "Onah Zoba",
"message": "User successfully created"
}
```

### GET /api/:user_id

Use this to fetch details of a user

Response Code
```
200
```

Response Body
```
{
    "id": 2,
    "Name": "Zoba Onah"
}
```

### PUT /api/:user_id

Use this to modify details of an existing user

Request Body
```
{
  "name": "Mark John"
}
```

Response Code
```
200
```

Response Body 
```
{
  "newPerson": {
        "id": 1,
        "name": "Mark John",
        "createdAt": "2023-09-11T10:23:09.946Z",
        "updatedAt": "2023-09-11T17:15:50.818Z"
    }
    "message": "User updated successfully"
}
```
### DELETE /api/:user_id

Use this to remove a user

Response Code
```
200
```

Response Body
```
{
    "message": "User deleted successfully"
}
```

# Sample Usage

### POST http://localhost:5000/api

Request Body 
```
{
  "name": "Onah Zoba"
}
```

Response Code
```
201
```

Response Body
```
{
"id": 3,
"Name": "Onah Zoba",
"message": "User successfully created"
}
```

### GET http://localhost:5000/api/:user_id

Response Code
```
200
```

Response Body
```
{
    "id": 2,
    "Name": "Zoba Onah"
}
```

### PUT http://localhost:5000/api/:user_id

Request Body
```
{
  "name": "Mark John"
}
```

Response Code
```
200
```

### DELETE http://localhost:5000/api/:user_id

Response Code
```
200
```

Response Body
```
{
    "message": "User deleted successfully"
}
```


# Any known limitations or assumptions made during development

I feel that having more user information would have given some uniqueness to the users.

There was no instruction to add validation that prevents two users from sharing same name. So i assume i am supposed to add that.


# Endpoint Urls

### POST https://hng-backend-task-two-zobamba.onrender.com/api

### GET https://hng-backend-task-two-zobamba.onrender.com/api/user_id

### PUT https://hng-backend-task-two-zobamba.onrender.com/api/user_id

### DELETE https://hng-backend-task-two-zobamba.onrender.com/api/user_id


# Instructions for setting up and deploying the API locally or on a server.

# Installation

Requirements
You need postgres installed and running on your computer.

# Usage

1. git clone git@github.com:Zobamba/HNG-backend-task-two.git
2. cd HNG-backend-task-two
3. npm install
4. npm start
5. set up/create the database
6. run migration(s)