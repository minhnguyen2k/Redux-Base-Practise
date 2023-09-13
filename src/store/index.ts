import { compose, createStore } from 'redux';
import rootReducer from '../reducers';

const composeEnhancers =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(rootReducer, composeEnhancers());
export type RootState = ReturnType<typeof store.getState>;

export default store;
