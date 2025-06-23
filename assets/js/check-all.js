const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const checkBoxes = $$("#check-all");
const inputMimeTypes = $$("#mimetype");
const counterNumber = $("#selected-counter");

function counterSelector() {
    const selectedCount = Array.from(inputMimeTypes).filter(
        (checkbox) => checkbox.checked
    ).length;
    if (counterNumber) counterNumber.textContent = selectedCount;
    // Kiểm tra nếu danh sách input có 1 cái bỏ check thì Check All cũng phải bỏ check
    const hasCheckAll =
        inputMimeTypes.length > 0 && selectedCount === inputMimeTypes.length;
    checkBoxes.forEach((check) => {
        check.checked = hasCheckAll;
    });
}

checkBoxes.forEach((checkBoxAll) => {
    checkBoxAll.addEventListener("change", function () {
        const isChecked = this.checked;

        inputMimeTypes.forEach((input) => {
            input.checked = isChecked;
        });
        counterSelector();
    });
});

inputMimeTypes.forEach((input) => {
    input.addEventListener("change", counterSelector);
});

counterSelector();
