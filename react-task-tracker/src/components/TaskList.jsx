import React from 'react'
import Task from './Task'

const TaskList = ({tasks, toggleTask, onToggle}) => {
    return (
        <div className="task-list">
            {tasks.map(task => <Task key = {task.id} task ={task} toggleTask = {toggleTask} onToggle = {onToggle}/>)}
        </div>
    )
}

export default TaskList