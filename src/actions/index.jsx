export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const VIEW_UPLOAD_BTN = 'VIEW_UPLOAD_BTN';
export const NO_VIEW_UPLOAD_BTN = 'NO_VIEW_UPLOAD_BTN';
export const SET_DIFF = 'SET_DIFF';
export const MOVE_ABOUT = 'MOVE_ABOUT';
export const MOVE_SKILLLS = 'MOVE_SKILLLS';
export const MOVE_PROJECT = 'MOVE_PROJECT';

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

export function moveAbout() {
  return {
    type: MOVE_ABOUT,
  };
}

export function moveSkills() {
  return {
    type: MOVE_SKILLLS,
  };
}

export function moveProject() {
  return {
    type: MOVE_PROJECT,
  };
}
