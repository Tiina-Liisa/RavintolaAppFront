import React, {Component} from 'react';
import Ravintola from "./Ravintola";

class RavintolaList extends Component {
    render() {
        console.dir(this.props.arvostelut)
        return this.props.ravintolat.map((ravintola) =>
        (<Ravintola ravintola={ravintola} key={ravintola.id} arvostelut={this.props.arvostelut}/>)
    );
    }
}

export default RavintolaList;