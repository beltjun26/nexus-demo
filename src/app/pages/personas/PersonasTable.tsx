/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useContext} from 'react'
import { NexusDataContext } from '../../data/data'
import { KTIcon, toAbsoluteUrl } from '../../../_metronic/helpers'
import { Link } from 'react-router-dom'
// import {KTIcon, toAbsoluteUrl} from '../../../helpers'
// import {NexusDataContext} from '../../../../app/data/data'

type Props = {
  className: string
}

const PersonasTable: React.FC<Props> = ({className}) => {
  const nexusData = useContext(NexusDataContext)

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>All personas</span>
          {/* <span className='text-muted mt-1 fw-semibold fs-7'>Over 500 members</span> */}
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
            Add new persona
          </a>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                <th className='w-25px'>
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
                <th className='min-w-150px'>Persona</th>
                <th className='min-w-120px'>Channels</th>
                <th className='min-w-120px'>Total Active conversations</th>
                <th className='min-w-120px'>Total Lifetime conversations</th>
                <th className='min-w-120px'>Status</th>
                <th className='min-w-100px text-end'>Actions</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {nexusData.personas.map((persona, index) => {
                const activeChannels = Object.entries(persona.channels)
                  .filter(([_, channel]) => channel.channel_status === 'active')
                  .map(([name, _]) => name)

                const activeChannelsString = activeChannels.join(', ')

                const personaLink = `/personas/${persona.id}/channel`
                return (
                  <tr>
                    <td>
                      <div className='form-check form-check-sm form-check-custom form-check-solid'>
                        <input
                          className='form-check-input widget-9-check'
                          type='checkbox'
                          value='1'
                        />
                      </div>
                    </td>
                    <td>
                      <div className='d-flex align-items-center'>
                        <div className='symbol symbol-45px me-5'>
                          <img src={toAbsoluteUrl(persona.image)} alt='' />
                        </div>
                        <div className='d-flex justify-content-start flex-column'>
                          <Link to={personaLink} className='text-dark fw-bold text-hover-primary fs-6'>
                            {persona.name}
                          </Link>
                          <span className='text-muted fw-semibold text-muted d-block fs-7'>
                            {persona.type}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                        {activeChannelsString}
                      </a>
                      {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        Web, UI/UX Design
                      </span> */}
                    </td>
                    <td className='text-end'>
                      {/* <div className='d-flex flex-column w-100 me-2'>
                        <div className='d-flex flex-stack mb-2'>
                          <span className='text-muted me-2 fs-7 fw-semibold'>50%</span>
                        </div>
                        <div className='progress h-6px w-100'>
                          <div
                            className='progress-bar bg-primary'
                            role='progressbar'
                            style={{width: '50%'}}
                          ></div>
                        </div>
                      </div> */}

                      <div className='text-dark fw-bold text-hover-primary d-block fs-6'>
                        {persona.total_active_conversations}
                      </div>
                    </td>
                    <td className='text-end'>
                      <div className='text-dark fw-bold text-hover-primary d-block fs-6'>
                        {persona.total_lifetime_conversations}
                      </div>
                    </td>
                    <td className='text-end'>
                      <div className='text-dark fw-bold text-hover-primary d-block fs-6'>
                        {persona.status}
                      </div>
                    </td>
                    <td>
                      <div className='d-flex justify-content-end flex-shrink-0'>
                        <a
                          href='#'
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                        >
                          <KTIcon iconName='profile-circle' className='fs-3' />
                        </a>
                        <a
                          href='#'
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                        >
                          <KTIcon iconName='cross' className='fs-3' />
                        </a>
                        <a
                          href='#'
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                          data-bs-toggle='modal'
                          data-bs-target='#kt_modal_restricted_access'
                        >
                          <KTIcon iconName='trash' className='fs-3' />
                        </a>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {PersonasTable}
