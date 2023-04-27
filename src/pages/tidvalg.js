/*
export default function Tidvalg() {

    return(
        <>
        <h1>Når vil du vaske?</h1>

        <a href="../timepicker/datetime_time-picker.html">Velg dato</a>
        <div class="tidvalg">
            <input type="datetime-local" name="dato"/>
        </div>


        <div class="navigate">
            <button onclick="" class="tilbake"><a href="vaskevalg.html">Tilbake</a></button>
            <button onclick="" class="ferdig"><a href="overview.html">Ferdig</a></button>
        </div>
        </>
    )
}

<DateTimePicker defaultValue={dayjs('2022-04-17T15:30')} /> 
*/
import {Link} from 'react-router-dom';
import React from 'react';
import { useState } from "react";
import dayjs from 'dayjs';
import axios from 'axios';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';

export default function ResponsiveDateTimePickers() {
    const [tid,setTid] = useState(null);
    const [mailSent, setmailSent] = useState(false);
    const [error, setError] = useState(null);
    const APIpath = 'https://stufprogrammering.no/php/test_data.php';

    const HandleFormSubmit = e => {
        axios({
          method: "post",
          url: `${APIpath}`,
          headers: { "content-type": "application/json" },
          data: tid
        })
          .then(result => {
            if (result.data.sent) {
              setmailSent(result.data.sent)
              setError(false)
            } else {
              setError(true)
            }
          })
          .catch(error => setError( error.message ));
      };
    
   
  return (
     <>
        <StaticDateTimePicker
            value={tid}
            onChange={(nyTid => setTid(nyTid))}
            onAccept={HandleFormSubmit}
            disablePast="true"
        />
        <button><Link to="/vaskevalg">Tilbake</Link></button>
    </>
  );
}



