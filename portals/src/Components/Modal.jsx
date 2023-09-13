import { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component 
{
    constructor(props) {
      super(props);

      this.popUpContainer = document.createElement('div');

      document.body.appendChild(this.popUpContainer);
    }

    render () {
        return ReactDOM.createPortal (
            <div className="modal" onClick={this.props.close}>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nihil beatae accusantium quis nobis. Provident et adipisci ipsam facilis, ducimus nisi officia ex non omnis quae fugiat explicabo voluptatem facere.</p>
                    <button>Close Modal</button>
                </div>
            </div>,
            this.popUpContainer
        )
    }

    componentWillUnmount() {
        this.popUpContainer.remove();
    }
}

export default Modal;