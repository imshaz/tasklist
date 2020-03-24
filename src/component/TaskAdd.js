import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
function TaskAdd(props) {
    let history = useHistory();
    const clickHandler = ()=>{

        if(description.length<2 || url.length<5){
            return
        }

        let task = {};
        task.url="";
        task.title="-";
        task.description=description;
        task.url=url
        props.handleAdd(task)
        history.push('/')
    }

    const [description, setDescription] =React.useState('')
    const [url, setUrl]= React.useState('')
    return (
        <div>
            <label htmlFor="description">Task Desciption</label>
            <input type="text" id="description" name="description" onChange={(e)=>{setDescription(e.target.value)}} value={description}/>

            <label htmlFor="url">Avatar URL</label>
            <input type="url" id="url" name="url"  value={url} onChange={(e)=>{setUrl(e.target.value)}}/>
            <button onClick={clickHandler}>Add</button>
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
      handleAdd: (payload) => dispatch({ type: 'ADD', payload:payload}),
    }
  };

  
export default connect(null, mapDispatchToProps)(TaskAdd)