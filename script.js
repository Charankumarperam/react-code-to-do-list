
const res = document.getElementById('input1')
const main = document.getElementById('tasking')

function submit(){

    let white_space = res.value.trim()
    if(!white_space){
        alert('enter value');
        return;
    }

    let divtag = document.createElement('div')
    divtag.id='newtask'

    let ptag = document.createElement('p')
    ptag.innerText=res.value

    let button1 = document.createElement('button')
    button1.innerText='X'
    button1.id='btn-del'
    
    button1.addEventListener('click',function(){
        ptag.remove()
        removeTask(ptag.innerText)
    })
    ptag.append(button1)
    divtag.append(ptag)
    main.append(divtag)
    
    saveTask(res.value)
    
    res.value=''
}

function saveTask(task){
    let tasks;
    if(localStorage.getItem('tasks')){
        tasks=JSON.parse(localStorage.getItem('tasks'))
    }
    else{
        tasks=[]
    }

    tasks.push(task)

    localStorage.setItem('tasks',JSON.stringify(tasks))
}

function removeTask(deltask){
    let tasks;
    if(localStorage.getItem('tasks')){
        tasks=JSON.parse(localStorage.getItem('tasks'))
    }
    else{
        tasks=[]
    }
    const updateTask = tasks.filter(task=> task !== deltask)
    localStorage.setItem('tasks',JSON.stringify(updateTask))
}

function loadTasks(){
    const tasks=JSON.parse(localStorage.getItem('tasks')) || []

    tasks.forEach(task => {

    let divtag = document.createElement('div')
    divtag.id='newtask'

    let ptag = document.createElement('p')
    ptag.innerText=task

    let button1 = document.createElement('button')
    button1.innerText='X'
    button1.id='btn-del'

    button1.addEventListener('click',function(){
        divtag.remove()
        removeTask(task)
    })
    ptag.append(button1)
    divtag.append(ptag)
    main.append(divtag)
    });
}

window.addEventListener('DOMContentLoaded',loadTasks)