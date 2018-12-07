import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const dot = (color = 'black') => ({
  alignItems: 'center',
  display: 'flex',
  backgroundColor: 'white',
  width:300,
  height:30,
  ':before': {
    border:'3px red',
    backgroundColor: color,
    borderRadius: 10,
    content: ' ',
    display: 'block',
    marginRight: 8,
    height: 100,
    width: 20,
  },
});

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white' }), // Control that is always visible
 // option: styles => ({styles, ...dot(), color: 'black'}), //Each of the dropdown options

  option: (styles, { isDisabled, isFocused, isSelected }) => {
    // const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected ? 'magenta' : isFocused ? 'gray' : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
          ? 1 > 2 ? 'white' : 'black'
          : 'magenta',
      cursor: isDisabled ? 'not-allowed' : 'default',
    };
  },

  input: styles => ({ ...styles, ...dot() }),  // Sub-part of the select, leave alone
  placeholder: styles => ({ ...styles, ...dot() }), // Color of the default /nothing selected option
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color)}), // color of item one it's been selected
};

class App extends Component {
  state = {
    selectedOption: null,
  }


  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }


  

  render() {
    const { selectedOption } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            styles={colourStyles}
            options={options}
          />
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
