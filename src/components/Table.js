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
        <div className="Table-content">
          <h1>React card dealing app</h1>
          <button>Deal me a card</button>
          <Card />
        </div>
      </div>
    );
  }
}

export default Table;