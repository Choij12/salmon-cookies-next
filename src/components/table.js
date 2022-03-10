import React, {useState} from 'react';


function Table(props) {

    const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    const hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36];
    const current_city = 'Seattle';
    return(
  
        <table>
          <thead>

            <tr>
              <th>Location</th>
              
              {hours.map(hour => {
                return <th key={hour}>{hour}</th>
              })}
              {/* <th>Totals</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{current_city}</th>
              {hourly_sales.map(hour => {
                return <th key={hour}>{hour}</th>
              })}
            </tr>
            

              {/* {props.reports.map(store => {
              
                <tr key={idx}>
                  <td key={idx}>{store.location}</td>
                  {hourly_sales.map((sales, idx) =>
                  <th key={idx}>{sales}</th>
                  )}
                </tr>
              })
              } */}
            </tbody>
          </table>
    )
  }
  
  export default Table;