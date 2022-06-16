export default class Model {
    constructor() {
        this.isAuthorized = false;
    }

    signIn({ email, password }) {
        const user = JSON.parse(localStorage.getItem('KinoRateUser'));
        this.isAuthorized = user?.email === email && user?.password === password;
    }
}