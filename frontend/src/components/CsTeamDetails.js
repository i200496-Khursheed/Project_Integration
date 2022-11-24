import {useState} from "react"

const CsTeamDetails = ({csteams}) => {
    const [fee, setFee] = useState('')
    const [status, setStatus] = useState('')
    
    const handleClick = async () => {
        const response = await fetch('/api/csteams/' + csteams._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok){
            alert('Item deleted')
        }

    }
    const updateInfo = async () => {

        const Property={
            // sercvice:'1',
            // summary:'1',
            fee: fee,
            status: status,
            // contact:'1'
            
        }
        const response = await fetch('/api/csteams/' + csteams._id, {
            method: 'PATCH',
            body: JSON.stringify(Property), 
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(response.ok){
            alert('Item updated')
            setFee('')
            setStatus('')
        }
    }
    
    return (
        <div data-testid = "csDetails1" className="csteam-details">
            <img src= {csteams && csteams.image} width="200px" height="200px"/>
            <h4>{csteams && csteams.service}</h4>
            <br></br>
            <p1><strong> Description: </strong></p1>
            <p><big>{csteams && csteams.summary}</big></p>
            <p><strong> Fee in PAK-Rupees: </strong>{csteams && csteams.fee}</p>
            <p><strong> Status: </strong>{csteams && csteams.status}</p>
            <p><strong> Contact: </strong>{csteams && csteams.contact}</p>
            <p>{csteams && csteams.createdAt}</p>
        
            <button className="deleteButton" onClick={handleClick}> Delete </button>
            <button className="updateButton" onClick={updateInfo}>Update</button>
            <br></br>
            <br></br>
            <form className = "updateTextBox" onSubmit ={updateInfo}>
                
                <label data-testid = "update"> Update Status: </label>
                <input
                type="text"
                placeholder="edit status"
                onChange={(e) => setStatus(e.target.value)}
                value={status}
                 />

                <label data-testid = "fee"> Update Price: </label>
                <input
                 type="number"
                 placeholder="edit fee"
                 onChange={(e) => setFee(e.target.value)}
                 value={fee && fee}
                 />
            </form>
        </div>
        
    )
}

export default CsTeamDetails