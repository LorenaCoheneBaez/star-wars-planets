import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'; //middleware para hacer pedidos asincrónicos
import { dataReducer } from '../reducers/dataReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; //para poder utilizar varios middlewares en el store

const reducers = combineReducers({

  data: dataReducer
});

export const store = createStore(
  reducers,
  composeEnhancers(
   applyMiddleware(thunk))
)