import { createSlice } from '@reduxjs/toolkit';

export const itemSlice = createSlice({
    name: 'item',
    initialState : {
        selectedCategory: "М`ЯСО"
    },

    reducers: {
       filterCategory: (state, action) => {
        state.selectedCategory = action.payload;
       }
    }
})

export const getSelectedCategory = state => state.item.selectedCategory;
export const {filterCategory} = itemSlice.actions;
export default itemSlice.reducer;