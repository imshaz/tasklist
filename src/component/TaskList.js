import React, { useState } from 'react'
import TaskItem from './TaskItem'

export default function TaskList() {

    const [item, setItem] = useState([
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

                item.map(task => {
                    return <TaskItem data={task} />
                })
            }


        </div>
    )
}
