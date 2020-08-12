import React, { Component } from 'react'; //import React Component'
import _ from 'reactstrap';

class AddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: null,
            image: null,
            desc: null,
            price: null,
            link: null,
            date: null,
            time: null
        }

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeImage = this.handleChangeImage.bind(this);
        this.handleChangeDesc = this.handleChangeDesc.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleChangeTime = this.handleChangeTime.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeShopping = this.handleChangeShopping.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    closeHandleClick = (event) => {
        this.props.homeClick();
    }

    handleChangeTitle(event) {
        this.setState({ title: event.target.value })
    }

    handleChangeImage(event) {
        this.setState({ image: event.target.value })
    }

    handleChangeDesc(event) {
        this.setState({ desc: event.target.value })
    }

    handleChangePrice(event) {
        this.setState({ price: event.target.value })
    }

    handleChangeShopping(event) {
        this.setState({ link: event.target.value })
    }
    handleChangeDate(event) {
        this.setState({ date: event.target.value })
    }
    handleChangeTime(event) {
        this.setState({ time: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        this.props.submitForm(this.state);
    }


    render() {
        return (<div className="addForm">
            <section>
                <div className="form-head">
                    <div>
                        <h1 className="form-title">Add Release</h1>
                    </div>
                    <div>
                        <img src="assets/close.svg" onClick={this.closeHandleClick} id="closeReleaseButton" className="closeButton" alt="Exit" />
                    </div>
                </div>
                <form id="releaseForm" onSubmit={this.handleSubmit}>
                    <div className="formInput">
                        <label>Item Name</label>
                        <input type="text" id="titleInput" onChange={this.handleChangeTitle} />
                    </div>
                    <div className="formInput">
                        <label>Image URL</label>
                        <input type="url" id="imageInput" onChange={this.handleChangeImage} />
                    </div>

                    <div className="formInput">
                        <label>Description</label>
                        <input type="text" id="descInput" onChange={this.handleChangeDesc} />
                    </div>
                    <div className="formInput">
                        <label>Price</label>
                        <input type="number" id="priceInput" onChange={this.handleChangePrice} />
                    </div>
                    <div className="formInput">
                        <label>Shopping URL</label>
                        <input type="url" id="linkInput" onChange={this.handleChangeShopping} />
                    </div>
                    <div className="formInput">
                        <label>Date</label>
                        <input type="date" id="dateInput" onChange={this.handleChangeDate} />
                    </div>
                    <div className="formInput">
                        <label>Time</label>
                        <input type="time" id="timeInput" onChange={this.handleChangeTime} />
                    </div>
                    <button type="submit" className="cta" id="submitBtn">SUBMIT</button>
                </form>
            </section>
        </div>);
    }
}

export default AddForm;