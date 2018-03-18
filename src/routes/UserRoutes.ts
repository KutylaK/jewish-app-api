import * as express from 'express';
import UserController from "../controllers/UserController";

let userRouter = express.Router();

let User = require('../models/User');
// on routes that end in /users
// ----------------------------------------------------
userRouter.route('/')

// create a user (accessed at POST http://localhost:8080/api/users)
    .post(UserController.create)
    // get all the users (accessed at GET http://localhost:8080/api/users)
    .get(UserController.get);

// on routes that end in /users/:user_id
// ----------------------------------------------------
userRouter.route('/:user_id')

// get the user with that id (accessed at GET http://localhost:8080/api/users/:user_id)
    .get(function (req, res) {
        User.findById(req.params.user_id, function (err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    })
    // update the user with this id (accessed at PUT http://localhost:8080/api/users/:user_id)
    .put(function (req, res) {

        // use our user model to find the user we want
        User.findById(req.params.user_id, function (err, user) {

            if (err)
                res.send(err);

            user.email = req.body.email;  // update the users info

            // save the user
            user.save(function (err) {
                if (err)
                    res.send(err);

                res.json({message: 'User updated!'});
            });

        })
    })
    // delete the user with this id (accessed at DELETE http://localhost:8080/api/users/:user_id)
    .delete(function (req, res) {
        User.remove({
            _id: req.params.user_id
        }, function (err, user) {
            if (err)
                res.send(err);

            res.json({message: 'Successfully deleted'});
        });
    });

export const UserRouter = userRouter;