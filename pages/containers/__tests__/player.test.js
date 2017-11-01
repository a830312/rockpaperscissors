/* eslint-env jest */
import { Player } from '../game'

import Enzyme from "enzyme"
import { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import React from "react"

Enzyme.configure({ adapter: new Adapter() })

describe("Player", () => {
  describe("when player is a npc", () => {
    it("should show correct wording", () => {
      const props = {
        player: {
          id: ''
        },
        num: 0,
        updatePlayerWeapon: jest.fn()
      }
      const app = shallow(<Player {...props}/>)
      expect(app.find(".wording").text()).to.equal("NPC has got a weapon")
    })

    it("should show weapons", () => {
      const props = {
        player: {
          id: ''
        },
        num: 0,
        updatePlayerWeapon: jest.fn()
      }

      const app = shallow(<Player {...props}/>)
      expect(app.find(".weapons__options")).to.have.length(3)
    })

    it("should show players if game type is selected", () => {
      const props = {
        player: {
          id: ''
        },
        num: 0,
        updatePlayerWeapon: jest.fn()
      }
      const app = shallow(<Player {...props}/>)
      expect(app.find(".player").text()).to.equal(<NPC />)
    })
  })


  describe("when player is a human", () => {
    it("should show correct wording", () => {
      const props = {
        player: {
          id: ''
        },
        num: 0,
        updatePlayerWeapon: jest.fn()
      }
      const app = shallow(<Player {...props}/>)
      expect(app.find(".wording").text()).to.equal("Please Choose a weapon")
    })

    it("should show weapons", () => {
      const props = {
        player: {
          id: ''
        },
        num: 0,
        updatePlayerWeapon: jest.fn()
      }

      const app = shallow(<Player {...props}/>)
      expect(app.find(".weapons__options")).to.have.length(3)
    })

    it("should show players if game type is selected", () => {
      const props = {
        player: {
          id: ''
        },
        num: 0,
        updatePlayerWeapon: jest.fn()
      }
      const app = shallow(<Player {...props}/>)
      expect(app.find(".player").text()).to.equal(<You />)
    })
  })

  
})