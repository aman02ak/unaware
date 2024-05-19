import Database from "../Common/Database";

export default class LogIn {
    constructor(identifier, identifierType, password) {
        this.dbClient = new Database();
        if (identifierType === "email") this.email = identifier;
        else this.userName = identifier;

        this.identifierType = identifierType;
        this.password = password;
    }

    async getAuthenticate () {
        let isAuthenticated = false;
        if (this.email) {
            isAuthenticated = await this.dbClient.getAuthenticateThroughEmail (this.email, this.password);
        } else if (this.userName) {
            isAuthenticated = await this.dbClient.getAuthenticateThroughUserName (this.userName, this.password);
        }

        return isAuthenticated;
    }
}