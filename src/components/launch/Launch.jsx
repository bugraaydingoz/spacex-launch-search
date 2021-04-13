import React from 'react'

// Components
import { Button } from '../button'
import { Status } from '../status'

// Styles
import {
  LaunchContainer,
  Image,
  DetailsContainer,
  Heading3,
  Row,
  Column,
  FlexEnd,
  Paragraph,
  Text,
  DetailText,
  Dot,
} from './styles'

function truncate(text, length) {
  if (!text) {
    return ''
  }

  if (text.length < length) {
    return text
  }

  return text.substr(0, length) + '...'
}

function getStatus(success, upcoming) {
  if (upcoming) {
    return 'future'
  }

  if (success) {
    return 'success'
  }

  return 'failure'
}

function formatDate(utc) {
  const date = new Date(utc)
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
}

export const Launch = React.memo((props) => {
  const {
    name,
    links,
    details,
    success,
    upcoming,
    date_utc,
    rocketName,
  } = props
  const imageUrl = links.flickr.original[0] || './icons/space-ship.svg'

  function openTab(link) {
    const tab = window.open(link, '_blank')
    tab.focus()
  }

  return (
    <LaunchContainer>
      <Image src={imageUrl} alt="Launch picture" lazy />
      <DetailsContainer>
        {/* Title */}
        <Row style={{ justifyContent: 'unset' }}>
          <Heading3>{name}</Heading3>
          <Status type={getStatus(success, upcoming)} />
        </Row>

        {/* Details */}
        <Row>
          <Paragraph>{truncate(details, 80)}</Paragraph>
        </Row>
        <Row>
          <Column>
            <Details rocket={rocketName} date={formatDate(date_utc)} />
          </Column>
          <FlexEnd>
            <Button onClick={() => openTab(links.article)}>LEARN MORE</Button>
          </FlexEnd>
        </Row>
      </DetailsContainer>
    </LaunchContainer>
  )
})

function Details({ rocket, date }) {
  return (
    <>
      <DetailText>
        <Dot />
        &nbsp; Launched on &nbsp;<Text primary>{date}</Text>
      </DetailText>
      <DetailText>
        <Dot />
        &nbsp;&nbsp;<Text primary>{rocket}</Text>&nbsp;&nbsp;rocket is used
      </DetailText>
    </>
  )
}
