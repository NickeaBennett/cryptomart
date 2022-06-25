// this component stores the entire application state for better state management 
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
    // "In Redux, a reducer is a pure function that takes an 
    // action and the previous state of the application and 
    // returns the new state. The action describes what happened 
    // and it is the reducer's job to return the new state based on that action."
    reducer: {},
});