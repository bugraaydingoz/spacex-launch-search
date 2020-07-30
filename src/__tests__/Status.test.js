import React from 'react'
import renderer from 'react-test-renderer'
import { Status } from '../components/status'

test('renders correctly', () => {
  const tree = renderer.create(<Status type="success" />).toJSON()
  expect(tree).toMatchSnapshot()
})
