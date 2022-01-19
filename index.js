let form = document.querySelector('form.row');
let ul = document.querySelector('.task_list');

let htmltemplate = function(todo){
    let li = `
    <li>${todo}<span class="del">x</span></li> 
    `
    ul.innerHTML += li;
}
form.addEventListener('submit',function(e){
    e.preventDefault();
    let todo = form.task.value.trim();

    if(todo.length){
        htmltemplate(todo);
        form.reset();

    }
    // console.log(todo);
})

ul.addEventListener('click', e => {
    if(e.target.classList.contains('del')){
        // console.log('yess');
        e.target.parentElement.remove();

    }
    // console.log(e.target.classList);
})