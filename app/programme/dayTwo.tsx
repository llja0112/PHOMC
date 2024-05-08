export default function DayTwo () {
  return (
    <>
      <table className="table table-hover table-border mb-5 table-sm">
        <thead>
          <tr className="table-dark">
            <th scope="col">Time</th>
            <th scope="col" colSpan={3}>Programme Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-success">
            <th scope="row">08:30am</th>
            <td colSpan={3}>Registration</td>
          </tr>
          <tr className="table-primary">
            <th scope="row">09:00am</th>
            <td colSpan={3}>
              <p>
                <b>Keynote 3</b><br />
                Dr Kenji Saito, <em>Chairman, American College of Occupational & Environmental Medicine</em>
              </p>
            </td>
          </tr>
          <tr>
            <th scope="row">09:30am</th>
            <td colSpan={3}>Morning Teabreak & Viewing of Posters</td>
          </tr>
          <tr className="table-warning">
            <th scope="row">10:00am</th>
            <td colSpan={3}>
              <b>Concurrent sessions 2</b>
            </td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td className="table-light"><strong>Track 4:</strong> Frontiers in Occupational Health</td>
            <td className="table-light"><strong>Track 5:</strong> Game Changing Technology in Health</td>
            <td className="table-light"><strong>Track 6:</strong> Free Paper</td>
          </tr>
          <tr>
            <th scope="row">11:45am</th>
            <td colSpan={3}>Lunch & Viewing of Posters</td>
          </tr>
          
          <tr className="table-primary">
            <th scope="row">12:30pm</th>
            <td colSpan={3}><b>Plenary 4: Frontiers in Infectious Disease Prevention and Pandemic Response</b></td>
          </tr>
          
          <tr>
            <th scope="row">02:30pm</th>
            <td colSpan={3}>Afternoon Teabreak & Viewing of Posters</td>
          </tr>
          <tr className="table-primary">
            <th scope="row">03:30pm</th>
            <td colSpan={3}><b>Plenary 5: Frontiers in Healthcare Policy Innovation</b></td>
          </tr>
          <tr>
            <th scope="row">04:15pm</th>
            <td colSpan={3}>Awards Presentation</td>
          </tr>
          <tr>
            <th scope="row">05:00pm</th>
            <td colSpan={3}>Closing Ceremony</td>
          </tr>
          <tr className="table-success">
            <th scope="row">05:15pm</th>
            <td colSpan={3}>End of Day 18th PHOMC</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
