import React, {Component} from 'react';

class Arviot extends Component {

    _renderObject(){
        return Object.entries(this.props.arviot).map(([key, value], i) => {
            return (
                <div key={key}>
                    Arvosana : {value.arvosana} ;
                    Arvio : {value.arvio}
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this._renderObject()}
            </div>
        );
    }
}

export default Arviot;