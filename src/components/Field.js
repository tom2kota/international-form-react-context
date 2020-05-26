import React, {Component} from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends Component {
    static contextType = LanguageContext

    render() {
        const usernameText = (this.context === 'English') ? 'Name' : 'Naam'
        const passwordText = (this.context === 'English') ? 'Password' : 'Wachtwoord'

        return (
            <div className="ui form">
                <div className="fields">

                    <div className="field">
                        <div className="ui left icon input focus">
                            <label>{usernameText}</label>
                            <input type="text" placeholder={usernameText}/>
                            <i className="user outline icon"/>
                        </div>
                    </div>

                    <div className="ui left icon input field">
                        <label>{passwordText}</label>
                        <input type="password" placeholder="Password"/>
                        <i className="lock icon"/>
                    </div>

                </div>
            </div>
        )
    }
}

export default Field