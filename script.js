let input = document.getElementById('inp');
let text = document.querySelector('.text');
function Add(){
    if(input.value == ""){
        alert ("Please Enter Task")
    }else{
        let newElement = document.createElement('ul');
        newElement.innerHTML = `${input.value} <i class = "fa-solid fa-trash" ><img src = "./delete.png" width = "30px" alt = ""</i> `;
        text.prepend(newElement);
        input.value == "";
        newElement.querySelector('i').addEventListener('click', remove);
        function remove(){
            newElement.remove();
        }
    }
}
 