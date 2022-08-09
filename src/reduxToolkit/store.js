import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./services/serviceSlice";

export const store = configureStore({
  reducer: {
    services: serviceReducer,
  },
});
