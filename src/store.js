import { configureStore, createSlice } from "@reduxjs/toolkit";


const word = createSlice({
    name: '글자',
    initialState: '나는 글자입니다'
});
const store = configureStore({
    recuder: {}
});

export default store