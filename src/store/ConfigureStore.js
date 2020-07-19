import { createStore } from "redux";
import noteReducer from "../reducer/noteReducer"




export default () => {
    const store = createStore(noteReducer);
    return store;

}
