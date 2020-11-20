import React, {Component} from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <div className="Card">
        <img src={this.props.rank} alt={this.props.alt} />
      </div>
    );
  }
}

export default Card;