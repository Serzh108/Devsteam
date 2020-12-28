import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { photosSlice } from './photosReduser';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
];

const rootReducer = {
  [photosSlice.name]: photosSlice.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});
