import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/action'

const Addtask = ({handleFilter}) => {
    const dispatch = useDispatch()
    const [action, setTask] = useState('')
    const AddNewTask = () => {
        if (action.trim()) {
            dispatch(addTask({ action: action, isDone: false, id: Math.random() }));
            setTask('')
        }
        else alert('please enter a valid task')

    }
    return (
        <div>
            <h1>List of what we should do</h1>
            <input type='text'
                placeholder='entre a new task'
                value={action}
                onChange={(e) => setTask(e.target.value)} />
            <div>
                <button  onClick={
                    AddNewTask
                }
                >Add</button>
                <button  onClick={handleFilter}>All</button>
                </div>
        </div>
    )
}

export default Addtask
