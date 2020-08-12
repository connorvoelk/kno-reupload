import React, { Component } from 'react'; //import React Component'
import _ from 'reactstrap';
import './style.css';
import CardList from './CardList';
import PopUpList from './PopUpList';
import AddForm from './AddForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      cards: this.props.user.cardList,
      menu: false,
      addform: false
    }
  }

  handleCardClick = (linkID) => {
    let newCards = this.state.cards;
    for (let i = 0; i < newCards.length; i++) {
      if (newCards[i].link === linkID) {
        newCards[i].popUp = "modall";
      }
    }
    this.setState({ cards: newCards });
  }

  handleSubmitForm = (bottomForm) => {
    bottomForm.popUp = "modall invisible";
    let idk = this.state.cards
    idk.push(bottomForm);
    this.setState({ cards: idk });
    this.setState({ addform: false });
  }

  popDelete = (linkID) => {
    let newCards = this.state.cards;
    for (let i = 0; i < newCards.length; i++) {
      if (newCards[i].link === linkID) {
        newCards.splice(i, 1);
      }
    }
    this.setState({ cards: newCards });
  }

  closePop = () => {
    let newCards = this.state.cards;
    for (let i = 0; i < newCards.length; i++) {
      newCards[i].popUp = 'modall invisible'
    }
    this.setState({ cards: newCards });
  }

  mobileMenuActivator = () => {
    this.setState((currState) => {
      let stateChanges = { menu: !currState.menu };
      return stateChanges;
    });
  }

  addFormActivator = () => {
    this.setState((currState) => {
      let stateChanges = { addform: true };
      return stateChanges;
    });
  }

  homeActivator = () => {
    this.setState((currState) => {
      let stateChanges = { addform: false };
      return stateChanges;
    });
  }

  render() {
    return (
      <div>
        <NavBar user={this.state.user} currState={this.state} hamClick={this.mobileMenuActivator} homeClick={this.homeActivator} addClick={this.addFormActivator} />
        {this.state.addform ? <AddForm submitForm={this.handleSubmitForm} homeClick={this.homeActivator} form={this.state.form} /> : <MainContent user={this.state.user} cards={this.state.cards} cardClick={this.handleCardClick} addClick={this.addFormActivator} openCard={this.openPop} />}
        <PopUpList popDelete={this.popDelete} popUp={this.state.cards} close={this.closePop} />
      </div>
    );
  }
}

class NavBar extends Component {

  hamHandleClick = (event) => {
    this.props.hamClick();
  }

  mobileMenuRender = (menu) => {
    if (menu) {
      return (<MobileMenu addClick={this.props.addClick} homeClick={this.props.homeClick} />);
    }
  }

  render() {
    return (
      <div className="top-bar" aria-label="navigation-bar">
        <img onClick={this.hamHandleClick} id="ham-menu" className="ham-menu" src="assets/ham.svg" alt="Menu" />
        <a href="index.html">
          <section className="left-side">
            <img className="logo" src="assets/kno.png" alt="logo" />
          </section>
        </a>

        <section className="right-side">
          <div className="user-name" aria-label="username">
            <h3 id="userName">{this.props.user.userName}</h3>
          </div>
          <div aria-label="user-image">
            <img id="profilePic" className="profile-pic" src="./assets/profile.svg" alt="User Icon" />
          </div>
        </section>
        {this.mobileMenuRender(this.props.currState.menu)}
      </div>
    );
  }
}
export default App;

class MobileMenu extends Component {

  addHanldeClick = (event) => {
    this.props.addClick();
  }


  homeHandleClick = (event) => {
    this.props.homeClick();
  }

  render() {
    return (
      <div id="menu" className="menu">
        <ul>
          <li id="homeMenu" onClick={this.homeHandleClick}>
            <p>HOME</p>
          </li>
          <li id="releaseMenu" onClick={this.addHanldeClick}>
            <p>+RELEASE</p>
          </li>
        </ul>
      </div>
    );
  }
}

class MainContent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  // need to get this working for changing which content is displayed
  changeFilter = (value) => {
    this.setState(() => {
      return {
        value: value
      }
    });
  }


  render() {
    return (
      <div className="actualContent flex-container">
        <SideMenu addClick={this.props.addClick} changeCallback={this.changeFilter} />
        <CardList cardClick={this.props.cardClick} cards={this.props.cards} value={this.state.value} open={this.props.cardOpen} />
      </div>
    );
  }
}

class SideMenu extends Component {

  addHanldeClick = (event) => {
    this.props.addClick();
  }

  render() {
    return (<section className="side-menu" aria-label="side-menu">
      <button id="releaseButton" className="cta" onClick={this.addHanldeClick}>
        <img src="assets/add.svg" alt="Add" />
          RELEASE
    </button>
      <h2>About</h2>
      <p>KNO is a tool to keep track of the releases important to you. This is ideal for storing sneaker,
        clothes and art releases all within one system.</p>
      <PriceFilter value={this.props.value} changeCallback={this.props.changeCallback} />
    </section>
    );
  }
}



// add the price filter
class PriceFilter extends Component {
  render() {
    return (
      <div className="form-row">
        <label><h3>Select Price</h3></label>
        <div className="form-group">
          <select className="form-control" aria-label="Select price" onChange={(event) => this.props.changeCallback(event.target.value)} value={this.props.value}>
            <option value="">Price</option>
            <option value="500"> &gt; 500 </option>
            <option value="400"> &gt; 400 </option>
            <option value="300"> &gt; 300 </option>
            <option value="200"> &gt; 200 </option>
            <option value="100"> &gt; 100</option>
          </select>
        </div>
      </div>
    )
  }
}