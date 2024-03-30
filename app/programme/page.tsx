export default function Page () {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h3 className="text-center my-3">Conference Day 1 Programme</h3>

          <table className="table table-hover table-border table-sm">
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
              <tr>
                <th scope="row">09:00am</th>
                <td colSpan={3}>Opening Ceremony</td>
              </tr>
              <tr className="table-primary">
                <th scope="row">09:50am</th>
                <td colSpan={3}>Opening Keynote</td>
              </tr>
              <tr>
                <th scope="row">10:15am</th>
                <td colSpan={3}>Morning Teabreak & Viewing of Posters</td>
              </tr>
              <tr className="table-primary">
                <th scope="row">10:45am</th>
                <td colSpan={3}>Plenary 1: Designing Societies for Health</td>
              </tr>
              <tr>
                <th scope="row">12:30am</th>
                <td colSpan={3}>Lunch & Viewing of Posters</td>
              </tr>
              <tr className="table-primary">
                <th scope="row">01:15pm</th>
                <td colSpan={3}>Plenary 2: Frontiers in Primary Care</td>
              </tr>
              <tr>
                <th scope="row">03:00pm</th>
                <td colSpan={3}>Afternoon Teabreak & Viewing of Posters</td>
              </tr>
              <tr className="table-success">
                <th scope="row">03:30pm</th>
                <td colSpan={3}>Concurrent tracks</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td className="table-light"><strong>Track 1:</strong> Longevity - Pushing the Boundaries for Healthy Aging</td>
                <td className="table-light"><strong>Track 2:</strong> Advances in Healthcare for the Vulnerable </td>
                <td className="table-light"><strong>Track 3:</strong> Free Paper</td>
              </tr>
              <tr className="table-success">
                <th scope="row">05:15pm</th>
                <td colSpan={3}>End of Day 1</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-center mb-3">Conference Day 2 Programme</h3>

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
                <td colSpan={3}>Plenary 3: Game Changing Technology in Population Health</td>
              </tr>
              <tr>
                <th scope="row">10:30am</th>
                <td colSpan={3}>Morning Teabreak & Viewing of Posters</td>
              </tr>
              <tr className="table-primary">
                <th scope="row">10:45am</th>
                <td colSpan={3}>Plenary 3: Game Changing Technology in Population Health Panel Discussion</td>
              </tr>
              <tr>
                <th scope="row">11:30am</th>
                <td colSpan={3}>Lunch & Viewing of Posters</td>
              </tr>
              <tr className="table-success">
                <th scope="row">12:30pm</th>
                <td colSpan={3}>Concurrent tracks</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td className="table-light"><strong>Track 4:</strong> Advances in Occupational Health</td>
                <td className="table-light"><strong>Track 5:</strong> Digital Health</td>
                <td className="table-light"><strong>Track 6:</strong> Free Paper</td>
              </tr>
              <tr>
                <th scope="row">03:00pm</th>
                <td colSpan={3}>Afternoon Teabreak & Viewing of Posters</td>
              </tr>
              <tr className="table-primary">
                <th scope="row">03:30pm</th>
                <td colSpan={3}>Plenary 4: Frontiers in Healthcare Policy Innovation</td>
              </tr>
              <tr>
                <th scope="row">04:15pm</th>
                <td colSpan={3}>Awards Presentation & Closing Ceremony</td>
              </tr>
              <tr className="table-success">
                <th scope="row">05:15pm</th>
                <td colSpan={3}>End of Day 18th PHOMC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  ); 
}
