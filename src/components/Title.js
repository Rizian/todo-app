import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import { useState, useEffect } from "react";
import { collection, query, orderBy, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

import "../styles/title.css";

function Title() {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All")

  /* function to get all tasks from firestore in realtime */
  useEffect(() => {
    const q = query(collection(db, 'tasks'), orderBy('created', 'desc'));
    onSnapshot(q, (querySnapshot) => {
      setTasks(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }, []);

  return (
    <div className="title">
      <header>Todo App</header>
      <div className="title__container">
        <div className="button__container">
          <button onClick={() => setOpenAddModal(true)}>New Task +</button>
          <button>Show: {filter}
          </button>
        </div>
        <div className="title">
          {tasks.map((task) => (
            <TodoList
              id = {task.id}
              key = {task.key}
              completed = {task.data.completed}
              title = {task.data.title}
              description = {task.data.description}
            />
          ))}
        </div>
      </div>

      {openAddModal && (
        <AddTodo onClose={() => setOpenAddModal(false)} open={openAddModal} />
      )}
    </div>
  );
}

export default Title;
