import { User } from "../models/user.model";
import { UpdateOptions } from 'nedb';

import Nedb from 'nedb-async';


const db = new Nedb<User>({
    filename: './db/users.db',
    autoload: true
})

class UserRepository {

    async findAll() {
        return await db.asyncFind({})
    }

    async findOne(_id: String) {
        return await db.asyncFindOne({ _id: _id })
    }

    async insert(user: User) {
        return await db.asyncInsert(user)
    }

    async update(user: User) {
        return await db.asyncUpdate({ _id: user._id }, user)
    }

    async delete(_id: String) {
        return await db.asyncRemove({ _id: _id });
    }
}


export { UserRepository }