import React, { FC, createContext } from 'react';
import personaDashboard from './persona_data_dashboard.json';
import newAlert from './new_alerts.json';
import reportDetail from './report_details.json';
import { WithChildren } from '../../_metronic/helpers';
// import reportList from './report_list.json';

const personas  = personaDashboard.persona_data
const alert = newAlert.alerts_data
const reportDetails = reportDetail.reports_list_data

const NexusDataContext = createContext({
    personas: personas,
    alert: alert,
    reportDetails: reportDetails
})

const NexusDataProvider: FC<WithChildren> = ({children}) => {
    
    return(
        <NexusDataContext.Provider value={{personas, alert, reportDetails }}>
            {children}
        </NexusDataContext.Provider>
    )

}

export { NexusDataProvider, NexusDataContext }