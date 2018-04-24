import configureStore from 'redux-mock-store';

const middlewares = []; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

it('should dispatch action', async () => {
  const getState = {};
  const action = { type: 'ADD_TODO' };
  const expectedActions = [action];

  const store = mockStore(getState, expectedActions);
  store.dispatch(action);
});
