const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],  
];

const test = document.querySelectorAll('.cell');
console.log(test);

test[0].addEventListener('click', function(){
    console.log("success!");
})