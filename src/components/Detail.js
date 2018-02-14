import React, { Component } from 'react';

class Detail extends Component {
    constructor() {
        super()

        this.state = {
            purchased: 'Purchased!'
        }
    }

    render() {
        return (
            <div>
                 <div> 
                 { !this.props.productImage ? 
                 null : <div><img className='detailImage' src={ this.props.productImage }/> <br/>
                 <p>${ this.props.productPrice }.00 </p> 
                 <button onClick={ () => this.props.addToCart(this.state.purchased) }>Add to Cart</button> 
                 </div>}
                </div> 

                <div>
                </div>
            </div>
        )
    }


}


export default Detail;