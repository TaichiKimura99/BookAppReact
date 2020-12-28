import React from 'react';
import './index.css';

//import App from './components/book/App'
import booksReducer from './reducers/book/App'
import BookTable from './containers/book/Table'
import BookRegist from './containers/book/Regist'
import Header from './components/common/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import reactDom from 'react-dom';
import logger from 'redux-logger'
import storage from './middlewares/Storage'




const savedState = JSON.parse(localStorage.getItem('state'))

//reducerからデータを取得する
const store = createStore(
    booksReducer,
    savedState ? savedState : booksReducer(undefined,{type:'INIT'}),
    applyMiddleware(logger,storage));


// ReactDOM.render(
//   <Provider store ={store}>
//     <BookRegist/>

//   </Provider>,
//   document.getElementById('root')
// );
reactDom.render(
  <Provider store={store}>
    <Router>
      <Route path = "/" component={Header}/>
      <Route exact path = "/books" component={BookTable}/>
      <Route exact path = "/books/new" component={BookRegist}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

