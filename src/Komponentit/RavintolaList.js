import React, {Component} from 'react';
import Ravintola from "./Ravintola";

class RavintolaList extends Component {
    state= {
        kaupunki:""
    }

    handleClick = ()=> {this.props.haeValitut(this.state)};
    hakuehto = (e) =>{this.setState({kaupunki:e.target.value})};

    render() {
        var ravintolat = this.props.ravintolat.map((ravintola) => {
            return(<Ravintola ravintola={ravintola} key={ravintola.id} arvostelut={this.props.arvostelut} haeArviot={this.props.haeArviot}
            arvioi={this.props.arvioi}/>)});

        return (
            <div>
                <div className="ravintolahaku">
                <input type="text" placeholder="Paikkakunta" size="20"onChange={this.hakuehto}/> <button onClick={this.handleClick}>Hae paikkakunnan mukaan</button>
                    <button onClick={this.props.haeRavintolat}>Hae kaikki</button>
                    {ravintolat}
                </div>

            </div>
    );
    }
}

export default RavintolaList;