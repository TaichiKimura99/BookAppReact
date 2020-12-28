const initialState = {
    book: {
        id: '',
        title: '',
        price: 0,
    },
    books: [
        {
          id: 1,
          title: 'Java Book',
          price: 3000
        },
        {
          id: 2,
          title: 'React Book',
          price: 4000
        },
    ],
    uniqueId: 3,
 }

 //--------
//◆reducer
//--------
//storeの操作（Actionの種類によって操作を切り替える）
//stateで初期値を受け取る
function booksReducer(state=initialState,action){
    //bookオブジェクトを受け取る
    const book = state.book
    switch(action.type){
        case 'INPUT_TITLE':
            // storeに保存したい内容をreturn
            //stateの中身を全てstoreに保存する。
            //ただし、taskだけはaction.payload.task(ユーザーの入力値)
            book.title = action.payload.title
            //ユーザの入力値をbook.titleへ受け取る。
            //状態全体＋入力内容を返す
            return {
                ...state,
                book: book
            };
        case 'INPUT_PRICE':
            book.price = action.payload.price
            return{
                ...state,
                book: book
            };

        case 'ADD_BOOK':
            return{
              ...state,
              books: state.books.concat([action.payload.book]),
              uniqueId: state.uniqueId + 1
            };
      
        case 'DELETE_BOOK':
            return{
                ...state,
                books: state.books.slice(0,-1)
            };
        
      default:
        return state;
    }
}

export default booksReducer;

// export const inputTask =(task)=>({
//     type: 'INPUT_TITLE',
//     payload: {
//       task
//     }
//   });
// //追加のアクション
// export const addTask =(task)=>({
//     type: 'INPUT_PRICE',
//     payload:{
//       task
//     }
//   });
//   //追加のアクション
// export const addTask =(task)=>({
//     type: 'ADD_BOOK',
//     payload:{
//       task
//     }
//   });
//   //追加のアクション
// export const addTask =(task)=>({
//     type: 'DELETE_BOOK',
//     payload:{
//       task
//     }
//   });