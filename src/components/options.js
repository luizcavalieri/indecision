import React from 'react';
import Option from './option';

const Options = (props) => (
  <div className="">
    <header className="widget-header">
      <h3 className="widget-header__title">Your Ooptions</h3>
      <button
        onClick={props.handleDeleteOptions}
        className="button button--link">
        Remove All
      </button>
    </header>

    <div className="widget-body">
      <p className="widget-body__counter">total options: {props.options.length}</p>

      { props.options.length === 0 &&
      <p
        className="widget-body__message">
        Please add an option to start.
      </p>
      }


      {
        props.options.map((option, index) => (
          <Option
            key={option}
            optionText={option}
            count={index + 1}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }

    </div>
  </div>);

export default Options;