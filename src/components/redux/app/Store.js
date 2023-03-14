import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from '../features/missions/missionsSlice';
import rocketsReducer from '../features/rockets/rocketsSlice';

export default configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
  },
});
