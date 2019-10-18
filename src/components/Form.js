import React, { Component } from "react";
import axios from "axios";
import {HashRouter, Link} from "react-router-dom";

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            image: "",
            product: "",
            price: 0
        }
        this.handleChangeImage = this.handleChangeImage.bind(this);
    }

    handleChangeImage(e) {
        this.setState({ image: e.target.value });
    }

    handleChangeProduct = e => {
        this.setState({ product: e.target.value });
    }

    handleChangePrice = e => {
        this.setState({ price: e.target.value });
    }

    handleClickAdd = e => {
        const { image, product, price } = this.state;
        e.preventDefault();
        axios.post("/api/product", {
            image,
            product,
            price
        }).then(response => {
            this.props.getInventory();
            console.log(response.data);
            this.handleClickClear();
        }).catch(error => {
            console.log(error)
        })
    }

    handleClickClear = () => {
        this.setState({
            image_url: "",
            product: "",
            price: 0
        })
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Add</h1>
                    <Link className='links' to='/edit/:id'>Edit</Link>
                    <form>
                        <p>Image</p>
                        <input placeholder='URL' onChange={this.handleChangeImage} />
                        <p>Product Name</p>
                        <input onChange={this.handleChangeProduct} />
                        <p>Price</p>
                        <input onChange={this.handleChangePrice} />
                        <div>
                            <button onClick={this.handleClickAdd}>Add</button>
                            <button onClick={this.handleClickClear}>Cancle</button>
                        </div>
                    </form>
                </div>
            </HashRouter>
        )
    }
}