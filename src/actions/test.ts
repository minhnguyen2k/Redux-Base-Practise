export const INCREMENT = 'TEST/INCREMENT';

export interface IIncrementAction {
  type: string;
  payload: number;
}

export const increment = (payload: number) => {
  return {
    type: INCREMENT,
    payload,
  };
};
