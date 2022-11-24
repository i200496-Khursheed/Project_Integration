import { useEffect, useState } from "react"

//components
import CsTeamDetails from '../components/CsTeamDetails'
import CsTeamForms from '../components/CsTeamForm'

const CsTeamPage = () => {
    const[csteams, setCsTeams] = useState(null)


    useEffect(() => {
        const fetchCsTeams = async () => {
            const response = await fetch('/api/csteams')
            const json = await response.json()

            if(response.ok){
                setCsTeams([...json])
            }
        }
        fetchCsTeams()
    })

    return (
        <div className ="CsTeamPage">
            <div className="csteams">
                {csteams && csteams.map((csteams) => (
                    <CsTeamDetails key = {csteams._id} csteams={csteams} />
                ))}
            </div>
         <CsTeamForms />
        </div>
    )
}

export default CsTeamPage