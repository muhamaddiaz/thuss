import React from 'react';
import '../index.css';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import styled from 'styled-components'

import { Welcome } from '@storybook/react/demo';
import {Navbar, MyProfile, NavbarStatus, NavbarPeople} from '../components/Navbar'
import {QuickAction, QuickActionText} from '../components/QuickAction'
import {Drafts, DraftsListsItem} from '../components/Drafts'
import {CreateArticle, CreateArticleText, CreateArticleButton} from '../components/CreateArticle';
import {Tags, TagsPill, PillItem} from '../components/Tags';
import MyArticles from '../components/MyArticles';
import ProfilePill from '../components/ProfilePill';
import ActivityLog from '../components/ActivityLog';

import CheckIcon from '../assets/img/success.svg'

const StoriesContainer = styled.div`
  padding: 30px;
`

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Navbar', module)
  .add('to Navbar', () => (<Navbar />))
  .add('to MyProfile', () => (<MyProfile />))
  .add('to NavbarStatus', () => (<NavbarStatus />))
  .add('to NavbarPeople', () => (<NavbarPeople />))

storiesOf('Quick Action', module)
  .add('to QuickAction', () => (<StoriesContainer><QuickAction /></StoriesContainer>))
  .add('to QuickActionText', () => (<StoriesContainer><QuickActionText /></StoriesContainer>))

storiesOf('Drafts', module)
  .add('to Drafts', () => (<StoriesContainer><Drafts /></StoriesContainer>))
  .add('to DraftsItem', () => (<StoriesContainer><DraftsListsItem title="Visit Dayeuhkolot" date="22 Desember 2018" type="success"/></StoriesContainer>))

storiesOf('Create Article', module)
  .add('to CreateArticle', () => (<StoriesContainer><CreateArticle /></StoriesContainer>))
  .add('to CreateArticleText', () => (<StoriesContainer><CreateArticleText /></StoriesContainer>))
  .add('to CreateArticleButton', () => (<StoriesContainer><CreateArticleButton>Hello, World!</CreateArticleButton></StoriesContainer>))

storiesOf('Tags', module)
  .add('to Tags', () => (<StoriesContainer><Tags /></StoriesContainer>))
  .add('to TagsPill', () => (<StoriesContainer><TagsPill /></StoriesContainer>))
  .add('to PillItem', () => (<StoriesContainer><PillItem /></StoriesContainer>))

storiesOf('My Articles', module).add('to MyArticles', () => (<MyArticles />))

storiesOf('Profile Pill', module).add('to ProfilePill', () => (<ProfilePill />))

storiesOf('Activity Log', module).add('to ActivityLog', () => (<ActivityLog />))


