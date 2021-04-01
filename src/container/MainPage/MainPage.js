import React, { Component } from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";
import axios from "axios";

export class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3000/data").then((res) => {
      const data = res.data;
      this.setState({ data });
    });
  }

  render() {
    return (
      <div className={"main_page"}>
        <h1 className="pretty-header right-line-header">Invoices</h1>

        <div className={"action"}>
          Action
          <div>
            <Link to="/create_invoice">
              <button className="button_add" type="submit">
                Add new
              </button>
            </Link>
          </div>
          <fieldset>
            <div className={"wrap_table"}>
              <h3>Invoices</h3>
              <table className="lux">
                <thead>
                  <tr>
                    <th>Create</th>
                    <th>№</th>
                    <th>Supply</th>
                    <th>Comment</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.length &&
                    this.state.data.map((el) => (
                      <tr>
                        <td>{el.date_created}</td>
                        <td>{el.number}</td>
                        <td>{el.date_supplied}</td>
                        <td>{el.comment}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </fieldset>
        </div>
      </div>
    );
  }
}
