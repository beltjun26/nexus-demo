/* eslint-disable react/jsx-no-target-blank */
import {useIntl} from 'react-intl'
import {KTIcon} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='black-right'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem to='/builder' icon='black-right' title='Layout Builder' fontIcon='bi-layers' />
      <AsideMenuItem
        to='/apps/user-management/users'
        icon='black-right'
        title='User management'
        fontIcon='bi-layers'
      />  
    </>
  )
}
