import { createSlice } from "@reduxjs/toolkit";

// Сгенерирован массив с данными квадратиков где-то на сервере  
const generateSquares = () => {
    const board = [];
    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {
            const squareData = {
                color: '',
                row: i,
                col: j,
                id: i + ':' + j
            };
            if((i + j) % 2 === 0) {
                squareData.color = 'white';
            } else {
                squareData.color = 'black';
            }
            board.push(squareData);
        };
    };
    return board;
};

// Сгенерирован массив с данными шашек где-то на сервере  
const generateFigures = () => {
    return generateSquares().map(({col, row, id, color}) => {
        const figureData = {
            col, row, id,
            colorFigure: row <= 2 ? 'white' : row >= 5 ? 'black' : null,
            active: false,
        };
        if (color === 'black' && figureData.colorFigure) {
            return figureData;
        };
    })
    .filter(elem => elem !== undefined);
};


const initialState = {
    squares: generateSquares(),
    figures: generateFigures(),
};

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        setActiveClass: (state, action) => {
            for (let figure of state.figures) {
                if (figure.active) {
                    figure.active = false
                }
            }
            state.figures[action.payload].active = !state.figures[action.payload].active;
        }
    }
});

const {actions, reducer} = boardSlice;

export default reducer;
export const {setActiveClass} = actions;