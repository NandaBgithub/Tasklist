import TaskState from "../States/TaskState";
import Task from "./Task";

class TaskDisplay {
    taskState:TaskState;
    parent:HTMLElement;
    
    constructor(parent:HTMLElement, taskState:TaskState){
        this.parent = parent;
        this.taskState = taskState;
    }

    /*
        <div>
            ...tasks
        </div>
    */
    update():void{
        // remove all existing elements and re-render them
        let display = document.querySelector(".task-display_container");
        while (display.firstChild){
            display.removeChild(display.firstChild);
        }

        console.log("In TaskDisplay.ts " + this.taskState);
        let tasks:Array<Task> = this.taskState.getTaskList();

        tasks.forEach((task:Task) => {
            let taskElement:HTMLElement = task.render();
            display.appendChild(taskElement);
        })

        this.parent.appendChild(display);
    }

    render(){
        let container = document.createElement('div');
        container.className = "task-display_container";
        this.parent.appendChild(container);
    }

}

export default TaskDisplay;