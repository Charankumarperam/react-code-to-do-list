
// local storage as, with if-else
    function saveTask(addtask){
        let tasks;
        if(localStorage.getItem('tasks')){
            tasks=JSON.parse(localStorage.getItem('tasks'))
        }
        else{
            tasks=[]
        }
        tasks.push(addtask)
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }

// local storage with ternary operator,
    function saveTask(task){
        const storedTasks = localStorage.getItem('tasks')

        const tasks = storedTasks ? JSON.parse(storedTasks) : []

        tasks.push(task)

        localStorage.setItem('tasks',JSON.stringify(tasks))
    }
// local storage as casuel way,

    function saveTask(task){
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []

    tasks.push(task)

    localStorage.setItem('tasks',JSON.stringify(tasks))
    }