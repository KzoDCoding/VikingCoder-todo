import React from 'react';

function InputTask({taskList, setTaskList, inputTask, setInputTask}){
    
    function handleSubmit(e) {
        e.preventDefault();
    
        const newTask = [
          ...taskList, 
          {
            id: Date.now(),
            taskName: inputTask,
            completed: false
          }
        ]
        setTaskList(newTask);
        setInputTask('');
    }
    return(
        <>
            <form>
                <input 
                    type='text'
                    placeholder='name task here'
                    onChange={(e) => setInputTask(e.target.value)}
                    value={inputTask}
                />
                <button
                    onClick={handleSubmit}
                >submit</button>
            </form>
        </>
    )
}

export default InputTask;