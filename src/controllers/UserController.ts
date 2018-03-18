import {User} from '../models/User'
import {Request, Response} from "express";
import UserRepository from "../repositories/UserRepository";

class UserController {

    constructor() {
        this.get = this.get.bind(this);
        this.list = this.list.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
    }

    get(req: Request, res: Response) {
        UserRepository.findOneOrFail(req.params.user_id)
    }

    list(req: Request, res: Response) {
        User.find((err, users) => {
            if (err)
                res.send(err);

            res.json(users);
        });
    };

    create(req: Request, res: Response) {

        let user = new User();
        user.email = req.body.email;

        // save the user and check for errors
        user.save((err) => {
            if (err)
                res.send(err);

            res.json({data: user});
        });

    }

    update(req: Request, res: Response) {

        // use our user model to find the user we want
        User.findById(req.params.user_id, function (err, user) {

            if (err)
                res.send(err);

            user.email = req.body.email;  // update the users info

            // save the user
            user.save(function (err) {
                if (err)
                    res.send(err);

                res.json({data: user});
            });

        })
    }

    remove(req: Request, res: Response) {
        User.remove({
            _id: req.params.user_id
        }, (err) => {
            if (err)
                res.send(err);

            res.sendStatus(204);
        });
    }
}

export default new UserController();