import { configureStore } from "@reduxjs/toolkit";
import  questionsReducer  from '../redux/question/questionsSlice'
const store = configureStore({
    reducer : {
        question: questionsReducer
    },
});

export default store;