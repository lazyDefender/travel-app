const UserRepository = require('../repositories/UserRepository');

class UserService {

    static async create(user) {
        const createdUser = await UserRepository.create(user);

        return createdUser;
    }

    static async getAll() {
        const users = await UserRepository.getAll();
        if(!users) {
            return [];
        }
        return users;
    }

    getOne(search) {
        const item = UserRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }

    update(id, dataToUpdate) {
        const user = UserRepository.update(id, dataToUpdate);
        if(!user) {
            return null;
        }
        return user;
    }

    delete(id) {
        UserRepository.delete(id);
    }
}

module.exports = UserService;