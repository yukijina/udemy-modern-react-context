import React from 'react'

//This is the only code to create context!!
//in the case below, default context is English. You can add any value like array & object.
//export default React.createContext('english');

const Context = React.createContext('english')

export class LanguageStore extends React.Component {
    state = { language: 'english'}

    onLanguageChange = (language) => {
        this.setState({ language })
    }

    render() {
        return (
            <Context.Provider value={{...this.state, onLanguageChange: this.onLanguageChange }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Context;