import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { get as _get } from 'lodash'

class NPC extends Component {
  render() {
    let { weapon, result, num } = this.props,
        weaponName = _get(weapon, 'name', ''),
        resultName = _get(result, 'name', ''),
        displayWeaponName = (resultName && weaponName) ? weaponName.toUpperCase() : '{weapon}',
        displayResultName = resultName.toUpperCase() || '{{win / loss}}',
        displayNum = num + 1

    return (
      <p>
        NPC{displayNum} choose <strong>{displayWeaponName}</strong> and <strong>{displayResultName}</strong>
      </p>
    )
  }
}

NPC.propTypes = {
  weapon: PropTypes.object,
  result: PropTypes.object,
  num: PropTypes.number
}

export default NPC