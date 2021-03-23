import React, {Component} from 'react';

export default class ButtonTemplate  extends Component {

    render() {

        return (
            <>
                <button>
                    { this.props.buttonText }
                </button>
            </>
        )
    }

}
