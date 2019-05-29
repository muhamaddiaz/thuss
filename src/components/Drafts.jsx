import React, { Component } from 'react'
import styled from 'styled-components'
import CheckIcon from '../assets/img/success.svg'
import ErrorIcon from '../assets/img/error.svg'

const DraftsStyle = styled.div`
  width: 370px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 0 5px grey;
  padding: 25px;
  overflow: auto;
`

const DraftsTitleStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    color: teal
  }
`

const DraftsTitleButton = styled.button`
  border: none;
  background-color: teal
  color: white;
  padding: 10px 18px;
  border-radius: 20px;
`

const DraftsListsStyle = styled.div`
  & > p {
    color: grey;
    margin-bottom: 0;
    font-size: 1.2rem;
  }
  & > ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`

const DraftsListsItemStyle = styled.li`
  display: flex;
  width: 100%;
  float: left;
  overflow: auto;
  box-shadow: 0 0 5px grey;
  margin-top: 10px;
  border-radius: 5px;
  .list-text {
    h3 {
      color: teal;
      margin: 0;
    }
    span {
      color: grey;
    }
    display: inline-block;
    width: 75%;
    .padding {
      padding: 18px;
    }
  }
  .list-icon {
    display: inline-block;
    width: 25%;
    padding: 10px;
  }
`

const IconStyle = styled.i`
  color: ${props => {
    let c = props.type === 'success' ? 'green' : 'red'
    return c
  }}
`

export class Drafts extends Component {
  render() {
    return (
      <DraftsStyle>
        <DraftsTitle />
        <DraftsLists />
      </DraftsStyle>
    )
  }
}

function DraftsTitle() {
  return (
    <DraftsTitleStyle>
      <h2>Drafts</h2>
      <DraftsTitleButton>
        See more
      </DraftsTitleButton>
    </DraftsTitleStyle>
  )
}

function DraftsLists() {
  return (
    <DraftsListsStyle>
      <p>Today</p>
      <ul>
        <DraftsListsItem title="Visit Dayeuhkolot" date="22 Desember 2018" type="success"/>
        <DraftsListsItem title="Indahnya Kulyah" date="15 Desember 2018" type="error"/>
      </ul>
    </DraftsListsStyle>
  )
}

export function DraftsListsItem({title, date, type}) {
  const icon = type === 'success' ? (
    <IconStyle>
      <img src={CheckIcon} alt="checked"/>
    </IconStyle>
  ) : (
    <IconStyle>
      <img src={ErrorIcon} alt="error"/>
    </IconStyle>
  )
  return (
    <DraftsListsItemStyle>
      <div className="list-text">
        <div className="padding">
          <h3>{title}</h3>
          <span>{date}</span>
        </div>
        <div className="fading"></div>
      </div>
      <div className="list-icon">
        {icon}
      </div>
    </DraftsListsItemStyle>
  )
}

export default Drafts
