import React, {Component} from 'react';

class Ravintola extends Component {
    state = {
        id:this.props.ravintola.id,
        nimi: "",
        paikkakunta: "",
        osoite: "",
        tyyppi: "",
        wanted:false
    }
    arvio= this.props.arvostelut;

    nayta =() => {
        this.setState({wanted:!this.state.wanted})
    }

    muutos = () => {
        return {
            visibility: this.state.wanted? 'visible': 'hidden'
        }
    }


    render() {
        console.log(this.props.arvostelut)
        return (
            <div id="ravintola">
                <div>
                <p>
                    {this.props.ravintola.nimi},
                    {this.props.ravintola.paikkakunta}
                    {this.props.arvostelut.id}
                    </p>
                    </div>
                   <button onClick={this.nayta}>Lisätietoja</button>
                <br/>
                    <div style={this.muutos()}></div>

            </div>
        );
    }
}

export default Ravintola;