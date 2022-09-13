import { useState } from 'react'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'


function Tareas({ tarea , handleDelete , index }) {
    
    const [ tachada , setTachada] = useState(false);

    function handleTachada(){
        setTachada(prev => !prev )
    }

    return (
        <div>
           <li className='list-item'>
                <p onClick={()=>handleTachada()} className={tachada ? 'todo done' : 'todo'}>{tarea}</p>
                <DeleteIcon sx={{color:'#9d8189ff'}} fontSize='small' onClick={() => handleDelete(index)}></DeleteIcon>
            </li>
        </div>
    )
}

export default Tareas