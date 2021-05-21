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

    static async getById(id) {
        const userDoc = await firebase
            .firestore()
            .collection(collections.USERS)
            .doc(id)
            .get();

        if(userDoc.exists) {
            const user = {
                id: userDoc.id,
                ...userDoc.data(),
            };
    
            return user;
        }

        return null;
    }

    static async update(id, updatedUser) {
        const userRef = firebase
            .firestore()
            .collection(collections.USERS)
            .doc(id);
        await userRef.update(updatedUser);

        const userDoc = await userRef.get();

        const user = {
            id: userDoc.id,
            ...userDoc.data(),
        };

        return user;
    }
}

module.exports = UserRepository;