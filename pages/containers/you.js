import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { get as _get } from 'lodash'

class Human extends Component {
  render() {
    let { weapon, result } = this.props,
        weaponName = _get(weapon, 'name', ''),
        resultName = _get(result, 'name', '')

    return (
      <div>
        <ul>
          <li>Human</li>
          { weaponName ? <li>{ weaponName }</li> : false }
          { resultName ? <li>{ resultName }</li> : false }
        </ul>
      </div>
    )
  }
}

Human.propTypes = {
  
}

export default Human