/* eslint-env jest */
import { Game } from '../game'

import Enzyme from "enzyme"
import { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import React from "react"

Enzyme.configure({ adapter: new Adapter() })

describe("Game", () => {
  it("should show no players if game type haven't been choosen", () => {
    const props = {
      gameType: 2,
      player0: {},
      player0: {}
    }
    const app = shallow(<Game {...props}/>)
    expect(app.find(".options").exists()).to.be(false)
  })

  it("should show players if game type is selected", () => {
    const props = {
      gameType: 1,
      player0: {},
      player0: {}
    }
    const app = shallow(<Game {...props}/>)
    expect(app.find(".options__option")).to.have.length(2)
  })
})