import React, { useState } from 'react'
import TaskItem from './TaskItem'
import {  connect } from 'react-redux';
 function TaskList(props) {

    
    console.log(props.items)
    return (
        <div>
            {
                props.items.map(task => {
                    return <TaskItem data={task} />
                })
            }


        </div>
    )
}
const mapStateToProps = state => {
    return {
      items: state
    };
  };

export default connect(mapStateToProps)(TaskList)