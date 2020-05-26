import React, {Component} from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends Component {
    static contextType = LanguageContext

    render() {
        const usernameText = (this.context === 'English') ? 'Name' : 'Naam'
        const passwordText = (this.context === 'English') ? 'Password' : 'Wachtwoord'

        return (
            <div className="two fields">

                <div className="field">
                    <div className="ui left icon input focus">
                        <input type="text" placeholder={usernameText}/>
                        <i className="user outline icon"/>
                    </div>
                </div>

                <div className="field">
                    <div className="ui left icon input">
                        <input type="password" placeholder={passwordText}/>
                        <i className="lock icon"/>
                    </div>
                </div>

            </div>
        )
    }
}

export default Field
