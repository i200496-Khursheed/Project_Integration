import { useEffect, useState } from "react"

// components
import AgentDetails from "../components/AgentDetails"
import AgentForm from '../components/AgentForm'

const AgentList = () => {
  const [agents, setAgent] = useState(null)

  useEffect(() => {
    const fetchAgent= async () => {
     const response = await fetch('/api/agents') // "Proxy": "http://localhost:3001/agent",
      const json = await response.json()

      if (response.ok) {
        setAgent([...json])
      }
    }

    fetchAgent()
  }, [])

  return (
    <div data-testid="compHome" className="home">
      <div>
      {agents && agents.map(agent => (
          <AgentDetails agent={agent} key={agent._id} />
        ))}
      </div>
        <AgentForm />
    </div>
  )
}

export default AgentList