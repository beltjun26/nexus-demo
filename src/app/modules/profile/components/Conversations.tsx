/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react'
import {Card5} from '../../../../_metronic/partials/content/cards/Card5'
import { useParams } from 'react-router-dom'
import { NexusDataContext } from '../../../data/data'
import { ConversationCard } from '../../../../_metronic/partials/content/cards/ConversationCard'

export function Conversations() {
  const nexusData = useContext(NexusDataContext)
  const { id } = useParams()

  const conversations = nexusData.personaConversations
  
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
        <div className='col-sm-6 col-xl-4'>
          {conversations.map(conversation => {
            console.log(conversation)

            return (
              <ConversationCard
                image={`/media/svg/brand-logos/${conversation.channel}.svg`}
                title={conversation.channel}
                description={`# ${conversation.predator_score}`}
                status='down'
                predatorLabel={conversation.predator_label}
                progress={0.5}
                lastMessage={conversation.last_message}
              />
            )
          })}
        </div>
      </div>

    </>
  )
}
