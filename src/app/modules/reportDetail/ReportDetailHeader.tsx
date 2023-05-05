/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../_metronic/helpers'
import {Link, useLocation, useParams} from 'react-router-dom'
import {Dropdown1} from '../../../_metronic/partials'
import { NexusDataContext } from '../../data/data'

const ReportDetailHeader: React.FC = () => {
  const location = useLocation()
  const { reportId } = useParams()
  

  const nexusData = useContext(NexusDataContext)
  
  const reportDetail = nexusData.reportDetails.find((report) => report.report_id === reportId)
  const persona = nexusData.personas.find((persona) => persona.id === reportDetail?.persona_id)

  console.log('persona', persona)

  return (
    <div className='card mb-5 mb-xl-10'>
      <div className='card-body pt-9 pb-0'>
        <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
          <div className='me-7 mb-4'>
            <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
              <img src={toAbsoluteUrl(persona?.image ?? '')} alt='Persona mage' />
            </div>
          </div>

          <div className='flex-grow-1'>
            <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
              <div className='d-flex flex-column'>
                <div className='d-flex align-items-center mb-2'>
                  <a href='#' className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                    Report ID: {reportDetail?.report_id}
                  </a>
                  <a href='#'>
                    <KTIcon iconName='verify' className='fs-1 text-primary' />
                  </a>
                </div>

                <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                <a
                    href='#'
                    className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                  >
                    <KTIcon iconName='profile-circle' className='fs-4 me-1' />
                    {persona?.name},
                  </a>
                  <a
                    href='#'
                    className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                  >
                    <KTIcon iconName='profile-circle' className='fs-4 me-1' />
                    {reportDetail?.type}
                  </a>
                  <a
                    href='#'
                    className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                  >
                    <KTIcon iconName='profile-circle' className='fs-4 me-1' />
                    {reportDetail?.user_phone}
                  </a>
                  <a
                    href='#'
                    className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                  >
                    <KTIcon iconName='profile-circle' className='fs-4 me-1' />
                    {reportDetail?.channel}
                  </a>
                  {/* <a
                    href='#'
                    className='d-flex align-items-center text-gray-400 text-hover-primary mb-2'
                  >
                    <KTIcon iconName='sms' className='fs-4 me-1' />
                    max@kt.com
                  </a> */}
                </div>
              </div>

              <div className='d-flex my-4'>
                <a href='#' className='btn btn-sm btn-light me-2' id='kt_user_follow_button'>
                  <KTIcon iconName='check' className='fs-3 d-none' />

                  <span className='indicator-label'>
                    <Link to={'/reports'}>
                    Back
                    </Link>
                    </span>
                  <span className='indicator-progress'>
                    Please wait...
                    <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                  </span>
                </a>
                <a
                  href='#'
                  className='btn btn-sm btn-primary me-3'
                  data-bs-toggle='modal'
                  data-bs-target='#kt_modal_offer_a_deal'
                >
                  Export
                </a>
                <div className='me-0'>
                  <button
                    className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                    data-kt-menu-trigger='click'
                    data-kt-menu-placement='bottom-end'
                    data-kt-menu-flip='top-end'
                  >
                    <i className='bi bi-three-dots fs-3'></i>
                  </button>
                  <Dropdown1 />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='d-flex overflow-auto h-55px'>
          <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === `/reports/details/${reportId}/telco` && 'active')
                }
                to={`/reports/details/${reportId}/telco`}
              >
                Telco Info
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === `/reports/details/${reportId}/geo` && 'active')
                }
                to={`/reports/details/${reportId}/geo`}
              >
                Geolocation Info
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === `/reports/details/${reportId}/conversations` && 'active')
                }
                to={`/reports/details/${reportId}/conversations`}
              >
                Conversations History
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === `/reports/details/${reportId}/blockchain` && 'active')
                }
                to={`/reports/details/${reportId}/blockchain`}
              >
                Blockchain Info
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export {ReportDetailHeader}
