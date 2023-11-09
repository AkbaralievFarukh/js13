const box = document.querySelectorAll('.box');
const checkBox = document.querySelectorAll('.checkbox');
const checkAll = document.querySelector('#checkAll')

box.forEach((box, index) => {
    box.addEventListener('click', () => {
        box.classList.toggle('bg-purple');
        checkBox[index].checked = !checkBox[index].checked
    })
})

checkAll.addEventListener('click', () => {
    if (checkAll.checked) {
        box.forEach((box) => {
            box.classList.add('bg-purple');
        })
        checkBox.forEach((checkBox) => {
            checkBox.checked = true;
        })
    } else {
        box.forEach((box) => {
            box.classList.remove('bg-purple');
        })
        checkBox.forEach((checkBox) => {
            checkBox.checked = false;
        })
    }
})