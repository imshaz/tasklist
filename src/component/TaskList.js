import React, { useState } from 'react'
import TaskItem from './TaskItem'
import {  connect } from 'react-redux';
 function TaskList(props) {

<<<<<<< HEAD
export default function TaskList() {

    const [tasks, setItem] = useState([
        {
            url: "../assets/images/task.jpg",
            title: 'userName 1',
            description: "description 1",
            time: ''
        },
        {
            url: "../assets/images/task.jpg",
            title: 'userName 2',
            description: "description 2",
            time: '10:12'
        },
        {
            url: "../assets/images/task.jpg",
            title: 'userName 3',
            description: "description 3",
            time: ''
        }
    ])
    return (
        <div>
            {

                tasks.map(task => {
=======
    
    console.log(props.items)
    return (
        <div>
            {
                props.items.map(task => {
>>>>>>> 76c63b031da0015bd7af0b58563c2ff2b312e972
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