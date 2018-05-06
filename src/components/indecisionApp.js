import React from 'react';
import AddOptions from './add-option';
import Header from './header';
import Action from './action';
import Options from './options';
import User from './user';
import OptionModal from './option-modal';


export default class IndecisionApp extends React.Component {
  state = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer;',
    options: [], //['Thing one', 'Thing two', 'Thing three']
    selectedOption: undefined
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };

  handleDeleteOptions = () => {
    // this is a shorthand option for function returning object
    this.setState(() => ({options: []}));
  };

  handleModalClose = () => {
    this.setState(() => ({selectedOption: undefined}));
  };

  handlePickOption = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
  };

  handleAddOption  = (option) => {
    if (!option) {
      return 'Enter valid value to add item.';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    });
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('optionsIA');
      const options = JSON.parse(json);
      options && this.setState(() => ({options}));
    } catch (e) {
      console.log('Error: ' + e);
    }
  }

  componentDidUpdate(provProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const jsonOption = JSON.stringify(this.state.options);
      localStorage.setItem('optionsIA', jsonOption);
    }
  }

  componentWillUnmount() {

  }

  render() {
    const title = 'Indecision',
      subtitle = 'Put your life in the hands of a computer.';

    return (
      <div>
        <Header
          title={'Indecion App v1.2'}
        />

        <div className="container">

          <Action
            hasOptions={this.state.options.length > 0}
            handlePickOption={this.handlePickOption}
          />

          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />

            <AddOptions
              handleAddOption={this.handleAddOption}
            />
          </div>

        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleModalClose={this.handleModalClose}
        />
      </div>
    );
  }
}


IndecisionApp.defaultProps = {
  options: []
};