export default class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.signInBtn = null;
        this.view.initControllers(this.signIn);
        this.initElements();
    }

    initElements() {
        this.signInBtn = document.querySelector('#sign_in_btn');

        this.signInBtn.addEventListener('click', () => {
            this.view.signIn();
        });
    }

    signIn(credentials) {
        this.model.signIn(credentials);
    }
}