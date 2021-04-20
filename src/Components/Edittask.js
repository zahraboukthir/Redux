import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/action";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const Edittask = ({ oldtask }) => {
  const dispatch = useDispatch();
  const [taskModified, setTaskModified] = useState(oldtask.action);
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    const editedTask = { ...oldtask, action: taskModified };
    dispatch(editTask(editedTask));
    closeModal();
  };
  return (
    <div>
      <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder="Edit Your Task"
            value={taskModified}
            onChange={(e) => setTaskModified(e.target.value)}
          />
          <button type="submit">confirme</button>
          <button onClick={closeModal}>Close</button>
        </form>
      </Modal>
    </div>
  );
};

export default Edittask;
