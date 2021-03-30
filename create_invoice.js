import React, {Component} from "react";

import './create_invoice.css';

import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import {Link} from "react-router-dom";

export class NameForm extends React.Component {
    render() {
        return (
            <div className={'create_invoice'}>
                <h1 className={'header_create_invoice right-line-header'}>
                    Create invoice
                </h1>
                <form className={'form_create_invoice'} action="/" method="post">

                    <fieldset className={'form_into'}>
                        <ul>
                                <label htmlFor="name">Number:</label>
                                <div>
                                    <input className={"number_form"} type="text" id="number" name="number"/>
                                    <SettingsApplicationsIcon className={'icon_settings'}> </SettingsApplicationsIcon>
                                    <label className={'invoice_label'} htmlFor="date">Invoice Data:</label>
                                    <input className={'invoice_data'} type="date" id="date" placeholder={'Select data'}
                                           name="date"/>
                                    <li>
                                        <label className={'supply_label'} htmlFor="date">Supply Date:</label>
                                        <input className={'supply_data'} type="date" id="date"
                                               placeholder={'Select data'} name="date"/>
                                    </li>
                                    <label className={'label_textarea'} htmlFor="msg">Comment:</label>
                                    <li><textarea> </textarea></li>

                            </div>
                        </ul>
                    </fieldset>
                    <Link to="/">
                        <button className="button_save" type="submit">Save</button>
                    </Link>

                </form>
            </div>
        );
    }
}
