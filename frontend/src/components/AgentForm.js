import { useState } from 'react'

const AgentForm = () => {
  const [Company_Name, setComapany_Name] = useState('')
  const [Agent_Name, setAgent_Name] = useState('')
  const [Agent_Description, setAgent_Description] = useState('')
  const [City, setCity] = useState('')
  const [Contact, setContact] = useState('')
  const [Email, setEmail] = useState('')

  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const agent = {Company_Name, Agent_Name, Agent_Description, City, Contact, Email}
    
    const response = await fetch('/api/agents', {
      method: 'POST',
      body: JSON.stringify(agent),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    
    }
    if (response.ok) {
      setError(null)
      setComapany_Name('')
      setAgent_Name('')
      setAgent_Description('')
      setCity('')
      setContact('')
      setEmail('')

     
      console.log('new agent added', json)
    }

  }

  return (
    <form data-testid="compForm" className="create" onSubmit={handleSubmit}> 
      <div class="col-md-10">
        <label for="validationCustom01" class="form-label">Comapny Name:</label>
        <input type="text" class="form-control" id="validationCustom01" 
        onChange={(e) => setComapany_Name(e.target.value)} 
        value={Company_Name} required />
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-10">
        <label for="validationCustom02" class="form-label">Agent Name:</label>
        <input type="text" class="form-control" id="validationCustom02" 
         onChange={(e) => setAgent_Name(e.target.value)} 
         value={Agent_Name}
        required />
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-10">
        <label for="validationCustom03" class="form-label">Agent Description:</label>
        <input type="text" class="form-control" id="validationCustom03" 
         onChange={(e) => setAgent_Description(e.target.value)} 
         value={Agent_Description}
        required />
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-10">
        <label for="validationCustom04" class="form-label">City</label>
        <input type="text" class="form-control" id="validationCustom04" 
         onChange={(e) => setCity(e.target.value)} 
         value={City}
        required/>
        <div class="invalid-feedback">
          Please provide a valid city.
        </div>
      </div>
      <div class="col-md-10">
        <label for="validationCustom05" class="form-label">Contact:</label>
        <input type="number" class="form-control" id="validationCustom05" 
         onChange={(e) => setContact(e.target.value)} 
         value={Contact}
        required />
        <div class="invalid-feedback">
          Please provide a valid contact number.
        </div>
      </div>
      <div class="col-md-10">
        <label for="validationCustomUsername" class="form-label">Email Address:</label>
        <div class="input-group">
          <span class="input-group-text" id="inputGroupPrepend">@</span>
          <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" 
          onChange={(e) => setEmail(e.target.value)} 
          value={Email}
          required />
          <div class="invalid-feedback">
            Please provide valid email address.
          </div>
        </div>
      </div>
      <div class="col-10">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
          <label class="form-check-label" for="invalidCheck">
            I Agree the above provided information is correct
          </label>
          <div class="invalid-feedback">
            You must agree before submitting.
          </div>
        </div>
      </div>
      <div class="col-6">
        <button class="btn btn-primary" type="submit">Add Agent</button>
        {error && <div className="error">{error}</div>}
      </div>
    </form>
  )}
  

export default AgentForm