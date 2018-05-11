import React, {Component} from "react"

export default class ProductDetail extends Component {
    render () {
        console.log(typeof(this.props.selectedProduct.modifiedDate))
        var mydate = JSON.stringify(this.props.selectedProduct.modifiedDate);

        return(
        
            <div> <h2>{this.props.selectedProduct.name }</h2>
            <h3>{this.props.selectedProduct.description}</h3>
                <p>Price: {this.props.selectedProduct.price }</p>
                <p>Edit price<input onChange={(e)=>this.props.changePrice(this.props.selectedProduct,e.target.value)}/></p>
                <p>Fixed price? {this.props.selectedProduct.fixedPrice}</p>
                <p>Discontinued? <input   /> 
                </p>
                <p>Modified date: {mydate}</p>
             </div>
        )
        
    }
}
