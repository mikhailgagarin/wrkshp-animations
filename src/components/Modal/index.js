import React, { useEffect, useContext, useRef } from 'react';
import PropTypes from 'prop-types';

import ModalContext from 'context/modal/modalContext';

import * as S from './styles';

export default function Modal({ children, title, isCloseIcon }) {
  const { hideModal } = useContext(ModalContext);
  const backdropRef = useRef();

  function outsideClick(e) {
    if (e.target === backdropRef.current) {
      hideModal();
    }
  }

  function keyboardCloseListener(e) {
    if (e.key === 'Escape') {
      e.stopPropagation();
      hideModal();
    }
  }

  useEffect(() => {
    document.addEventListener('click', outsideClick);
    document.addEventListener('keydown', keyboardCloseListener);

    return () => {
      document.removeEventListener('click', outsideClick);
      document.removeEventListener('keydown', keyboardCloseListener);
    };
  });

  return (
    <S.Backdrop ref={backdropRef}>
      <S.Modal>
        <S.Header>
          <S.Title>{title}</S.Title>
          {isCloseIcon && <S.Close onClick={hideModal} />}
        </S.Header>
        <S.Body>{children}</S.Body>
      </S.Modal>
    </S.Backdrop>
  );
}

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  title: PropTypes.string,
  isCloseIcon: PropTypes.bool,
};

Modal.defaultProps = {
  title: '',
  isCloseIcon: true,
};
