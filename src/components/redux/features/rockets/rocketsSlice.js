/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const rocketsUrl = 'https://api.spacexdata.com/v4/rockets';

export const getRocketsAsync = createAsyncThunk(
  'mission/getRockets',
  async () => {
    const resp = await axios.get(rocketsUrl);
    const results = resp.data.map(({
      id, name, flickr_images, description,
    }) => ({
      id, name, flickr_images, description,
    }));
    return results;
  },
);

const rocketsSlice = createSlice({
  name: 'rocket',
  initialState: {
    rockets: [],
  },
  reducers: {
    reserveRocket: (state, actions) => {
      const idToReserve = actions.payload;
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== idToReserve) return rocket;
        return { ...rocket, reserved: true };
      });
      return { ...state, rockets: newState };
    },
    cancelRocketReservation: (state, actions) => {
      const idToReserve = actions.payload;
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== idToReserve) return rocket;
        return { ...rocket, reserved: false };
      });
      return { ...state, rockets: newState };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRocketsAsync.fulfilled, (state, actions) => {
      state.rockets = actions.payload;
    });
  },
});

export const rocketsActions = rocketsSlice.actions;
export default rocketsSlice.reducer;
