import React from 'react';
import Option from './option';

const Options = (props) => (
  <div>
    <button
      onClick={props.handleDeleteOptions}
      className="button button--link">
      Remove All
    </button>
    <p>total options: {props.options.length}</p>
    {props.options.length === 0 && <p>Please add an option to start.</p>}
    <ol>
      {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </ol>
  </div>);

export default Options;