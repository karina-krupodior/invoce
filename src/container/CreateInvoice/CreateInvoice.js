import React, { Component, useState } from "react";
import "./CreateInvoice.css";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import axios from "axios";
import { uuid } from "uuidv4";
import FormErrors from "../../component/FormErrors";

class CreateInvoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      number: "",
      date_created: "",
      date_supplied: "",
      comment: "",

      formErrors: {
        number: "",
        comment: "",
        date_supplied: "",
        date_created: "",
      },
      numberValid: false,
      commentValid: false,
      date_createdValid: false,
      date_suppliedValid: false,
      formValid: false,
    };
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;

    let numberValid = this.state.numberValid;
    let commentValid = this.state.commentValid;
    let date_createdValid = this.state.date_createdValid;
    let date_suppliedValid = this.state.date_suppliedValid;

    switch (fieldName) {
      case "number":
        numberValid = value.length >= 3;
        fieldValidationErrors.number = numberValid ? "" : " is too short";

        break;
      case "comment":
        commentValid = value.length <= 160;
        fieldValidationErrors.password = commentValid ? "" : " is too long";
        break;

      case "date_supplied":
        date_suppliedValid = value.date_supplied !== "";
        fieldValidationErrors.date_supplied = date_suppliedValid
          ? ""
          : "select date please";
        break;
      case "date_created":
        date_createdValid = value.date_created !== "";
        fieldValidationErrors.date_created = date_createdValid
          ? ""
          : "select date please";
        break;
      default:
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        numberValid: numberValid,
        date_createdValid: date_createdValid,
        date_suppliedValid: date_suppliedValid,
        commentValid: commentValid,
      },
      this.validateForm
    );
  }

  submitHandler = (e) => {
    e.preventDefault();
    const requestData = { ...this.state, id: uuid() };
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

  validateForm() {
    this.setState({
      formValid:
        this.state.numberValid &&
        this.state.commentValid &&
        this.state.date_createdValid &&
        this.state.date_suppliedValid,
    });
  }
  render() {
    return (
      <div className={"create_invoice"}>
        <h1 className={"header_create_invoice right-line-header"}>
          Create invoice
        </h1>
        <form className={"form_create_invoice"} onSubmit={this.submitHandler}>
          <FormErrors formErrors={this.state.formErrors} />
          <fieldset className={"form_into"}>
            <ul>
              <label htmlFor="number" className={"number_label"}>
                Number:
              </label>
              <li>
                <input
                  className={"number_form"}
                  type="text"
                  id="number"
                  name="number"
                  value={this.number}
                  onChange={this.handleUserInput}
                  minLength="3"
                  required
                />
                <SettingsApplicationsIcon
                  className={"icon_settings"}
                ></SettingsApplicationsIcon>
                <label className={"invoice_label"} htmlFor="date_created">
                  Invoice Data:
                </label>
                <input
                  className={"invoice_data"}
                  type="date"
                  id="date_created"
                  name="date_created"
                  value={this.date_created}
                  onChange={this.handleUserInput}
                  placeholder={" "}
                  required
                />
                <label className={"supply_label"} htmlFor="date">
                  Supply Date:
                </label>
                <li>
                  <input
                    className={"supply_data"}
                    type="date"
                    id="date_supplied"
                    name="date_supplied"
                    value={this.date_supplied}
                    onChange={this.handleUserInput}
                    required
                  />
                </li>
                <li>
                  <label className={"label_textarea"} htmlFor="comment">
                    Comment:
                  </label>
                  <textarea
                    id="comment"
                    name={"comment"}
                    value={this.comment}
                    onChange={this.handleUserInput}
                    maxLength="160"
                    required
                    placeholder={" "}
                  ></textarea>
                </li>
              </li>
            </ul>
          </fieldset>
          <button
            className="button_save"
            disabled={!this.state.formValid}
            onClick={this.submitHandler}
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default CreateInvoice;
