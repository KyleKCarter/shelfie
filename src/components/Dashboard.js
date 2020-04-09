import React, { Component } from "react";
import axios from "axios";

//components
import Product from "./Product";

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            inventory: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        this.getInventory()
    }

    getInventory = () => {
        axios.get('/api/inventory')
            .then(response => {
                this.setState({ inventory: response.data })
                console.log(response)
            })
            .catch(error => {
                console.log(error);
            })
    }

    updateInventory = newArr => {
        this.setState({ inventory: newArr })
    }

    removeProduct = () => {
        axios.delete(`/api/product/${this.props.val.id}`)
        .then(response => {
            this.props.inventory(response.data);
            this.props.getInventory();
        })
    }

    render() {
        let mappedProducts = this.state.inventory.map(val => {
            return (
                <Product inventory={this.props.inventory} val={val} updateInventory={this.updateInventory} removeProduct={this.removeProduct}/>
            )
        })
        return (
            <>
                <h1>Home</h1>
                <div>
                    {mappedProducts}
                </div>
            </>
        )
    }
}