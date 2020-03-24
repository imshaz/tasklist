import React from 'react'
import TaskItem from './TaskItem'
import {  connect } from 'react-redux';
 function TaskList(props) {


    return (
        <div>
            {
                props.tasks.map((task,index) => {
                    return <TaskItem key={index} data={task} index={index} />
                })
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
      tasks: state
    };
  };

export default connect(mapStateToProps)(TaskList)