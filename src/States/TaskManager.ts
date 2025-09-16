import TaskState from './TaskState';

type EventCallback = (state: TaskState) => any;

class TaskManager{

    events:{[key: string]: EventCallback[]} = {};

    constructor(){}

    // Returns a unsubscribe function to remove one subscriber
    subscribe(name: string, callback: EventCallback): () => void{
        if (!this.events[name]){
            this.events[name] = [];
        }

        this.events[name].push(callback);

        return () => {
            this.events[name] = this.events[name]
                                .filter(cbToRemove => 
                                        cbToRemove !== callback);
        };
    }

    unsubscribeAll(name: string): void{
        delete this.events[name];
    }

    emit(name: string, state: TaskState): void{
        let subscriberCallbacks = this.events[name];
        if (!subscriberCallbacks){
            console.log("Error in emit");
            return;
        }

        subscriberCallbacks.forEach((callback : EventCallback) => {
            callback(state);
        })
    }
}

export default TaskManager;