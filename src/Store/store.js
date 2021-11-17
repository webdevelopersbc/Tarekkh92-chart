import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/RootReducers';
const middleware = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, middleware);
export default store