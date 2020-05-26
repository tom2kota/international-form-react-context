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
                <div className="ui stackable menu">

                    <div className="item">
                        <h2 className="ui header blue">
                            <a href="/">
                                <i className="large icons">
                                    <i className="home icon"/>
                                    <i className="corner blue world icon"/>
                                </i>
                                HOME
                            </a>
                        </h2>
                    </div>


                    <div className="right menu">

                        <div className="ui compact menu">
                            <div className="ui simple dropdown item">
                                <span className="ui header sub disabled">Select Language</span>
                                <i className="dropdown icon grey"/>
                                <div className="menu">
                                    <div className="item" data-value="1"
                                         onClick={() => this.onLanguageChange('English')}>
                                        <i className="flag gb"/>
                                        &nbsp; English
                                    </div>
                                    <div className="item" data-value="0"
                                         onClick={() => this.onLanguageChange('Netherlandish')}>
                                        <i className="flag nl"/>
                                        &nbsp; Netherlandish
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="item" onClick={() => this.onLanguageChange('English')}>
                        <i className="flag gb"/>
                    </div>

                    <div className="item" onClick={() => this.onLanguageChange('Netherlandish')}>
                        <i className="flag nl"/>
                    </div>

                </div>

                <ColorContext.Provider value="violet">
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate/>
                    </LanguageContext.Provider>
                </ColorContext.Provider>

            </div>
        )
    }
}

export default App;
