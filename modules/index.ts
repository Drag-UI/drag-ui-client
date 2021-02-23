import { combineReducers } from 'redux';

//* IMPORT_REDUCERS

const rootReducer = combineReducers({});

export type RootStore = ReturnType<typeof rootReducer>;
export default rootReducer;
