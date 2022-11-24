import {useState} from "react"

const CsTeamForms = () => {
    
    const [service, setService] = useState('')
    const [summary, setSummary] = useState('')
    const [fee, setFee] = useState('')
    const [status, setStatus] = useState('')
    const [contact, setContact] = useState('')
    const [image, setImage] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const csteams = {service, summary, fee, status, contact, image}

        const response = await fetch('/api/csteams', {
            method: 'POST',
            body: JSON.stringify(csteams), 
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        const json = await response.json()

        if(!response.ok) {
            //setError(json.error)
            setError("Please Fill all the required information!")
        }

        if(response.ok) {
            setService('')
            setSummary('')
            setFee('')
            setStatus('')
            setContact('')
            setImage('')
            setError(null)
            alert('new service added')
            
        }
    }

    return (
        <form data-testid = "csForm1" className = "create" onSubmit={handleSubmit}>
            <h3> Add a new service detail</h3>

            <label data-testid = "csForm2"> Service Information: </label>
            <input
                type="text"
                placeholder="enter title"
                onChange={(e) => setService(e.target.value)}
                value={service}
            />

            <label data-testid = "csForm3"> Description: </label>
            <input
                type="text"
                placeholder="enter info"
                onChange={(e) => setSummary(e.target.value)}
                value={summary}
            />

            <label data-testid = "csForm4"> Service Fee in PAK-RUPEES: </label>
            <input
                type="number"
                placeholder="enter fee"
                onChange={(e) => setFee(e.target.value)}
                value={fee}
            />

            <label> Service Status: </label>
            <input
                type="text"
                placeholder="enter status"
                onChange={(e) => setStatus(e.target.value)}
                value={status}
            />

            <label> Contact Information: </label>
            <input
                type="text"
                placeholder="enter contact-info"
                onChange={(e) => setContact(e.target.value)}
                value={contact}
            />

            <label> Image: </label>
            <input
                type="text"
                placeholder="paste image-url"
                onChange={(e) => setImage(e.target.value)}
                value={image}
            />

        <button data-testid = "add"> Add Service </button>
        {error && <div data-testid = "err" className="error">{error}</div>}
        </form>
    )
}

export default CsTeamForms