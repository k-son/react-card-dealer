import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <div className="Card">
        <img src={this.props.image} alt={this.props.alt} />
      </div>
    );
  }
}

export default Card;