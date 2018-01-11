import React, { Component } from 'react'
import Form                 from 'react-validation/build/form'
import Button               from 'react-validation/build/button'
import Slider               from 'react-rangeslider'
import                           'react-rangeslider/lib/index.css'

import                           './index.css'

export default class Survey extends Component {

    state = {
        technologies: [
            "Aerospace & Transportation",
            "Industrial Technologies",
            "Energy & Green Technologies",
            "Food & Agriculture",
            "IT & Communications",
            "Life Sciences"
        ],
        sectors: [
            "Food and Agriculture",
            "Life Sciences: Medical Devices",
            "Life Sciences: Medical Diagnostics",
            "Life Sciences: Biopharma",
            "Computing: Hardware",
            "Energy",
            "Computing: Software",
            "Computing: Networks",
            "Connected Devices",
            "Chemicals",
            "Space Exploration"
        ],
        selectedTech: [],
        selectedSector: [],
        investmentsNumber: 10
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    add(item, category) {

        let removal = false

        if (category === "tech") {
            for (let i = 0; i < this.state.selectedTech.length; i++) {
                if (item === this.state.selectedTech[i]) {
                    this.state.selectedTech.splice(i, 1)
                    removal = true
                }
            }

            if (!removal) {
                this.state.selectedTech.push(item)
            }
        } else {
            for (let i = 0; i < this.state.selectedSector.length; i++) {
                if (item === this.state.selectedSector[i]) {
                    this.state.selectedSector.splice(i, 1)
                    removal = true
                }
            }

            if (!removal) {
                this.state.selectedSector.push(item)
            }
        }

        this.setState(prevState => (this.state))
    }

    handleChange = value => {};

    handleSubmit = props => (e) => {
        e.preventDefault()

        let data = {
            technologies: this.state.selectedTech,
            sectors: this.state.selectedSector,
            investments: this.state.investmentsNumber
        }

        // final pieces of data captured, can the last two pages to server from here
        props.saveValues(data)
        props.nextStep()
    }

  render() {

    let investmentsNumber = this.state.investmentsNumber
    let technologies = this.state.technologies
    let sectors      = this.state.sectors

    const horizontalLabels = {
      0: '0',
      5: '5',
      10: '10',
      15: 'Over 10'
    }

    return (
      <div className="App">

        <div className="spacer-medium"></div>

        <div className="container survey">
            <div className="col-sm-8 col-md-12 col-lg-12 centerColumn">
                <h1 className="survey-title">We have a few questions to personalize your experience.</h1>
                <div className="spacer-small"></div>
            </div>

            <div>
                <Form onSubmit={this.handleSubmit(this.props)}>
                    <p className="align-left"><strong>What technologies are you interested in?</strong></p>
                    <div className="btn-group" data-toggle="buttons">
                        {
                            technologies.map((tech, i) => {

                                return <label key={i} className="btn btn-primary" onClick={() => {this.add(tech, "tech")}}>
                                            <input type="checkbox" name="options" value={tech} autoComplete="off"></input>
                                            <span>{tech}</span>
                                       </label>

                            })
                        }
                    </div>

                    <div className="spacer-medium"></div>

                    <p className="align-left"><strong>What sectors are you interested in?</strong></p>
                    <div className="btn-group" data-toggle="buttons">
                      {
                          sectors.map((sector, i) => {

                              return <label key={i} className="btn btn-primary" onClick={() => {this.add(sector, "sector")}}>
                                          <input type="checkbox" name="options" value={sector} autoComplete="off"></input>
                                          <span>{sector}</span>
                                     </label>

                          })
                      }
                    </div>

                    <div className="spacer-medium"></div>

                    <p className="align-left"><strong>How many angel investments have you made?</strong></p>
                    <div className='slider custom-labels'>
                        <Slider
                          min={0}
                          max={15}
                          tooltip={false}
                          value={investmentsNumber}
                          labels={horizontalLabels}
                          onChange={this.handleChange}
                        />
                    </div>

                    <div className="spacer-medium"></div>

                    <Button className="btn button continue-button">
                        Continue
                    </Button>

                    <div className="spacer-medium"></div>

                </Form>
            </div>
        </div>

      </div>
    );
  }
}
