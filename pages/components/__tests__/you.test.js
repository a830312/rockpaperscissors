/* eslint-env jest */

import React from "react"
import renderer from "react-test-renderer"
import App from "../you.js"

describe("with snapshot testing", () => {
  it("matches the snapshot", () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})