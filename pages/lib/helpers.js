
import gameConfigs from '../configs/gameConfigs'
import { isNumber as _isNumber, get as _get } from 'lodash'

const { weapons } = gameConfigs
const WIN = 1,
      LOOSE = 0,
      TIE = 2

/**
 * check if weaponId exists in current configs
 *
 * @name validateWeapon
 * @function
 * @param weaponId {Number} e.g. 1
 * @param weaponsConfigs {Array} e.g. [ '', 'scissors', 'paper', 'rock' ]
 * @return {Boolean} 
 * 
 */
export function validateWeapon (weaponId, weaponsConfigs = weapons) {
  let weaponName = _get(weaponsConfigs, weaponId, ''),
      isValidWeapon = weaponName ? true : false
  return isValidWeapon
}

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
export function getResult (player0Weapon, player1Weapon, weaponsConfigs = weapons) {
  if (!_isNumber(player0Weapon) || !_isNumber(player1Weapon) 
    || !validateWeapon(player0Weapon, weaponsConfigs)
    || !validateWeapon(player1Weapon, weaponsConfigs))
    return {
      player0: '',
      player1: ''
    }
  let diff = player0Weapon - player1Weapon,
      isPlayer1Wins = false,
      isPlayer0Wins = false,
      victor = '',
      weaponsNumber = weaponsConfigs.length - 1

  if (diff === 0)
    return {
      player0: TIE,
      player1: TIE
    }
  
  victor = (Math.abs(diff) % weaponsNumber === 1) ? 'player1' : 'player0'

  isPlayer0Wins = victor === 'player1'
  isPlayer1Wins = !isPlayer0Wins


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
  if (!_isNumber(min) || !_isNumber(max) || min > max)
    return 0

  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive
}