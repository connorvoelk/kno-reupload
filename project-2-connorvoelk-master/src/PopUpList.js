import React, { Component } from 'react'; //import React Component'
import './style.css';
import _ from 'reactstrap';

class PopUpList extends Component {
  render() {
    let arrayOfPopUps = this.props.popUp;
    console.log(this.props.popUp);
    arrayOfPopUps = arrayOfPopUps.map((x) =>
      <PopUp popDelete = {this.props.popDelete} key={x.title} popUp={x} close={this.props.close} />
    );
    return arrayOfPopUps;
  }
}

class PopUp extends Component {

  deleteClick = () => {
    console.log('click delete');
    console.log(this.props.popUp.link)
    this.props.popDelete(this.props.popUp.link);
  }

  render() {
    // let show = 'modal';
    // this.props.popUp.popUp ? show='modal' : show="modal invisible";

    return (
      <div className={this.props.popUp.popUp}>
        <section className="modall-content">

          <div className="modal-head">
            <h1>{this.props.popUp.title}</h1>
            <img src="assets/close.svg" type="image" alt="Close" aria-label="close" className="close" onClick={this.props.close} />
          </div>

          <div className="modal-info">
            <img src={this.props.popUp.image} alt="placeholder" />
            <h2>Description</h2>
            <p className="description">{this.props.popUp.desc}</p>
            <h2>Price</h2>
            <p className="price">{this.props.popUp.price}</p>
            <h2>Links</h2>
            <a className="link" href={this.props.popUp.link}>{this.props.popUp.link}</a>
          </div>

          <section className="buttons">
            <button className="cta" id="delete" onClick={this.deleteClick}>
              <img src="assets/delete.svg" alt="Trash" />
            </button>
          </section>

        </section>
      </div>

    );
  }
}

export default PopUpList;