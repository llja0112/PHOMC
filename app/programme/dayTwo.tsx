"use client"

import Accordion from 'react-bootstrap/Accordion';
import Link from 'next/link';

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
                <b>Keynote 3: Global Occupational Health: Challenges and Opportunities of AI, Automation and Robotics</b><br/>
                Dr Kenji Saito<br/>
                <em>
                  President<br/>
                  American College of Occupational and Environmental Medicine (ACOEM)
                </em><br/>
                <Link className="btn btn-primary btn-sm mt-2" href="/speakers/11">More details</Link>
              </p>
            </td>
          </tr>
          <tr>
            <th scope="row">09:30am</th>
            <td colSpan={3}>Morning Teabreak & Viewing of Posters</td>
          </tr>
          <tr className="table-warning">
            <th scope="row">10:00am</th>
            <td colSpan={3}><b>Parallel Tracks</b> <small className="text-muted">Click/Tap on tracks for details</small></td>
          </tr>
          <tr className="table-warning">
            <th scope="row"></th>
            <td colSpan={3}>
              <Accordion className="my-2">
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    <div>
                      <strong className="text-primary">Track 4:</strong> Frontiers in Occupational Health
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      <b>Technology & Health: A 21st Century Gordian Knot</b> <br/>
                      Prof Benjamin Seet<br/>
                      <em>
                        Group Chief Medical Board (Research)<br/>
                        National Healthcare Group
                      </em><br/>
                      <Link className="btn btn-primary btn-sm mt-2" href="/speakers/10">More details</Link>
                    </p>
                    <p>
                      <b>Digital Local Connect and Living Asset Map Using Geospatial Technology</b> <br/>
                      A/Prof Gan Wee Hoe<br/>
                      <em>
                        Chief Executive Officer, SingHealth Community Hospitals<br/>
                        Singapore Health Services
                      </em>
                    </p>
                    <p>
                      <b>Transforming Healthcare Delivery Through Robotics & Automation</b><br/>
                      Adj Asst Prof Selina Seah <br/>
                      <em>
                        Assistant Chief Executive Officer (Transformation), Changi General Hospital <br/>
                        Development Lead, Eastern General Hospital Campus<br/>
                        Director, Centre for Healthcare Assistive & Robotics Technology (CHART) 
                      </em><br />
                      <Link className="btn btn-primary btn-sm mt-2" href="/speakers/5">More details</Link>
                    </p>

                    <p>
                      <b>Data Copilot: Healthcare Analytics Democratised</b><br/>
                      Mr Yeo Yong Kiat<br/>
                      <em>
                        Deputy Director, Policy, Strategy & Design<br/>
                        GovTech
                      </em><br />
                      <Link className="btn btn-primary btn-sm mt-2" href="/speakers/1">More details</Link>

                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>
                    <div>
                      <strong className="text-primary">Track 5:</strong> Game Changing Technology in Health
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      <b>Heat Resilience - Bridging Research and Policy</b><br/>
                      Dr Sharifa Badriyah<br/>
                      <em>
                        Research Fellow, Heat Resilience & Performance Centre, Yong Loo Lin School of Medicine<br/>
                        National University of Singapore  
                      </em>
                    </p>

                    <p>
                      <b>Tackling Shift Work Disorder in a 24-hour Economy</b><br/>
                      Dr Lim Chau Sian<br/>
                      <em>
                        Consultant, Addiction Medicine Programme<br/>
                        Head, Department of Psychological Medicine <br/>
                        Changi General Hospital
                      </em> 
                    </p>                    

                    <p>
                      <b>Different Paradigm in Managing Health of Shift Workers</b><br/>
                      Dr Robin Low<br/>
                      <em>
                        Senior Consultant, Changi Aviation Medicine Centre<br />
                        Changi General Hospital
                      </em>
                    </p>

                    <p>
                      <b>TBD</b><br/>
                      Mr Loh Chin Hui<br/>
                      <em>
                        Director, Workplace Health and Outreach Division, Outreach Group<br/>
                        Health Promotion Board
                      </em>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                  <Accordion.Header>
                    <div>
                      <strong className="text-primary">Track 6:</strong> Free Paper
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <strong>To be announced closer to date</strong>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </td>
          </tr>
          <tr>
            <th scope="row">11:45am</th>
            <td colSpan={3}>Lunch & Viewing of Posters</td>
          </tr>
          
          <tr className="table-primary">
            <th scope="row">12:30pm</th>
            <td colSpan={3}>
              <p>
                <b>Plenary 4: Frontiers in Infectious Disease Prevention and Pandemic Response</b>
              </p>
              <p>
                <b>The Communicable Disease Agency – Integration for Efficient and Coordinated Outbreak Response</b><br/> 
                Prof Vernon Lee<br/>
                <em>
                  Executive Director<br/>
                  National Centre for Infectious Diseases 
                </em>
              </p>
              <p>
                <b>ACHS – Frontiers in Regional Biosecurity</b><br/>
                Prof Hsu Liyang<br/>
                <em>
                  Director<br/>
                  Asia Centre for Health Security 
                </em>
              </p>
              <p>
                <b>Frontiers in EID Research</b><br/>
                Prof Kevin Bryan Tan<br/>
                <em>
                  Principal Health Economist<br/>
                  Ministry of Health
                </em>
              </p>
              <p>
                <b>Frontiers in Vaccine Technology and Novel Vaccines</b><br/>
                Dr Nicolas Van de Velde<br/>
                <em>
                  Executive Director of Infectious Disease/COVID Health Economics and Outcomes Research<br/>
                  Moderna
                </em>
              </p>
              <p>
                <b>Preparing for Deliberate Events</b><br/>
                Prof Lim Poh Lian<br/>
                <em>
                  Director, High Level Isolation Unit<br/>
                  National Centre for Infectious Diseases
                </em>
              </p>
              <p>
                <b>Panel Discussion</b><br />
                <b>Moderator:</b> Dr Wycliffe Wei
              </p>
            </td>
          </tr>
          
          <tr>
            <th scope="row">02:30pm</th>
            <td colSpan={3}>Afternoon Teabreak & Viewing of Posters</td>
          </tr>
          <tr className="table-primary">
            <th scope="row">03:00pm</th>
            <td colSpan={3}>
              <p>
                <b>Plenary 5: Frontiers in Healthcare Policy Innovation</b>
              </p>
              <p>
                <b>Transforming Singapore’s Health Regulatory Ecosystem - Regulating the Future of Health</b><br/>
                A/Prof Raymond Chua<br/>
                <em>
                  Deputy Director General Health (Health Regulation)<br/>
                  Ministry of Health
                </em>
              </p>
              <p>
                <b>Homecare in Japan: Lessons for an Aging Asia</b><br/>
                Dr Haruki Matsumoto<br/>
                <em>
                  Director, Healthcare Safety and Inspection Office, Health Policy Bureau<br/>
                  Ministry of Health, Japan
                </em>
              </p>

              <p>
                <b>People Respond to Incentives. The Rest is Commentary</b><br/>
                A/Prof Jeremy Lim<br/>
                <em>
                  Director, Leadership Institute of Global Health Transformation (LIGHT)<br/>
                  Saw Swee Hock School of Public Health, National University of Singapore
                </em>
              </p>

              <p>
                <b>Panel Discussion</b><br/>
                <b>Moderator:</b> A/Prof Matthias Toh
              </p>
            </td>
          </tr>
          <tr>
            <th scope="row">04:45pm</th>
            <td colSpan={3}>Awards Presentation</td>
          </tr>
          <tr>
            <th scope="row">05:00pm</th>
            <td colSpan={3}>Closing Ceremony</td>
          </tr>
          <tr className="table-success">
            <th scope="row">05:15pm</th>
            <td colSpan={3}>End of 18th PHOM</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
