import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { get as _get } from 'lodash'

class NPC extends Component {
  render() {
    let { weapon, result } = this.props,
        weaponName = _get(weapon, 'name', ''),
        resultName = _get(result, 'name', '')

    return (
      <div>
        <ul>
          <li>NPC</li>
          { weaponName && resultName ? <li>{ weaponName }</li> : false }
          { resultName ? <li>{ resultName }</li> : false }
        </ul>
      </div>
    )
  }
}

NPC.propTypes = {
  
}

export default NPC