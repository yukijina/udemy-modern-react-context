import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

// There are two ways to use Conxte.
// 1. Provider - use static Context type and we can use as "this.context to render"
// 2. Consumer 
//    - Define Context.Consumer in this component and wrap the value provided from App.js
//    - Good to use multiple contexts         
class Button extends React.Component {

    // With Provider - static name must be contextType
    // static - adding property directly to class
    // static contextType = LanguageContext;

    render() {
        // With Provider
        // const text = this.context === "english" ? "Submit" : "Voorleggen";
    
        return(
            // With Provider
            // <button className="ui button primary">{text}</button>

            // With Consumer
            <ColorContext.Consumer>
                {(color) =>
                    <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            {({ language }) => language === "english" ? "Submit" : "Voorleggen"}
                        </LanguageContext.Consumer>
                    </button>
                }
            </ColorContext.Consumer>
            
        )
    }
}

export default Button;