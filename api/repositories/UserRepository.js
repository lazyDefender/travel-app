const firebase = require('firebase-admin');
const collections = require('../collections');
class UserRepository {
    static async create(newUser) {
        const { id } = await firebase
            .firestore()
            .collection(collections.USERS)
            .add(newUser);

        const user = {
            id,
            ...newUser,
        };

        return user;
    }

    static async getAll() {
        const usersQuerySnapshot = await firebase
            .firestore()
            .collection(collections.USERS)
            .get();
        const users = [];

        usersQuerySnapshot.forEach(userDoc => {
            const user = {
                id: userDoc.id,
                ...userDoc.data(),
            };

            users.push(user);
        });

        return users;
    }
}

module.exports = UserRepository;