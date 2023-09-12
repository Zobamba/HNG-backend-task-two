import models from '../models';

const { user } = models;

class UserController {
  createUser(req, res) {
    const newUser = user.build({
      name: req.body.name,
    });
    user.findOne({ where: { name: newUser.name } }).then((existingUser) => {
      if (existingUser) {
        res.status(409).send({
          message: `A user with the name '${req.body.name}' already exists`,
        });
      } else {
        newUser.save().then((usr) => {
          res.status(201).send({
            id: usr.id,
            Name: usr.name,
            message: 'User created successfully',
          })
        });
      }
    });
  }

  fetchUserByIdParam(req, res) {
    user.findOne({ where: { id: req.params.user_id } }).then((usr) => {
      if (usr) {
        res.status(200).send({
          id: usr.id,
          Name: usr.name,
        })
      } else {
        res.status(404).send({
          message: "user not found",
        })
      }
    })
  }

  fetchUserByName(req, res) {
    const { name } = req.query;

    user.findOne({ where: { name: name} }).then((usr) => {
      if (usr) {
        res.status(200).send({
          id: usr.id,
          Name: usr.name,
        })
      } else {
        res.status(404).send({
          message: "user not found",
        })
      }
    })
  }

  updateUserByIdParam(req, res) {
    user.update({
      name: req.body.name,
    },
      {
        where: { id: req.params.user_id }, returning: true,
      },
    ).then((usr) => {
      const newUser = usr[1][0];

      if (newUser) {
        res.status(200).send({
          newUser,
          message: 'User updated successfully',
        })
      } else {
        res.status(404).send({
          message: "user not found",
        })
      }
    }).catch((error) => {
      if (error.name === 'SequelizeUniqueConstraintError') {
        return res.status(409).send({
          message: `A user with the name '${req.body.name}' already exists`,
        });
      }
    });
  }

  updateUserByName(req, res) {
    const { name } = req.query;

    user.update({
      name: req.body.name,
    },
      {
        where: { name: name}, returning: true,
      },
    ).then((usr) => {
      const newUser = usr[1][0];

      if (newUser) {
        res.status(200).send({
          newUser,
          message: 'User updated successfully',
        })
      } else {
        res.status(404).send({
          message: "user not found",
        })
      }
    }).catch((error) => {
      if (error.name === 'SequelizeUniqueConstraintError') {
        return res.status(409).send({
          message: `A user with the name '${req.body.name}' already exists`,
        });
      }
    });
  }

  deleteUserByIdParam(req, res) {
    user.destroy({ where: { id: req.params.user_id } }).then((usr) => {
      if (usr) {
        res.status(200).send({
          message: "User deleted successfully"
        })
      } else {
        res.status(404).send({
          message: "user not found",
        })
      }
    })
  }

  deleteUserByName(req, res) {
    const { name } = req.query;
    user.destroy({ where: { name: name } }).then((usr) => {
      if (usr) {
        res.status(200).send({
          message: "User deleted successfully"
        })
      } else {
        res.status(404).send({
          message: "user not found",
        })
      }
    })
  }
}

export default new UserController();