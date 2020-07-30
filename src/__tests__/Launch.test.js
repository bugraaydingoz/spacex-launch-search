import React from 'react'
import renderer from 'react-test-renderer'
import { Launch } from '../components/launch'

const launch = {
  name: 'test',
  details: 'test',
  success: true,
  upcoming: false,
  links: {
    flickr: {
      original: ['test'],
    },
    article: 'test',
  },
  date_utc: '2020-09-01T00:00:00.000Z',
}

test('renders correctly', () => {
  const tree = renderer.create(<Launch {...launch} />).toJSON()
  expect(tree).toMatchSnapshot()
})
