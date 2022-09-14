import DeleteIcon from '@mui/icons-material/DeleteOutlined'


function Tareas({ tarea , handleDelete , index, handleTachada }) {
    
    const {text, tachada} = tarea

    return (
        <div>
           <li className='list-item'>
                <p onClick={()=>handleTachada(index)} className={tachada ? 'todo done' : 'todo'}>{text}</p>
                <DeleteIcon sx={{color:'#9d8189ff'}} fontSize='small' onClick={() => handleDelete(index)}></DeleteIcon>
            </li>
        </div>
    )
}

export default Tareas