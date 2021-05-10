import { applyMiddleware, createStore } from 'redux';
import rootReducer from 'redux/reducer';

const localStorageMiddleware = ({ getState }: { getState: () => void }) => {
  return (next: (arg0: any) => any) => (action: any) => {
    const result = next(action);
    localStorage.setItem('applicationState', JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {
  if (localStorage.getItem('applicationState') !== null) {
    return JSON.parse(localStorage.getItem('applicationState') || ''); // re-hydrate the store
  }
};

const middleware = [localStorageMiddleware];
const store = createStore(
  rootReducer,
  reHydrateStore(),
  applyMiddleware(...middleware)
);
export default store;
