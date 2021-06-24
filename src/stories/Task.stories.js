import React from 'react'


import Task from '../components/Task'


const state = {
    IN: "TASK_INBOX",
    PINNED: "TASK_PINNED",
    ARCHIVED: "TASK_ARCHIVED"
}


export default {
    component: Task,
    title: "Task"
}


const T = args => <Task {...args} />


export const Default = T.bind({})

Default.args = {
    task: {
        id: '1',
        title: 'Test Task',
        state: state.IN,
        updatedAt: new Date(2018, 0, 1, 9, 0)
    }
}

export const Pinned = T.bind({})

Pinned.args = {
    task: {
        ...Default.args.task,
        state: state.PINNED
    }
}

export const Archived = T.bind({})

Archived.args = {
    task: {
        ...Default.args.task,
        state: state.ARCHIVED
    }
}