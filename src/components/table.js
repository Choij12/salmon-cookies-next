function Table(props) {

    const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    const hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36];
    return(
  
        <table>
          <tbody>
            <tr>
              <th>Location</th>
              {hours.map((hours, idx) =>
                <th key={idx}>{hours}</th>
                )}
            </tr>
              {props.reports.map((store, idx) =>
                <tr>
                  <td key={idx}>{store.location}</td>
                  {hourly_sales.map((sales, idx) =>
                  <td key={idx}>{sales}</td>
                  )}
                </tr>
                )
              }
            </tbody>
          </table>
    )
  }
  
  export default Table;