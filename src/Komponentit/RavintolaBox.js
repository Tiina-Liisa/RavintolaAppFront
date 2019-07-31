import React, {Component} from 'react';
import RavintolaList from "./RavintolaList";

var arvostelut = [{id: 1, ravintola: 3, arvosana: 4, arvio:"pahaa ruokaa"}]


class RavintolaBox extends Component {
    state = {
        ravintolat:[
            {id: 3,
            nimi: "Veikon Grilli",
            paikkakunta: " Varkaus",
            osoite: "Mäkelänkatu 4",
            tyyppi: "Kasvis"},
            {id: 4,
                nimi: "Veeran Grilli",
                paikkakunta: " Alavus",
                osoite: "Lepola 4",
                tyyppi: "Pihvi"}]
    }


    render() {

        return (
            <div>
                <RavintolaList ravintolat={this.state.ravintolat} arvostelut={arvostelut}/>

            </div>
        );
    }
}

export default RavintolaBox;