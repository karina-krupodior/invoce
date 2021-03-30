import React, {Component} from "react";
// import CustomizedTables from './table';
import './main_page.css';
import {Link} from "react-router-dom";


export class Main_page extends Component {

    componentDidMount() {
        // axious get to server json

        // const dataFromServer = axios.get('http/local')
        // this.setState(dataFromServer)
    }

    render() {
        return (
            <div className={'main_page'}><h1 className="pretty-header right-line-header">Invoices</h1>

                <div className={'action'}>Action
                <div>
                    <Link to="/create_invoice">
                        <button className="button_add" type="submit">Add new</button>
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
                            <tr>
                                <td>20-03-2018</td>
                                <td>5ba37c48185c0c98e6880bed</td>
                                <td>20-03-2018</td>
                                <td>Text invoice</td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                    </fieldset>
                {/*<CustomizedTables*/}
                {/*    // rows={datafromstate}*/}
                {/*/>*/}
            </div>
                </div>
        )
    }
}


