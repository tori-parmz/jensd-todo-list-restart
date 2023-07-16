import { postTask, putTask, todoServerAPI } from './apiActions.js'

export const updateState = () => {
    return async (dispatch) => {
        let serverState = await todoServerAPI.getTasks()
        dispatch({type: "SET_SERVER_STATE", serverState})
    }
}

export const postNewTask = (title) => {
    return async (dispatch) => {
        let response = await postTask(title)
        if (response.ok) {
            dispatch(updateState())
        }
        let serverState = await todoServerAPI.getTasks()
        dispatch({type: "SET_SERVER_STATE", serverState})
    }
}

export const deleteTask = (id) => {
    return async (dispatch) => {
        let response = await todoServerAPI.deleteTask(id)
        if (response.ok) {
            dispatch({type: 'DELETE_TASK', id: id})
        }
        let serverState = await todoServerAPI.getTasks({
        })
        dispatch({type: "SET_SERVER_STATE", serverState})
    }
}

export const changeTask = (id, title, isCompleted, description) => {
    return async (dispatch) => {
        await putTask(id, title, isCompleted, description)
        dispatch(updateState())
        let serverState = await todoServerAPI.getTasks()
        dispatch({type: "SET_SERVER_STATE", serverState})
    }
}