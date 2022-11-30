import { useState } from "react";
//import { ReportContextHooK } from '../hooks/ReportContextHook'



function ReportForm()
{
    //const {dispatch} = ReportContextHooK();
    const [id, setId] = useState("")
    const [address, setAddress] = useState("")
    const [date, setDate] = useState("")
    const [exterior, setExterior] = useState("")
    const [interior, setInterior] = useState("")

    let createReport = async (e) => {
        e.preventDefault()
        
        const report = {id, address, date, exterior,interior}

        const response = await fetch('/reports', {
            method: 'post',
            body: JSON.stringify(report),
            headers:{
                'Content-Type': 'application/json'
            }

            

        })

        const data = await response.json()

        if(response.ok)
        {
            setId('')
            setAddress('')
            setDate('')
            setExterior('')
            setInterior('')
            Window.alert("New Report Generated Successfully")
            // dispatch({
            //     type: 'createReport',
            //     payload: data
            // })
        }
        else{
            Window.alert("Report Generation Failed")
        }
    }
    return(
        <form id="reportForm" data-testid = 'labelTest' onSubmit={createReport}>

            <h2>Create Inspection Report</h2>

            <label>Inspection Id</label>
            <input type="number" onChange={(e) => setId(e.target.value) } value={id} data-testid = 'id-input'></input>

            <label>Property Address</label>
            <input type="text" onChange={(e) => setAddress(e.target.value) } value={address} data-testid = 'address-input' ></input>

            <label>Inspection Date</label>
            <input type="text" onChange={(e) => setDate(e.target.value) } value={date} data-testid = 'date-input'></input>

            <label>Property Exterior</label>
            <input type="text" onChange={(e) => setExterior(e.target.value) } value={exterior} data-testid = 'exterior-input'></input>

            <label>Property Interior</label>
            <input type="text" onChange={(e) => setInterior(e.target.value) } value={interior} data-testid = 'interior-input'></input>

            <button data-testid = 'form-button' >Create Report</button>
        </form>
    )
}

export default ReportForm