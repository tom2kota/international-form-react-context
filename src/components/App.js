import React, {Component} from 'react';
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class App extends Component {
    state = {
        language: 'English'
    }

    onLanguageChange = language => {
        this.setState({language})
    }

    render() {
        return (
            <div className="ui container">
                <h2 className="ui header blue">
                    Select a Language:
                    <i className="large icons">
                        <i className="flag gb" onClick={() => this.onLanguageChange('English')}/>
                        <i className="flag nl" onClick={() => this.onLanguageChange('Netherlandish')}/>
                    </i>
                </h2>
                <ColorContext.Provider value="green">
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate/>
                    </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        )
    }
}

export default App;
