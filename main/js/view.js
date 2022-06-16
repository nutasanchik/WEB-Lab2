export default class View {
    constructor(model) {
        this.model = model;
        this.form = null;
        this.initView();
    }

    initView() {
        this.initElements();
        this.initListeners();
    }

    initElements() {
        this.form = document.querySelector('form');
    }

    readMore() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("readMore");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }
}