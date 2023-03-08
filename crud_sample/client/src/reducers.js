import { combineReducers } from 'redux'
import { 
  CHANGE_NAME, CHANGE_AGE, INITIALIZE_FORM,
  RQ_DATA, RECV_DATA_SUC, RECV_DATA_FAIL
} from './action'

// 初期化状態
const initialState = {
  form      : { name : '', age  : '', },
  characters: {
    isFetching     : false, // サーバーからキャラクターのリストを取ってきている最中かどうか。
    characterArray : [],    // キャラクターのデータを入れるArray
  },
}

// DEBUG
const debugReducer = (state = '', action) => {
  console.log(`# do ${action.type}`)
  console.dir();
  return state;
}

// form
const formReducer = (state = initialState.form, action) => {

  switch (action.type) {
    case CHANGE_NAME     : return { ...state, name  : action.name, } /* actionのnameに入力された名前 */
    case CHANGE_AGE      : return { ...state, age   : action.age, }  /* actionのageに入力された名前  */
    case INITIALIZE_FORM : return initialState.form                  /* 初期状態を返す               */
    default              : return state
  }
}

// character
const characterReducer = (state = initialState.characters, action) => {
  switch (action.type) {
    case RQ_DATA        : return {...state, isFetching : true, };
    case RECV_DATA_SUC  : return {...state, isFetching : false, characterArray: action.characterArray,};
    case RECV_DATA_FAIL : return {...state, isFetching : false,};
    default             : return state
  }
}

// Combine !
const rootReducer = combineReducers({
  debug      : debugReducer,
  form       : formReducer,
  characters : characterReducer,
})

export default rootReducer
