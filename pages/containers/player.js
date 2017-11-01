import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import You from '../components/you'
import NPC from '../components/npc'
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
        playerId = _get(player, 'id', ''),
        isNPC = playerId ? false : true,
        wording = isNPC ? 'NPC has got a weapon' : 'Please Choose a weapon'
    return (
      <div>
        <p className="wording">{ wording }</p>
        <ul className="weapons">
        {
          weapons.map((w, i) => w ? (
            <li key={`w-${i}`} className="weapons__options">
              <button value={i}
                disabled={isNPC}
                className="btn options__option-btn"
                onClick={this._handleWeaponClicked}>{ w }</button>
            </li>
          ) : false)
        }
        </ul>
        <div className="player">{ isNPC ? <NPC {...this.props} /> : <You {...this.props} /> }</div>
      </div>
    )
  }
}

Player.propTypes = {
  updatePlayerWeapon: PropTypes.func.isRequired,
  player: PropTypes.object,
  num: PropTypes.number
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePlayerWeapon: bindActionCreators(updatePlayerWeapon, dispatch)
  }
}

export { Player }
export default connect(null, mapDispatchToProps)(Player)
