/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const rocketsUrl = 'https://api.spacexdata.com/v4/rockets';

export const getRocketsAsync = createAsyncThunk(
  'mission/getRockets',
  async () => {
    const resp = await axios.get(rocketsUrl);
    const results = resp.data.map(({ id, name, flickr_images }) => ({ id, name, flickr_images }));
    console.log('Hmm: ', results);
    return results;
  },
);

const rocketsSlice = createSlice({
  name: 'rocket',
  initialState: {
    rockets: [],
  },
  reducers: {
    // addProfile: (state, actions) => {
    //   const profileData = actions.payload;
    //   state.rockets.push(missionsData);
    // },
    // cancelProfile: (state, actions) => {
    //   const tempState = state;
    //   const missionToCancel = actions.payload;
    //   tempState.missions = tempState.missions.filter(
    //     (mission) => mission.id !== missionToCancel,
    //   );
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getRocketsAsync.fulfilled, (state, actions) => {
      state.rockets = actions.payload;
    });
  },
});

export const rocketsActions = rocketsSlice.actions;
export default rocketsSlice.reducer;
