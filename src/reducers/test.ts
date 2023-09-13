import { IIncrementAction, INCREMENT } from '../actions/test';

const initialState = 0;

const testReducer = (state = initialState, action: IIncrementAction) => {
  switch (action.type) {
    case INCREMENT: {
      return state + action.payload;
    }
    default:
      return state;
  }
};

export default testReducer;
