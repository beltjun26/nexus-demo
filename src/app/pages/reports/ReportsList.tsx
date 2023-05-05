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

const ReportsList: React.FC<Props> = ({className}) => {
  const nexusData = useContext(NexusDataContext)

  const reports = nexusData.reports

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Reports</span>
          {/* <span className='text-muted mt-1 fw-semibold fs-7'>Over 500 members</span> */}
        </h3>
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
              <tr className='fw-bold text-muted text-gray-800'>
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
                <th className='min-w-120px'>Threat Score</th>
                <th className='min-w-120px'>Threat Level</th>
                <th className='min-w-120px'>Last Updated</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {reports.map((report, index) => {

                  // const activeChannels = Object.entries(report.channel)
                  // .filter(([_, channel]) => channel.channel_status === 'active')
                  // .map(([name, _]) => name)

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
                        <div className='d-flex justify-content-start flex-column'>
                          <Link to={`/reports/details/${report.report_id}/telco`} className='text-dark fw-bold text-hover-primary fs-6'>
                            {report.persona_name}
                          </Link>
                          <span className='text-muted fw-semibold text-muted d-block fs-7 text-gray-800'>
                            {report.persona_type}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                        {report.channel.toUpperCase()}
                      </a>
                      {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        Web, UI/UX Design
                      </span> */}
                    </td>
                    <td className=''>
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
                        {report.predator_score}
                      </div>
                    </td>
                    <td className=''>
                      <div className='text-dark fw-bold text-hover-primary d-block fs-6'>
                        {report.predator_label}
                      </div>
                    </td>
                    <td className=''>
                      <div className='text-dark fw-bold text-hover-primary d-block fs-6'>
                        {report.last_updated}
                      </div>
                    </td>
                  </tr>
                )

                // const activeChannelsString = activeChannels.join(', ')

                // const personaLink = `/personas/${persona.id}/channel`

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

export {ReportsList}
