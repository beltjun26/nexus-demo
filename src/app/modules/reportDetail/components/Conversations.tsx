/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react'
import {Card5} from '../../../../_metronic/partials/content/cards/Card5'
import { useParams } from 'react-router-dom'
import { NexusDataContext } from '../../../data/data'
import { ConversationCard } from '../../../../_metronic/partials/content/cards/ConversationCard'
import { defaultMessages } from '../../../../_metronic/helpers/dataExamples'
import clsx from 'clsx'
import { toAbsoluteUrl } from '../../../../_metronic/helpers'

const mapStringToMessageModel = (str: string) => {
  const [user, text] = str.split(/: (.+)/);
  const now = new Date();

  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return {
    user: user === "User" ? 0 : 1,
    type: user === "User" ? 'in' : 'out', // Updated this line
    text: text.trim(),
    time: time,
    template: false,
  };
};

export function Conversations() {
  const nexusData = useContext(NexusDataContext)
  const { reportId } = useParams()

  const reportDetail = nexusData.reportDetails.find((report) => report.report_id === reportId)


  const messages = reportDetail?.conversation_history.map(mapStringToMessageModel)

  console.log('messages', messages)
  
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
          Conversations
        </h3>

        <div className='d-flex align-items-center my-2'>
          <div className='w-100px me-5'>
            <select
              name='status'
              data-control='select2'
              data-hide-search='true'
              className='form-select form-select-white form-select-sm'
              defaultValue='1'
            >
              <option value='1'>30 Days</option>
              <option value='2'>90 Days</option>
              <option value='3'>6 Months</option>
              <option value='4'>1 Year</option>
            </select>
          </div>
        </div>
      </div>

      <div className='row g-6 g-xl-9'>
        <div className='col-sm-12 col-xl-12'>
        {messages?.map((message, index) => {
          const isDrawer = false
          // const userInfo = userInfos[message.user]
          const state = message.type === 'in' ? 'info' : 'primary'
          const templateAttr = {}
          if (message.template) {
            Object.defineProperty(templateAttr, 'data-kt-element', {
              value: `template-${message.type}`,
            })
          }
          const contentClass = `${isDrawer ? '' : 'd-flex'} justify-content-${
            message.type === 'in' ? 'start' : 'end'
          } mb-10`
          return (
            <div
              key={`message${index}`}
              className={clsx('d-flex', contentClass, 'mb-10', {'d-none': message.template})}
              {...templateAttr}
            >
              <div
                className={clsx(
                  'd-flex flex-column align-items',
                  `align-items-${message.type === 'in' ? 'start' : 'end'}`
                )}
              >
                <div className='d-flex align-items-center mb-2'>
                  {message.type === 'in' ? (
                    <>
                      <div className='symbol  symbol-35px symbol-circle '>
                        {/* <img alt='Pic' src={toAbsoluteUrl(`/media/${userInfo.avatar}`)} /> */}
                      </div>
                      <div className='ms-3'>
                        <a
                          href='#'
                          className='fs-5 fw-bolder text-gray-900 text-hover-primary me-1'
                        >
                          David
                        </a>
                        <span className='text-muted fs-7 mb-1'>{message.time}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className='me-3'>
                        <span className='text-muted fs-7 mb-1'>{message.time}</span>
                        <a
                          href='#'
                          className='fs-5 fw-bolder text-gray-900 text-hover-primary ms-1'
                        >
                          {reportDetail?.persona}
                        </a>
                      </div>
                      <div className='symbol  symbol-35px symbol-circle '>
                        {/* <img alt='Pic' src={toAbsoluteUrl(`/media/${userInfo.avatar}`)} /> */}
                      </div>
                    </>
                  )}
                </div>

                <div
                  className={clsx(
                    'p-5 rounded',
                    `bg-light-${state}`,
                    'text-dark fw-bold mw-lg-400px',
                    `text-${message.type === 'in' ? 'start' : 'end'}`
                  )}
                  data-kt-element='message-text'
                  dangerouslySetInnerHTML={{__html: message.text}}
                ></div>
              </div>
            </div>
          )
        })}
        </div>
      </div>

    </>
  )
}
