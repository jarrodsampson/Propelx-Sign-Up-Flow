import React, { Component } from 'react';
import Form                 from 'react-validation/build/form'
import Input                from 'react-validation/build/input'
import Button               from 'react-validation/build/button'

import                           './index.css';
import { required }         from '../../helpers/validations';

export default class InvestorType extends Component {

  componentDidMount() {
      window.scrollTo(0, 0)
  }

  handleSubmit = props => (e) => {
      e.preventDefault()

      let data = {
          accredited: e.target.accredited.value,
          investorType: e.target.options.value,
      }
      props.saveValues(data)
      props.nextStep()
  }

  render() {

    return (
      <div className="App">

        <div className="spacer-medium"></div>

        <div className="container investor">
            <div className="col-sm-8 col-md-8 col-lg-8 centerColumn">
                <h1>Welcome to Propel(x)</h1>
                <div className="spacer-small"></div>
                  <p>Thank you for signing up. Your account is currently pending approval for full access to all of our investment
                  opportunities. By law, we're required to ask you a few questions. To expedite your access to deals, please answer
                  a short survey.</p>

                <div className="spacer-small"></div>

                <Form onSubmit={this.handleSubmit(this.props)}>
                    <p className="align-left"><strong>I am investing as:</strong></p>
                    <div className="btn-group" data-toggle="buttons">
                      <label className="btn btn-primary active">
                        <input type="radio" name="options" id="option1" value="individual" autoComplete="off" defaultChecked></input>
                        <span>an individual</span>
                      </label>
                      <label className="btn btn-primary">
                        <input type="radio" name="options" id="option2" value="non-institutional entity" autoComplete="off"></input>
                        <span>a non-institutional entity <br /> (e.g. trusts & personal LLCs)</span>
                      </label>
                      <label className="btn btn-primary">
                        <input type="radio" name="options" id="option3" value="institution" autoComplete="off"></input>
                        <span>an institution <br /> (e.g. VCs, corporate funds, family offices)</span>
                      </label>
                    </div>

                    <div className="well align-left">
                        <div className="custom-control custom-radio">
                          <Input
                              type="radio"
                              id="acc"
                              className="custom-control-input"
                              name='accredited'
                              value={true}
                              validations={[required]}/>
                          <label className="" htmlFor="acc">I am an accredited Investor</label>
                        </div>
                        <p className="">By joining, you are agreeing to Propel(x) Terms of Use and Privacy Policy</p>
                    </div>
                    <div className="spacer-small"></div>
                    <Button className="btn button continue-button">
                        Investment Objectives Survey
                    </Button>
                </Form>
            </div>

        </div>
      </div>
    );
  }
}
