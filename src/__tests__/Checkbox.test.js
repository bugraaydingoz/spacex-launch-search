import React from 'react'
import renderer from 'react-test-renderer'
import { Checkbox } from '../components/checkbox'

test('renders correctly', () => {
  const tree = renderer
    .create(<Checkbox checked={true} label="Test" onChange={() => {}} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
