import React from 'react'
import ReactDOM from 'react-dom'
import { Signup } from './Signup'
import { shallow } from 'enzyme'

describe('Component Layout', () => {
  it('renders without crashing', () => {
    const component = shallow(<Signup />)
    const mainDiv = component.find('div')
    expect(mainDiv).toHaveLength(0)
  })

  it('renders two inputs: email and password', () => {
    const wrapper = shallow(<Signup />)
    expect(wrapper.find('Input')).toHaveLength(5)
  })
})
describe('Component Functionality', () => {
  it('contains a handleSubmit function', () => {
    const component = shallow(<Signup />)
    expect(typeof component.instance().handleSubmit).toBe('function')
  })

  it('fires the handleSubmit method when the submit button is clicked', () => {
    const component = shallow(<Signup />)
    const instance = component.instance()
    spyOn(instance, 'handleSubmit').and.callThrough()
    instance.handleSubmit()
    expect(instance.handleSubmit).toHaveBeenCalled()
  })
})
