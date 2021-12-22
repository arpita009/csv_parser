import React,{useState} from "react"
import FileUploader from './FileUploader'
import StatsContainer from './StatsContainer'

const FileContainer =(props) =>{
    const [participants,setParticipants] =useState([])
    const fetchFileRecords=(records) =>{
        setParticipants(records)
    }
    return(
        <div>
            <FileUploader fetchFileRecords={fetchFileRecords}/>
            {participants.length>0 && <StatsContainer participants={participants}/>}
        </div>
    )
}
export default FileContainer