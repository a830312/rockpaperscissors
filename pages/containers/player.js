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

    if (isNPC) //is NPC
      return

    updatePlayerWeapon(num, selectedWeapon)
    
  //   let { player1, player2 } = this.state,
  //       { type } = this.props,
  //       { results, players, weapons } = gameConfigs,
  //       player1Weapon = player1.weapon,
  //       player2Weapon = e.target.value,
  //       player2WeaponName = weapons[player2Weapon],
  //       caculatedResult = {},
  //       p1CaculatedResult = '',
  //       p2CaculatedResult = '',
  //       player1Result = '',
  //       player2Result = '',
  //       player1Info = {},
  //       player2Info = {}

  //   player2Weapon = parseInt(player2Weapon, 10)
  //   caculatedResult = getResult(player1Weapon, player2Weapon),
  //   p1CaculatedResult = _get(caculatedResult, 'player1', ''),
  //   p2CaculatedResult = _get(caculatedResult, 'player2', ''),
  //   player1Result = _get(results, p1CaculatedResult, ''),
  //   player2Result = _get(results, p2CaculatedResult, ''),
  //   player1Info = Object.assign({}, player1, {result: player1Result})
  //   player2Info = Object.assign({}, player2, {
  //     weaponName: player2WeaponName,
  //     weapon: player2Weapon,
  //     type: players[type],
  //     result: player2Result
  //   })

  //   this.setState({
  //     player1: player1Info,
  //     player2: player2Info
  //   })
  }

  render() {
    let { player } = this.props,
        playerId = _get(player, 'id', '')
    return (
      <div>
        <p>weapons:</p>
        <ul>
        { weapons.map((w, i) => (<li key={`w-${i}`}><button value={i} onClick={this._handleWeaponClicked}>{ w }</button></li>)) }
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
