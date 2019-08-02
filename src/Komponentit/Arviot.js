import React, {Component} from 'react';

class Arviot extends Component {
    state = {
        ravintola: this.props.id,
        arvosana: "",
        arvio:""
    }

    uusiArvio = (e) =>{this.setState({arvio:e.target.value})};
    arvosana = (e) => {this.setState({arvosana:parseInt(e.target.value)})};
    arvioi = () => {
        if (this.state.arvio !== "" && this.state.arvosana !== "") {
        this.props.arvioi(this.state);
        setTimeout(this.props.totuus, 500)}};

    _renderObject(){
        return Object.entries(this.props.arviot).map(([key, value], i) => {
            return (


                <li key={key} >
                    <i> "{value.arvio}"</i> Arvosana : {value.arvosana}
                </li>
            )
        })
    }

    render() {
        return (
            <div className="arvionapit">
                <input type="text" placeholder="Kirjoita arvio" onChange={this.uusiArvio} className="lomake"/>

                    <select name="Arvosana" id="" onChange={this.arvosana} value={this.state.arvosana} className="lomake">
                        <option value="" disabled hidden>Arvosana</option>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>

                <button className="arvionappi" onClick={this.arvioi}>Arvioi ravintola</button>
            <div className="arviot">
                {this._renderObject()}
            </div>
                </div>
        );
    }
}

export default Arviot;