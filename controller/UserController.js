import models from '../models';

const { user } = models;

class PersonController {
  createPerson(req, res) {
    const newPerson = user.build({
      name: req.body.name,
    });
    user.findOne({ where: { name: newPerson.name } }).then((existingPerson) => {
      if (existingPerson) {
        res.status(409).send({
          message: `A user with the name '${req.body.name}' already exists`,
        });
      } else {
        newPerson.save().then((psn) => {
          res.status(201).send({
            id: psn.id,
            Name: psn.name,
            message: 'User created successfully',
          })
        });
      }
    });
  }

  fetchPerson(req, res) {
    user.findOne({ where: { id: req.params.user_id } }).then((psn) => {
      if (psn) {
        res.status(200).send({
          id: psn.id,
          Name: psn.name,
        })
      } else {
        res.status(404).send({
          message: "user not found",
        })
      }
    })
  }

  updatePerson(req, res) {
    user.update({
      name: req.body.name,
    },
      {
        where: { id: req.params.user_id }, returning: true,
      },
    ).then((psn) => {
      const newPerson = psn[1][0];

      if (newPerson) {
        res.status(200).send({
          newPerson,
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

  deletePerson(req, res) {
    user.destroy({ where: { id: req.params.user_id } }).then((psn) => {
      if (psn) {
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

export default new PersonController();