import React, {useState, useEffect} from 'react'

const DeleteButton = props => {

    const { deleteCallback } = props

    return (
        <button onClick={deleteCallback}>
            Delete
        </button>
    )
}

export default DeleteButton