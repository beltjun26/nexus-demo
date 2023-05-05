/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react'
import {Card2} from '../../../../_metronic/partials/content/cards/Card2'
import {IconUserModel} from '../ProfileModels'
import { KTIcon } from '../../../../_metronic/helpers'
import { Link, useParams } from 'react-router-dom'
import { NexusDataContext } from '../../../data/data'

export function Geolocation() {
  const nexusData = useContext(NexusDataContext)
  const { reportId } = useParams()

  const reportDetail = nexusData.reportDetails.find((report) => report.report_id === reportId)

  return (
    <>
      <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
        <div className='card-header cursor-pointer'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>Geolocation</h3>
          </div>

        </div>

        <div className='card-body p-9'>
          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>IP</label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{reportDetail?.geo_info_ip.ip}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Country Code</label>

            <div className='col-lg-8 fv-row'>
              <span className='fw-bold fs-6'>{reportDetail?.geo_info_ip.country_code}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>
              Country Name
            </label>

            <div className='col-lg-8 d-flex align-items-center'>
              <span className='fw-bolder fs-6 me-2'>{reportDetail?.geo_info_ip.country_name}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Region Name</label>

            <div className='col-lg-8 d-flex align-items-center'>
              <span className='fw-bolder fs-6 me-2'>{reportDetail?.geo_info_ip.region_name}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>City Name</label>

            <div className='col-lg-8 d-flex align-items-center'>
              <span className='fw-bolder fs-6 me-2'>{reportDetail?.geo_info_ip.city_name}</span>
            </div>
          </div>


          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Latitude</label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{reportDetail?.geo_info_ip.latitude}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Longitude</label>

          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{reportDetail?.geo_info_ip.longitude}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Zip Code</label>

          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{reportDetail?.geo_info_ip.zip_code}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Time Zone</label>

          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{reportDetail?.geo_info_ip.time_zone}</span>
            </div>
          </div>
          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>ASN</label>

          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{reportDetail?.geo_info_ip.asn}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>AS</label>

          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{reportDetail?.geo_info_ip.as}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>IS Proxy</label>

          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{reportDetail?.geo_info_ip.is_proxy ? 'True': 'False'}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
