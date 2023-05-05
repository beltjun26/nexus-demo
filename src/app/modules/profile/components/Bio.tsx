/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react'
import {Card2} from '../../../../_metronic/partials/content/cards/Card2'
import {IconUserModel} from '../ProfileModels'
import { KTIcon } from '../../../../_metronic/helpers'
import { Link, useParams } from 'react-router-dom'
import { NexusDataContext } from '../../../data/data'

export function Bio() {
  const nexusData = useContext(NexusDataContext)
  const { id } = useParams()

  const persona = nexusData.personas.find((persona) => persona.id === id)

  return (
    <>
      <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
        <div className='card-header cursor-pointer'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>Profile Details</h3>
          </div>

        </div>

        <div className='card-body p-9'>
          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Gender</label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{persona?.bio.gender}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Age</label>

            <div className='col-lg-8 fv-row'>
              <span className='fw-bold fs-6'>{persona?.bio.age}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>
              Parents
            </label>

            <div className='col-lg-8 d-flex align-items-center'>
              <span className='fw-bolder fs-6 me-2'>{persona?.bio.parents}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Lives with</label>

            <div className='col-lg-8 d-flex align-items-center'>
              <span className='fw-bolder fs-6 me-2'>{persona?.bio.lives_with}</span>
            </div>
          </div>

          {/* <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Siblings</label>

            <div className='col-lg-8 d-flex align-items-center'>
              <span className='fw-bolder fs-6 me-2'>{persona?.bio.sibling_data}</span>
            </div>
          </div> */}


          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Music</label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{persona?.bio.music.join(', ')}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Hobbies</label>

          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{persona?.bio.hobbies.join(', ')}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Pet Data</label>

          </div>

          {persona?.bio.pet_data !== undefined && (
            <>
              <div className='row mb-7'>
                <label className='col-lg-3 offset-lg-1 fw-bold text-muted'>Type</label>

              
                <div className='col-lg-8'>
                  <span className='fw-bolder fs-6 text-dark'>{persona?.bio.pet_data.pet.type}</span>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-3 offset-lg-1 fw-bold text-muted'>Name</label>

              
                <div className='col-lg-8'>
                  <span className='fw-bolder fs-6 text-dark'>{persona?.bio.pet_data.pet.name}</span>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-3 offset-lg-1 fw-bold text-muted'>Age</label>

              
                <div className='col-lg-8'>
                  <span className='fw-bolder fs-6 text-dark'>{persona?.bio.pet_data.pet.age}</span>
                </div>
              </div>
            </>
          )}
          

          

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>City</label>

          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{persona?.bio.city}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>State</label>

          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{persona?.bio.state}</span>
            </div>
          </div>
          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Zip Code</label>

          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{persona?.bio.zip_code}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Mobile Number</label>

          
            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>+1 {persona?.bio.mobile_phone}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
