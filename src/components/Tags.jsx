import React, { Component } from 'react'
import styled from 'styled-components'

const TagsStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 0 0 5px grey;
  border-radius: 15px;
  padding: 20px 30px;
`

const TagsTextStyle = styled.div`
  h2 {
    color: teal;
    margin: 0;
  }
`

const TagsPillStyle = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const TagsPillItem = styled.li`
  float: left;
  margin-left: 5px;
  background-image: url(${props => props.url || 'https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg'});
  border-radius: 10px;
  & > div {
    color: white;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, .2);
    padding: 10px 22px;
  }
`

export class Tags extends Component {
  render() {
    return (
      <TagsStyle>
        <TagsText />
        <TagsPill />
      </TagsStyle>
    )
  }
}

function TagsText() {
  return (
    <TagsTextStyle>
      <h2>Tags</h2>
    </TagsTextStyle>
  )
}

export function TagsPill() {
  return (
    <TagsPillStyle>
      <TagsPillItem url="https://horizon-media.s3-eu-west-1.amazonaws.com/s3fs-public/field/image/ecosystem.jpg">
        <div>
          Travelling
        </div>
      </TagsPillItem>
      <TagsPillItem>
        <div>
          Nature
        </div>
      </TagsPillItem>
      <TagsPillItem url="https://www.visitkohrong.com/wp-content/uploads/2017/05/Sunset-on-Long-Beach-Koh-Rong-Island-in-Cambodia-4.jpg">
        <div>
          Sunset
        </div>
      </TagsPillItem>
    </TagsPillStyle>
  )
}

export function PillItem() {
  return (
    <TagsPillStyle>
      <TagsPillItem url="https://horizon-media.s3-eu-west-1.amazonaws.com/s3fs-public/field/image/ecosystem.jpg">
        <div>
          Travelling
        </div>
      </TagsPillItem>
    </TagsPillStyle>
    
  )
}

export default Tags
