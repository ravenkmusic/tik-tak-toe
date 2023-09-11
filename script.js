const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],  
];

const test = document.querySelectorAll('.cell');
console.log(test);

test[0].addEventListener('click', function(){
    test[0].textContent = "X";
})