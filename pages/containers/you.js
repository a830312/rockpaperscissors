import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { get as _get } from 'lodash'

class You extends Component {
  render() {
    let { weapon, result } = this.props,
        weaponName = _get(weapon, 'name', ''),
        resultName = _get(result, 'name', '')

    return (
      <div>
        {`You choose ${weaponName || '{weapon}'} and ${resultName || '{win / loss}'}`}
      </div>
    )
  }
}

You.propTypes = {
  
}

export default You