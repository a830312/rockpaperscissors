/* eslint-env jest */
import { Options } from '../options'

import Enzyme from "enzyme"
import { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import React from "react"

Enzyme.configure({ adapter: new Adapter() })

describe("Options", () => {
  describe("game type options", () => {
    it("should show game type options if game type haven't been choosen", () => {
      const props = {
        gameType: 2,
        resetGameType: jest.fn(),
        updateGameType: jest.fn()
      }
      const app = shallow(<Options {...props}/>)
      expect(app.find(".options").exists()).to.be(true)
    })

    it("should hide game type options if game type is Selected", () => {
      const props = {
        gameType: 1,
        resetGameType: jest.fn(),
        updateGameType: jest.fn()
      }
      const app = shallow(<Options {...props}/>)
      expect(app.find(".options").exists()).to.be(false)
    })
  })

  describe("restart", () => {
    it("should hide restart button if game type haven't been choosen", () => {
      const props = {
        gameType: 2,
        resetGameType: jest.fn(),
        updateGameType: jest.fn()
      }
      const app = shallow(<Options {...props}/>)
      expect(app.find(".restart").exists()).to.be(false)
    })

    it("should show restart button if game type is Selected", () => {
      const props = {
        gameType: 1,
        resetGameType: jest.fn(),
        updateGameType: jest.fn()
      }
      const app = shallow(<Options {...props}/>)
      expect(app.find(".restart").exists()).to.be(true)
    })
  })
})