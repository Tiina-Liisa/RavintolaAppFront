import React, {Component} from 'react';
import RavintolaList from "./RavintolaList";
import {get, haeArviot, lisaaArvostelu} from "../Commucator";


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

        haeRavintolat =()=> {
            get(data => {
                this.setState({ravintolat: data});
        });
        }

        haeValitut = (paikka)=>{
        console.log(paikka.kaupunki)
            var ravintola =[];
            this.state.ravintolat.filter(rafla => rafla.paikkakunta === paikka.kaupunki).map(rafla => ravintola.push(rafla));
            this.setState({ravintolat:ravintola})
        }

        arvioi = (data) =>{
        lisaaArvostelu(data).then(()=>{
            haeArviot(data => {
                this.setState({arvostelut: data});
            })
        })
    }

    render() {
        return this.state.ravintolat ? (
            <div className="testi">
                <RavintolaList ravintolat={this.state.ravintolat} arvostelut={this.state.arvostelut} haeArviot={this.haeArviot}
                haeRavintolat={this.haeRavintolat} haeValitut={this.haeValitut} arvioi={(this.arvioi)}/>
            </div>):
            ( <div>Loading</div>)
        ;
    }
}

export default RavintolaBox;