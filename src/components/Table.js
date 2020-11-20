import React, {Component} from 'react';
import { Card } from './Card';
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
    if (this.state.remaining === 0) {
      axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deck_id}/shuffle/`).then(response => {
        this.setState({
          card_stack: [],
          remaining: null
        })
      });
    }
  }

  async dealCard() {
    const url = `https://deckofcardsapi.com/api/deck/${this.state.deck_id}/draw/?count=1`;
    const response = await axios.get(url);

    const leftVal = [47, 47.5, 48, 48.5, 49, 49.5, 50, 50.5, 51, 51.5, 52, 52.5, 53];
    const topVal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const rotateVal = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const randLeft = Math.floor(Math.random() * leftVal.length);
    const randTop = Math.floor(Math.random() * topVal.length);
    const randRotate = Math.floor(Math.random() * rotateVal.length);

    const newCard = {
      ...response.data.cards[0],
      left: leftVal[randLeft],
      top: topVal[randTop],
      rotate: rotateVal[randRotate]
    };

    this.setState({
      card_stack: [...this.state.card_stack, newCard],
      remaining: response.data.remaining,
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
                left={card.left}
                top={card.top}
                rotate={card.rotate}
              />
            )
          })}
      </div>
    );
  }
}

export default Table;