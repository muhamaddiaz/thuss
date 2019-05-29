import React, { Component } from 'react'
import styled from 'styled-components'

const QuickActionStyle = styled.div`
  width: 370px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 0 5px grey;
  padding: 25px;
`

const QuickActionButton = styled.button`
  background-color: teal;
  color: white;
  padding: 12px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 20px;
`

const QuickActionTextStyle = styled.div`
  h2 {
    color: teal;
    margin-top: 0;
    font-size: 25px;
  }
  & > p {
    color: grey;
  }
`

export class QuickAction extends Component {
  render() {
    return (
      <QuickActionStyle>
        <QuickActionText />
        <QuickActionButton>
          Review Actions
        </QuickActionButton>
      </QuickActionStyle>
    )
  }
}

export function QuickActionText() {
  return (
    <QuickActionTextStyle>
      <h2>Quick Action</h2>
      <p>You have 2 articles to publish</p>
      <p>3 Publisher ready to publish</p>
    </QuickActionTextStyle>
  )
}

export default QuickAction
