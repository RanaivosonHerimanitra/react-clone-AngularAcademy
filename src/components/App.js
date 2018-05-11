import React, {Component} from 'react'
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedProduct: {},
        listProduct:this.getProductData()};
        this.changePrice = this.changePrice.bind(this)
      }
      changePrice (product,newprice) {
          product.price = newprice
          var newlistProduct=this.state.listProduct
          newlistProduct[newlistProduct.findIndex(p => p.name === product.name)] = product;
        
        this.setState({listProduct:newlistProduct})
        console.log(newlistProduct)
      }

    getProductData() {
        return(
            [
            {
                name: 'Trek SSL 2015',
                price: 999.9,
                description: 'Racing bike.',
                discontinued: false,
                fixedPrice: false,
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/angularstore-29f4b.appspot.com/o/products%2Ftrek.jpg?alt=media&token=42e1650e-7ff9-467f-bde7-0423786c94fd',
                modifiedDate: new Date(2016, 12, 8)
            },
            {
                name: 'City XT 2015',
                price: 659.5,
                description: 'City bike.',
                discontinued: true,
                fixedPrice: false,
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/angularstore-29f4b.appspot.com/o/products%2Fcity.jpg?alt=media&token=5a79c5c3-177f-44b3-b99e-fe6be97c4f7a',
                modifiedDate: new Date(2017, 1, 12)
            },
            {
                name: 'Cosmic Cobat 2015',
                price: 499.9,
                description: 'Great bike.',
                discontinued: false,
                fixedPrice: false,
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/angularstore-29f4b.appspot.com/o/products%2Fcosmic-cobat.jpg?alt=media&token=9df1af7a-9b79-4bf6-9b98-9079581fb7d1',
                modifiedDate: new Date(2017, 1, 2)
            },
            {
                name: 'Hero DTB 2016',
                price: 759,
                description: 'Champion\'s bike.',
                discontinued: false,
                fixedPrice: true,
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/angularstore-29f4b.appspot.com/o/products%2Fhero-dtb.jpg?alt=media&token=8cda2f52-2b86-43eb-aa86-2537346e8736',
                modifiedDate: new Date(2017, 1, 24)
            },
            {
                name: 'S-WORKS 2016',
                price: 1299.9,
                description: 'Ultra bike.',
                discontinued: false,
                fixedPrice: false,
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/angularstore-29f4b.appspot.com/o/products%2Fs-works.jpg?alt=media&token=5bf064a9-c8f7-4b47-a113-8825f95934f4',
                modifiedDate: new Date(2017, 1, 19)
            }
        ]
    ) 

    }
    

    
    
    render() {
        return (
            <div>
                <ProductList products={this.state.listProduct}
                  onSelectedProduct={p=>this.setState({selectedProduct:p})}
                 />
                 <ProductDetail changePrice={this.changePrice} 
                                selectedProduct= {this.state.selectedProduct}/>
                
            </div>
        )
    }
}
