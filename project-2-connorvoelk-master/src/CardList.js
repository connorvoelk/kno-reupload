import React, { Component } from 'react'; //import React Component'
import _ from 'reactstrap';

class CardList extends Component {
  render() {
    let arrayOfCards = this.props.cards;
    arrayOfCards.sort((a, b) => Date(b.date) - Date(a.date));
    // arrayOfCards.reverse();
    arrayOfCards = arrayOfCards.filter(cards => this.props.value === "" || cards.price >= this.props.value);
    arrayOfCards = arrayOfCards.map((x) =>
      < Card key={x.title} cardClick={this.props.cardClick} card={x} value={this.props.value} open={this.props.open} />
    );
    return (
      <section className="card_ui">
        <div className="card_group" aria-label="group-of-cards">

          {arrayOfCards}

        </div>
      </section>
    );
  }
}

class Card extends Component {

  actualHandleClick = () => {
    this.props.cardClick(this.props.card.link);
  }

  render() {
    // Dynamic button text content
    let today = new Date();
    let btnText = '';
    // Determine if the button shows shop now
    if (today >= new Date(this.props.card.date)) {
      btnText = 'SHOP NOW';
    } else {
      btnText = this.props.card.date;
    }
    // onClick={/*() => {this.props.popUpCallback(this.props.card.name)}*/}
    return (
      <div className="card" aria-label="card" onClick={this.actualHandleClick}>
        <div className="img">
          <img src={this.props.card.image} alt={this.props.card.title} />
        </div>
        <div className="text" aria-label="description">
          <h2>{this.props.card.title}</h2>
          <p>{this.props.card.desc}</p>
        </div>
        <div className="button" aria-label="button">
          <button className="cta" onClick={() => window.open(this.props.card.link)}>
            {btnText}
          </button>
        </div>
      </div>

    );
  }
}

export default CardList;