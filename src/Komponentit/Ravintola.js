import React, {Component} from 'react';
import Arviot from "./Arviot";

class Ravintola extends Component {
    state = {
        id:this.props.ravintola.id,
        nimi: "",
        paikkakunta: "",
        osoite: "",
        tyyppi: "",
        wanted:false,
        arviot: []

    }
    haeArvio =()=> {
            this.setState({arviot:[], wanted:false}
            )

    }


    arviot =()=> {
        var taulu = [];
            this.props.arvostelut.filter(arvio => arvio.ravintola === this.state.id).map(arvio => taulu.push(arvio));
            this.setState({arviot:taulu, wanted:true})};


        muutos = () =>{
            return {
                visibility: this.state.wanted ? 'visible' : 'hidden'
    }}


    render() {
        return (
            <div id="ravintola">
                <div>
                    <h4>{this.props.ravintola.nimi} </h4>
                    <p> Kategoria: {this.props.ravintola.tyyppi}</p>
                    <p className="ravintolantiedot">Osoite: {this.props.ravintola.osoite}, {this.props.ravintola.paikkakunta}
                    <button className="napit" onClick={this.arviot}>Näytä arviot</button>
                    <button className="napit" onClick={this.haeArvio} style={this.muutos()}>Piilota arviot</button></p>
                </div>
                <div style={this.muutos()}>
                <Arviot arviot={this.state.arviot} arvioi={this.props.arvioi} id={this.state.id} totuus={this.arviot}/>
                </div>
                </div>
        );
    }
}

export default Ravintola;