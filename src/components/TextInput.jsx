export default function TextInput({ handleAddTask }){
    return(
        <div className='text-input'>
            <form onSubmit={ e => handleAddTask(e) }>
                <input type='text' name='newtask'/>
                <button>Add</button>
            </form>
        </div>
    )
}