import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    boardElemsCreate: [],
    coord: {
        x: null,
        y: null
    }
};

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        boardCreating: (state, action) => {
            state.boardElemsCreate.push(action.payload);
        },
        squareCreating: (state, action) => {
            
        }
    }
});

const {actions, reducer} = boardSlice;

export default reducer;
export const {boardCreating} = actions;