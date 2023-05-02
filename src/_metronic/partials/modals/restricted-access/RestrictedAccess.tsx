/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'

const RestrictedAccess: FC = () => {


  return (
    <div className='modal fade' id='kt_modal_restricted_access' aria-hidden='true'>
      <div className='modal-dialog mw-650px'>
        <div className='modal-content'>
          <div className='modal-header pb-0 border-0 justify-content-end'>
            <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
              <KTIcon iconName='cross' className='fs-1' />
            </div>
          </div>

          <div className='modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15'>
            <div className='text-center mb-13'>
              <h1 className='mb-3'>Restricted Access</h1>

              <div className='text-muted fw-bold fs-5'>
                Sorry you can't access this feature
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {RestrictedAccess}
