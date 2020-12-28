//actionのインポート
import {inputTitle,inputPrice,addBook,deletebook} from '../../actions/book/App'
import {connect} from 'react-redux'
import AppFunc from '../../components/book/AppFunc'


//storeのstateを引数に受け取る
function mapStateToProps({book,books,uniqueId}){
    return{
        book,
        books,
        uniqueId
    }

}

//アクションを作っても、それだけでは何も起こらない、reducerにむけて通知する
//dispatchを使う。※全てのアクションが送り込まれる　reducerでswitchで振り分ける
function mapDispatchToProps(dispatch){
    return{
        
        inputTitle(title){
            dispatch(inputTitle(title));
        },

        inputPrice(price){
            dispatch(inputPrice(price));
        },
        addBook(book){
            dispatch(addBook(book));
        },
        deletebook(){
            dispatch(deletebook());
        }

    }

}

//
export default connect(mapStateToProps,mapDispatchToProps)(AppFunc)

// export const inputTitle=(task)=>(
//     //引数のタイトルを受け取って、bookに書き込む処理を書く？？？
//     {
//     type: 'INPUT_TITLE',
//     payload: {
//       task
//     }
//   });
// //追加のアクション
// export const inputPrice =(task)=>({
//     type: 'INPUT_PRICE',
//     payload:{
//       task
//     }
//   });
//   //追加のアクション
// export const addBook =(task)=>({
//     type: 'ADD_BOOK',
//     payload:{
//       task
//     }
//   });
//   //追加のアクション
// export const deletebook =(task)=>({
//     type: 'DELETE_BOOK',
//     payload:{
//       task
//     }
//   });