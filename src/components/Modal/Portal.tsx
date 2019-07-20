import React, { Component } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

interface PortalProps {
  visible?: boolean;
}

class Portal extends Component<PortalProps> {
  node: HTMLDivElement | null = null;

  componentDidMount(): void {
    const { visible } = this.props;
    if (visible) {
      this.renderPortal(this.props);
    } else {
      this.closePortal();
    }
  }

  componentWillUnmount(): void {
    this.closePortal();
  }

  renderPortal = (props: PortalProps) => {
    if (!this.node) {
      this.node = document.createElement('div');
      this.node.className = 'modal';
    }

    document.body.appendChild(this.node);

    render(this.renderModalChild(), this.node);
  };

  closePortal = () => {
    unmountComponentAtNode(this.node as Element);
    document.body.removeChild(this.node as Node);
  };

  renderModalChild = () => {
    const { children } = this.props;
    return <div className="modal-wrapper">{children}</div>;
  };

  render() {
    return null;
  }
}

export default Portal;
