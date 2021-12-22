import React from "react"
import Papa from 'papaparse'
// import FileParser from './FileParser'

const FileUploader =(props) =>{
    // const [csvfile,setCsvFile] = useState('')
    // In React, an <input type="file" /> is always an uncontrolled component because its value can only be set by a user, and not programmatically.
    const {fetchFileRecords} =props

    const fileParse=(fileInfo)=>{
        Papa.parse(fileInfo,{
            download: true,
            header: true,
            complete:function(results){
                fetchFileRecords(results.data)
            }
        })
    }

    const handleFileChange =(e) =>{
        // console.log('Inside FileUploader-name',e.target.files[0].name)
        // console.log('Inside FileUploader-File Info',e.target.files[0])
        const fileInfo=e.target.files[0]
        fileParse(fileInfo)
    }

    return(
        <div>
            <h2>File Upload + CSV parser</h2>
            <form>
                <input type="file" name="" id="upload-csv"  accept='.csv' onChange={handleFileChange} /> <br/>
                
            </form>
            
        </div>
    )
}
export default FileUploader