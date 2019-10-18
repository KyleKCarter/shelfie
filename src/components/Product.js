import React, { Component } from "react";
import axios from "axios";

export default class Product extends Component {
    constructor() {
        super();
        this.state = {
            image: "",
            product: "",
            price: 0,
            editStatus: false
        }
        this.changeEditStatus = this.changeEditStatus.bind(this);
    }

    changeEditStatus() {
        this.setState({ editStatus: !this.state.editStatus});
    }

    updateHandleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    updateProduct = () => {
        const{image, product, price} = this.state;
        axios.put(`/api/product/${this.props.inventory.id}`, {image, product, price})
        .then(response => {
            this.props.inventory(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const{ image, product, price, editStatus} = this.state;
        return (
            <div>
                <h1>Product</h1>
                <div>
                    <img src={this.props.val.img} alt="img" />
                    <h4>Product: {this.props.val.product}</h4>
                    <h5>Price: {this.props.val.price}</h5>
                    <button onClick={this.props.removeProduct}>Remove</button>
                    <button onClick={this.changeEditStatus}>Edit</button>
                {
                        editStatus === true
                    ?
                    (
                        <>
                        <input placeholder='Image URL' onChange={this.updateHandleChange} value={image} name='image' />
                        <input placeholder='Product' onChange={this.updateHandleChange} value={product} name='product' />
                        <input placeholder='Price' onChange={this.updateHandleChange} value={price} name='price' />
                        <button onClick={this.updateProduct}>Update</button>
                        </>
                    )
                    :
                        null
                }
                </div>
            </div>
        )
    }
}