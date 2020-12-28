import TableRow from './TableRow'
 function appFunc({book, books, uniqueId, inputTitle, inputPrice, addBook, deleteBook}) {
    const rows = books.map(book => 
        <TableRow {...book} key={book.id} />
    );
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            書籍名
                        </th>
                        <th>
                            価格
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
            <div>
                <h3>書籍登録</h3>
                <p>
                    <label htmlFor="title">Title：</label>
                    <input id="title" type="text" onChange={(e) => inputTitle(e.target.value)} />
                </p>
                <p>
                    <label htmlFor="title">Price：</label>
                    <input id="title" type="number" onChange={(e) => inputPrice(e.target.value)} />
                </p>
                <button onClick={() => addBook(book)} >Regist</button>
            </div>
            <button onClick={() => deleteBook()}>Delete</button>
        </div>
    );
 }
 
 export default appFunc;
//------------
//コンポーネント
//------------
//引数はstore
//{store}とかくと、propsの中からstoreだけ抜き出す
// function TodoApp({store}){
// ContainerのmapStateToPropsとmapDispatchToPropsの値を受け取る。
// import TableRow from './TableRow'
// function appFunc({book, books, uniqueId, inputTitle, inputPrice, addBook, deleteBook}) {
//    const rows = books.map(book => 
//        <TableRow {...book} key={book.id} />
//    );
   
//    return (
//        <div>
//            <table>
//                <thead>
//                    <tr>
//                        <th>
//                            書籍名
//                        </th>
//                        <th>
//                            価格
//                        </th>
//                    </tr>
//                </thead>
//                <tbody>
//                    {rows}
//                </tbody>
//            </table>
//            <div>
//                <h3>書籍登録</h3>
//                <p>
//                    <label htmlFor="title">Title：</label>
//                    <input id="title" type="text" onChange={(e) => inputTitle(e.target.value)} />
//                </p>
//                <p>
//                    <label htmlFor="title">Price：</label>
//                    <input id="title" type="number" onChange={(e) => inputPrice(e.target.value)} />
//                </p>
//                <button onClick={() => addBook(book)} >Regist</button>
//            </div>
//            <button onClick={() => deleteBook()}>Delete</button>
//        </div>
//    );
// }

// export default appFunc;