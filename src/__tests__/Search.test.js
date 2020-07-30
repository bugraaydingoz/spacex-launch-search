import React from 'react'
import renderer from 'react-test-renderer'
import { Search } from '../components/search'

test('renders correctly', () => {
  const tree = renderer.create(<Search onChange={() => {}} />).toJSON()
  expect(tree).toMatchSnapshot()
})
