import React from 'react'

export default function TaskAdd(props) {

    const clickHandler = ()=>{

        if(description.length<2 || url.length<5){
            return
        }


    }

    const [description, setDescription] =React.useState('')
    const [url, setUrl]= React.useState('')
    return (
        <div>


            <label for="description">Task Desciption</label>
            <input type="text" id="description" name="description" value={description}/>

            <label for="url">Avatar URL</label>
            <input type="url" id="url" name="url"  value={url}/>


            <button onClick={clickHandler}>Add</button>
        </div>
    )
}
