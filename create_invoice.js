import React, { Component, useState } from "react";
import "./create_invoice.css";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import axios from "axios";
import { uuid } from "uuidv4";

class CreateInvoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      number: "",
      date_created: "",
      date_supplied: "",
      comment: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);

    console.log("uuid", uuid());

    const requestData = { ...this.state, id: uuid() };
    console.log("requestData", requestData);
    axios
      .post("http://localhost:3000/data", requestData)
      .then((response) => {
        this.props.history.push("/");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const [number, setNumber] = useState("");
    const [date_created, setDate_created] = useState("");
    const [date_supplied, setDate_supplied] = useState("");
    const [comment, setComment] = useState("");
    const [numberDirty, setNumberDirty] = useState(false);
    const [date_createdDirty, setDate_createdDirty] = useState(false);
    const [date_suppliedDirty, setDate_suppliedDirty] = useState(false);
    const [commentDirty, setCommentDirty] = useState(false);
    const [numberError, setNumberError] = useState(
      "This field cannot be empty"
    );
    const [date_createdError, setDate_createdError] = useState(
      "This field cannot be empty"
    );
    const [date_suppliedError, setDate_suppliedError] = useState(
      "This field cannot be empty"
    );
    const [commentError, setCommentError] = useState(
      "This field cannot be empty"
    );

    const blurHandler = (e) => {
      switch (e.target.name) {
        case "number":
          setNumberDirty(true);
          break;
        case "comment":
          setCommentDirty(true);
          break;
      }
    };

    // const { id, number, date_created, date_supplied, comment } = this.state;
    return (
      <div className={"create_invoice"}>
        <h1 className={"header_create_invoice right-line-header"}>
          Create invoice
        </h1>
        <form className={"form_create_invoice"} onSubmit={this.submitHandler}>
          <fieldset className={"form_into"}>
            <ul>
              <label htmlFor="number">Number:</label>
              <div>
                {numberDirty && numberError && (
                  <div style={{ color: "red" }}> {numberError}</div>
                )}
                <input
                  onBlur={(e) => blurHandler(e)}
                  className={"number_form"}
                  type="text"
                  id="number"
                  name="number"
                  value={this.number}
                  onChange={this.changeHandler}
                  minLength="3"
                  required
                />

                <SettingsApplicationsIcon className={"icon_settings"}>
                  {" "}
                </SettingsApplicationsIcon>
                <label className={"invoice_label"} htmlFor="date_created">
                  Invoice Data:
                </label>
                {date_createdDirty && date_createdError && (
                  <div style={{ color: "red" }}> {date_createdError}</div>
                )}
                <input
                  className={"invoice_data"}
                  type="date"
                  id="date_created"
                  placeholder={"Select data"}
                  name="date_created"
                  value={this.date_created}
                  onChange={this.changeHandler}
                  required
                />
                <li>
                  <label className={"supply_label"} htmlFor="date">
                    Supply Date:
                  </label>
                  {date_suppliedDirty && date_suppliedError && (
                    <div style={{ color: "red" }}> {date_suppliedError}</div>
                  )}
                  <input
                    className={"supply_data"}
                    type="date"
                    id="date_supplied"
                    placeholder={"Select data"}
                    name="date_supplied"
                    value={this.date_supplied}
                    onChange={this.changeHandler}
                    required
                  />
                </li>
                <label className={"label_textarea"} htmlFor="comment">
                  Comment:
                </label>
                <li>
                  {commentDirty && commentError && (
                    <div style={{ color: "red" }}> {commentError}</div>
                  )}
                  <textarea
                    onBlur={(e) => blurHandler(e)}
                    id="comment"
                    name={"comment"}
                    value={this.comment}
                    onChange={this.changeHandler}
                    maxLength="160"
                    required
                  >
                    {" "}
                  </textarea>
                </li>
              </div>
            </ul>
          </fieldset>
          <button className="button_save" onClick={this.submitHandler}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default CreateInvoice;
