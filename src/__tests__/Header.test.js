import React from 'react'
// import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { Header } from '../components/header'

// test('has correct label', () => {
//   const label = 'length'
//   const { getByTestId } = render(
//     <Header name={label} value={{ min: 10, max: 20 }} />
//   )

//   expect(getByTestId('filter-label').innerHTML).toEqual(label)
// })

test('renders correctly', () => {
  const tree = renderer.create(<Header />).toJSON()
  expect(tree).toMatchSnapshot()
})
