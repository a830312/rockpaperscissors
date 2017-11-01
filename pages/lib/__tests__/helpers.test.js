/* eslint-env jest */

import { getRandomInt, getResult, validateWeapon } from '../helpers'
import gameConfigs from '../../configs/gameConfigs'
const SCISSORS = 1,
      PAPER = 2,
      STONE = 3,
      LIZARD = 4,
      SPOCK = 5, 
      PLAYER0 = 'player0',
      PLAYER1 = 'player1',
      WIN = 1,
      LOSS = 0,
      TIE = 2,
      WEAPONS = gameConfigs.weapons,
      RESULTS = gameConfigs.results

const resultsConfig = [
  {
    p0: SCISSORS,
    p1: PAPER,
    result: {
      player0: WIN,
      player1: LOSS
    }
  },
  {
    p0: SCISSORS,
    p1: SCISSORS,
    result: {
      player0: TIE,
      player1: TIE
    }
  },
  {
    p0: SCISSORS,
    p1: STONE,
    result: {
      player0: LOSS,
      player1: WIN
    }
  },
  {
    p0: PAPER,
    p1: PAPER,
    result: {
      player0: TIE,
      player1: TIE
    }
  },
  {
    p0: PAPER,
    p1: SCISSORS,
    result: {
      player0: LOSS,
      player1: WIN
    }
  },
  {
    p0: PAPER,
    p1: STONE,
    result: {
      player0: WIN,
      player1: LOSS
    }
  },
  {
    p0: STONE,
    p1: PAPER,
    result: {
      player0: LOSS,
      player1: WIN
    }
  },
  {
    p0: STONE,
    p1: SCISSORS,
    result: {
      player0: WIN,
      player1: LOSS
    }
  },
  {
    p0: STONE,
    p1: STONE,
    result: {
      player0: TIE,
      player1: TIE
    }
  }
]

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
  describe('when valid weapons are provided', () => {
    let verificateResult = function(player0Weapon, player1Weapon, expectedResult) {
      let result = getResult(player0Weapon, player1Weapon),
          { player0, player1 } = result
      expect(result).toHaveProperty(PLAYER0)
      expect(result).toHaveProperty(PLAYER1)
      expect(player0).toEqual(expectedResult.player0)
      expect(player1).toEqual(expectedResult.player1)  
    }

    resultsConfig.forEach((currentCase, i) => {
      it(`p0 choose ${WEAPONS[currentCase.p0]}, p1 choose ${WEAPONS[currentCase.p1]}, p0 ${RESULTS[currentCase.result.player0]} ,p1 ${RESULTS[currentCase.result.player1]}`, () => {
        verificateResult(currentCase.p0, currentCase.p1, currentCase.result)
      })
    })
  })
  describe('when invalid weapons are provided', () => {
    it('should return an object with invinidual result for the two players', () => {
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