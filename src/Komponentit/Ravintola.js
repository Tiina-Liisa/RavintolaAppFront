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
            this.setState({arviot:[]})

    }

        arviot =()=>{
        this.props.arvostelut.filter(arvio => arvio.ravintola===this.state.id).map((arvio) =>
    {var taulu = this.state.arviot
        taulu.push(arvio)
        this.setState({arviot:[]}, function() {this.setState({arviot:taulu})})

    })};



   /* nayta =() => {
        if (this.state.arviot === "") {
           ({arviot: this.props.arvostelut})
        } else {
            this.setState({arviot:""})
        }
    }
*/

    render() {
        return (
            <div id="ravintola">
                <div>
                    <h4>{this.props.ravintola.nimi} </h4>
                    <p> Kategoria: {this.props.ravintola.tyyppi}</p>
                    <p>Osoite: {this.props.ravintola.osoite}, {this.props.ravintola.paikkakunta}
                    <button onClick={this.arviot}>Näytä arviot</button>
                    <button onClick={this.haeArvio}> tyhjennä</button></p>
                </div>
                <br/>
                <Arviot arviot={this.state.arviot}/>
                </div>
        );
    }
}

export default Ravintola;