import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "../components/Table/tableSlice"

export const store = configureStore({
  reducer: {
    table: tableReducer,
  }
});