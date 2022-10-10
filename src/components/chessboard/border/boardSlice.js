import { createSlice } from "@reduxjs/toolkit";

// Сгенерирован массив с данными квадратиков где-то на сервере  
const generateSquares = () => {
    const board = [];
    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {
            const squareData = {
                color: '',
                active: false,
                row: i + 1,
                col: j + 1,
                id: (i + 1) + ':' + (j + 1)
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
            colorFigure: row <= 3 ? 'black' : row >= 6 ? 'white' : null,
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
            // Если фигура имеет класс активности, то мы можем переключать его,
            // а остальные не должны его иметь
            for (let figure of state.figures) {
                if (figure.id === action.payload[0]) {
                    figure.active = !figure.active
                } else {
                    figure.active = false
                }
            }
            // Если у фигуры есть состояние active, то у квадратов, на которые она может сделать ход, 
            // тоже должно быть состояние active
            for (let square of state.squares) {
                if (state.figures[action.payload[1]].active) {
                    if (Math.abs(state.figures[action.payload[1]].col - square.col) === 1 && square.color === 'black') {
                        if ((state.figures[action.payload[1]].colorFigure === 'white' && square.row - state.figures[action.payload[1]].row === -1) || (state.figures[action.payload[1]].colorFigure === 'black' && square.row - state.figures[action.payload[1]].row === 1)) {
                            square.active = true
                        }
                    } else {
                        square.active = false
                    }
                } else {
                    square.active = false
                }
                // Если в нашем активном квадрате стоит фигура, мы не можем ходить
                if (square.active && state.figures.some(figure => square.id === figure.id)) {
                    square.active = false
                }
            }
        },

        makeAMove: (state, action) => {
            for (let figure of state.figures) {
                // Реализация ходьбы шашек
                if (figure.active && state.squares[action.payload].active) {
                    figure.id = state.squares[action.payload].id;
                    figure.col = state.squares[action.payload].col;
                    figure.row = state.squares[action.payload].row;
                    figure.active = false
                } else {
                    figure.active = false
                }
            }

            for (let square of state.squares) {
                square.active = false
            }
        }
    }
});

const {actions, reducer} = boardSlice;

export default reducer;
export const {setActiveClass, makeAMove} = actions;