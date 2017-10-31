import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NPC extends Component {
  render() {
    let { weaponName, result } = this.props
    return (
      <div>
        <ul>
          <li>NPC</li>
          { result ? <li>{ weaponName }</li> : false }
          { result ? <li>{ result }</li> : false }
        </ul>
      </div>
    )
  }
}

NPC.propTypes = {
  
}

export default NPC