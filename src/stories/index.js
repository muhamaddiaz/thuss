import React from 'react';
import '../index.css';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import {Navbar, MyProfile, NavbarStatus, NavbarPeople} from '../components/Navbar'
import QuickAction from '../components/QuickAction'
import Drafts from '../components/Drafts'
import CreateArticle from '../components/CreateArticle';
import Tags from '../components/Tags';
import MyArticles from '../components/MyArticles';
import ProfilePill from '../components/ProfilePill';
import ActivityLog from '../components/ActivityLog';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Navbar', module)
  .add('to Navbar', () => (<Navbar />))
  .add('to MyProfile', () => (<MyProfile />))
  .add('to NavbarStatus', () => (<NavbarStatus />))
  .add('to NavbarPeople', () => (<NavbarPeople />))

storiesOf('Quick Action', module).add('to QuickAction', () => (<QuickAction />))

storiesOf('Drafts', module).add('to Drafts', () => (<Drafts />))

storiesOf('Create Article', module).add('to CreateArticle', () => (<CreateArticle />))

storiesOf('Tags', module).add('to Tags', () => (<Tags />))

storiesOf('My Articles', module).add('to MyArticles', () => (<MyArticles />))

storiesOf('Profile Pill', module).add('to ProfilePill', () => (<ProfilePill />))

storiesOf('Activity Log', module).add('to ActivityLog', () => (<ActivityLog />))


