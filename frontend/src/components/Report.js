
function Report({report}){
   
     let deleteReport = async () => {
        const response = await fetch('/reports/' + report._id, {
           method: 'delete' 
        });
         
        const data = await response.json()

        if(response.ok)
        {
            
        }
     }

     let updateReport = async () => {
        
        const response = await fetch('/reports/' + report._id, {
           method: 'patch' 
        });
         
        const data = await response.json()

        if(response.ok)
        {
            
        }
     }


    return(
        <div className="report" data-testid = 'reportTest'>
            
            <h3>Report Id: {report.id}</h3>
            <p>Property Address: {report.address}</p>
            <p>Inspection Date : {report.date}</p>
            <p>Property Exterior: {report.exterior}</p>
            <p>Property Interior: {report.interior}</p>
            <button onClick={deleteReport}>Delete</button>
            
        </div>
    )
}

export default Report