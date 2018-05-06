import React from 'react';


export default class AddOptions extends React.Component {

  state = {
    error: undefined
  };

  handleAddOption = (event) => {
    event.preventDefault();

    const option = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => {
      return {error} // this is the same as "return { error: error }"
    });

    if (!error) event.target.elements.option.value = '';
    event.target.elements.option.focus();
  };


  render() {
    return (
      <div className="">

        {this.state.error && <p className="add-option__error">{this.state.error}</p>}

        <form
          onSubmit={this.handleAddOption}
          className="add-option">

          <input type="text" name="option" className="add-option__input"/>

          <button className="button">Add Option</button>

        </form>

      </div>
    );
  }
}