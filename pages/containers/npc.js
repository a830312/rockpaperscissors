import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { get as _get } from 'lodash'

class NPC extends Component {
  render() {
    let { weapon, result, num } = this.props,
        weaponName = _get(weapon, 'name', ''),
        resultName = _get(result, 'name', ''),
        displayWeaponName = (resultName && weaponName) ? weaponName : '{weapon}',
        displayResultName = resultName || '{{win / loss}}'

    return (
      <p>
        NPC{num} choose <strong>{displayWeaponName}</strong> and <strong>{displayResultName}</strong>
      </p>
    )
  }
}

export default NPC