import {useEffect} from 'react'
import {Outlet, useLocation} from 'react-router-dom'
import {AsideDefault} from './components/aside/AsideDefault'
import {Footer} from './components/Footer'
import {HeaderWrapper} from './components/header/HeaderWrapper'
import {RightToolbar} from '../partials/layout/RightToolbar'
import {ScrollTop} from './components/ScrollTop'
import {Content} from './components/Content'
import {PageDataProvider} from './core'
import {ActivityDrawer, DrawerMessenger, InviteUsers, UpgradePlan} from '../partials'
import {ThemeModeProvider} from '../partials/layout/theme-mode/ThemeModeProvider'
import {MenuComponent} from '../assets/ts/components'
import {Sidebar} from './components/Sidebar'
import { RestrictedAccess } from '../partials/modals/restricted-access/RestrictedAccess'

const MasterLayout = () => {
  const location = useLocation()
  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [location.key])

  return (
    <PageDataProvider>
      <ThemeModeProvider>
        <div className='d-flex flex-column flex-root'>
          <div className='page d-flex flex-row flex-column-fluid'>
            <AsideDefault />
            <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
              <HeaderWrapper />

              <div id='kt_content' className='content d-flex flex-column flex-column-fluid'>
                <Content>
                  <Outlet />
                </Content>
              </div>
              {/* <Footer /> */}
            </div>
            <Sidebar />
          </div>
        </div>

        {/* begin:: Drawers */}
        <ActivityDrawer />
        {/* <RightToolbar /> */}
        <DrawerMessenger />
        {/* end:: Drawers */}

        {/* begin:: Modals */}
        <RestrictedAccess />
        <InviteUsers />
        {/* end:: Modals */}
        <ScrollTop />
      </ThemeModeProvider>
    </PageDataProvider>
  )
}

export {MasterLayout}
