import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from '../features/missions/missionsSlice';

export default configureStore({
  reducer: {
    missions: missionsReducer,
  },
});
