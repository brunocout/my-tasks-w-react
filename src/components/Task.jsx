import React from 'react';
import { useHistory } from 'react-router-dom';

import './Task.css';


const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
    const history = useHistory()

    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`)
    }

    return (
        <>
            <div className="task-container" style={task.completed ? { borderLeft: '5px solid rebeccapurple', transition: 'ease 0.2s ' } : {}}>
                <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                    <h1>{task.title}</h1>
                </div>
                <div className="buttons-container">
                    <button className="see-task-details-button" onClick={ handleTaskDetailsClick}><i class="fas fa-info"></i></button>
                    <button className="remove-task-button" onClick={() => handleTaskDeletion(task.id)}><i class="far fa-trash-alt"></i></button>
                </div>
            </div>
        </>
    );
}
 
export default Task;