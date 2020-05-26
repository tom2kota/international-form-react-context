import React, {Component} from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends Component {

    renderSubmit(value) {
        return (value === 'English') ? 'SUBMIT' : 'VOORLEGGEN'
    }

    renderButton(color) {
        return (
            <button className={`ui inverted button huge ${color}`}>
                <LanguageContext.Consumer>
                    {value => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render() {
        return (
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer>
        )
    }
}

export default Button
