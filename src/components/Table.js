import React, {Component} from 'react';
import Card from './Card';
import './Table.css';
import axios from 'axios';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck_id: '',
      card_stack: []
    }
    this.dealCard = this.dealCard.bind(this);
  }

  async componentDidMount() {
    const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
    const response = await axios.get(url);
    this.setState({
      deck_id: response.data.deck_id
    });

    console.log('DID MOUNT', this.state.deck_id);
  }

  async dealCard() {
    const url = `https://deckofcardsapi.com/api/deck/${this.state.deck_id}/draw/?count=1`;
    const response = await axios.get(url);
    const newCard = response.data.cards[0];
    this.setState({
      card_stack: [...this.state.card_stack, newCard]
    });
    console.log(newCard);
    console.log(this.state.card_stack);
  }

  render () {
    return(
      <div className="Table">
        <div className="Table-content">
          <h1>Card Dealer</h1>
          <button onClick={this.dealCard}>Deal me a card</button>
          {this.state.card_stack.map(card => {
            return (
              <Card 
              key={card.code}
              image={card.images.png}
              alt={`${card.value} ${card.suit}`}
            />
            )
          })}
        </div>
      </div>
    );
  }
}

export default Table;