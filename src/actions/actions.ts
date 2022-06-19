import { ADD_TODO } from "../actiontypes/actiontypes"
import { EDIT_TODO } from "../actiontypes/actiontypes"
import { REMOVE_TODO } from "../actiontypes/actiontypes"

export const addTodo = (text: string) => {
    return {
        type: ADD_TODO,
        task: text
    }
}

export const editTodo = (id: number, text: string) => {
    return {
        type: EDIT_TODO,
        id: id,
        task: text
    }
}

export const removeTodo = (id: number) => {
    return {
        type: REMOVE_TODO,
        id: id
    }
}