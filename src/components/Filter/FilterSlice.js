import { createSlice } from "@reduxjs/toolkit";

const FilterSlice = createSlice({
    name: 'filter',
    initialState: {
        text: '',
    },
    reducers: {
        // {type: 'filter/searchAction'}
        searchAction: (state, action) => {
            state.text = action.payload
        }
    }
});

export default FilterSlice;