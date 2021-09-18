import React, {useState} from 'react';
import './App.css';

import InputTask from './components/inputTask';
import TaskList from './components/TaskList';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [inputTask, setInputTask] = useState('');
  console.log(taskList);


  const clearCompleted = () => {
    const clearSelected = taskList.filter(task => task.completed !== true);
    setTaskList(clearSelected);
  }

  // const clearAll = () => setTaskList([]);

  return (
    <div className="App">
      <main className="App-main">
        <h1>Honey-do List</h1>
        <InputTask 
          taskList = {taskList}
          setTaskList = {setTaskList}
          inputTask = {inputTask}
          setInputTask = {setInputTask}

        />

        <TaskList 
          taskList = {taskList}
          setTaskList = {setTaskList}
        />

        <button onClick={clearCompleted}>clear completed</button>
        <button onClick={() => setTaskList([])}>clear all</button>
      </main>
    </div>
  );
}

export default App;
