import { useEffect, useState } from "react";
import Task from "../../components/task/Task";
export default function Tasks() {
  const [isAvailable, setIsAvailable] = useState(false);
  const [taskTitle, setTaskTitle] = useState({
    id: 0,
    title: "",
    description: "",
    inProgress: true,
  });
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      setTasks(JSON.parse(localStorage.getItem("tasks") || ""));
    }
  }, []);
  return (
    <div className="p-4 relative">
      <div className="flex justify-between items-center my-4">
        <h1 className="text-3xl font-bold mb-4">Tasks</h1>
        <button
          onClick={() => {
            setIsAvailable(!isAvailable);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Task
        </button>
      </div>

      {isAvailable && (
        <div className="flex flex-col justify-center items-center  duration-500 my-4 bg-gray-200 p-4 absolute top-0 bottom-0 left-0 right-0 h-full w-full">
          <button
            onClick={() => {
              setIsAvailable(!isAvailable);
            }}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
          >
            Close
          </button>
          <input
            type="text"
            placeholder="New task title"
            className="p-2 rounded-md text-black w-1/2"
            onChange={() => {}}
            value={taskTitle.title}
          />
          <br />
          <textarea
            placeholder="Description"
            className="p-2 rounded-md text-black w-1/2 my-2"
            onChange={() => {}}
            value={taskTitle.description}
          ></textarea>
          <button
            onClick={() => {}}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4"
          >
            submit
          </button>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <Task task={task} setTasks={setTasks} />
        ))}
      </div>
    </div>
  );
}
