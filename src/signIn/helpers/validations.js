/*
    Validation file
 */

import React         from 'react'
import { isEmail }   from 'validator'

export const email = (value) => {
    if (!isEmail(value)) {
      return <div><span className="form-error is-visible">Please Enter a valid email.</span></div>
    }
  }

export const required = (value, props) => {
  if (!value || (props.isCheckable && !props.checked)) {
    return <div><span className="form-error is-visible">Required Field.</span></div>
  }
}

export const password = (value, props, components) => {
  if (value !== components['confirm'][0].value) {
    return <div><span className="form-error error">Passwords do not match.</span></div>
  }
}