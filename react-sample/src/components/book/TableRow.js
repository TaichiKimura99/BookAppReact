function TableRow(props){
    return (
        <tr>
            <td>{props.title}</td>
    <td>{props.price}</td>
            </tr>
    )
}

export default TableRow;