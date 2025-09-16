import Task from '../Components/Task';

class TaskState{
    taskList : Array<Task>;
    taskCompleted: number;

    constructor(taskList: Array<Task>, taskCompleted: number){
        this.taskList = taskList;
        this.taskCompleted = taskCompleted
    }

    removeTask(task: Task):void {
        this.taskList = this.taskList.filter(taskToRemove => taskToRemove !== task)
    }

    addTask(task: Task): void{
        this.taskList.push(task);
    }

    setTaskCompleted(): void{
        this.taskCompleted += 1;
    }

    getTaskCompleted(): number{
        return this.taskCompleted;
    }

    getTaskList(): Array<Task>{
        return this.taskList;
    }
}

export default TaskState;