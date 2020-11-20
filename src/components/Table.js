import React, {Component} from 'react';
import Card from './Card';
import './Table.css';

class Table extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <div className="Table">
        <h1>React card dealing app</h1>
        <button>Deal me a card</button>
        <Card />
      </div>
    );
  }
}

export default Table;