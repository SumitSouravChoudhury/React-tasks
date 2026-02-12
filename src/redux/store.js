import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./slice/counterSlice"
import TextReducer from "./slice/textSlice"

export const store = configureStore({
    reducer: {
        counter: CounterReducer,
        text: TextReducer
    }
})