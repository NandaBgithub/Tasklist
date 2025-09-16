import TaskManager from "../States/TaskManager";
import TaskState from "../States/TaskState";

class Task{
    taskname:string;
    taskManager:TaskManager;
    taskState:TaskState;

    constructor(taskname:string, taskManager:TaskManager, taskState:TaskState){
        this.taskname = taskname;
        this.taskManager = taskManager;
        this.taskState = taskState;
    }

    /*
        <div>
            <p><p>
            <button></button>
        </div>
    */
    render():HTMLElement{
        let container = document.createElement('div');
        container.className = "task_container";

        let paragraph = document.createElement('p');
        paragraph.className = "task_paragraph";
        paragraph.textContent = this.taskname;

        let button = document.createElement('button');
        button.className = "task_button";
        button.textContent = "remove task";
        button.addEventListener('click', (event:Event) => {
            event.preventDefault();
            this.taskState.removeTask(this);
            this.taskState.setTaskCompleted();
            this.taskManager.emit('taskremoved', this.taskState);
        })

        container.appendChild(paragraph);
        container.appendChild(button);

        return container;
    }
}

export default Task;