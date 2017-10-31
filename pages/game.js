import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Player from './player'
import { getResult, getRandomInt } from './lib/helpers'
import gameConfigs from './configs/gameConfigs'
import { get as _get } from 'lodash'

class Game extends Component {
  constructor(props) {
    super(props)
    this._handleWeaponClicked = this._handleWeaponClicked.bind(this)
    this._getRandomWeaponId = this._getRandomWeaponId.bind(this)
    this._initUserInfo = this._initUserInfo.bind(this)

    let player1 = this._initUserInfo(true),
        player2 = this._initUserInfo()

    this.state = {
      player1,
      player2
    }
  }

  componentWillReceiveProps({ type }) {
    if (type !== null) {
      let newPlayer1 = this._initUserInfo(true),
          newPlayer2 = this._initUserInfo()

      this.setState({
        player1: newPlayer1,
        player2: newPlayer2
      })
    }
  }

  _getRandomWeaponId() {
    let { weapons, players } = gameConfigs,
        lastWeaponId = Math.max(0, weapons.length),
        randomNum = getRandomInt(0, lastWeaponId)

    return randomNum
  }

  _initUserInfo(isNPC = false) {
    let type = isNPC ? 0 : 1,
        { weapons, players } = gameConfigs,
        weaponId = isNPC ? this._getRandomWeaponId() : '',
        playerInfo = {
          type: _get(players, type, ''),
          weapon: weaponId,
          weaponName: _get(weapons, weaponId, ''),
          result: ''
        }
    return playerInfo
  }

  _handleWeaponClicked(e) {
    let { player1, player2 } = this.state,
        { type } = this.props,
        { results, players, weapons } = gameConfigs,
        player1Weapon = player1.weapon,
        player2Weapon = e.target.value,
        player2WeaponName = weapons[player2Weapon],
        caculatedResult = {},
        p1CaculatedResult = '',
        p2CaculatedResult = '',
        player1Result = '',
        player2Result = '',
        player1Info = {},
        player2Info = {}

    player2Weapon = parseInt(player2Weapon, 10)
    caculatedResult = getResult(player1Weapon, player2Weapon),
    p1CaculatedResult = _get(caculatedResult, 'player1', ''),
    p2CaculatedResult = _get(caculatedResult, 'player2', ''),
    player1Result = _get(results, p1CaculatedResult, ''),
    player2Result = _get(results, p2CaculatedResult, ''),
    player1Info = Object.assign({}, player1, {result: player1Result})
    player2Info = Object.assign({}, player2, {
      weaponName: player2WeaponName,
      weapon: player2Weapon,
      type: players[type],
      result: player2Result
    })

    this.setState({
      player1: player1Info,
      player2: player2Info
    })
  }

  render() {
    let { type } = this.props,
        { player1, player2 } = this.state,
        { weapons } = gameConfigs,
        isTypeSelected = !!(type !== null)
    return (
      <div>
        {
          type ? (
            <div>
              <p>weapons you have</p>
              <ul>
              { weapons.map((w, i) => (<li key={`w-${i}`}><button value={i} onClick={this._handleWeaponClicked}>{ w }</button></li>)) }
              </ul>
            </div>
          ) : false
        }
        {
          isTypeSelected ? (
            <ul>
              <li><Player player={0} {...player1} /></li>
              <li><Player player={type} {...player2} /></li>
            </ul>
          ) : false
        }
      </div>
    )
  }
}

Game.propTypes = {
  type: PropTypes.number
}

export default Game