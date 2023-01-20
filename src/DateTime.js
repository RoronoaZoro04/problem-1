import  React, { useState , useEffect } from 'react'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div className='Clk'>
            <span> Indian Local Time : {date.toLocaleDateString()}  {date.toLocaleTimeString()}</span>
            

        </div>
    )
}

export default DateTime