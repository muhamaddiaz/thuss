import React, { Component } from 'react'
import styled from 'styled-components'

const CreateArticleStyle = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 0 5px grey;
  padding: 25px;
`

const CreateArticleTextStyle = styled.div`
  h2 {
    margin: 0 0 20px;
    color: teal;
  }
  p {
    color: grey;
    margin: 3px 0;
  }
`

export const CreateArticleButton = styled.button`
  border: none;
  background-color: teal;
  padding: 10px 20px;
  color: white;
  border-radius: 15px;
  margin: 10px 5px;
`

export class CreateArticle extends Component {
  render() {
    return (
      <CreateArticleStyle>
        <CreateArticleText />
        <CreateArticleButton style={{marginLeft: '0'}}>Create article</CreateArticleButton>
        <CreateArticleButton>Connect publishers</CreateArticleButton>
      </CreateArticleStyle>
    )
  }
}

export function CreateArticleText() {
  return (
    <CreateArticleTextStyle>
      <h2>Create Article</h2>
      <p>You can create article directly from here,</p>
      <p>and post everywhere depends on your publisher</p>
    </CreateArticleTextStyle>
  )
}

export default CreateArticle
