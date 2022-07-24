import React from "react";
import db from '../db.json';
import theme from "./theme.css";
import Autosuggest from 'react-autosuggest';

// Imagine you have a list of languages that you'd like to autosuggest.
const languages = db;
let data;

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
 
  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.E.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.E;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
 <div>
      {suggestion.E}
  </div>
);


class AutoSug extends React.Component{
    constructor() {
        super();
        // Autosuggest is a controlled component.
        // This means that you need to provide an input value
        // and an onChange handler that updates this value (see below).
        // Suggestions also need to be provided to the Autosuggest,
        // and they are initially empty because the Autosuggest is closed.
        this.state = {
          value: '',
          suggestions: [],
          translated:'',
          lan_default:'Konkani',
        };
      }
    
      onChange = (event, { newValue }) => {
        this.setState({
          value: newValue
        });
      };
    
      // Autosuggest will call this function every time you need to update suggestions.
      // You already implemented this logic above, so just use it.
      onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
          suggestions: getSuggestions(value)
        });
      };
    
      // Autosuggest will call this function every time you need to clear suggestions.
      onSuggestionsClearRequested = () => {
        this.setState({
          suggestions: []
        });
      };
      componentDidUpdate(){
         data = languages.find((d) => d.E === this.state.value.toLowerCase());
         
      }
    handleChange = (e) =>{
      const x=e.target.value;
      
      switch(x){
        case "E":
          if(data)
          this.setState({
                        translated:data.K,
                        lan_default:'Konkani'});
          else
            this.setState({lan_default:'Konkani'});
          break;
        case "H":
          if(data)
          this.setState({translated:data.H,
                        lan_default:'कांगनी'});
          else  
          this.setState({lan_default:'कांगनी'});
          break;
        case "M":
          if(data)
          this.setState({translated:data.M,
                        lan_default:'കൊങ്കണി'});
          else
          this.setState({lan_default:'കൊങ്കണി'});
          break;
          default:
            if(data){
              if(this.state.lan_default==='Konkani')
                this.setState({translated:data.K});     
              else if(this.state.lan_default==='कांगनी')    
                this.setState({translated:data.H});
              else if(this.state.lan_default==='കൊങ്കണി')
                this.setState({translated:data.M}); 
            }
            else
            this.setState({translated:"No Entry"});
      }
  }

    handleClear = () =>{
      this.setState({
        value: '',
        translated:'',
      });
      document.getElementsByTagName('input')[0].focus();
    }
      render() {
        const { value, suggestions } = this.state;
    
        // Autosuggest will pass through all these props to the input.
        const inputProps = {
          placeholder: 'Search',
          value,
          onChange: this.onChange
        };
        // Finally, render it!
        return (
          <div>
           <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            theme={theme}
          />
          <button onClick={this.handleChange}>Search</button>
          <button onClick={this.handleClear}>Clear</button>
          <br/>
          Language: <select name="Language" onChange={this.handleChange}>
            <option value="E">English</option>
            <option value="H">Hindi</option>
            <option value="M">Malayalam</option>
          </select>
          <div className="Result">
          <h3>{this.state.lan_default} :</h3> 
          <h4>{this.state.translated}</h4>
          </div>
          </div>
        );
      }
    }    

export default AutoSug;
