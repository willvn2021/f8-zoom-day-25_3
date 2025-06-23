const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");

tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
        const targetPaneSelector = this.dataset.target;
        const targetPane = $(targetPaneSelector);

        $(".tab-item.active").classList.remove("active");
        $(".tab-pane.active").classList.remove("active");

        this.classList.add("active");
        if (targetPane) targetPane.classList.add("active");
    });
});
