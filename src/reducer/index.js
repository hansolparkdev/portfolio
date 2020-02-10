/* eslint-disable import/extensions */
/* eslint-disable prefer-object-spread */
import { combineReducers } from 'redux';
import {
  INCREMENT, DECREMENT, SET_DIFF, VIEW_UPLOAD_BTN, NO_VIEW_UPLOAD_BTN,
} from '../actions/index.jsx';

const counterInitialState = {
  value: 0,
  diff: 2,
};
const viewUploadBtnState = {
  view: true,
};

const viewUpload = (state = viewUploadBtnState, action) => {
  switch (action.type) {
    case VIEW_UPLOAD_BTN:
      return Object.assign({}, state, {
        view: true,
      });
    case NO_VIEW_UPLOAD_BTN:
      return Object.assign({}, state, {
        view: false,
      });
    default:
      return state;
  }
};
const counter = (state = counterInitialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        value: state.value + state.diff,
      });
    case DECREMENT:
      return Object.assign({}, state, {
        value: state.value - state.diff,
      });
    case SET_DIFF:
      return Object.assign({}, state, {
        value: action.diff,
      });
    default:
      return state;
  }
};

const counterApp = combineReducers({
  counter,
  viewUpload,
});

export default counterApp;
