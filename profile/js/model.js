export default class Model {
    constructor() {
        this.userInfo = null;
        this.isAuthorized = null;
        this.initModel();
    }

    initModel() {
        this.userInfo = JSON.parse(localStorage.getItem('KinoRateUser')) ?? {};
        this.isAuthorized = Object.values(JSON.parse(localStorage.getItem('KinoRateUser')) ?? {}).length;
    }
}