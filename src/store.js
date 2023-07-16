import { configureStore } from "@reduxjs/toolkit";
import { todoServerAPI } from "./apiActions";
export const store = configureStore({
        reducer: (state, action) => {
            switch (action.type) {
                case "SET_SERVER_STATE": {
                    return action.serverState;
                }
                case "SET_IS_COMPLETED": {
                    return [...state].map(el => el.id !== action.id ? el : { ...el, isCompleted: !el.isCompleted })
                }
                case "DELETE_TASK": {
                    return state.filter(el => el.id !== action.id)
                }
                case "ADD_TASK": {
                    return [...state, { id: action.id, isCompleted: false, title: action.title, description: action.description }]
                }
                case "SET_DESCRIPTION": {
                    return [...state].map(el => el.id !== action.id ? el : { ...el, description: action.description });
                }
                default: return state;
            }
        }
    }
)
export const updateState = () => {
    return async (dispatch) => {
        let serverState = await todoServerAPI.getTasks()
        dispatch({ type: "SET_SERVER_STATE", serverState })
    }
}
