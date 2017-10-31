
import gameConfigs from '../configs/gameConfigs'
import { isNumber as _isNumber } from 'lodash'

/**
 * minus weapons from the two players and return the results
 *
 * @name getResult
 * @function
 * @param player1Weapon {Number}
 * @param player2Weapon {Number}
 * @return {Object} results for the two players in object format
 * e.g. {
 *   player1: 1,
 *   player2: 0
 * }
 * definitions: (configs/gameConfigs)
 * 0 => loose, 1 => win, 2 => tie
 */

const WIN = 1,
      LOOSE = 0,
      TIE = 2

export function getResult (player1Weapon, player2Weapon) {
  console.log('player1Weapon, player2Weapon', player1Weapon, player2Weapon)
  if (!_isNumber(player1Weapon) || !_isNumber(player2Weapon))
    return {
      player1: null,
      player2: null
    }

  let diff = Math.abs(player1Weapon - player2Weapon),
      isPlayer2Wins = false,
      isPlayer1Wins = false

  if (diff === 0)
    return {
      player1: TIE,
      player2: TIE
    }

  isPlayer2Wins = (diff % 2 === 0) ? true : false
  isPlayer1Wins = !isPlayer2Wins


  return {
    player1: isPlayer1Wins ? WIN : LOOSE,
    player2: isPlayer2Wins ? WIN : LOOSE
  }
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}