import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {useState} from 'react'

export default function TextInput({ handleAddTask }){

    const [userInput, setUserInput] = useState('')

    function handleInput() {
        handleAddTask(userInput)
        setUserInput('')
    }

    return(
        <div className='text-input'>
            <div className='form'>
                <input value={userInput} type='text' onChange={(e)=>setUserInput(e.target.value)}/>
                <AddCircleOutlineOutlinedIcon sx={{ color:'#9d8189ff'}}
                 onClick={() => handleInput()}
                />
            </div>
        </div>
    )
}