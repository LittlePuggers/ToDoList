import { useState } from 'react'

function Tareas({ tarea , handleDelete , index }) {
    
    const [ tachada , setTachada] = useState('');

    function handleTachada(){
        setTachada(prev => prev ? '' : 'parra')
    }


    return (
        <li className='list-item'><p onClick={handleTachada} className={tachada}>{tarea}</p><button onClick={()=> handleDelete(index)}>Delete</button></li>
    )
}

export default Tareas