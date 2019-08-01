import React, {Component} from 'react';

class Arviot extends Component {
    state = {
        ravintola: this.props.id,
        arvosana: "",
        arvio:""
    }

    uusiArvio = (e) =>{this.setState({arvio:e.target.value})};
    arvosana = (e) => {this.setState({arvosana:parseInt(e.target.value)})};
    arvioi = ()=> {this.props.arvioi(this.state);this.props.totuus()}

    _renderObject(){
        return Object.entries(this.props.arviot).map(([key, value], i) => {
            return (


                <li key={key} >
                    <i> "{value.arvio}"</i>, Arvosana : {value.arvosana}
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Kirjoita arvio" onChange={this.uusiArvio}/>
                <form>
                    <select name="Arvosana" id="" onChange={this.arvosana} value={this.state.arvosana}>
                        <option selected="defaultValue" value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </form>
                <button onClick={this.arvioi}>Arvioi ravintola</button>
            <div className="arviot">
                {this._renderObject()}
            </div>
                </div>
        );
    }
}

export default Arviot;