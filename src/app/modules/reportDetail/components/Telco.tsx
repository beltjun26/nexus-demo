import React, { useContext } from 'react'

import { NexusDataContext } from '../../../data/data'
import { useParams } from 'react-router-dom'

export function Telco() {
  const nexusData = useContext(NexusDataContext)
  const { reportId } = useParams()

  const reportDetail = nexusData.reportDetails.find((report) => report.report_id === reportId)
  
  return (
    <>
      <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
        <div className='card-header cursor-pointer'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>Telco Information</h3>
          </div>

        </div>

        <div className='card-body p-9'>
          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Contry</label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{reportDetail?.telco_info.country}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Neighbor</label>

            <div className='col-lg-8 fv-row'>
              <span className='fw-bold fs-6'>{reportDetail?.telco_info.neighborhood ?? '-'}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>
              Sub Region
            </label>

            <div className='col-lg-8 d-flex align-items-center'>
              <span className='fw-bolder fs-6 me-2'>{reportDetail?.telco_info.sub_region}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Postal</label>

            <div className='col-lg-8 d-flex align-items-center'>
              <span className='fw-bolder fs-6 me-2'>{reportDetail?.telco_info.postal_code}</span>
            </div>
          </div>

          {/* <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Siblings</label>

            <div className='col-lg-8 d-flex align-items-center'>
              <span className='fw-bolder fs-6 me-2'>{persona?.bio.sibling_data}</span>
            </div>
          </div> */}


          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Timezone</label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{reportDetail?.telco_info.timezone}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Operating Company Type</label>

          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{reportDetail?.telco_info.operating_company_type}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Risk Level</label>

          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{reportDetail?.telco_info.risk_level}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Locality</label>

          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{reportDetail?.telco_info.locality}</span>
            </div>
          </div>
          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Operating Company Name</label>

          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{reportDetail?.telco_info.operating_company_name}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Lata</label>

          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{reportDetail?.telco_info.lata}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Dialcode Impossible</label>

          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{reportDetail?.telco_info.dialcode_impossible ? 'True' : 'False'}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Location Routing Number</label>

          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{reportDetail?.telco_info.location_routing_number ? 'True' : 'False'}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>clli</label>

          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{reportDetail?.telco_info.clli}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>TimeZone UTC Offset</label>

          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{reportDetail?.telco_info.timezone_utc_offset}</span>
            </div>
          </div>
          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Administrative Area Level 1 short</label>

          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{reportDetail?.telco_info.administrative_area_level_1_short}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Risk Rating</label>

          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{reportDetail?.telco_info.risk_rating}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Country</label>

          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{reportDetail?.telco_info.country}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Region</label>
          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{reportDetail?.telco_info.region}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>ocn</label>
          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{reportDetail?.telco_info.ocn}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Administrative Area Level 3</label>
          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{reportDetail?.telco_info.administrative_area_level_3}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Administrative Area Level 2</label>
          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{reportDetail?.telco_info.administrative_area_level_2}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Administrative Area Level 1</label>
          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{reportDetail?.telco_info.administrative_area_level_1}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Line Type</label>
          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{reportDetail?.telco_info.line_type}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Dialcode e1646</label>
          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{reportDetail?.telco_info.dialcode_e164}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
