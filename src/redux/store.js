import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import siteSettingsReducer from "./slices/siteSettingsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    siteSettings: siteSettingsReducer,
  }
})
