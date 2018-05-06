import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleModalClose}
    contentLabel={'Selected Option'}
    closeTimeoutMS={200}
    className="modal">

    <h3 className="modal__title">
      Selected option
    </h3>

    <p className="modal__body">
      {props.selectedOption && props.selectedOption}
    </p>

    <button
      onClick={props.handleModalClose}
      className="button">
      Ok
    </button>

  </Modal>
);

export default OptionModal;