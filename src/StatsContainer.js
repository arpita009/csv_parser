import React from "react"
import StatsReport from './StatsReport'
import StatsChart from './StatsChart'

const StatsContainer =(props) =>{
    const {participants} =props
    const actualParticipants=participants.filter((ele)=>{
        //removes blank records
        return ele['Name (Original Name)']
    })
    const getHost=()=>{
        // find the  host
        const result=participants.find((participant)=>{
            return participant.Guest==='No'
        })
        return result
    }
    const participantsExceptHost=actualParticipants.filter((ele)=>{
        //get participants except host
        return ele['Name (Original Name)']!==getHost()['Name (Original Name)']
    })
    return(
        <div>
            <h2>Report</h2>
            <StatsReport participants={actualParticipants} getHost={getHost}/> <br/>
            <StatsChart participants={participantsExceptHost} allParticipants={participants} getHost={getHost}/>
        </div>
    )
}
export default StatsContainer