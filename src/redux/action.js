import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "./actionTypes"
export const addTask=(newTask)=>{
    return{
        type:ADD_TASK,
        payload:newTask,
    }
}

export const deleteTask=(id)=>{

    return{
        type:DELETE_TASK,
        payload:id,
    }
}

export const completeTask=(id)=>{

    return{
        type:COMPLETE_TASK,
        payload:id,
    }
}

export const editTask=(newTask)=>{

    return{
        type:EDIT_TASK,
        payload:newTask,
    }
}
