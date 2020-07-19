import React from "react";
import { editNote, deleteNote } from "../actions/note";
import { connect } from "react-redux";



const ToDoListItem = ({ text, id, dispatch }) => {

    const onChange = (e) => {
        dispatch(editNote(id, { text: e.target.value }))
        console.log(e.target.value.length);
    }


    return (
        <div >
            <input type="checkbox" />
            <input
                className="inputClass"
                onChange={onChange}
                value={text}
            />
            <button
                onClick={(e) => { dispatch(deleteNote(id)) }}  >
                Delete
            </button>
        </div>
    )
}

export default connect()(ToDoListItem);