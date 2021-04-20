import React from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../redux/action";
import Edittask from "./Edittask";

const Task = ({ tasks }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {tasks.map((item ,index) => ( 
        <div >
          key={index}
          <span id={item.isDone ?"done":""}>{item.action}</span>
          <button id="del"  onClick={() => dispatch(deleteTask(item.id))}>Delete</button>
          <button onClick={() => dispatch(completeTask(item.id))}>
            {item.isDone ? "undo" : "Complete"}
          </button>
          <Edittask oldtask={item} />
        </div>
      ))}
    </div>
  );
};

export default Task;
