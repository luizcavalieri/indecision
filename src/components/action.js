import React from 'react';

const Action = (props) => (
  <div className="action">
    <button
      onClick={props.handlePickOption}
      disabled={!props.hasOptions}
      className="action__btn">
      What should I do?
    </button>
  </div>
);

export default Action;
