import React, { useState } from "react";
import { useSelector } from "react-redux";
import Addtask from "./Addtask";
import Task from "./Task";

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const [filter, setFilter] = useState(false);
  const handleFilter = () => {
    setFilter(!filter);
  };
  return (
    <div>
      <Addtask handleFilter={handleFilter} />
      <Task
        tasks={filter ? tasks.filter((item) => item.isDone) : tasks}
      />
    </div>
  );
};

export default ListTask;
