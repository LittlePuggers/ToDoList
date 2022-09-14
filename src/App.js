import './App.css';
import TextInput from './components/TextInput';
import Tareas from './components/Tareas'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

function App() {
  const [ listaTareas, setListaTareas ] = useState([
    {text: 'Hacer ejercicio', 
    tachada: false},
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

  function handleTachada(index){
    setListaTareas((prev)=>{
      let newArr = [...prev]
      let newObj = newArr[index]
      newArr.splice(index, 1, {...newObj, tachada: !newObj.tachada})
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
          {listaTareas.map(( tarea, index )=>{
            const id = uuid()
            return <Tareas handleTachada={handleTachada} handleDelete={ deleteTask } tarea={tarea} key={id} index={index}></Tareas>
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;