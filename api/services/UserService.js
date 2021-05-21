const errors = require('../errors');
const UserRepository = require('../repositories/UserRepository');
const generateError = require('../utils/generateError');

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

    static async getById(id) {
        const item = await UserRepository.getById(id);
        if(!item) {
            return null;
        }
        return item;
    }

    static async update(id, dataToUpdate) {
        const user = await UserRepository.getById(id);
        if(user) {
            const updatedUser = await UserRepository.update(id, dataToUpdate);
            if(!updatedUser) {
                return null;
            }

            return updatedUser;
        }
        else {
            return errors.USERS.notFoundById(id);
        }
        
    }

    delete(id) {
        UserRepository.delete(id);
    }
}

module.exports = UserService;