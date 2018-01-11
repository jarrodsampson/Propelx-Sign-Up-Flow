import React, { Component } from 'react'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import Button from 'react-validation/build/button'

import SocialButton from '../../helpers/socialButton'
import { email, required, password } from '../../helpers/validations';
import './index.css'

export default class SignUp extends Component {

  state = { isLoading: false }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  handleSocialLogin = (user) => {
    this.props.nextStep()
  }

  handleSocialLoginFailure = (err) => {
    console.error(err)
  }

  handleSubmit = props => (e) => {
      e.preventDefault()

      this.setState(prevState => ({
            isLoading: true
        }))

      let data = {
        firstName: e.target.first.value,
        lastName: e.target.last.value,
        email: e.target.email.value,
        pass: e.target.pass.value
      }

      props.saveValues(data)

      // save initial data here
      setTimeout(() => {
          // API errors checked here
          // timeout to simulate server call
          props.nextStep()
      }, 3000);
  }

  render() {

    return (
      <div className="App">

        <div className="spacer-medium"></div>

        <div className="container">
            <div className="col-sm-6 col-md-8 col-lg-8 centerColumn">

                <h1>Sign Up</h1>
                <h3>Ready to discover breakthrough startups?</h3>
                <p>Creating an account allows you to access all of the investment opportunities on Propel(x).</p>
                <p>We recommend singing up with Linkedin to help personalize your Propel(x) profile.</p>

                <div className="spacer-small"></div>
                <div>
                    <SocialButton
                      className="btn button linkedin-button"
                      provider='linkedin'
                      appId='75s7awwd9uoq9u'
                      onLoginSuccess={this.handleSocialLogin}
                      onLoginFailure={this.handleSocialLoginFailure}
                    >
                      Sign Up with LinkedIn
                    </SocialButton>
                </div>
                <div className="spacer-small"></div>

                <p>Don't have a LinkedIn account?&nbsp;
                    <a href="">
                        Register by email
                    </a>
                </p>

                <div className="col-sm-6 col-md-8 col-lg-8 centerColumn">
                    <Form className="register" onSubmit={this.handleSubmit(this.props)}>
                      <div className="form-group">
                        <Input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            name='first'
                            validations={[required]}/>
                      </div>
                      <div className="form-group">
                        <Input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            name='last'
                            validations={[required]}/>
                      </div>
                      <div className="form-group">
                        <Input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name='email'
                            validations={[required, email]}/>
                      </div>
                      <div className="form-group">
                        <Input
                            type="password"
                            className="form-control"
                            placeholder="Create Password"
                            name='pass'
                            validations={[required, password]}/>
                      </div>
                      <div className="form-group">
                        <Input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            name='confirm'
                            validations={[required]}/>
                      </div>
                      <Button className={(this.state.isLoading ? "disabled" : "" ) + " btn button continue-button"}> {this.state.isLoading ? "Creating..." : "Register"} </Button>
                    </Form>
                </div>
            </div>

            <div className="spacer-medium"></div>

            <p>Already have an account?&nbsp;
                <a href="">
                    Sign in
                </a>
            </p>

            <div className="spacer-medium"></div>
        </div>
      </div>
    );
  }
}
