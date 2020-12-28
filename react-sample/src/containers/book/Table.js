import {connect} from 'react-redux';
import Table from '../../components/book/Table';
import {deleteBook} from '../../actions/book/App';

function mapStateToProps({books}){
    return{
        books,
    }
}

function mapDispatchToProps(dispatch){
    return{
        deleteBook(){
            dispatch(deleteBook());
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Table);