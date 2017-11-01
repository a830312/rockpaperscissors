import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { get as _get } from 'lodash'

class NPC extends Component {
  render() {
    let { weapon, result, num } = this.props,
        weaponName = _get(weapon, 'name', ''),
        resultName = _get(result, 'name', '')

    return (
      <div>
        {`NPC${num} choose ${weaponName || '{weapon}'} and ${resultName || '{win / loss}'}`}
      </div>
    )
  }
}

NPC.propTypes = {
  
}

export default NPC