import {EnableSidebar} from '../../../_metronic/layout/core'
import {NexusDataContext} from '../../data/data'
import {useContext} from 'react'
import {KTIcon} from '../../../_metronic/helpers'

// TODO: Move to types file.
type Account = {
  username: string
  email: string
}

const AccountRow = ({account}: {account: Account}) => (
  <tr>
    <td>
      <div className='form-check form-check-sm form-check-custom form-check-solid'>
        <input className='form-check-input widget-9-check' type='checkbox' value='1' />
      </div>
    </td>
    <td>{account.username}</td>
    <td>{account.email}</td>
    <td>
      <div className='d-flex justify-content-end flex-shrink-0'>
        <KTIcon iconName='trash' className='fs-3' />
      </div>
    </td>
  </tr>
)

const AccountsPage = () => {
  const data = useContext(NexusDataContext)

  return (
    <div className='card'>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Accounts</span>
        </h3>
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to add a user'
        >
          <a
            href='#'
            className='btn btn-sm btn-light-primary'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_restricted_access'
          >
            <KTIcon iconName='plus' className='fs-3' />
            Add Account
          </a>
        </div>
      </div>
      <div className='card-body py-3'>
        <div className='table-responsive'>
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            <thead>
              <tr className='fw-bold text-muted'>
                <th>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='1'
                      data-kt-check='true'
                      data-kt-check-target='.widget-9-check'
                    />
                  </div>
                </th>
                <th>Username</th>
                <th>Email</th>
                <th className='text-end'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.accounts.map((account) => (
                <AccountRow account={account} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const AccountsWrapper = () => {
  return (
    <EnableSidebar>
      <AccountsPage />
    </EnableSidebar>
  )
}

export {AccountsWrapper}
