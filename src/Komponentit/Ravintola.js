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
        var taulu = [];{
    //    if (this.state.arviot.length === 0) {
            this.props.arvostelut.filter(arvio => arvio.ravintola === this.state.id).map(arvio => taulu.push(arvio));
            this.setState({arviot:taulu, wanted:true})}};


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
                    <p>Osoite: {this.props.ravintola.osoite}, {this.props.ravintola.paikkakunta}
                    <button onClick={this.arviot}>Näytä arviot</button>
                    <button onClick={this.haeArvio}>Piilota arviot</button></p>
                </div>
                <br/>
                <div style={this.muutos()}>
                <Arviot arviot={this.state.arviot} arvioi={this.props.arvioi} id={this.state.id} totuus={this.arviot}/>
                </div>
                </div>
        );
    }
}

export default Ravintola;