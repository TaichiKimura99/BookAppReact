import Header from '../common/Header.js';
import Table from './Table.js';
import Regist  from './Regist.js';
import React from 'react'



class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            books:[
            {
              id:1,
              title: 'Java Book',
              price: 3000
            },
            {
              id:2,
              title: 'React Book',
              price: 4000
          
            }
          ],
          uniqueId: 3
        }
        //thisがこのオブジェクトを参照するというように設定する
        //このクラス内で使用されるregistBookメソッドでは、このstateを使うという意味らしい
        //普通に考えて、thisとはこのクラスのstateを参照するが、javascriptではdomから見ているため
        //thisのstateが何かわからないらしい、だから、registBookを使うときは
        //このthisを使うというふうに指定する、では、別のクラスのthisを参照させるときはどうしたらいいのか
        
        //関数を直接別コンポーネントに渡す場合に指定が必要
        //thisはこのインスタンスのthisですよという指定
        this.registBook = this.registBook.bind(this)

    }
    
    registBook(book){
        //今の状態をオブジェクト変数として
        const{
            books,
            uniqueId
        }=this.state;
        // const books = this.state.books;
        // const uniqueId = this.state.uniqueId;

        //booksの配列に要素を追加する。オブジェクトをconcatに入れることで
        //配列の下に追加される。
        const newBooks = books.concat(
            {
                id:uniqueId,
                title: book.title,
                price: book.price
            }
        )
        this.setState({
            books:newBooks,
            uniqueId:uniqueId + 1
        });

    }

    deleteBook(){
        //配列の最後の物を外して、this.state
        this.setState({
            books: this.state.books.slice(0,-1)
        })
    }

    render(){
        return(
            <div>
                <Header admin = {true}/>
                <content className="container">
                    <Table books={this.state.books}/>
                    <Regist registBook={this.registBook}/>
                    <button onClick={this.deleteBook}>Delete</button>
                </content>
            </div>
        )
    }
}

export default ;