const errors = require('../errors');
const UserRepository = require('../repositories/UserRepository');

class UserService {

    static async create(user) {
        const createdUser = await UserRepository.create(user);

        return {
            data: createdUser,
            error: null,
        };
    }

    static async getAll() {
        const users = await UserRepository.getAll();
        if(!users) {
            return [];
        }
        return {
            data: users,
            error: null,
        };
    }

    static async getById(id) {
        const user = await UserRepository.getById(id);
        if(!user) {
            return {
                data: null,
                error: errors.USERS.notFoundById(id),
            };
        }
        
        return {
            data: user,
            error: null,
        };
    }

    static async update(id, dataToUpdate) {
        const user = await UserRepository.getById(id);
        if(user) {
            const updatedUser = await UserRepository.update(id, dataToUpdate);
            if(!updatedUser) {
                return null;
            }

            return {
                data: updatedUser,
                error: null,
            };
        }
        else {
            return {
                data: null,
                error: errors.USERS.notFoundById(id),
            }    
        }
        
    }

    static async delete(id) {
        await UserRepository.delete(id);
    }
}

module.exports = UserService;