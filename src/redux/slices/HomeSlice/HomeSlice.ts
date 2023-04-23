import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

type CounterState = {
    value: number;
    todos: Array<{ id: number; title: string }>;
    isLoading: boolean;
};

const initialState: CounterState = {
    value: 0,
    todos: [],
    isLoading: false,
};

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');

    const data = await response.json();

    return data;
});

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchTodos.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state: RootState) => state.home.value;
export const selectIsLoading = (state: RootState) => state.home.isLoading;
export const selectTodos = (state: RootState) => state.home.todos;

export default counterSlice.reducer;
