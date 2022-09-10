import { useState } from 'react'


function Tareas({ tarea , handleDelete , index }) {
    
    const [ tachada , setTachada] = useState(false);

    function handleTachada(){
        setTachada(prev => !prev )
    }

    return (
        <div>
            <li className='list-item'>
                <p onClick={()=>handleTachada()} className={tachada ? 'todo done' : 'todo'}>{tarea}</p>
                <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
        </div>
    )
}

export default Tareas