/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const missionsUrl = 'https://api.spacexdata.com/v3/missions';

export const getMissionsAsync = createAsyncThunk(
  'mission/getmissions',
  async () => {
    const resp = await axios.get(missionsUrl);
    const results = resp.data.map(({ mission_id, mission_name, description }) => ({
      mission_id,
      mission_name,
      description,
    }));
    return results;
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
  },
  reducers: {
    addMission: (state, actions) => {
      const missionsData = actions.payload;
      state.missions.push(missionsData);
    },
    cancelMission: (state, actions) => {
      const tempState = state;
      const missionToCancel = actions.payload;
      tempState.missions = tempState.missions.filter(
        (mission) => mission.id !== missionToCancel,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMissionsAsync.fulfilled, (state, actions) => {
      state.missions = actions.payload;
    });
  },
});

export const missionsActions = missionsSlice.actions;
export default missionsSlice.reducer;
