import Counter from "./Components/Counter";
import Task from "./Components/Task";
import TaskAdder from "./Components/TaskAdder";
import TaskDisplay from "./Components/TaskDisplay";
import TaskManager from "./States/TaskManager";
import TaskState from "./States/TaskState";

let body:HTMLElement = document.querySelector('body');

let taskState:TaskState = new TaskState(new Array<Task>, 0);
let taskManager:TaskManager = new TaskManager();

let counterComponent:Counter = new Counter(body, taskState);
let taskAdderComponent = new TaskAdder(body, taskManager, taskState);
let taskDisplayComponent = new TaskDisplay(body, taskState);

taskManager.subscribe('taskadded', taskDisplayComponent.update.bind(taskDisplayComponent));
taskManager.subscribe('taskremoved', taskDisplayComponent.update.bind(taskDisplayComponent));
taskManager.subscribe('taskremoved', counterComponent.update.bind(counterComponent));

taskAdderComponent.render();
taskDisplayComponent.render();
counterComponent.render();