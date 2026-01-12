import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api.js'; // axios instance

export const fetchSiteSettings = createAsyncThunk(
  'siteSettings/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get('/siteSettings');
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const siteSettingsSlice = createSlice({
  name: 'siteSettings',
  initialState: {
    loading: false,
    error: null,
    settings: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSiteSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSiteSettings.fulfilled, (state, action) => {
        state.loading = false;
        state.settings = action.payload;
      })
      .addCase(fetchSiteSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to load site settings';
      });
  },
});

export default siteSettingsSlice.reducer;
