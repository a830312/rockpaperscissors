import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Player from './player'
import { getResult } from './lib/helpers'

class Game extends Component {
  constructor(props) {
    super(props)
    this._handleWeaponClicked = this._handleWeaponClicked.bind(this)
    let { type, configs } = props,
        { weapons } = configs,
        weapon1 = Math.floor(Math.random() * weapons.length) + 1,
        player1 = {
          type: 'npc',
          weapon: weapon1,
          weaponName: weapons[weapon1],
          result: ''
        },
        player2 = {
          type: '',
          weapon: '',
          weaponName: '',
          result: ''
        }

    this.state = {
      player1,
      player2
    }
  }

  _handleWeaponClicked(e) {
    let { player1, player2 } = this.state,
        { configs, type } = this.props,
        { results } = configs,
        player1Weapon = player1.weapon,
        player2Weapon = e.target.value,
        player2WeaponName = configs.weapons[player2Weapon],
        caculatedResult = {}

    player2Weapon = parseInt(player2Weapon, 10)
    caculatedResult = getResult(player1Weapon, player2Weapon)
    player1.result = results[caculatedResult.player1]
    player2.weaponName = player2WeaponName
    player2.weapon = player2Weapon
    player2.type = type ? 'You' : 'NPC'
    player2.result = results[caculatedResult.player2]

    this.setState({
      player1,
      player2
    })
  }

  render() {
    let { type, configs } = this.props,
        { player1, player2 } = this.state,
        { weapons } = configs
    return (
      <div>
        {
          type ? (
            <ul>
            { weapons.map((w, i) => (<li key={`w-${i}`}><button value={i} onClick={this._handleWeaponClicked}>{ w }</button></li>)) }
            </ul>
          ) : false
        }
        {
          <ul>
            <li><Player player={0} {...player1} /></li>
            <li><Player player={type} {...player2} /></li>
          </ul>
        }
      </div>
    )
  }
}

Game.propTypes = {
  type: PropTypes.number
}

Game.defaultProps = {
  configs: {
    weapons: [ 'scissors', 'paper', 'rock' ],
    players: [ 'npc', 'you' ],
    results: ['loose', 'win', 'tie']
  }
}

export default Game