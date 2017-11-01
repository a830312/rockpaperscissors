
import gameConfigs from '../configs/gameConfigs'
import { isNumber as _isNumber } from 'lodash'

const WIN = 1,
      LOOSE = 0,
      TIE = 2

/**
 * minus weapons from the two players and return the results
 *
 * @name getResult
 * @function
 * @param player0Weapon {Number} e.g. 2
 * @param player1Weapon {Number} e.g. 1
 * @return {Object} results for the two players in object format
 * e.g. {
 *   player0: 1,
 *   player1: 0
 * }
 * definitions: (configs/gameConfigs)
 * 0 => loose, 1 => win, 2 => tie
 */

export function getResult (player0Weapon, player1Weapon) {

  if (!_isNumber(player0Weapon) || !_isNumber(player1Weapon))
    return {
      player0: '',
      player1: ''
    }
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


/**
 * generate a random int between min and max
 *
 * @name getResult
 * @function
 * @param min {Number} e.g. 1
 * @param max {Number} e.g. 3
 * @return {Number} 1 - 3
 * 
 */
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}