import {Navigate, Outlet, Route, Routes, useLocation, useParams} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Telco} from './components/Telco'
import {Geolocation} from './components/Geolocation'
import {Conversations} from './components/Conversations'
import {Documents} from './components/Documents'
import {Blockchain} from './components/Blockchain'
import {ReportDetailHeader} from './ReportDetailHeader'
import {NexusDataContext} from '../../data/data'
import {useContext} from 'react'

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

const ReportDetailPage = () => {
  const {reportId} = useParams()
  console.log('id', reportId)

  return (
    <Routes>
      <Route
        element={
          <>
            <ReportDetailHeader />
            <Outlet />
          </>
        }
      >
        <Route
          path='telco'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Telco Info</PageTitle>
              <Telco />
            </>
          }
        />
        <Route
          path='geo'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Geolocation</PageTitle>
              <Geolocation />
            </>
          }
        />
        <Route
          path='conversations'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Conversation History</PageTitle>
              <Conversations />
            </>
          }
        />
        <Route
          path='blockchain'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Blockchain</PageTitle>
              <Blockchain />
            </>
          }
        />
        <Route index element={<Navigate to='/crafted/pages/profile/channel' />} />
      </Route>
    </Routes>
  )
}

export default ReportDetailPage
