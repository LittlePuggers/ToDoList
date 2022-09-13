import './App.css';
import TextInput from './components/TextInput';
import Tareas from './components/Tareas'
import { useState } from 'react'

function App() {
  const [ listaTareas, setListaTareas ] = useState([
    'Hacer ejercicio'
  ])
  
  function addTask(task){
    if(task){
      setListaTareas((prev)=>{
        return ([...prev, task])
      })
    }
  }

  function deleteTask(index){
    setListaTareas((prev) => {
      const newArr = [...prev]
      newArr.splice(index,1)
    return newArr
    })
  }

  return (
    <div className="main-container">
      <main>
        <div className='title'>
          What To Do Today?
        </div>
        <TextInput handleAddTask={ addTask }></TextInput>
        <ul>
          {listaTareas.map(( tarea , index)=>{
            return <Tareas handleDelete={ deleteTask } tarea={tarea} key={index} index={index}></Tareas>
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;