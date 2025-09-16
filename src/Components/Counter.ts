import TaskState from "../States/TaskState";

class Counter{
    taskState:TaskState;
    parent:HTMLElement;

    constructor(parent:HTMLElement, taskState:TaskState){
        this.taskState = taskState;
        this.parent = parent;
    }

    /*
        <div>
            <p></p>
            <p></p>
        </div>
    */
    render(){
        let container:HTMLElement = document.createElement('div');
        container.className = "counter_container";

        let label:HTMLElement = document.createElement('p');
        label.className = "counter-title_paragraph";
        label.textContent = "Completed tasks";

        let count:HTMLElement = document.createElement('p');
        count.className = "counter-count_paragraph";
        count.textContent = `${this.taskState.getTaskCompleted()}`;

        container.appendChild(label);
        container.appendChild(count);
        this.parent.appendChild(container);
    }

    update(){
        let count:HTMLElement = document.querySelector(".counter-count_paragraph");
        count.textContent = `${this.taskState.getTaskCompleted()}`;
    }
}

export default Counter;