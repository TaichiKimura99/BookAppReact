import "../../css/components/common/common-table.css"
import PropTypes from "prop-types"
import TableRow from "./TableRow.js"

import React from "react"

//クラスとして引数を受け取るためには、thisを使う。
//~extends React.Componentを使う
class Table extends React.Component{
    render(){
        //オブジェクトがなかに入ってる配列を受け取ってtableのrowタグで返す
        //初めのbookは引数の変数名
        const rows = this.props.books.map(book =>
            // <tr>
            //     <td>{book.title}</td>
            //     <td>{book.price}</td>
            // </tr>
            //...bookでオブジェクトをid = {id},price={price}って感じで渡せる
            //オブジェクトをそのままの形で渡すことができる。
            <TableRow {...book} key = {book.id} />
            );
        return(
            <React.Fragment>
            <table>
                <thead>
                    <tr>
                        <th>書籍名</th>
                        <th>価格</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
            <button onClick={this.props.deleteBook}>Delete</button>
            </React.Fragment>

        )
    }
}

Table.propTypes={
    books: PropTypes.arrayOf(
        PropTypes.shape(
            {
                title:PropTypes.string,
                price:PropTypes.number
            }
        )
    )
}

export default Table;