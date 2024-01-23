
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasklist, setTasklist] = useState([]);

  const handleClick = async () => {
    try {
      const result = await axios.post('http://localhost:3000/createtask', { task: task });
      const response = result.data;

      setTasklist(response)
      // setTasklist(prevTasklist => [...prevTasklist, response]);

      setTask('');
    } catch (error) {
      console.log('Error adding task:', error);
    }
  };

  const handleUpdate = async(id)=>{
    try {
          await axios.put('http://localhost:3000/updatetodo',{id:id})
          
      
    } catch (error) {
      console.log('Error updating task:', error)
    }
       
  }

  const handleDelete = async (id) => {
    try {
      const result = await axios.post('http://localhost:3000/deletetodo',{id:id});
      // console.log(result.data)
      getData()
     
    } catch (error) {
      console.log('Error deleting task:', error);
    }
  };
  
 const getData = ()=>{
  axios.get('http://localhost:3000/gettask')
  .then(response => {
    // console.log(response.data)
   
    setTasklist(response.data);
    // console.log(tasklist)
  })
  .catch(error => {
 
    console.error('Error fetching data:', error);
  });
  
 }


  useEffect(() => {
   
    axios.get('http://localhost:3000/gettask')
      .then(response => {
        // console.log(response.data)
       
        setTasklist(response.data);
        // console.log(tasklist)
      })
      .catch(error => {
     
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="heading">Todo List App</h1>
        <div className="todo">
          <div className="add-task">
            <input
              type="text"
              name="task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Add a task"
              className="add-task"
              id="add"
            />
            <button onClick={handleClick}>Add Task</button>
          </div>
          <ul>
            {tasklist.map((item) => (
              <>
              <li key={item._id}>{item.task}</li>
              <button onClick={()=>handleDelete(item._id)}>Delete</button>
              <button onClick={()=>handleUpdate(item._id)}>Update</button>
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
