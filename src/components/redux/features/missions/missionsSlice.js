import { createSlice } from '@reduxjs/toolkit';

const missionsSlice = createSlice({
  name: 'missions',
  initialState: [
    { mission: 'Project mars', projectDec: 'Travel to mars', id: '123' },
    { mission: 'Project jupter', projectDesc: 'Go to jupter', id: '234' },
  ],
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
});

export const missionsActions = missionsSlice.actions;
export default missionsSlice.reducer;
