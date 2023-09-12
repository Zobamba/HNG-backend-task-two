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

Request Param
```
{
  user_id 
}
```

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

Request Param
```
{
  user_id
}
```

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

Request Param
```
{
  user_id
}
```

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

Facebook API is a good sample usage for this API.

Usually to use facebook, one have to register(POST). After keying a few correct data, the user clicks a button to "register"(request) and the registration is processed then the user gets "signed in"(response)

Viewing a profile is an example of a GET request that was implemented on this API. A user clicks on a button to "view profile"(request) and the profile is displayed(response).

A user also have the capacity to "edit profile"(request) by clicking a button after making some changes, then the profile is updated(response).

It is also possible for a user to delete an account by clicking a button(request) and te account will be deleted(response).


# Any known limitations or assumptions made during development

I feel that having more user information would have given some uniqueness to the users.

There was no instruction to add validation that prevents two users from sharing same name. So i assume i am supposed to add that.


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