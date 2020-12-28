import {connect} from 'react-redux';
import Regist from '../../components/book/Regist';
import {inputTitle,inputPrice,addBook,deleteBook} from '../../actions/book/App'

function mapStateToProps({book,uniqueId}){
    return{
        book,
        uniqueId
    }
}

function mapDispatchToProps(dispatch){
    return {
        inputTitle(title){
            dispatch(inputTitle(title));
        },
        inputPrice(Price){
            dispatch(inputPrice(Price));
        },
        addBook(book){
            dispatch(addBook(book));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Regist);