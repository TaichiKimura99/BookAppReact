import PropTypes from 'prop-types'
import '../../css/components/common/Header.css'

function Header(props){
    const admin = props.admin ? '管理者':'';

    return(
        <div className = "common-header">
<h2 classsName = "header-title">本のクロノス堂{admin}</h2>
        </div>
    );
}

Header.propTypes = {
    admin:PropTypes.bool
}

export default Header;

// <Header className = "common-header">
// <h2 classsName = "header-title">本のクロノス堂</h2>
// </Header> 