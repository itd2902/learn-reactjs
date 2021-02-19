const { createSlice } = require('@reduxjs/toolkit');
//set up counterSlice
const counterSilce = createSlice({
   name: 'counter',
   initialState: 0,
   reducers: {
      increase(state) {
         return state + 1;
      },
      decrease(state) {
         return state - 1;
      },
   },
});
const { actions, reducer } = counterSilce;
export const { increase, decrease } = actions;
export default reducer;
