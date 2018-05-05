import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleModalClose}
    contentLabel={'Selected Option'}>

    <h3>
      Selected option
    </h3>

    <p>
      {props.selectedOption && props.selectedOption}
    </p>

    <button
      onClick={props.handleModalClose}>
      Ok
    </button>
  </Modal>
);

export default OptionModal;