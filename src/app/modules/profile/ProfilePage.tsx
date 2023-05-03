import {Navigate, Outlet, Route, Routes, useLocation, useParams} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Channel} from './components/Channel'
import {Bio} from './components/Bio'
import {Conversations} from './components/Conversations'
import {Documents} from './components/Documents'
import {Connections} from './components/Connections'
import {ProfileHeader} from './ProfileHeader'
import { NexusDataContext } from '../../data/data'
import { useContext } from 'react'

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: 'Profile',
    path: '/crafted/pages/profile/overview',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const ProfilePage = () => {
  const { id } = useParams()
  console.log('id', id)
  
  return (
    <Routes>
      <Route
        element={
          <>
            <ProfileHeader />
            <Outlet />
          </>
        }
      >
        <Route
          path='channel'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Persona Profile</PageTitle>
              <Channel />
            </>
          }
        />
        <Route
          path='bio'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Persona Profile</PageTitle>
              <Bio />
            </>
          }
        />
        <Route
          path='conversations'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Persona Profile</PageTitle>
              <Conversations />
            </>
          }
        />
        {/* <Route
          path='documents'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Documents</PageTitle>
              <Documents />
            </>
          }
        />
        <Route
          path='connections'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Connections</PageTitle>
              <Connections />
            </>
          }
        /> */}
        <Route index element={<Navigate to='/crafted/pages/profile/channel' />} />
      </Route>
    </Routes>
  )
}

export default ProfilePage
