import React, { useContext } from 'react'
import {
  FeedsWidget2,
  FeedsWidget3,
  FeedsWidget4,
  FeedsWidget5,
  FeedsWidget6,
  ChartsWidget1,
  ListsWidget5,
  ListsWidget2,
} from '../../../../_metronic/partials/widgets'
import { Card4 } from '../../../../_metronic/partials/content/cards/Card4'
import { NexusDataContext } from '../../../data/data'
import { useParams } from 'react-router-dom'
import { ChannelCard } from '../../../../_metronic/partials/content/cards/ChannelCard'

export function Channel() {
  const nexusData = useContext(NexusDataContext)
  const { id } = useParams()

  const persona = nexusData.personas.find((persona) => persona.id === id)
  
  return (
    <div className='row g-5 g-xxl-8'>
      <div className='row g-6 g-xl-9 mb-6 mb-xl-9'>
        <div className='col-12 col-sm-12 col-xl'>
          <ChannelCard
            icon='/media/svg/brand-logos/discord.svg'
            title='Discord'
            channelStatus={persona?.channels.discord.channel_status ?? ''}
            activeConversations={persona?.channels.discord.active_conversations ?? ''}
            lifetimeConversation={persona?.channels.discord.lifetime_conversations ?? ''}
          />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <ChannelCard
            icon='/media/svg/brand-logos/twitch.svg'
            title='Twitch'
            channelStatus={persona?.channels.twitch.channel_status ?? ''}
            activeConversations={persona?.channels.twitch.active_conversations ?? ''}
            lifetimeConversation={persona?.channels.twitch.lifetime_conversations ?? ''}
          />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <ChannelCard
            icon='/media/svg/brand-logos/telegram.svg'
            title='Telegram'
            channelStatus={persona?.channels.telegram.channel_status ?? ''}
            activeConversations={persona?.channels.telegram.active_conversations ?? ''}
            lifetimeConversation={persona?.channels.telegram.lifetime_conversations ?? ''}
          />
        </div>
      </div>
      <div className='row g-6 g-xl-9 mb-6 mb-xl-9'>
        <div className='col-4 col-sm-4 col-xl-4'>
          <ChannelCard
            icon='/media/svg/brand-logos/sms.svg'
            title='SMS'
            channelStatus={persona?.channels.sms.channel_status ?? ''}
            activeConversations={persona?.channels.sms.active_conversations ?? ''}
            lifetimeConversation={persona?.channels.sms.lifetime_conversations ?? ''}
          />
        </div>
        <div className='col-4 col-sm-4 col-xl-4'>
          <ChannelCard
            icon='/media/svg/brand-logos/voice.svg'
            title='Voice'
            channelStatus={persona?.channels.voice.channel_status ?? ''}
            activeConversations={persona?.channels.voice.active_conversations ?? ''}
            lifetimeConversation={persona?.channels.voice.lifetime_conversations ?? ''}
          />
        </div>
      </div>
    </div>
  )
}
