import React from "react";
import { connect } from "react-redux";
import ToDoListItem from "./ToDoListItem"



const ToDoList = (props) => (
    <div>
        {props.notes.map((note) => {
            return <ToDoListItem key={note.id}{...note} />
        })}
    </div>
)


const mapStateToProps = (state) => {
    return {
        notes: state
    }
}

export default connect(mapStateToProps)(ToDoList)