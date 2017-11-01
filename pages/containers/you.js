import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { get as _get } from 'lodash'

class You extends Component {
  render() {
    let { weapon, result } = this.props,
        weaponName = _get(weapon, 'name', ''),
        resultName = _get(result, 'name', ''),
        displayWeaponName = weaponName || '{weapon}',
        displayResultName = resultName || '{win / loss}'

    return (
      <p>
        You choose <strong>{displayWeaponName}</strong> and <strong>{displayResultName}</strong>
      </p>
    )
  }
}

You.propTypes = {
  
}

export default You