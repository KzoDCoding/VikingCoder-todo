import React from 'react';

function TaskList({taskList, setTaskList}){

    const toggleCompleted = (clickedTaskId) => {
        const newList = taskList.map((item) => {
          if(item.id === clickedTaskId) {
            return {
              ...item,
              completed: !item.completed
            }
          } else {
            return item
          }
        })
        setTaskList(newList);
      }
    
    
    return(
        <>
        {
          taskList.map(task => {
            return(
              <button 
                key={task.id} 
                onClick={() => toggleCompleted(task.id)}
                className={`task${task.completed === true ? ' completed' : ''}`}
              >{task.taskName}</button>
            )
          })
        }
        </>
    )
}

export default TaskList;