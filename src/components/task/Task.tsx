export default function Task({ task, setTasks }: any) {
  return (
    <div className="flex flex-col ">
      <div key={task.id} className="bg-slate-500 p-4 shadow-md rounded-md">
        <div className="flex justify-between">
          <h2>Name: {task.title} </h2>
          <button
           className="bg-red-500 hover:bg-red-700 text-white font-bold p-3 rounded" 
          onClick={() => {
            
          }}>Delete</button>
        </div>
        <div className="flex justify-between">
          <p>Description: {task.description}</p>
        </div>

        <div className="flex justify-between">
          <p>Status: {task.inProgress ? "in progress" : "completed"}</p>
          {task.completed && <p>yes</p>}
          <input
            type="checkbox"
            onChange={() => {
              
            }}
          />
        </div>
        <p>{task.status}</p>
        <p>{task.dueDate}</p>
        <p>{task.priority}</p>
        <p>{task.assignee}</p>
      </div>
    </div>
  );
}
