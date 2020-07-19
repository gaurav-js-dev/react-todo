const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : []


const noteReducerDefaultState = persistedState;

export default ((state = noteReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.note]
        case "DELETE":
            return state.filter((note) => note.id !== action.id)
        default:
            return state

        case "EDIT":
            return state.map((note) => {
                if (note.id === action.id) {
                    return { ...note, ...action.updates }
                } else
                    return note;
            })
    }
})
