import modal from 'reducer/store/modal';
const { combineReducers } = require('redux');

const rootReducer = combineReducers({
    modal
});

export default rootReducer;