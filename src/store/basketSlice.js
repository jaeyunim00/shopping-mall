import { configureStore, createSlice, current } from "@reduxjs/toolkit";

let basket = createSlice({
  name: "basket",
  initialState: [
    { id: 1, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    plus(state, action) {
      let clickedIndex = state.findIndex((i) => i.id == action.payload);
      state[clickedIndex].count += 1;
    },
    addItem(state, action) {
      if (state.findIndex((i) => i.id == action.payload.id)) {
        alert("이미 추가한 상품");
        return;
      } else {
        state.push(action.payload);
      }
    },
  },
});

export let { plus, addItem } = basket.actions;

export default basket;
