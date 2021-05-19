const firebase = require('firebase');
class UserRepository {
    static async create(newUser) {
        const userRes = await firebase
            .firestore()
            .collection('users')
            .add(newUser)


    }
}