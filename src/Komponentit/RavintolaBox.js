import React, {Component} from 'react';
import RavintolaList from "./RavintolaList";
import {get, haeArviot} from "../Commucator";


class RavintolaBox extends Component {

    state = {
        ravintolat:[],
        arvostelut:[]
    }
    componentDidMount = ()=> {
        get(data => {
            this.setState({ravintolat: data});
        })
        haeArviot(data => {
            this.setState({arvostelut: data});
        });

        }

    render() {

        return (
            <div>
                <RavintolaList ravintolat={this.state.ravintolat} arvostelut={this.state.arvostelut} haeArviot={this.haeArviot}/>

            </div>
        );
    }
}

export default RavintolaBox;