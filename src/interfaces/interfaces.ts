export interface Task {
    text: string;
}

export interface TaskState {
    tasks: Task[];
}

export interface ActionTask {
    type: string,
}