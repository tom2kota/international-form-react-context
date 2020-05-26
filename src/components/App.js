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


                        <div className="ui selection dropdown">
                            <input type="hidden" name="language"/>
                            <i className="dropdown icon"/>
                            <div className="default text">Language</div>
                            <div className="menu">
                                <div className="item" data-value="1">
                                    English &nbsp;
                                    <i className="flag gb" onClick={() => this.onLanguageChange('English')}/>
                                </div>
                                <div className="item" data-value="0">
                                    Netherlandish &emsp;
                                    <i className="flag nl" onClick={() => this.onLanguageChange('Netherlandish')}/>
                                </div>
                            </div>
                        </div>


                        <div className="item"> Select a Language:</div>
                        <div className="item" onClick={() => this.onLanguageChange('English')}>
                            <i className="flag gb"/>
                        </div>
                        <div className="item" onClick={() => this.onLanguageChange('Netherlandish')}>
                            <i className="flag nl"/>
                        </div>
                    </div>
                </div>

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
