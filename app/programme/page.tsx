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
                <th scope="row">08:00am</th>
                <td colSpan={3}>Registration</td>
              </tr>
              <tr>
                <th scope="row">08:30am</th>
                <td colSpan={3}>Arrival of Guest of Honour</td>
              </tr>
              <tr>
                <th scope="row">08:35am</th>
                <td colSpan={3}>
                  <p>
                    <b>Welcome Address</b><br />
                    Prof Gan Wee Hoe, <em>Council President, College of Public Health and Occupational Medicine</em>
                  </p>
                  <p>
                    <b>Welcome Remarks</b> <br /> 
                    Dr Wong Chiang Yin, <em>Master, Academy of Medicine</em>
                  </p>
                </td>
              </tr>
              <tr>
                <th scope="row">09:00am</th>
                <td colSpan={3}>
                  <b>Opening Address</b><br />
                  Ms Lai Wai Lin, <em>Permanent Secretary (Designate), Ministry of Health</em>
                </td>
              </tr>
              <tr>
                <th scope="row">09:10am</th>
                <td colSpan={3}>College Award Ceremony</td>
              </tr>
              <tr className="table-primary">
                <th scope="row">09:15am</th>
                <td colSpan={3}>
                  <p>
                    <b>Keynote 1: Building Healthier Societies - Lessons from the social and behavioural sciences for Healthier SG</b><br />
                    Prof David Chan, <em>Professor of Psychology and Director of Beh Sciences Initiative, Singapore Management University</em>
                  </p>
                  <p>
                    <b>Session Chairperson:</b> Dr Lim John Wah
                  </p>
                </td>
              </tr>
              <tr>
                <th scope="row">10:00am</th>
                <td colSpan={3}>Morning Teabreak & Viewing of Posters</td>
              </tr>
              <tr className="table-info">
                <th scope="row">10:30am</th>
                <td colSpan={3}>
                  <b>Plenary 1: Frontiers in Primary & Community Health</b>
                </td>
              </tr>
              <tr>
                <th scope="row">12:30am</th>
                <td colSpan={3}>Lunch & Viewing of Posters</td>
              </tr>
              <tr className="table-primary">
                <th scope="row">01:15pm</th>
                <td colSpan={3}>
                  <p>
                    <b>Keynote 2: Health of vulnerable populations</b><br />
                    Prof Michelle A. Williams, <em>Former Dean, School of Public Health, Havard University</em>
                  </p>
                  <p>
                    <b>Session Chairperson:</b> Dr Lim Huai Yang
                  </p>
                </td>
              </tr>
              <tr className="table-info">
                <th scope="row">02:00pm</th>
                <td colSpan={3}><b>Plenary 2: Longevity Medicine – Pushing the Boundaries for Healthy Aging</b></td>
              </tr>
              <tr>
                <th scope="row">03:00pm</th>
                <td colSpan={3}>Afternoon Teabreak & Viewing of Posters</td>
              </tr>
              <tr className="table-info">
                <th scope="row">03:15pm</th>
                <td colSpan={3}><b>Plenary 3: Age is Just a Number - Building Frailty Resilient Communities</b></td>
              </tr>
              <tr className="table-warning">
                <th scope="row">04:30pm</th>
                <td colSpan={3}><b>Concurrent sessions 1</b></td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td className="table-light" colSpan={1}><strong>Track 1:</strong> Advances in Healthcare for the Vulnerable</td>
                <td className="table-light" colSpan={1}><strong>Track 2:</strong> Frontiers in Aviation Medicine</td>
                <td className="table-light" colSpan={1}><strong>Track 3:</strong> Frontiers in Digital Health</td>
              </tr>
              <tr className="table-success">
                <th scope="row">06:15pm</th>
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
        </div>
      </div>
    </div>
    </>
  ); 
}
