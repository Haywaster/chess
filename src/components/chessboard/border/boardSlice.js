import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    squares: [],
    figures: []
};

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        squaresCreating: (state, action) => {
            state.squares = action.payload;
        },
        figuresCreating: (state, action) => {
            state.figures = action.payload;
        }
    }
});

const {actions, reducer} = boardSlice;

export default reducer;
export const {squaresCreating, figuresCreating} = actions;