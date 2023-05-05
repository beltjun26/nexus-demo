import React, { FC, createContext } from 'react';
import personaDashboard from './persona_data_dashboard.json';
import conversations from './persona_conversation_data.json'
import newAlert from './new_alerts.json';
import reportDetail from './report_details.json';
import reportList from './reports_list.json';
import { WithChildren } from '../../_metronic/helpers';
// import reportList from './report_list.json';

const personas  = personaDashboard.persona_data
const alert = newAlert.alerts_data
const reportDetails = reportDetail.reports_list_data
const personaConversations = conversations.persona_conversations
const reports = reportList.reports_list_data

const accounts = [
  {
    username: 'user1',
    email: 'user1@hypernexus.com',
  },
  {
    username: 'user2',
    email: 'user2@hypernexus.com',
  },
  {
    username: 'user3',
    email: 'user3@hypernexus.com',
  },
]

const NexusDataContext = createContext({
  personas: personas,
  alert: alert,
  reports: reports,
  reportDetails: reportDetails,
  personaConversations: personaConversations,
  accounts: accounts,
})

const NexusDataProvider: FC<WithChildren> = ({children}) => {
  return (
    <NexusDataContext.Provider
      value={{personas, alert, reportDetails, personaConversations, accounts, reports}}
    >
      {children}
    </NexusDataContext.Provider>
  )
}

export { NexusDataProvider, NexusDataContext }