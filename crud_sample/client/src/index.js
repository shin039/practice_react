// ----------------------------------------------------------------------------
// Store
// ----------------------------------------------------------------------------
import React           from 'react';
import ReactDOM        from 'react-dom';
import { createStore } from 'redux';
import App             from './components/App';
import rootReducer     from './reducers';

// Store
const store = createStore(rootReducer)
console.log("##-------------------------------------");
console.dir(store);

// Rneder
const render = () => { ReactDOM.render( <App store={store} />, document.getElementById('root')); }

// 状態が変更されたら実行される関数 (Redux)
const unsubscribe = store.subscribe(() => {
  render();
  //console.log(store.getState().form); // debug
})

render()

// DEBUG unsubscribeの中身
console.log("##-------------------------------------");
console.log(unsubscribe);
