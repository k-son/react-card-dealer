import React, {Component} from 'react';
import Card from './Card';
import './Table.css';
import axios from 'axios';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck_id: '',
      card_stack: [],
      remaining: null
    }
    this.dealCard = this.dealCard.bind(this);
  }

  async componentDidMount() {
    const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
    const response = await axios.get(url);
    this.setState({
      deck_id: response.data.deck_id
    });
  }

  componentDidUpdate() {
    if (this.state.remaining === 48) {
      axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deck_id}/shuffle/`).then(response => {
        this.setState({
          card_stack: [],
          remaining: null
        })
      });
    }
    console.log('DID UPDATE', this.state.remaining);
  }

  async dealCard() {
    const url = `https://deckofcardsapi.com/api/deck/${this.state.deck_id}/draw/?count=1`;
    const response = await axios.get(url);
    const newCard = response.data.cards[0];
    this.setState({
      card_stack: [...this.state.card_stack, newCard],
      remaining: response.data.remaining
    });
  }

  render () {
    return(
      <div className="Table">
        <h1>Card Dealer</h1>
        <button onClick={this.dealCard}>Deal me a card</button>
        <p>Cards left in the deck: {this.state.remaining}</p>
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
    );
  }
}

export default Table;