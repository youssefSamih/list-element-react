export const SAVE_DATA = 'SAVE_DATA';

export function saveData(data: any) {
  return {
    type: SAVE_DATA,
    payload: data,
  };
}
