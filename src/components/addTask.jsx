import React, { useState } from 'react';
import './addTask.css'
import Button from './Button';
const AddTask = ({ handleTaskAddition }) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }
    
    const handleAddTaskClick = () => {
        if (inputData.length !== 0) {
            handleTaskAddition(inputData)
            setInputData('')
        } 
    }

    return (
            <div className="add-task-container">
                <input onChange={handleInputChange} value={inputData} type="text" className="add-task-input" placeholder="Título da Tarefa"/>
                <div className="button-container">
                    <Button onClick={handleAddTaskClick}>Adicionar</Button>
                </div>
            </div>
     );
}
 
export default AddTask;