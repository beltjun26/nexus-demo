/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../helpers'

type Props = {
  icon: string
  title: string
  channelStatus: string
  activeConversations: string
  lifetimeConversation: string
}

const ChannelCard: FC<Props> = ({icon, title, channelStatus, activeConversations, lifetimeConversation}) => {
  return (
    <div className='card h-100'>
      <div className='card-body d-flex justify-content-center text-center flex-column p-8'>
        <a href='#' className='text-gray-800 text-hover-primary d-flex flex-column'>
          <div className='symbol symbol-75px mb-6'>
            <img src={toAbsoluteUrl(icon)} alt='' />
          </div>
          <div className='fs-5 fw-bolder mb-2'>{title}</div>
        </a>
        <div className='d-flex align-items-center fw-bold mt-2'>
          <span className='badge bg-light text-gray-700 px-3 py-2 me-2'>Channel Status:</span>
          <span className='text-gray-400 fs-7'>{channelStatus}</span>
        </div>
        <div className='d-flex align-items-center fw-bold mt-2'>
          <span className='badge bg-light text-gray-700 px-3 py-2 me-2'>Active Conversation</span>
          <span className='text-gray-400 fs-7'>{activeConversations}</span>
        </div>
        <div className='d-flex align-items-center fw-bold mt-2'>
          <span className='badge bg-light text-gray-700 px-3 py-2 me-2'>Lifetime Conversations</span>
          <span className='text-gray-400 fs-7'>{lifetimeConversation}</span>
        </div>
      </div>
    </div>
  )
}

export {ChannelCard}
