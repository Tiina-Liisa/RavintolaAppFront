import React, {Component} from 'react';
import Ravintola from "./Ravintola";

class RavintolaList extends Component {
    render() {
        return this.props.ravintolat.map((ravintola) =>
        (<Ravintola ravintola={ravintola} key={ravintola.id} arvostelut={this.props.arvostelut} haeArviot={this.props.haeArviot}/>)
    );
    }
}

export default RavintolaList;