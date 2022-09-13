import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {useState} from 'react'

export default function TextInput({ handleAddTask }){

    const [userInput, setUserInput] = useState('')

    return(
        <div className='text-input'>
            <div className='form'>
                <input type='text' onChange={(e)=>setUserInput(e.target.value)}/>
                <AddCircleOutlineOutlinedIcon sx={{ color:'#9d8189ff'}}
                 onClick={() => handleAddTask(userInput)}
                />
            </div>
        </div>
    )
}