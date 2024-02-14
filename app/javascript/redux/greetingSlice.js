// greetingSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const greetingSlice = createSlice({
    name: 'greeting',
    initialState: {
        message: '',
        error: null,
    },
    reducers: {

        fetchRandomGreetingSuccess(state, action) {
            state.message = action.payload;
            state.error = null;
            state.loading = false; // Reset loading state
        },
        fetchRandomGreetingFailure(state, action) {
            state.message = '';
            state.error = action.payload;
            state.loading = false; // Reset loading state

        }
    }
});

export const { fetchRandomGreetingSuccess, fetchRandomGreetingFailure } = greetingSlice.actions;

export const fetchRandomGreeting = () => dispatch => {
    axios.get('/random_greeting')
        .then(response => {
            dispatch(fetchRandomGreetingSuccess(response.data.message));
        })
        .catch(error => {
            dispatch(fetchRandomGreetingFailure(error.message));
        });
};

export default greetingSlice.reducer;
