import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);
console.log("from store login", store);

export default store;