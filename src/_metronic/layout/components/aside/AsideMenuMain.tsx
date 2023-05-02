/* eslint-disable react/jsx-no-target-blank */
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  return (
    <>
      <AsideMenuItem to='/dashboard' icon='black-right' title='Home' fontIcon='bi-app-indicator' />
      <AsideMenuItem to='/personas' icon='black-right' title='Personas' fontIcon='bi-layers' />
      <AsideMenuItem to='/reports' icon='black-right' title='Reports' fontIcon='bi-layers' />
      <AsideMenuItem to='/accounts' icon='black-right' title='Accounts' fontIcon='bi-layers' />
      <AsideMenuItem to='/support' icon='black-right' title='Support' fontIcon='bi-layers' />
    </>
  )
}
