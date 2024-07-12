import { RootState } from "./../store";
import { createSelector, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
export interface Product {
  id: number;
  name: string;
  price: number;
}
export interface CartItem {
  product: Product;
  qty: number;
}

export interface CartState {
  items: CartItem[];
}
export const initialState: CartState = {
  items: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
  },
});

export default CartSlice.reducer;
export const { addToCart } = CartSlice.actions;

const items = (state: RootState) => state.cart.items;

export const totalItemQtySelector : any = createSelector([items], (items) => {
  console.log("custom selector runned");

  return items.reduce(
    (total: number, curr: CartItem) => (total += curr.qty),
    0,
  );
});

export const totalQtyLimitSelector : any = createSelector(
  [items, (items, limit: number) => limit],
  (items, limit) => {
    const total = items.reduce(
      (total: number, curr: CartItem) => (total += curr.qty),
      0,
    );
    return total > limit;
  },
);