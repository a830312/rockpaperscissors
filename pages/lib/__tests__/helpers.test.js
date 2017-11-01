/* eslint-env jest */

import { getRandomInt, getResult, validateWeapon } from '../helpers'
const SCISSORS = 1,
      PAPER = 2,
      STONE = 3,
      LIZARD = 4,
      SPOCK = 5, 
      PLAYER0 = 'player0',
      PLAYER1 = 'player1',
      WIN = 1,
      LOSS = 0

describe('getRandomInt', () => {
  describe('when the valid range is provided', () => {
    it('should return correct number', () => {
      let min = 1,
          max = 3,
          randomNumber = getRandomInt(min, max)
      expect(randomNumber).toBeGreaterThanOrEqual(min)
      expect(randomNumber).toBeLessThanOrEqual(max)
    })
  })
  describe('when range is not provided', () => {
    it('should return 0', () => {
      let min = '',
          max = '',
          randomNumber = getRandomInt(min, max)
      expect(randomNumber).toEqual(0)
      expect(randomNumber).toEqual(0)
    })
  })
  describe('when invalid range is provided', () => {
    it('should return 0', () => {
      let min = 4,
          max = 1,
          randomNumber = getRandomInt(min, max)
      expect(randomNumber).toEqual(0)
      expect(randomNumber).toEqual(0)
    })
  })
})

describe('getResult', () => {
  describe('when invalid weapons are provided', () => {
    it('should return an object with empty result for the two players', () => {
      let player0Weapon = '',
          player1Weapon = '',
          result = getResult(player0Weapon, player1Weapon),
          { player0, player1 } = result
      expect(result).toHaveProperty(PLAYER0)
      expect(result).toHaveProperty(PLAYER1)
      expect(player0).toEqual('')
      expect(player1).toEqual('')
    })
  })
  describe('when two valid weapons are provided', () => {
    it('should return an object with invinidual result for the two players', () => {
      let player0Weapon = SCISSORS,
          player1Weapon = PAPER,
          result = getResult(player0Weapon, player1Weapon),
          { player0, player1 } = result
      expect(result).toHaveProperty(PLAYER0)
      expect(result).toHaveProperty(PLAYER1)
      expect(player0).toEqual(WIN)
      expect(player1).toEqual(LOSS)
    })
  })
  describe('when new weapons configs are provided', () => {
    it('shoud override the original weapons configs and still can get individual result correctly', () => {
      let weaponsCfg = [ '', 'scissors', 'paper', 'rock', 'lizard', 'spock' ],
          player0Weapon = LIZARD,
          player1Weapon = SPOCK,
          result = getResult(player0Weapon, player1Weapon, weaponsCfg),
          { player0, player1 } = result
      expect(result).toHaveProperty(PLAYER0)
      expect(result).toHaveProperty(PLAYER1)
      expect(player0).toEqual(WIN)
      expect(player1).toEqual(LOSS)
    })
  })
})

describe('validateWeapon', () => {
  describe('weaponId', () => {
    it('should should start from 1', () => {
      let weaponId = 0,
          isVliad = validateWeapon(weaponId)
      expect(isVliad).toBeFalsy()
    })
  })

  describe('When the weaponId exists in current configs', () => {
    it('should return true', () => {
      let weaponId = 1,
          isVliad = validateWeapon(weaponId)
      expect(isVliad).toBeTruthy()
    })
  })

  describe('When the weaponId exists in provided configs', () => {
    it('should return true', () => {
      let weaponsCfg = [ '', 'scissors', 'paper', 'rock', 'lizard', 'spock' ],
          weaponId = 5,
          isVliad = validateWeapon(weaponId, weaponsCfg)
      expect(isVliad).toBeTruthy()
    })
  })
})