import React, { Component, ReactChildren, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import './modal.css';

export interface ModalProps {
  visible?: boolean;
  children?: ReactChildren;
  width?: number;
  onClose?: () => void;
  title?: ReactNode;
}

class Modal extends Component<ModalProps> {
  static getModalRoot = (): HTMLBodyElement | null => {
    return document.querySelector('body');
  };

  el: HTMLDivElement = document.createElement('div');

  componentDidMount(): void {
    Modal.getModalRoot()!.appendChild(this.el);
  }

  componentWillUnmount(): void {
    Modal.getModalRoot()!.removeChild(this.el);
  }

  getModalElement = () => {
    const { visible, children, width, onClose, title } = this.props;

    const modalWrapperStyle = {
      width: width || 300,
      minHeight: 200,
    };

    return visible ? (
      <div className="modal-wrapper" style={modalWrapperStyle}>
        <div className="modal-header">
          <div className="modal-title">{title}</div>
          <button
            className="modal-action-close"
            type="button"
            onClick={onClose}
          >
            X
          </button>
        </div>

        <div className="modal-content">{children}</div>
      </div>
    ) : null;
  };

  getMaskElement = () => {
    const { visible } = this.props;

    return visible ? <div className="modal-mask" /> : null;
  };

  render() {
    this.el.setAttribute('class', 'modal-container');

    const { visible } = this.props;
    return visible
      ? createPortal(
          <div className="modal">
            {this.getMaskElement()}
            {this.getModalElement()}
          </div>,
          this.el
        )
      : null;
  }
}

export default Modal;
