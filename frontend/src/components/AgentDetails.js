

const AgentDetails = ({ agent}) => {

    return (
      <div data-testid="compAgentDetails" className="agent-details">
        <h4>{agent.Company_Name} </h4>
        <p>{agent.Agent_Name}</p>
        <p>{agent.Agent_Description}</p>
        <p>{agent.City}</p>
        <p>{agent.Contact}</p>
        <p>{agent.Email}</p>
        <p>{agent.createdAt}</p>
      </div>
    )
  }
  
  export default AgentDetails