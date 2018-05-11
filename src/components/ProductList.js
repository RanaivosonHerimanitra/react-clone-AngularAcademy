import React, {Component} from "react"
import '../style.css'
import ProductDetail from "./ProductDetail";
export default class ProductList extends Component {

  

    render() {
        return (
           this.props.products.map( (p)=> ( 
             <div>
                  <ul className="products">
                         <li key={p.name} onClick={()=>this.props.onSelectedProduct(p)}>
                            <span className="name" >
                               {p.name}
                            </span>
                           <span className="description">
                              {p.description}
                          </span>
                          <span className="price">
                              $CAD {p.price}
                          </span>
                        </li>
                  </ul>
                
           </div>
         )
         
           
           )  
        )
    }


}