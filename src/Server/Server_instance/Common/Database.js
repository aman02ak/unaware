export default class Database {
    constructor () {
        this.accessInstance = fs;
    }

    async getAuthenticateThroughEmail (email, password) {
        return false;
    }

    async getAuthenticateThroughUserName (userName, password) {
        return false;
    }
}