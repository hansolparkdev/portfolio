export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const VIEW_UPLOAD_BTN = 'VIEW_UPLOAD_BTN';
export const NO_VIEW_UPLOAD_BTN = 'NO_VIEW_UPLOAD_BTN';
export const SET_DIFF = 'SET_DIFF';

export function increment() {
  return {
    type: INCREMENT,
  };
}
export function decrement() {
  return {
    type: DECREMENT,
  };
}
export function setDiff(value) {
  return {
    type: SET_DIFF,
    diff: value,
  };
}
export function viewUploadBtn() {
  return {
    type: VIEW_UPLOAD_BTN,
  };
}
export function noViewUploadBtn() {
  return {
    type: NO_VIEW_UPLOAD_BTN,
  };
}
