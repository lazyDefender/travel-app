const { UserRepository } = require('../repositories/userRepository');

class UserService {

    create(user) {
        const {
            email,
            phoneNumber,
        } = user;

        const userWithEmail = UserRepository.getOne({ email });
        if(userWithEmail) throw new Error('User with specified email exists');

        const userWithPhoneNumber = UserRepository.getOne({ phoneNumber });
        if(userWithPhoneNumber) throw new Error('User with specified phone number exists');

        const createdUser = UserRepository.create(user);
        if(!createdUser) {
            return null;
        }
        return createdUser;
    }

    getAll() {
        const users = UserRepository.getAll();
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

module.exports = new UserService();