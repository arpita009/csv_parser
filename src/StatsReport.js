import React from 'react'

const StatsReport =(props) =>{
    const {participants,getHost} =props

    
    const durationConvertor =(timeMins) =>{
        //convert minutes to hours & minutes
        const hrs=timeMins/60
        const rhours=Math.floor(hrs)
        const mins=(hrs-rhours)*60
        const rmins=Math.round(mins)
        return `${rhours} hour ${rmins} minutes`
    }
    
    const getTimeInMins=()=>{
        //gets minutes duration of the call (based on host)
        return getHost()['Total Duration (Minutes)']
    }
    const getHostName=()=>{
        return getHost()['Name (Original Name)']
    }
    return(
        <div>
            <p><strong>Host - </strong> {getHostName()}</p>
            <p><strong>Total Participants - </strong> {participants.length}</p>
            <p><strong>Duration - </strong>  {getTimeInMins()} minutes ({durationConvertor(getTimeInMins())})</p>
            <table>
                <thead>
                    <tr>
                        <th>Sl No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {participants.map((participant,id)=>{
                        return (
                            <tr key={id}>
                                <td>{id+1}</td>
                                <td>{participant['Name (Original Name)']}</td>
                                <td>{participant['User Email']}</td>
                                <td>{participant['Total Duration (Minutes)']}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default StatsReport