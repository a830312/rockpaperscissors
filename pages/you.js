import React, { Component } from 'react'
import PropTypes from 'prop-types'

class You extends Component {
  render() {
    let { weaponName, result } = this.props
    return (
      <div>
        <ul>
          <li>You</li>
          { weaponName ? <li>{ weaponName }</li> : false }
          { result ? <li>{ result }</li> : false }
        </ul>
      </div>
    )
  }
}

You.propTypes = {

}

export default You