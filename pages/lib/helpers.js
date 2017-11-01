
import gameConfigs from '../configs/gameConfigs'
import { isNumber as _isNumber } from 'lodash'

/**
 * minus weapons from the two players and return the results
 *
 * @name getResult
 * @function
 * @param player0Weapon {Number}
 * @param player1Weapon {Number}
 * @return {Object} results for the two players in object format
 * e.g. {
 *   player0: 1,
 *   player1: 0
 * }
 * definitions: (configs/gameConfigs)
 * 0 => loose, 1 => win, 2 => tie
 */

const WIN = 1,
      LOOSE = 0,
      TIE = 2

export function getResult (player0Weapon, player1Weapon) {
  console.log('player0Weapon, player1Weapon', player0Weapon, player1Weapon)
  if (!_isNumber(player0Weapon) || !_isNumber(player1Weapon))
    return {
      player0: '',
      player1: ''
    }
    console.log('xxxxx')
  let diff = Math.abs(player0Weapon - player1Weapon),
      isPlayer1Wins = false,
      isPlayer0Wins = false

  if (diff === 0)
    return {
      player0: TIE,
      player1: TIE
    }

  isPlayer1Wins = (diff % 2 === 0) ? true : false
  isPlayer0Wins = !isPlayer1Wins


  return {
    player0: isPlayer0Wins ? WIN : LOOSE,
    player1: isPlayer1Wins ? WIN : LOOSE
  }
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}