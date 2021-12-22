import React from 'react'
import { Chart } from "react-google-charts"

const StatsChart=(props) =>{
    const {participants,allParticipants,getHost}=props
    
    const barFormatData=(participants,getHost)=>{
        //format data for bar chart
        const hostMins=Number(getHost()['Total Duration (Minutes)'])
        const header=['Names',"Student Names","Host"]
        const barFormatdata=[]
        barFormatdata.push(header)
        participants.forEach((ele)=>{
            barFormatdata.push([ele['Name (Original Name)'],Number(ele['Total Duration (Minutes)']),hostMins])
        })
        // console.log(barFormatdata)
        return barFormatdata
    }
    const colFormatData=()=>{
        //format data for column chart
        const header=['Names',"Minutes attended"]
        const colFormatData=[]
        colFormatData.push(header)
        allParticipants.forEach((ele)=>{
            colFormatData.push([ele['Name (Original Name)'],Number(ele['Total Duration (Minutes)'])])
        })
        return colFormatData
    }
 
    const barOptions = {
        chart: {
            title: 'Student vs. Minutes Duration',
            subtitle: 'Based on Host'
        },
        // title: "Student vs. Minutes Duration",
        hAxis: { title: "Student Names" },
        vAxis: { title: "Minutes attended"},
        // bars: 'horizontal',
        series: {
          0: {axis: 'Student Names'},
          1: {axis: 'Host'}
        },
    };
    const colOptions = {
        title: "Student vs. Minutes Duration",
        hAxis: { title: "Student Names" },
        vAxis: { title: "Minutes attended" },
       
    };
    return(
        <div className="chart">
            <Chart
            chartType="Bar"
            width="100%"
            height="400px"
            options={barOptions}
            data={barFormatData(participants,getHost)}
            />
            <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            options={colOptions}
            data={colFormatData()}
            />
        </div>
    )
}
export default StatsChart