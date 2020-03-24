import React from "react";
import moment from 'moment'
import { connect } from 'react-redux'
import avatar from '../assets/images/task.jpg'


function TaskItem(props) {
    const {  title, description, time, completed } = props.data;

    function handleChange() {
        props.handleUpdate({ data: props.data, index: props.index, time: moment().format('h:mm') })
    }
    
    return (

        <div className="outerwrap-user">
            <div className="innerwrap-user">
                <div className="user-img">
                    <img src={avatar} alt="" />
                </div>
                <div className="user-text">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
                <div className="time">
                    {!completed ? <input type="checkbox" onChange={() => { handleChange() }} /> : <span>{time}</span>}
                    {/* <span>{time}</span> */}
                </div>
            </div>

            </div>
   
  );
}

const mapDispatchToProps = dispatch => {
    return {
                handleUpdate: (payload) => dispatch({ type: 'UPDATE', payload:payload}),
    }
  };


export default connect(null, mapDispatchToProps)(TaskItem)