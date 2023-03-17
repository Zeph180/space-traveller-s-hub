/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const missionsUrl = 'https://api.spacexdata.com/v3/missions';
export const getMissionsAsync = createAsyncThunk(
  'mission/getMissions',
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
    joinMission: (state, actions) => {
      const missionToJoin = actions.payload;
      const newState = state.missions.map((mission) => {
        if (mission.mission_id !== missionToJoin) return mission;
        return { ...mission, joined: true };
      });
      return { ...state, missions: newState };
    },
    leaveMission: (state, actions) => {
      const missionToLeave = actions.payload;
      const newState = state.missions.map((mission) => {
        if (mission.mission_id !== missionToLeave) return mission;
        return { ...mission, joined: false };
      });
      return { ...state, missions: newState };
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
