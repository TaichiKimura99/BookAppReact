import React from "react"

class Regist extends React.Component{
    render(){
        return(
            <div>
                <h3>書籍登録</h3>
                
                <p>
                    <label htmlFor="title" >Title:</label>
                    <input id ="title" type="text" onChange={(e)=>this.props.inputTitle(e.target.value)}/>
                </p>
                <p>
                    <label htmlFor="title" >Price:</label>
                    <input id ="title" type="number" onChange={(e)=>this.props.inputPrice(e.target.value)}/>
                </p>
                <button onClick={()=>{this.props.addBook(this.props.book)}}>Regist</button>
            </div>
        )
    }
}


// class Regist extends React.Component{
//     constructor(props){
        
//             super(props);
//             this.state={
//                 title:'',
//                 price:'',
//             }
        
//         this.clickRegist = this.clickRegist.bind(this);
//         this.changeTitle = this.changeTitle.bind(this);
//         this.changePrice = this.changePrice.bind(this);
//     }

//     changeTitle(e){
//         this.setState({
//             title: e.target.value
//         })
//     }

//     changePrice(e){
//         this.setState({
//             price: e.target.value
//         })
//     }

//     clickRegist(){
//         const newBook ={
//             title: this.state.title,
//             price: this.state.price
//         }
//         this.props.registBook(newBook);
//     }

//     render(){
//         return(
//             <div>
//                 <h3>書籍登録</h3>
//                 <p>
//                     <label htmlFor="title">Title:</label>
//                     <input id = "title" type="text" value = {this.state.title} onChange={this.changeTitle}/>
//                 </p>
//                 <p>
//                     <label htmlFor="title">Price:</label>
//                     <input id = "title" type="number" value = {this.state.price} onChange={this.changePrice}/>
//                 </p>
//                 <button onClick={this.clickRegist}>Regist</button>
//             </div>
//         );
//     }


// }

export default Regist;
