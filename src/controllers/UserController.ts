import {User} from '../models/User'

class UserController {

    constructor() {
        this.get = this.get.bind(this);
        this.create = this.create.bind(this);
    }


    public get(req, res) {
        User.find((err, users) => {
            if (err)
                res.send(err);

            res.json(users);
        });
    };

    public create(req, res) {

        let user = new User();      // create a new instance of the User model
        user.email = req.body.email;  // set the users email (comes from the request)

        // save the user and check for errors
        user.save((err) => {
            if (err)
                res.send(err);

            res.json({message: 'User created!'});
        });

    }
}

export default new UserController();