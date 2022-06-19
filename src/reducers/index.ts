import {  Reducer } from "redux";
import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "../actiontypes/actiontypes";
import { TaskState, ActionTask } from "../interfaces/interfaces";

const initialState = {
    tasks:[]
};

export const rootReducer :Reducer<TaskState, ActionTask> = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                tasks: [...state.tasks, action.task]
            }
        }
        case EDIT_TODO:
            {
                return {
                    ...state,
                    // tasks:[...state.tasks.map(...state,i) => (i = action.id) ? action.task : state.tasks[i]]
                    tasks:[...state.tasks.filter((id:number) => state.tasks.indexOf(id) !== action.id),action.task]
                }
            }
        case REMOVE_TODO:
            {
                return {
                    ...state,
                    tasks:[...state.tasks.filter((id:number) => state.tasks.indexOf(id) !== action.id)]
                }
            }
        default: {
            return state;
        }
    }
}