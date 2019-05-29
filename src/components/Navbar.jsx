import React, { Component } from 'react'
import styled from 'styled-components'

import Image1 from '../assets/img/person-1.jpg'

const NavbarStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 10px grey;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 15px;
  align-items: center;
`

const MyProfileStyle = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  img {
    width: 100%;
    border-radius: 50%;
  }
`

const MyProfileText = styled.div`
  margin-left: 10px;
  h2 {
    font-size: 20px;
    color: teal;
    margin: 0;
  }
  span {
    color: grey;
    font-size: 10px;
  }
`

const NavbarStatusStyle = styled.ul`
  flex-grow: 2;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    float: left;
  }
`

const NavbarStatusItem = styled.li`
  margin-left: 20px;
  h2 {
    font-size: 15px;
    color: teal;
    margin: 0;
  }
  span {
    color: grey;
    font-size: 10px;
  }
`

const NavbarPeopleStyle = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-size: 15px;
    color: teal;
    margin: 0;
  }
`

const PeopleImageCol = styled.div`
  position: relative;
  .gradient {
    position: absolute;
    background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,.5));
    z-index: 2;
    width: 100%;
    top: 0;
    bottom: 0;
  }
  img {
    width: 100%;
    border-radius: 50%;
  }
  div {
    margin-left: 10px;
  }
`

const RoundImage = styled.div`
  display: inline-block;
  width: ${props => props.radius || 0};
  height: ${props => props.radius || 0};
  border-radius: 50%;
`

export class Navbar extends Component {
  render() {
    return (
      <NavbarContainer />
    )
  }
}

function NavbarContainer() {
  return (
    <NavbarStyle>
      <MyProfile />
      <NavbarStatus />
      <NavbarPeople />
    </NavbarStyle>
  )
}

export function MyProfile() {
  return (
    <MyProfileStyle>
      <RoundImage radius="50px">
        <img src={Image1} alt="profie-image" />
      </RoundImage>
      <MyProfileText>
        <h2>
          Jane Doe
        </h2>
        <span>
          Writer
        </span>
      </MyProfileText>
    </MyProfileStyle>
  )
}

export function NavbarStatus() {
  return (
    <NavbarStatusStyle>
      <NavbarStatusItem>
        <span>
          Claps
        </span>
        <h2>
          454 / d
        </h2>
      </NavbarStatusItem>
      <NavbarStatusItem>
        <span>
          Connections
        </span>
        <h2>
          32 Publisher
        </h2>
      </NavbarStatusItem>
      <NavbarStatusItem>
        <span>
          People
        </span>
        <h2>
          154 People
        </h2>
      </NavbarStatusItem>
      <NavbarStatusItem>
        <span>
          Total Revenue
        </span>
        <h2>
          $ 2.32 / d
        </h2>
      </NavbarStatusItem>
    </NavbarStatusStyle>
  )
}

export function NavbarPeople() {
  return (
    <NavbarPeopleStyle>
      <h2>
        People
      </h2>
      <PeopleImageCol>
        <div className="gradient"></div>
        <RoundImage radius="40px">
          <img src={Image1} alt="profie-image" />
        </RoundImage>
        <RoundImage radius="40px">
          <img src={Image1} alt="profie-image" />
        </RoundImage>
        <RoundImage radius="40px">
          <img src={Image1} alt="profie-image" />
        </RoundImage>
        <RoundImage radius="40px">
          <img src={Image1} alt="profie-image" />
        </RoundImage>
      </PeopleImageCol>
    </NavbarPeopleStyle>
  )
}

export default Navbar
