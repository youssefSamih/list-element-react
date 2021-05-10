import { SAVE_DATA } from 'redux/actions';

const initialState: [] = [];

export default function (
  state = initialState,
  action: { type: any; payload: any }
) {
  const { type, payload } = action;
  switch (type) {
    case SAVE_DATA:
      return payload;
    default:
      return state;
  }
}
