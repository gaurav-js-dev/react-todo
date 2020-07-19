import { v4 as uuidv4 } from 'uuid';

export const addNote = ({ text = "" } = {}) => ({
    type: "ADD",
    note: {
        text,
        id: uuidv4()
    }
})

export const deleteNote = (id) => ({
    type: "DELETE",
    id
})

export const editNote = (id, updates) => ({
    type: "EDIT",
    id,
    updates
})