import React from "react";
import { addNote } from "../actions/note";
import ToDoList from "../components/ToDoList";
import { connect } from "react-redux";

class ToDoApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            note: "",
            error: ""
        }
    }


    onSubmit = (e) => {
        e.preventDefault();
        const text = this.state.note;
        const noteText = this.props.notes.map((note) => note.text);

        if (!this.state.note) {
            this.setState(() => ({ error: "Blank item cannot be added" }))
        }

        else if (noteText.includes(this.state.note)) {
            this.setState(() => ({ error: "This item already exists in To Do list" }))
        }

        else {
            this.props.dispatch(addNote({ text }));
            this.setState(() => ({ note: "", error: "" }))
        }
    }

    onInputChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    }

    render() {
        return (
            <div className="main">
                <form onSubmit={this.onSubmit}>
                    <h2>ToDo Task App</h2>
                    {this.state.error && <p className="error">{this.state.error}</p>}
                    <input autoFocus value={this.state.note} className="inputNewItem" onChange={this.onInputChange} placeholder="Add your To do item" />
                    <button>Add Item</button>
                </form>
                <ToDoList />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        notes: state
    }
}

export default connect(mapStateToProps)(ToDoApp);
