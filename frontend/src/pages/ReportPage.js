import {useEffect, useState} from 'react'
import Report from '../components/Report'
import ReportForm from '../components/ReportForm'
import UpdateForm from '../components/UpdateForm'
//import { ReportContextHooK } from '../hooks/ReportContextHook'

function ReportPage(){
   // const {reports,dispatch} = ReportContextHooK()
   const [reports, setReports] = useState()
    useEffect(() => {
            
            const getReports = async () => {
            const response = await fetch("/api/inspection-services")
           const data = await response.json()

            if(response.ok){
            setReports([...data])
            }
         }

         getReports()

    })
    return(
        <div className = "ReportPage">
            <h2><u>Inspection Reports</u></h2>
            <div className = "Reports">
                {reports && reports.map((report) => {
                   return <Report key={report._id} report={report} />
                })}
            </div>
            <div id = "form" data-testid = 'reportTest'>
                 <ReportForm />
            </div>
            <div id = "updateForm" data-testid = 'updateTest'>
                <UpdateForm />
            </div>
        </div> 
    )
}

export default ReportPage