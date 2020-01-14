import React from 'react';
import UserCreate from '../components/UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
  state = {
    language: 'english',
  }

  onLanguageChange = language => {
    this.setState({language})
  }
  render() {
    console.log("state:", this.state)
    return (
      <div className="ui container">
        Select a language:
        <i className="flag us" onClick={() => this.onLanguageChange('english')}></i>
        <i className="flag nl" onClick={() => this.onLanguageChange('dutch')}></i>
        {/* This Provider is different from redux Provider. Value props is special props of Provider */}
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    );

  }
}

export default App;
