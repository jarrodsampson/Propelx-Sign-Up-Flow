import React, { Component } from 'react';

import                           './signIn.css';
import SignUp               from './steps/signUp'
import InvestorType         from './steps/investorType'
import Survey               from './steps/survey'

let data = {
    firstName: null,
    lastName: null,
    email: null,
    pass: null,
    accredited: false,
    investorType: null,
    technologies: [],
    sectors: [],
    investments: 0
}

export default class SignIn extends Component {

    state = {
        step: 1
    }

    static propTypes = {}

    nextStep = () => {
        if (this.state.step >= 3) {
            this.setState(prevState => ({
                step: 1
            }))
            return alert("Profile Completed!")
        }

        this.setState(prevState => ({
            step: this.state.step + 1
        }))

    }

    saveValues = (fields) => {
        data = Object.assign({}, data, fields)
        console.log(data)
    }

    render() {

        switch (this.state.step) {
            case 1:
                return <SignUp
                        nextStep = {this.nextStep}
                        saveValues = {this.saveValues} />
            case 2:
                return <InvestorType
                        nextStep = {this.nextStep}
                        saveValues = {this.saveValues} />
            case 3:
                return <Survey
                        nextStep = {this.nextStep}
                        saveValues = {this.saveValues} />
            default:
        }
    }
}