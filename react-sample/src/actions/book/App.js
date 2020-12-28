//---------
//◆アクション
//---------
//storeをどうしたいか。例　追加と入力
//入力のアクション payloadは慣習的な名前
export const inputTitle=(title)=>(
    //引数のタイトルを受け取って、bookに書き込む処理を書く？？？
    {
    type: 'INPUT_TITLE',
    payload: {
      title
    }
  });
//追加のアクション
export const inputPrice =(price)=>({
    type: 'INPUT_PRICE',
    payload:{
      price
    }
  });
  //追加のアクション
export const addBook =(book)=>({
    type: 'ADD_BOOK',
    payload:{
      book
    }
  });
  //追加のアクション
  //ユーザー操作は特にないため、
  export const deleteBook =()=>({
    type: 'DELETE_BOOK',
    // payload:{
    //   task
    // }
  });

//   const inputTask=function(task){
//       return {
//           type:'INPUT_TASK',
//           payload:{
//               task
//           }
//       }
//   }