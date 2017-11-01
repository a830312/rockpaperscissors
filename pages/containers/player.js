import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import You from '../containers/you'
import NPC from '../containers/npc'
import gameConfigs from '../configs/gameConfigs'
import { updatePlayerWeapon } from '../actions/game'
import { get as _get } from 'lodash'

const { weapons } = gameConfigs

class Player extends Component {
  constructor(props) {
    super(props)
    this._handleWeaponClicked = this._handleWeaponClicked.bind(this)
  }

  _handleWeaponClicked(e) {
    e.preventDefault()

    let { updatePlayerWeapon, player, num } = this.props,
        playerId = _get(player, 'id', ''),
        isNPC = playerId === 0,
        selectedWeapon = parseInt(e.target.value, 10)

    if (isNPC)
      return

    updatePlayerWeapon(num, selectedWeapon)
    
  }

  render() {
    let { player } = this.props,
        playerId = _get(player, 'id', '')
    return (
      <div>
        <p>weapons:</p>
        <ul>
        { weapons.map((w, i) => w ? (<li key={`w-${i}`}><button value={i} onClick={this._handleWeaponClicked}>{ w }</button></li>) : false) }
        </ul>
        { playerId ? <You {...this.props} /> : <NPC {...this.props} /> }
      </div>
    )
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    updatePlayerWeapon: bindActionCreators(updatePlayerWeapon, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Player)
