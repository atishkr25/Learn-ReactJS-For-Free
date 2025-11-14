import React from 'react'
import  {useState, useEffect} from 'react'

const Digitalclock = () => {
  
    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const intervealId = setInterval(()=>{
            setTime(new Date());
        }, 1000);
    }, [])

    function handleAMPM(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let second = time.getSeconds();

        const Formating = (hours >= 12)  ? "PM" : "AM";
        hours = hours%12 || 12;

        return `${hours}:${minutes}:${second} ${Formating}`
    }
  
    return (
        <div className='clock-contaier'>
        <div className='clock'>
            <span>{handleAMPM()}</span>
        </div>
        </div>
    )
}

export default Digitalclock
