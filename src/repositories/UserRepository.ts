import {User} from "../models/User";


class UserRepository {
    findOneOrFail(id: string) {
        User.findById(id, (err, user) => {
            if (err)
                console.error(err.message);
            if (!user) console.error("User not found"); //TODO throw error
            return user;
        });
    }
}

export default new UserRepository();